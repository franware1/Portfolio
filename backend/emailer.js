require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Railway sits behind a proxy; needed so req.ip is the real client IP for rate limiting.
app.set('trust proxy', 1);
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '20kb' }));

/* ── Mail provider ──
   Resend (HTTPS API) is used when RESEND_API_KEY is set. Railway blocks outbound
   SMTP on Free/Trial/Hobby plans, so this is the path that works in production.
   Otherwise falls back to Gmail SMTP via Nodemailer (fine locally / on Railway Pro). */

const USE_RESEND = Boolean(process.env.RESEND_API_KEY);

// Fail fast instead of hanging for ~2 minutes when the network blocks the connection.
const SEND_TIMEOUT_MS = 15000;

const transporter = USE_RESEND ? null : nodemailer.createTransport({
    service: 'gmail',
    connectionTimeout: SEND_TIMEOUT_MS,
    greetingTimeout: SEND_TIMEOUT_MS,
    socketTimeout: SEND_TIMEOUT_MS,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendMail({ subject, html, text, replyTo }) {
    if (USE_RESEND) {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
                to: [process.env.EMAIL_TO],
                reply_to: replyTo,
                subject,
                html,
                text,
            }),
            signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
        });
        if (!res.ok) {
            throw new Error(`Resend ${res.status}: ${await res.text()}`);
        }
        return;
    }

    await transporter.sendMail({
        from: { name: 'Portfolio Contact', address: process.env.EMAIL_USER },
        to: process.env.EMAIL_TO,
        replyTo,
        subject,
        html,
        text,
    });
}

/* ── Validation helpers ── */

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/* ── Rate limiting (in-memory, per IP) ── */

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_MAX) {
        hits.set(ip, recent);
        return true;
    }
    recent.push(now);
    hits.set(ip, recent);
    return false;
}

setInterval(() => {
    const now = Date.now();
    for (const [ip, times] of hits) {
        if (times.every(t => now - t >= RATE_WINDOW_MS)) hits.delete(ip);
    }
}, RATE_WINDOW_MS).unref();

/* ── Routes ── */

app.post('/api/contact', async (req, res) => {
    const body = req.body || {};

    // Honeypot: real users never see this field; bots fill it. Pretend success.
    if (body.website) {
        return res.json({ success: true });
    }

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
        return res.status(400).json({ error: 'One or more fields are too long.' });
    }
    if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (isRateLimited(req.ip)) {
        return res.status(429).json({ error: 'Too many messages. Please try again later.' });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    try {
        await sendMail({
            subject: `Portfolio Contact: ${name.replace(/[\r\n]+/g, ' ')}`,
            replyTo: email,
            html: `<p><strong>From:</strong> ${safeName} (<a href="mailto:${safeEmail}">${safeEmail}</a>)</p>`
                + `<p>${safeMessage}</p>`,
            text: `From: ${name} (${email})\n\n${message}`,
        });

        res.json({ success: true });
    } catch (err) {
        console.error('Failed to send contact email:', err);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
}

/* ── Startup checks ── */

function checkConfig() {
    const required = USE_RESEND
        ? ['RESEND_API_KEY', 'EMAIL_TO']
        : ['EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO'];
    const missing = required.filter(k => !process.env[k]);
    if (missing.length) {
        console.warn(`[mailer] Missing env vars: ${missing.join(', ')}; contact form will fail.`);
    }

    console.log(`[mailer] Using ${USE_RESEND ? 'Resend HTTPS API' : 'Gmail SMTP'}`);

    if (!USE_RESEND && !missing.length) {
        transporter.verify()
            .then(() => console.log('[mailer] SMTP connection verified'))
            .catch(err => console.error('[mailer] SMTP verification failed:', err.message));
    }
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    checkConfig();
});

import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Something went wrong. Try again.');
            }
            setStatus('success');
            setForm({ name: '', email: '', message: '', website: '' });
        } catch (err) {
            setErrorMsg(err instanceof Error && err.message ? err.message : 'Something went wrong. Try again.');
            setStatus('error');
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="contact-container">
                    <h1>Contact</h1>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            maxLength={100}
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            maxLength={254}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            maxLength={5000}
                            required
                        />
                        {/* Honeypot: hidden from users, catches bots */}
                        <input
                            className="contact-hp"
                            name="website"
                            type="text"
                            value={form.website}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                        />
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send'}
                        </button>
                        <p className="contact-status" role="status" aria-live="polite">
                            {status === 'success' && "Message sent! I'll get back to you soon."}
                            {status === 'error' && errorMsg}
                        </p>
                    </form>
                    <div className="contact-socials">
                        <a href="https://github.com/franware1" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/github0.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/franvu225" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/linkedin0.svg" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

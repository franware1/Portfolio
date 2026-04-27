import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error();
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
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
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send'}
                        </button>
                        {status === 'success' && <p className="contact-status">Message sent!</p>}
                        {status === 'error' && <p className="contact-status">Something went wrong. Try again.</p>}
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

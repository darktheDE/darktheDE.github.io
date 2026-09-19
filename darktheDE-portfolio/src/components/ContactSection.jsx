import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FiCheck, FiCopy, FiExternalLink, FiMail, FiMapPin, FiSend, FiAlertCircle } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS, CONTACT_CONFIG } from '../data/config';
import { trackCTA } from '../utils/analytics';
import { cn } from '../utils/cn';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: CONTACT_CONFIG.topics[0],
        message: '',
        botcheck: false,
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    // Check rate-limit cooldown from localStorage
    useEffect(() => {
        const lastSent = localStorage.getItem('last_contact_sent');
        if (lastSent) {
            const diff = Math.floor((Date.now() - parseInt(lastSent, 10)) / 1000);
            if (diff < 60) {
                setCooldown(60 - diff);
            }
        }
    }, []);

    // Countdown timer for cooldown
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setInterval(() => {
            setCooldown((prev) => (prev > 1 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [cooldown]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(CONTACT_CONFIG.recipientEmail);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Honeypot check (anti-bot control)
        if (formData.botcheck) {
            // Silently pretend success to fool malicious bots
            setStatus('success');
            return;
        }

        // 2. Cooldown check
        if (cooldown > 0) {
            setErrorMessage(`Please wait ${cooldown} seconds before sending another message.`);
            setStatus('error');
            return;
        }

        // 3. Client validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setErrorMessage('Please complete all required fields.');
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || CONTACT_CONFIG.web3formsAccessKey;

            if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
                throw new Error('Web3Forms Access Key is not configured yet. Please click the button below to send email directly.');
            }

            const payload = {
                access_key: accessKey,
                name: formData.name.trim(),
                email: formData.email.trim(),
                subject: `[Portfolio Contact] ${formData.topic} from ${formData.name.trim()}`,
                message: formData.message.trim(),
                from_name: formData.name.trim(),
                botcheck: formData.botcheck,
            };

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                trackCTA('Submit Contact Form', 'contact_section');
                localStorage.setItem('last_contact_sent', Date.now().toString());
                setCooldown(60);
                setFormData({
                    name: '',
                    email: '',
                    topic: CONTACT_CONFIG.topics[0],
                    message: '',
                    botcheck: false,
                });
            } else {
                // If demo key or API error, provide fallback explanation
                throw new Error(result.message || 'Unable to submit form. Please use direct email.');
            }
        } catch (err) {
            setErrorMessage(err.message || 'Something went wrong. You can always email me directly.');
            setStatus('error');
        }
    };

    const mailtoFallback = `mailto:${CONTACT_CONFIG.recipientEmail}?subject=${encodeURIComponent(`[Portfolio] ${formData.topic || 'Inquiry'}`)}&body=${encodeURIComponent(`Hi Hung,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;

    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="contact">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 border-b border-white/10 pb-6"
            >
                <div className="mb-3 flex items-center gap-2 text-primary">
                    <FiSend className="h-5 w-5" />
                    <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold">Get In Touch</span>
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                    Initiate Contact<span className="text-primary">.</span>
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
                    Have a project in mind, want to discuss IT audit and data systems, or just want to say hello? Drop a message below or connect directly.
                </p>
            </Motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                {/* Left Column: Direct Communication Channels & Assurance */}
                <div className="space-y-6 lg:col-span-5">
                    <div className="rounded-xl border border-white/10 bg-card p-6 backdrop-blur-md">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary mb-4">
                            Direct Communication
                        </h3>

                        <div className="space-y-4">
                            {/* Email Card */}
                            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5 flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="rounded bg-primary/10 p-2 text-primary">
                                        <FiMail className="h-4 w-4" />
                                    </div>
                                    <div className="truncate">
                                        <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Email</div>
                                        <a
                                            href={`mailto:${CONTACT_CONFIG.recipientEmail}`}
                                            className="text-xs sm:text-sm font-mono text-white hover:text-primary transition-colors truncate block"
                                        >
                                            {CONTACT_CONFIG.recipientEmail}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    aria-label="Copy email address"
                                    className="rounded border border-white/10 p-2 text-text-muted hover:border-primary/40 hover:text-primary transition-colors shrink-0"
                                    title="Copy email"
                                >
                                    {copiedEmail ? <FiCheck className="h-4 w-4 text-primary" /> : <FiCopy className="h-4 w-4" />}
                                </button>
                            </div>

                            {/* Location */}
                            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5 flex items-center gap-3">
                                <div className="rounded bg-primary/10 p-2 text-primary">
                                    <FiMapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Location</div>
                                    <div className="text-xs sm:text-sm font-semibold text-white">Ho Chi Minh City, Vietnam</div>
                                </div>
                            </div>

                            {/* Social Link */}
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 p-3.5 text-primary transition-colors hover:bg-primary/20"
                            >
                                <span className="font-semibold text-xs font-mono uppercase tracking-wider">Connect on LinkedIn</span>
                                <FiExternalLink className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Security & System Assurance Note */}
                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5 text-xs text-text-muted space-y-2">
                        <div className="flex items-center gap-2 font-mono text-primary font-bold uppercase tracking-wider text-[11px]">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span>System Reliability & Assurance</span>
                        </div>
                        <p className="leading-relaxed">
                            Messages are securely transmitted over TLS encryption directly to personal email. No marketing tracking, third-party selling, or data retention on public databases.
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-7">
                    <div className="rounded-xl border border-white/15 bg-card p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-black/40 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-transparent" />

                        {status === 'success' ? (
                            <Motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-8 text-center space-y-4"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                                    <FiCheck className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Message Transmitted Successfully!</h3>
                                <p className="max-w-md mx-auto text-sm text-text-muted leading-relaxed">
                                    Thank you for reaching out! Your message has been forwarded directly to my inbox. I typically respond within 24 hours.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 inline-flex items-center gap-2 rounded border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-slate-950"
                                >
                                    Send Another Message
                                </button>
                            </Motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Honeypot field for anti-spam bots */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    checked={formData.botcheck}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    className="hidden"
                                    style={{ display: 'none' }}
                                />

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* Name */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="block font-mono text-xs font-semibold text-text-light">
                                            Your Name <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            maxLength={60}
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full rounded-lg border border-white/10 bg-slate-950/80 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-text-muted/60 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-email" className="block font-mono text-xs font-semibold text-text-light">
                                            Your Email <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full rounded-lg border border-white/10 bg-slate-950/80 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-text-muted/60 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                {/* Topic */}
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-topic" className="block font-mono text-xs font-semibold text-text-light">
                                        Topic / Subject
                                    </label>
                                    <select
                                        id="contact-topic"
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-white/10 bg-slate-950/80 px-4 py-2.5 text-xs sm:text-sm text-white transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    >
                                        {CONTACT_CONFIG.topics.map((t) => (
                                            <option key={t} value={t} className="bg-slate-900 text-white">
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="contact-message" className="block font-mono text-xs font-semibold text-text-light">
                                            Message <span className="text-primary">*</span>
                                        </label>
                                        <span className="font-mono text-[10px] text-text-muted">
                                            {formData.message.length}/1000
                                        </span>
                                    </div>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={4}
                                        maxLength={1000}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full resize-y rounded-lg border border-white/10 bg-slate-950/80 p-4 text-xs sm:text-sm text-white placeholder-text-muted/60 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                {/* Error alert with graceful mailto fallback */}
                                {status === 'error' && (
                                    <div className="rounded-lg border border-red-500/30 bg-red-950/30 p-3.5 text-xs text-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <FiAlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                                            <span>{errorMessage}</span>
                                        </div>
                                        <a
                                            href={mailtoFallback}
                                            className="inline-flex items-center gap-1.5 rounded bg-red-900/60 px-3 py-1.5 font-mono text-[11px] font-semibold text-white hover:bg-red-800 transition-colors shrink-0"
                                        >
                                            <FiMail /> Open Email Client
                                        </a>
                                    </div>
                                )}

                                {/* Cooldown indicator */}
                                {cooldown > 0 && status !== 'error' && (
                                    <div className="text-[11px] font-mono text-text-muted">
                                        Cooldown active: Next submission available in <span className="text-primary font-bold">{cooldown}s</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting' || cooldown > 0}
                                        className={cn(
                                            "w-full inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-mono text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:bg-emerald-400 hover:shadow-primary/30",
                                            (status === 'submitting' || cooldown > 0) && "opacity-60 cursor-not-allowed"
                                        )}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                                                <span>Transmitting Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="h-4 w-4" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

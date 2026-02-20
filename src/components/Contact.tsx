"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Send, CheckCircle2, XCircle } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const EMAILJS_SERVICE_ID = 'service_n8dgnpk';
    const EMAILJS_TEMPLATE_ID = 'template_5wc8yot';
    const EMAILJS_PUBLIC_KEY = 'kU7Z7WGuhLZ8DjQad';

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
            return;
        }
        setIsSubmitting(true);
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: 'madhupyadav1809@gmail.com' },
                EMAILJS_PUBLIC_KEY
            );
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-40 px-6 flex flex-col items-center justify-center overflow-hidden" style={{ background: "var(--bg-primary)" }}>
            {/* Ambient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[rgba(0,255,135,0.04)] rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,255,135,0.2)] to-transparent" />

            <div className="max-w-5xl w-full relative z-10 flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-[#00ff87] opacity-70 block mb-6">_say.hello</span>
                    <h2
                        className="font-display text-[12vw] md:text-[8rem] lg:text-[10rem] tracking-wide leading-none mb-8 select-none"
                    >
                        LET&apos;S{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00ff87, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            BUILD
                        </span>
                        <br />
                        SOMETHING<span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(0,255,135,0.25)" }}>.</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-[var(--text-secondary)] tracking-tight max-w-2xl mx-auto">
                        Currently available for{" "}
                        <span className="text-[var(--text-primary)] italic font-semibold">select freelance</span> opportunities &amp; high-impact full-time roles.
                    </p>
                </motion.div>

                {/* Form */}
                <div className="w-full glass-card rounded-[30px] p-10 md:p-14">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group flex flex-col gap-2"
                            >
                                <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--text-muted)] group-focus-within:text-[#00ff87] transition-colors">
                                    / Initials · Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-[rgba(0,255,135,0.03)] border border-[var(--border-subtle)] focus:border-[rgba(0,255,135,0.4)] rounded-xl px-5 py-4 text-lg font-semibold text-[var(--text-primary)] outline-none transition-all duration-500 placeholder:text-[var(--text-muted)]"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00ff87] transition-all duration-700 group-focus-within:w-full rounded-full" />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group flex flex-col gap-2"
                            >
                                <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--text-muted)] group-focus-within:text-[#00ff87] transition-colors">
                                    / Digital Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-[rgba(0,255,135,0.03)] border border-[var(--border-subtle)] focus:border-[rgba(0,255,135,0.4)] rounded-xl px-5 py-4 text-lg font-semibold text-[var(--text-primary)] outline-none transition-all duration-500 placeholder:text-[var(--text-muted)]"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                />
                            </motion.div>
                        </div>

                        {/* Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-2"
                        >
                            <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--text-muted)]">
                                / The Vision
                            </label>
                            <textarea
                                rows={5}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your project..."
                                required
                                className="w-full bg-[rgba(0,255,135,0.03)] border border-[var(--border-subtle)] focus:border-[rgba(0,255,135,0.4)] rounded-xl px-5 py-4 text-lg font-medium text-[var(--text-primary)] outline-none transition-all duration-500 placeholder:text-[var(--text-muted)] resize-none"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            />
                        </motion.div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className={`self-end btn-primary flex items-center gap-3 px-10 py-4 rounded-xl text-sm transition-all ${isSubmitting ? 'opacity-60' :
                                submitStatus === 'success' ? '!bg-emerald-500' :
                                    submitStatus === 'error' ? '!bg-red-500' : ''
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                                        <Send className="w-4 h-4" />
                                    </motion.div>
                                    Deploying...
                                </>
                            ) : submitStatus === 'success' ? (
                                <><CheckCircle2 className="w-4 h-4" /> Deployed!</>
                            ) : submitStatus === 'error' ? (
                                <><XCircle className="w-4 h-4" /> Failed</>
                            ) : (
                                <><Send className="w-4 h-4" /> Deploy Message</>
                            )}
                        </motion.button>
                    </form>

                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl"
                        >
                            <p className="font-mono text-sm text-emerald-400">✓ Message deployed successfully. I&apos;ll respond soon.</p>
                        </motion.div>
                    )}
                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl"
                        >
                            <p className="font-mono text-sm text-red-400">✗ Transmission failed. Try emailing directly.</p>
                        </motion.div>
                    )}
                </div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap justify-center gap-6 w-full"
                >
                    {[
                        { name: "LinkedIn", href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/", icon: Linkedin },
                        { name: "GitHub", href: "https://github.com/Madhup7008", icon: Github },
                        { name: "Twitter", href: "#", icon: Twitter },
                        { name: "Email", href: "mailto:madhupyadav1809@gmail.com", icon: Mail },
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3.5 glass-card border border-[var(--border-subtle)] hover:border-[var(--border-medium)] rounded-xl group transition-all duration-300"
                        >
                            <item.icon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#00ff87] transition-colors" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[#00ff87] transition-colors">{item.name}</span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

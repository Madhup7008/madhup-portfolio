"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Send, CheckCircle2, XCircle, MapPin, Briefcase } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: 'madhupyadav1809@gmail.com' },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[rgba(255,0,64,0.04)] rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,0,64,0.2)] to-transparent" />

            <div className="max-w-5xl w-full relative z-10 flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-[#ff0040] opacity-70 block mb-6">_let_us_connect</span>
                    <h2
                        className="font-display text-[12vw] md:text-[8rem] lg:text-[10rem] tracking-wide leading-none mb-8 select-none"
                    >
                        INITIATE{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #ff0040, #ff2d2d)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            CONTACT
                        </span>
                        <br />
                        NOW<span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,0,64,0.25)" }}>.</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-[var(--text-secondary)] tracking-tight max-w-2xl mx-auto">
                        Currently accepting{" "}
                        <span className="text-[var(--text-primary)] italic font-semibold">full stack development</span>,{" "}
                        <span className="text-[var(--text-primary)] italic font-semibold">freelance development</span> &amp; full-time opportunities.
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
                                <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--text-muted)] group-focus-within:text-[#ff0040] transition-colors">
                                    / Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-[rgba(255,0,64,0.03)] border border-[var(--border-subtle)] focus:border-[rgba(255,0,64,0.4)] rounded-xl px-5 py-4 text-lg font-semibold text-[var(--text-primary)] outline-none transition-all duration-500 placeholder:text-[var(--text-muted)]"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ff0040] transition-all duration-700 group-focus-within:w-full rounded-full" />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group flex flex-col gap-2"
                            >
                                <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--text-muted)] group-focus-within:text-[#ff0040] transition-colors">
                                    / Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-[rgba(255,0,64,0.03)] border border-[var(--border-subtle)] focus:border-[rgba(255,0,64,0.4)] rounded-xl px-5 py-4 text-lg font-semibold text-[var(--text-primary)] outline-none transition-all duration-500 placeholder:text-[var(--text-muted)]"
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
                                / Project Details
                            </label>
                            <textarea
                                rows={5}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Describe your project goals, timeline, and collaboration needs..."
                                required
                                className="w-full bg-[rgba(255,0,64,0.03)] border border-[var(--border-subtle)] focus:border-[rgba(255,0,64,0.4)] rounded-xl px-5 py-4 text-lg font-medium text-[var(--text-primary)] outline-none transition-all duration-500 placeholder:text-[var(--text-muted)] resize-none"
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
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                <><CheckCircle2 className="w-4 h-4" /> Sent!</>
                            ) : submitStatus === 'error' ? (
                                <><XCircle className="w-4 h-4" /> Failed</>
                            ) : (
                                <><Send className="w-4 h-4" /> Send Message</>
                            )}
                        </motion.button>
                    </form>

                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl"
                        >
                            <p className="font-mono text-sm text-emerald-400">✓ Message sent successfully. Expect a response within 24hrs.</p>
                        </motion.div>
                    )}
                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl"
                        >
                            <p className="font-mono text-sm text-red-400">✗ Message failed. Please try again or use direct email.</p>
                        </motion.div>
                    )}
                </div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 w-full"
                >
                    {/* Quick info cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[rgba(255,0,64,0.08)] flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-[#ff0040]" />
                            </div>
                            <div>
                                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--text-muted)] block">Email</span>
                                <span className="text-sm text-[var(--text-primary)]">madhupyadav1809@gmail.com</span>
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[rgba(255,0,64,0.08)] flex items-center justify-center flex-shrink-0">
                                <Briefcase className="w-5 h-5 text-[#ff0040]" />
                            </div>
                            <div>
                                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--text-muted)] block">Availability</span>
                                <span className="text-sm text-[#ff0040]">Open for Projects</span>
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[rgba(255,0,64,0.08)] flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-[#ff0040]" />
                            </div>
                            <div>
                                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--text-muted)] block">Location</span>
                                <span className="text-sm text-[var(--text-primary)]">India (Remote Worldwide)</span>
                            </div>
                        </div>
                    </div>

                    {/* Social buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
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
                                <item.icon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#ff0040] transition-colors" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[#ff0040] transition-colors">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

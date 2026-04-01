"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Send, CheckCircle2, XCircle, MapPin, Briefcase } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
);

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
                            { name: "WhatsApp", href: "https://wa.me/", icon: WhatsAppIcon },
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

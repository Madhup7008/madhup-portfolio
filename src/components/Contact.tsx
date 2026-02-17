"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Send, CheckCircle2, XCircle } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // EmailJS Configuration - User needs to add these from their EmailJS dashboard
    const EMAILJS_SERVICE_ID = 'service_n8dgnpk'; // Replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = 'template_5wc8yot'; // Replace with your EmailJS template ID
    const EMAILJS_PUBLIC_KEY = 'kU7Z7WGuhLZ8DjQad'; // Replace with your EmailJS public key

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
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
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'madhupyadav1809@gmail.com'
                },
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
        <section id="contact" className="relative min-h-screen py-60 px-6 flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
            {/* Background Stage Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-white/[0.03] rounded-full blur-[180px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl w-full relative z-10 flex flex-col items-center">
                {/* Massive CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-52"
                >
                    <h2 className="text-[14vw] md:text-[220px] font-black text-white tracking-[1vw] md:tracking-[-0.05em] leading-[0.8] mb-12 select-none">
                        START<span className="text-outline">ING</span>
                        <br />
                        <span className="text-outline">SOME</span>THIN<span className="text-white">G?</span>
                    </h2>
                    <p className="text-2xl md:text-4xl font-light text-white/20 tracking-tight max-w-4xl mx-auto">
                        Currently available for <span className="text-white italic font-bold">select freelance</span> opportunities & high-impact full-time roles.
                    </p>
                </motion.div>

                {/* Minimalist Arena Form */}
                <div className="w-full max-w-5xl">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-32">
                        <div className="grid md:grid-cols-2 gap-24">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-transparent border-b border-white/10 py-10 text-4xl md:text-5xl font-black text-white outline-none focus:border-white transition-all duration-700 placeholder:text-white/5"
                                />
                                <label htmlFor="name" className="absolute top-0 left-0 text-[10px] font-black uppercase tracking-[0.6em] text-white/30 group-focus-within:text-white transition-colors">Initials / Name</label>
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-transparent border-b border-white/10 py-10 text-4xl md:text-5xl font-black text-white outline-none focus:border-white transition-all duration-700 placeholder:text-white/5"
                                />
                                <label htmlFor="email" className="absolute top-0 left-0 text-[10px] font-black uppercase tracking-[0.6em] text-white/30 group-focus-within:text-white transition-colors">Digital Address</label>
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full"></div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <textarea
                                rows={2}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="What's your vision?"
                                required
                                className="w-full bg-transparent border-b border-white/10 py-10 text-4xl md:text-5xl font-black text-white outline-none focus:border-white transition-all duration-700 placeholder:text-white/5 resize-none overflow-hidden"
                            />
                            <label htmlFor="message" className="absolute top-0 left-0 text-[10px] font-black uppercase tracking-[0.6em] text-white/30 group-focus-within:text-white transition-colors">The Vision</label>
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full"></div>
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className={`self-center md:self-end px-24 py-12 text-[14px] font-black uppercase tracking-[0.4em] rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_30px_60px_rgba(255,255,255,0.25)] transition-all duration-500 active:scale-95 group overflow-hidden relative ${isSubmitting
                                ? 'bg-white/50 text-black/50 cursor-not-allowed'
                                : submitStatus === 'success'
                                    ? 'bg-green-500 text-white'
                                    : submitStatus === 'error'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white text-black'
                                }`}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Send className="w-4 h-4" />
                                        </motion.div>
                                        Deploying...
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        Message Deployed!
                                    </>
                                ) : submitStatus === 'error' ? (
                                    <>
                                        <XCircle className="w-4 h-4" />
                                        Deploy Failed
                                    </>
                                ) : (
                                    <>
                                        Deploy Message
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </motion.button>
                    </form>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-12 p-8 bg-green-500/10 border border-green-500/20 rounded-3xl text-center"
                        >
                            <p className="text-green-400 text-xl font-bold">Your message has been sent successfully! I'll get back to you soon.</p>
                        </motion.div>
                    )}

                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-12 p-8 bg-red-500/10 border border-red-500/20 rounded-3xl text-center"
                        >
                            <p className="text-red-400 text-xl font-bold">Oops! Something went wrong. Please try again or email me directly.</p>
                        </motion.div>
                    )}
                </div>

                <div className="mt-80 flex flex-wrap justify-center gap-16 border-t border-white/10 pt-28 w-full">
                    {[
                        { name: "Linkedin", href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/", icon: Linkedin },
                        { name: "Github", href: "https://github.com/Madhup7008", icon: Github },
                        { name: "Twitter", href: "#", icon: Twitter },
                        { name: "Mail", href: "mailto:madhupyadav1809@gmail.com", icon: Mail }
                    ].map((item, i) => (
                        <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-6">
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-all duration-500">/{item.name}</span>
                            <div className="p-6 border-2 border-white/5 rounded-3xl group-hover:border-white/40 group-hover:bg-white/5 shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all duration-500">
                                <item.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-all duration-500" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

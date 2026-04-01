"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = ["Full Stack Developer", "Frontend Engineer", "Backend Engineer", "Product Builder"];

/* ═══════════════════════════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[roleIndex];
        const speed = isDeleting ? 40 : 80;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, displayText.length + 1));
                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(current.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((i) => (i + 1) % ROLES.length);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Creative professional backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.18),transparent_45%),linear-gradient(180deg,#091426_0%,#08101f_100%)] pointer-events-none z-[1]" />
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none z-[1]" />
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[rgba(34,211,238,0.08)] blur-3xl pointer-events-none z-[1]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[rgba(59,130,246,0.12)] blur-3xl pointer-events-none z-[1]" />

            {/* ── Content — centered layout ──────────────────────────── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
                    className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-[rgba(148,182,255,0.25)] bg-[rgba(11,23,44,0.7)] backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent-primary)]">
                        Open to Work
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.92] tracking-tight mb-6"
                >
                    <span className="text-[var(--text-primary)]">Madhup</span>
                    <br />
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 52%, #22d3ee 100%)",
                        }}
                    >
                        Kumar Yadav
                    </span>
                </motion.h1>

                {/* Role typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-6 h-8"
                >
                    <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-primary)]" />
                    <span className="font-mono text-sm md:text-base text-[var(--text-secondary)] tracking-[0.15em]">
                        {displayText}
                        <span className="text-[var(--accent-primary)] animate-blink">|</span>
                    </span>
                    <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-primary)]" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1, ease: "easeOut" as const }}
                    className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6"
                >
                    I build <span className="text-[var(--text-primary)] font-medium">high-performance, user-focused</span> digital
                    products and <span className="text-[var(--accent-primary)] font-bold">websites for small businesses</span>.{" "}
                    From idea to deployment, I ship with quality and speed.
                </motion.p>

                {/* Offer Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" as const }}
                    className="flex flex-col sm:flex-row items-center gap-3 px-6 py-3.5 rounded-2xl border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                        🚀
                    </span>
                    <span className="text-sm md:text-base text-[var(--text-primary)] font-medium">
                        Need an online presence? <span className="text-[var(--accent-primary)] font-bold">Get a website in 3 days</span>
                    </span>
                    <span className="hidden sm:block text-[var(--border-strong)]">|</span>
                    <span className="text-sm font-mono text-[var(--text-secondary)] tracking-wider">Custom Pricing</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" as const }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                >
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-xl text-sm flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                        WhatsApp
                    </a>
                    <a href="#contact" className="btn-ghost px-8 py-4 rounded-xl text-sm bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 border-transparent">
                        Contact Me
                    </a>
                    <a href="/builds" className="btn-ghost px-8 py-4 rounded-xl text-sm border-[rgba(59,130,246,0.24)] text-[var(--accent-secondary)] hover:border-[var(--accent-secondary)] hover:bg-[rgba(59,130,246,0.1)]">
                        View Projects
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" as const }}
                    className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-xl"
                >
                    {[
                        { value: "10+", label: "Projects Built" },
                        { value: "4+", label: "Years Coding" },
                        { value: "50+", label: "Features Shipped" },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-1.5 py-5 rounded-xl border border-[var(--border-subtle)] bg-[rgba(10,10,10,0.5)] backdrop-blur-sm"
                        >
                            <span className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">{s.value}</span>
                            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--text-muted)]">{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="flex items-center gap-6 mt-10"
                >
                    {[
                        { label: "GitHub", href: "https://github.com/Madhup7008" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/" },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-300 border-b border-transparent hover:border-[var(--accent-primary)]"
                        >
                            {s.label} ↗
                        </a>
                    ))}
                    <span className="text-[var(--text-muted)] text-[10px]">·</span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">India · UTC+5:30</span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[var(--text-muted)]">scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--accent-primary)] to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}

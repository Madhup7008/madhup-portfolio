"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Award, Terminal, BookOpen, Cpu } from "lucide-react";

const cards = [
    {
        tag: "/ Philosophy",
        title: "Engineering Experiences",
        body: "Delivering high-fidelity user interfaces powered by scalable architectures. My mission: build digital artifacts as robust as they're beautiful.",
        icon: Code2,
    },
    {
        tag: "/ Focus",
        title: "Current Specialization",
        body: "Frontend engineering with React, Next.js, and modern 3D web. Exploring the intersection of visual storytelling and systems design.",
        icon: Cpu,
    },
    {
        tag: "/ Education",
        title: "B.Tech IT · Amity University",
        body: "Immersed in CS fundamentals, data structures, algorithms, and software engineering methodologies at Amity University, Noida.",
        icon: BookOpen,
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-40 px-6 overflow-hidden bg-[var(--bg-secondary)]">
            {/* Ambient blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(0,255,135,0.04)] rounded-full blur-[160px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(0,212,255,0.03)] rounded-full blur-[140px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mb-24 relative"
                >
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#00ff87] opacity-70 block mb-4">_about.me</span>
                    <h2 className="font-display text-7xl md:text-[200px] tracking-wide leading-none select-none opacity-10 absolute -top-10 -left-8">
                        ABOUT
                    </h2>
                    <div className="relative z-10 pt-4">
                        <h3 className="font-display text-6xl md:text-[110px] tracking-wide leading-none">
                            THE<span className="text-gradient"> HUMAN</span>
                        </h3>
                        <div className="flex items-center gap-4 mt-5">
                            <div className="h-[1px] w-20 bg-[#00ff87] opacity-50" />
                            <p className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-[0.3em]">Engineering Experiences</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Portrait Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="lg:col-span-4 relative group"
                    >
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute -inset-3 rounded-[45px] bg-gradient-to-br from-[rgba(0,255,135,0.15)] to-[rgba(0,212,255,0.08)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative rounded-[40px] overflow-hidden border border-[var(--border-subtle)] group-hover:border-[var(--border-medium)] transition-all duration-500 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                                <motion.img
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    src="/images/profile.jpg"
                                    alt="Madhup Kumar Yadav"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 to-transparent" />

                                {/* Info badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute bottom-6 left-6 right-6 p-5 bg-[rgba(8,12,16,0.85)] backdrop-blur-2xl border border-[var(--border-subtle)] rounded-2xl"
                                >
                                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-1">Madhup Kumar Yadav</h4>
                                    <p className="font-mono text-[10px] text-[#00ff87] uppercase tracking-widest mb-3 opacity-80">Full Stack Developer</p>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
                                        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">India · UTC+5:30</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info columns */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Main bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="glass-card rounded-[30px] p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(0,255,135,0.04)] rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,135,0.1)] flex items-center justify-center">
                                        <Award className="w-5 h-5 text-[#00ff87]" />
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Madhup Kumar Yadav</span>
                                </div>
                                <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-normal">
                                    Pursuing <span className="text-[var(--text-primary)] font-semibold">B.Tech in IT</span> at Amity University, Noida. I bridge the gap between
                                    <span className="text-[#00ff87] font-semibold"> logic</span> and{" "}
                                    <span className="text-[#00d4ff] font-semibold">aesthetics</span>, building software that performs and inspires.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {["Python", "React", "Next.js", "Flask", "PostgreSQL", "TypeScript"].map((t) => (
                                        <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] tracking-wider uppercase hover:border-[#00ff87] hover:text-[#00ff87] transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {cards.map((card, i) => {
                                const Icon = card.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                                        className="glass-card rounded-[24px] p-7 flex flex-col gap-4 group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(0,255,135,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,255,135,0.15)] transition-colors">
                                            <Icon className="w-4 h-4 text-[#00ff87]" />
                                        </div>
                                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{card.tag}</span>
                                        <h4 className="text-base font-bold leading-tight text-[var(--text-primary)] mb-0.5">{card.title}</h4>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{card.body}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <a
                                href="https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm"
                            >
                                <Terminal className="w-4 h-4" />
                                Connect on LinkedIn
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

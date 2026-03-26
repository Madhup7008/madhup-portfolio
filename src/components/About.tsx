"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Award, ArrowRight, Briefcase, GraduationCap, Cpu, Layers } from "lucide-react";

const cards = [
    {
        tag: "/ Product Engineering",
        title: "Full Stack Delivery",
        body: "Building user-focused web products from concept to launch with robust frontend architecture and reliable backend systems.",
        icon: Layers,
    },
    {
        tag: "/ Engineering",
        title: "Scalable Development",
        body: "Creating production-ready applications with maintainable code, performance-focused design, and clear system structure.",
        icon: Code2,
    },
    {
        tag: "/ Systems",
        title: "Backend Architecture",
        body: "Designing APIs, data flows, and infrastructure that stay stable as traffic and feature complexity grow.",
        icon: Cpu,
    },
];

const timeline = [
    {
        year: "2024 – Present",
        title: "Full Stack Developer",
        org: "Freelance & Open Source",
        description: "Building production web apps with Next.js, Flask, and PostgreSQL for businesses and independent clients.",
        icon: Briefcase,
    },
    {
        year: "2023 – Present",
        title: "B.Tech in Information Technology",
        org: "Amity University, Noida",
        description: "Studying software engineering, data systems, cloud fundamentals, and modern product development practices.",
        icon: GraduationCap,
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-40 px-6 overflow-hidden bg-[var(--bg-secondary)]">
            {/* Ambient blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(255,0,64,0.04)] rounded-full blur-[160px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(255,45,45,0.03)] rounded-full blur-[140px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mb-24 relative"
                >
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#ff0040] opacity-70 block mb-4">_about.section</span>
                    <h2 className="font-display text-7xl md:text-[200px] tracking-wide leading-none select-none opacity-10 absolute -top-10 -left-8">
                        ABOUT
                    </h2>
                    <div className="relative z-10 pt-4">
                        <h3 className="font-display text-6xl md:text-[110px] tracking-wide leading-none">
                            THE<span className="text-gradient"> BUILDER</span>
                        </h3>
                        <div className="flex items-center gap-4 mt-5">
                            <div className="h-[1px] w-20 bg-[#ff0040] opacity-50" />
                            <p className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-[0.3em]">Building Digital Products</p>
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
                            <div className="absolute -inset-3 rounded-[45px] bg-gradient-to-br from-[rgba(255,0,64,0.15)] to-[rgba(255,45,45,0.08)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative rounded-[40px] overflow-hidden border border-[var(--border-subtle)] group-hover:border-[var(--border-medium)] transition-all duration-500 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                                <motion.img
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    src="/images/profile.jpg"
                                    alt="Madhup Kumar Yadav"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />

                                {/* Info badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute bottom-6 left-6 right-6 p-5 bg-[rgba(5,5,5,0.85)] backdrop-blur-2xl border border-[var(--border-subtle)] rounded-2xl"
                                >
                                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-1">Madhup Kumar Yadav</h4>
                                    <p className="font-mono text-[10px] text-[#ff0040] uppercase tracking-widest mb-3 opacity-80">Full Stack Developer</p>
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
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(255,0,64,0.04)] rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[rgba(255,0,64,0.1)] flex items-center justify-center">
                                        <Award className="w-5 h-5 text-[#ff0040]" />
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Madhup Kumar Yadav</span>
                                </div>
                                <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-normal">
                                    Pursuing <span className="text-[var(--text-primary)] font-semibold">B.Tech in IT</span> at Amity University, Noida. I operate at the intersection of
                                    <span className="text-[#ff0040] font-semibold"> product thinking</span> and{" "}
                                    <span className="text-[#ff2d2d] font-semibold">engineering execution</span> to ship reliable, high-performing software.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {["Python", "React", "Next.js", "TypeScript", "Flask", "PostgreSQL", "Docker", "Redis"].map((t) => (
                                        <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] tracking-wider uppercase hover:border-[#ff0040] hover:text-[#ff0040] transition-colors">
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
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(255,0,64,0.08)] flex items-center justify-center group-hover:bg-[rgba(255,0,64,0.15)] transition-colors">
                                            <Icon className="w-4 h-4 text-[#ff0040]" />
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
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm"
                            >
                                <ArrowRight className="w-4 h-4" />
                                Connect on LinkedIn
                            </a>
                            <a
                                href="/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm"
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mt-24"
                >
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#ff0040] opacity-70 block mb-8">_career.timeline</span>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#ff0040] via-[rgba(255,0,64,0.3)] to-transparent hidden md:block" />

                        <div className="flex flex-col gap-8">
                            {timeline.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15, duration: 0.7 }}
                                        className="flex gap-6 md:ml-14"
                                    >
                                        <div className="hidden md:flex absolute left-3.5 w-5 h-5 rounded-full bg-[var(--bg-primary)] border-2 border-[#ff0040] items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#ff0040]" />
                                        </div>
                                        <div className="glass-card rounded-2xl p-6 flex-1 group hover:border-[var(--border-medium)] transition-all">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-[rgba(255,0,64,0.08)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(255,0,64,0.15)] transition-colors">
                                                    <Icon className="w-5 h-5 text-[#ff0040]" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#ff0040] opacity-70">{item.year}</span>
                                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mt-1">{item.title}</h4>
                                                    <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase mt-0.5">{item.org}</p>
                                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Palette, GitBranch, Layers, Shield, Bug, Lock, Wifi, Eye, Fingerprint } from "lucide-react";

const skills = [
    { name: "React / Next.js", category: "Core Stack", level: 92, accent: "#ff0040" },
    { name: "Python", category: "Language", level: 88, accent: "#ff2d2d" },
    { name: "Network Security", category: "Security", level: 82, accent: "#ff0040" },
    { name: "Penetration Testing", category: "Offensive", level: 78, accent: "#ff0040" },
    { name: "PostgreSQL", category: "Database", level: 80, accent: "#ff0040" },
    { name: "Flask", category: "Backend", level: 85, accent: "#ff2d2d" },
    { name: "OWASP Top 10", category: "Security", level: 85, accent: "#ff0040" },
    { name: "Linux / Kali", category: "Security", level: 80, accent: "#ff2d2d" },
    { name: "Tailwind CSS", category: "Design", level: 95, accent: "#ff0040" },
    { name: "Git / GitHub", category: "Workflow", level: 90, accent: "#ff0040" },
];

const tags = ["Web App Security", "Network Pentesting", "API Security", "Frontend Engineering", "Backend Systems", "Vulnerability Assessment", "Threat Modeling", "Secure Code Review", "Incident Response", "DevSecOps"];

const services = [
    {
        icon: Shield,
        title: "Security Audits",
        description: "Comprehensive security assessments of web applications, APIs, and infrastructure to identify vulnerabilities.",
    },
    {
        icon: Bug,
        title: "Penetration Testing",
        description: "Ethical hacking to discover and exploit security weaknesses before malicious actors can.",
    },
    {
        icon: Code2,
        title: "Secure Development",
        description: "Building hardened web applications with React, Next.js, and Python — security by design.",
    },
    {
        icon: Server,
        title: "Backend Engineering",
        description: "Scalable, secure APIs and server architectures with input validation, auth, and encryption.",
    },
    {
        icon: Lock,
        title: "Cryptography & Auth",
        description: "Implementing robust authentication systems, JWT, OAuth, and encryption protocols.",
    },
    {
        icon: Layers,
        title: "Full Stack Architecture",
        description: "End-to-end secure system design from database hardening to deployment pipelines.",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-40 px-6 bg-[var(--bg-secondary)] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mb-24"
                >
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#ff0040] opacity-70 block mb-4">_arsenal.scan</span>
                    <h3 className="font-display text-7xl md:text-[110px] tracking-wide leading-none">
                        TECH<span className="text-gradient"> ARSENAL</span>
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="h-[1px] w-20 bg-[#ff0040] opacity-50" />
                        <p className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-[0.3em] italic">Tools I build & break with</p>
                    </div>
                </motion.div>

                {/* Bento Skills Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Featured Primary Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-1 lg:row-span-2 p-10 rounded-[30px] relative overflow-hidden group"
                        style={{
                            background: "linear-gradient(135deg, #ff0040 0%, #ff2d2d 100%)",
                        }}
                    >
                        <div className="absolute inset-0 opacity-10 dot-pattern pointer-events-none" />
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#050505] opacity-70 block mb-4">Core Primary</span>
                                <h3 className="font-display text-5xl tracking-wide mb-4">React &amp; Next.js</h3>
                                <p className="text-base font-medium text-[#050505] opacity-70 leading-relaxed">Building secure, production-grade web applications. The backbone of my development arsenal — hardened with security-first practices.</p>
                            </div>
                            <div className="mt-8 flex items-center gap-2">
                                <div className="flex-1 h-2 rounded-full bg-[rgba(5,5,5,0.15)] overflow-hidden">
                                    <div className="h-full rounded-full bg-[#050505]" style={{ width: "92%" }} />
                                </div>
                                <span className="font-mono text-sm font-bold text-[#050505]">92%</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 border-[16px] border-[rgba(5,5,5,0.1)] rounded-full" />
                    </motion.div>

                    {/* Other skill bars */}
                    {skills.slice(1).map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.7, ease: "easeOut" }}
                            className="glass-card rounded-[24px] p-7 flex flex-col gap-4 group hover:border-[var(--border-medium)] transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)] block mb-1">{skill.category}</span>
                                    <h4 className="font-display text-2xl md:text-3xl tracking-wide">{skill.name}</h4>
                                </div>
                                <span className="font-mono text-sm font-bold" style={{ color: skill.accent }}>{skill.level}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.3 + i * 0.07, ease: "easeOut" }}
                                    className="h-full rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${skill.accent}, ${skill.accent}88)` }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Capability Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--text-muted)] block mb-6">/ Areas of Expertise</span>
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="font-mono text-[10px] px-4 py-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] uppercase tracking-wider hover:border-[#ff0040] hover:text-[#ff0040] hover:bg-[rgba(255,0,64,0.05)] transition-all"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Services — What I Can Do For You */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mt-24"
                >
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#ff2d2d] opacity-70 block mb-4">_services.deploy</span>
                    <h3 className="font-display text-5xl md:text-7xl tracking-wide leading-none mb-12">
                        WHAT I <span className="text-gradient">BUILD & BREAK</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.7 }}
                                    className="glass-card rounded-[24px] p-8 group hover:border-[var(--border-medium)] transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[rgba(255,0,64,0.08)] flex items-center justify-center mb-5 group-hover:bg-[rgba(255,0,64,0.15)] transition-colors">
                                        <Icon className="w-6 h-6 text-[#ff0040]" />
                                    </div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{service.title}</h4>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

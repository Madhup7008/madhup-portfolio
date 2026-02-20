"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Astha Library ERP",
        tag: "ERP · SaaS",
        description: "A high-performance administrative ecosystem managing 127+ active members. Features include multi-shift scheduling, financial tracking, and a competitive exam portal.",
        tech: ["Python", "Flask", "PostgreSQL", "React", "JS"],
        image: "/astha-admin-main.png",
        github: "https://github.com/Madhup7008",
        demo: "https://www.asthalibraryfitness.com/",
        accent: "#00ff87",
        number: "01"
    },
    {
        title: "Portfolio Dashboard",
        tag: "Web · Portfolio",
        description: "A developer showcase built with Next.js 15, Framer Motion, and a cyberpunk terminal aesthetic. Every detail is intentional, every animation purposeful.",
        tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
        image: "/portfolio-preview.png",
        github: "https://github.com/Madhup7008",
        demo: "#",
        accent: "#00d4ff",
        number: "02"
    },
    {
        title: "Hometech Solutions",
        tag: "E-Commerce Architecture",
        description: "A full-scale enterprise e-commerce platform featuring Next.js frontend, secure JWT authentication, Redis caching, Razorpay payment gateway, and a robust MongoDB-powered admin dashboard.",
        tech: ["Next.js", "Express.js", "MongoDB", "Redis", "Razorpay"],
        image: "/hometech-preview.jpeg",
        github: "https://github.com/Madhup7008",
        demo: "#",
        accent: "#7c3aed",
        number: "03"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-40 px-6 bg-[var(--bg-primary)] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mb-28 relative"
                >
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#00ff87] opacity-70 block mb-4">_builds.archive</span>
                    <h3 className="font-display text-7xl md:text-[110px] tracking-wide leading-none">
                        SELECTED<span className="text-gradient"> WORKS</span>
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="h-[1px] w-20 bg-[#00ff87] opacity-50" />
                        <p className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-[0.3em] italic">Crafting Digital Artifacts</p>
                    </div>
                </motion.div>

                {/* Projects */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="group glass-card rounded-[30px] md:rounded-[40px] overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-500"
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                {/* Image half */}
                                <div className={`relative h-72 md:h-96 overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div
                                        className="absolute inset-0 z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-700"
                                        style={{ background: `linear-gradient(135deg, ${project.accent}22, #080c1099)` }}
                                    />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"
                                    />
                                    {/* Number watermark */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.4)] backdrop-blur-sm text-white/60">
                                            {project.tag}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 right-6 z-20">
                                        <span className="font-mono text-6xl font-bold opacity-10 text-white select-none">{project.number}</span>
                                    </div>
                                </div>

                                {/* Content half */}
                                <div className={`p-10 md:p-14 flex flex-col justify-between gap-8 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <div className="flex flex-col gap-6">
                                        <h3 className="font-display text-4xl md:text-6xl tracking-wide leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="font-mono text-[9px] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] tracking-wider uppercase"
                                                    style={{ borderColor: `${project.accent}22`, color: project.accent + "aa" }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 pt-4 border-t border-[var(--border-subtle)]">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group/link"
                                        >
                                            <Github className="w-4 h-4 group-hover/link:text-[#00ff87] transition-colors" />
                                            Source
                                        </a>
                                        <div className="w-[1px] h-4 bg-[var(--border-subtle)]" />
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest transition-colors group/link"
                                            style={{ color: project.accent + "cc" }}
                                        >
                                            <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                                            Live Demo
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

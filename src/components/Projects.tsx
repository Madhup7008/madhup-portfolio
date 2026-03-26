"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Astha Library ERP",
        tag: "ERP · SaaS",
        description: "A high-performance administrative ecosystem managing 127+ active members with role-based access control, clean workflows, and real-time analytics.",
        tech: ["Python", "Flask", "PostgreSQL", "React", "JWT Auth"],
        image: "/astha-admin-main.png",
        github: "https://github.com/Madhup7008",
        demo: "https://www.asthalibraryfitness.com/",
        accent: "#ff0040",
        number: "01",
        status: "Live",
        impact: "High Impact",
    },
    {
        title: "Portfolio Dashboard",
        tag: "Web · Showcase",
        description: "A developer showcase built with Next.js and Framer Motion, featuring dynamic visuals, rich animations, and a strong modern design language.",
        tech: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
        image: "/portfolio-preview.svg",
        github: "https://github.com/Madhup7008",
        demo: "#",
        accent: "#ff2d2d",
        number: "02",
        status: "Live",
        impact: "Brand Presence",
    },
    {
        title: "Hometech Solutions",
        tag: "E-Commerce Platform",
        description: "A full-scale enterprise e-commerce platform with JWT authentication, Redis caching, robust payment flow integration, and optimized API endpoints.",
        tech: ["Next.js", "Express.js", "MongoDB", "Redis", "Razorpay"],
        image: "/hometech-preview.png",
        github: "https://github.com/Madhup7008",
        demo: "https://hometech-frontend.onrender.com/",
        accent: "#cc0022",
        number: "03",
        status: "In Progress",
        impact: "Scalable",
    },
];

function ProjectImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
    const [errored, setErrored] = useState(false);

    if (errored) {
        return (
            <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${accent}22, #050505)` }}
            >
                <div className="text-center">
                    <span className="font-display text-6xl opacity-20 text-white block">{alt.charAt(0)}</span>
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 mt-2 block">{alt}</span>
                </div>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setErrored(true)}
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"
        />
    );
}

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
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#ff0040] opacity-70 block mb-4">_project.gallery</span>
                    <h3 className="font-display text-7xl md:text-[110px] tracking-wide leading-none">
                        FEATURED<span className="text-gradient"> PROJECTS</span>
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="h-[1px] w-20 bg-[#ff0040] opacity-50" />
                        <p className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-[0.3em]">Production-grade digital products</p>
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
                                        style={{ background: `linear-gradient(135deg, ${project.accent}22, #05050599)` }}
                                    />
                                    <ProjectImage src={project.image} alt={project.title} accent={project.accent} />
                                    {/* Tag + Status */}
                                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.4)] backdrop-blur-sm text-white/60">
                                            {project.tag}
                                        </span>
                                        <span
                                            className="font-mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1.5"
                                            style={{
                                                background: project.status === "Live" ? "rgba(255,0,64,0.15)" : "rgba(204,0,34,0.15)",
                                                border: `1px solid ${project.status === "Live" ? "rgba(255,0,64,0.3)" : "rgba(204,0,34,0.3)"}`,
                                                color: project.status === "Live" ? "#ff0040" : "#ff6666",
                                            }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.status === "Live" ? "#ff0040" : "#ff6666" }} />
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                                        <span className="font-mono text-6xl font-bold opacity-10 text-white select-none">{project.number}</span>
                                    </div>
                                    {/* Project impact indicator */}
                                    <div className="absolute bottom-6 left-6 z-20 flex items-center gap-1.5">
                                        <Star className="w-3 h-3 text-[#ff0040] opacity-60" />
                                        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#ff0040] opacity-50">{project.impact}</span>
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
                                            <Github className="w-4 h-4 group-hover/link:text-[#ff0040] transition-colors" />
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

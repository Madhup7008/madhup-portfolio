"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Astha Library ERP",
        description: "A high-performance ERP system for institutional management, student tracking, and financial reporting.",
        longDesc: "A sophisticated administrative ecosystem currently managing 127+ active members. Key features include a multi-shift scheduling engine (covering 5+ shifts), a comprehensive financial module tracking 120+ fee submissions, and an integrated competitive exam portal. Built with real-time data verification and automated student archiving for operational efficiency.",
        tech: ["Python", "Flask", "PostgreSQL", "JavaScript", "React"],
        image: "/astha-admin-main.png",
        github: "https://github.com/Madhup7008",
        demo: "https://www.asthalibraryfitness.com/",
        color: "#6366f1"
    },
    {
        title: "Portfolio Dashboard",
        description: "A professional developer showcase built with the most modern web technologies.",
        longDesc: "Leveraging Next.js 15, Framer Motion for high-end animations, and Tailwind CSS for a pixel-perfect dark theme inspired by industry-leading designs.",
        tech: ["Next.js", "Tailwind", "Framer Motion", "Typescript"],
        image: "/portfolio-preview.png",
        github: "https://github.com/Madhup7008",
        demo: "#",
        color: "#ec4899"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-60 px-6 container mx-auto overflow-visible">
            {/* Header with better movement */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-80 relative"
            >
                <h2 className="text-[10vw] md:text-[180px] font-black text-outline tracking-tighter leading-none mb-4 absolute -top-40 -left-10 opacity-10 select-none">
                    WORKS
                </h2>
                <div className="z-10 relative">
                    <h3 className="text-8xl md:text-[140px] font-black text-white tracking-tighter leading-none">
                        BUILDS<span className="text-outline">.</span>
                    </h3>
                    <div className="flex items-center gap-4 mt-6">
                        <div className="h-[3px] w-32 bg-white"></div>
                        <p className="text-2xl text-white/40 font-black uppercase tracking-widest italic">Crafting Digital Artifacts</p>
                    </div>
                </div>
            </motion.div>

            {/* Immersive Project Stacks */}
            <div className="flex flex-col gap-[350px]">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} relative`}
                    >
                        {/* Background Title - Immense Scale */}
                        <div className={`absolute top-0 ${idx % 2 === 0 ? '-right-20' : '-left-20'} z-0 rotate-90 origin-top pointer-events-none opacity-5`}>
                            <h4 className="text-[250px] font-black text-white leading-none whitespace-nowrap">
                                {project.title.toUpperCase()}
                            </h4>
                        </div>

                        {/* Visual Asset Stage */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className={`w-full md:w-[70vw] h-[50vh] md:h-[70vh] relative z-10 rounded-[50px] overflow-hidden group mb-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 cursor-crosshair`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms] ease-out opacity-40 group-hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                            {/* Category Badge */}
                            <div className="absolute top-12 left-12 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full">
                                <span className="text-xs font-black text-white uppercase tracking-widest">{project.tech[0]}</span>
                            </div>
                        </motion.div>

                        {/* Context Area */}
                        <div className={`w-full md:w-[45vw] flex flex-col gap-10 mt-10 md:-mt-20 z-20 ${idx % 2 === 0 ? 'md:ml-[20vw]' : 'md:mr-[20vw]'} p-12 bg-zinc-950/80 backdrop-blur-3xl border border-white/5 rounded-[40px] shadow-2xl`}>
                            <h3 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">
                                {project.title}
                            </h3>

                            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium">
                                {project.description}
                                <br />
                                <span className="text-white/20 mt-4 block text-lg font-bold italic">{project.longDesc}</span>
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-5 py-2.5 bg-white/5 rounded-2xl text-[11px] font-black text-white uppercase tracking-widest">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-10 pt-4">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-4 text-white hover:text-white/60 transition-colors font-black uppercase tracking-[0.2em] text-[12px]"
                                >
                                    <div className="p-3 bg-white/5 rounded-2xl"><Github className="w-5 h-5" /></div>
                                    Github
                                </a>
                                <div className="h-4 w-[1px] bg-white/10"></div>
                                <a
                                    href={project.demo}
                                    className="flex items-center gap-4 text-white hover:text-white/60 transition-colors font-black uppercase tracking-[0.2em] text-[12px]"
                                >
                                    <div className="p-3 bg-white/5 rounded-2xl"><ExternalLink className="w-5 h-5" /></div>
                                    Live Stage
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

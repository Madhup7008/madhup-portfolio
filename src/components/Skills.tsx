"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React / Next.js", category: "Core Stack", level: 92, accent: "#00ff87" },
    { name: "Python", category: "Language", level: 88, accent: "#00d4ff" },
    { name: "PostgreSQL", category: "Database", level: 80, accent: "#00ff87" },
    { name: "Flask", category: "Backend", level: 85, accent: "#00d4ff" },
    { name: "TypeScript", category: "Language", level: 78, accent: "#00ff87" },
    { name: "Tailwind CSS", category: "Design", level: 95, accent: "#00d4ff" },
    { name: "Git / GitHub", category: "Workflow", level: 90, accent: "#00ff87" },
    { name: "REST APIs", category: "Architecture", level: 87, accent: "#00d4ff" },
];

const tags = ["Frontend Engineering", "Backend Systems", "Database Design", "UI/UX Architecture", "API Integration", "DevOps Basics", "Performance Tuning", "Open Source"];

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
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#00ff87] opacity-70 block mb-4">_tech.stack</span>
                    <h3 className="font-display text-7xl md:text-[110px] tracking-wide leading-none">
                        LEARNING<span className="text-gradient"> LOGS</span>
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="h-[1px] w-20 bg-[#00ff87] opacity-50" />
                        <p className="font-mono text-sm text-[var(--text-muted)] uppercase tracking-[0.3em] italic">Tools I build & break things with</p>
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
                            background: "linear-gradient(135deg, #00ff87 0%, #00d4ff 100%)",
                        }}
                    >
                        <div className="absolute inset-0 opacity-10 dot-pattern pointer-events-none" />
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#080c10] opacity-70 block mb-4">Core Primary</span>
                                <h3 className="font-display text-5xl tracking-wide mb-4">React &amp; Next.js</h3>
                                <p className="text-base font-medium text-[#080c10] opacity-70 leading-relaxed">The backbone of my modern web development process. SSR, ISR, App Router — I speak it fluently.</p>
                            </div>
                            <div className="mt-8 flex items-center gap-2">
                                <div className="flex-1 h-2 rounded-full bg-[rgba(8,12,16,0.15)] overflow-hidden">
                                    <div className="h-full rounded-full bg-[#080c10]" style={{ width: "92%" }} />
                                </div>
                                <span className="font-mono text-sm font-bold text-[#080c10]">92%</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 border-[16px] border-[rgba(8,12,16,0.1)] rounded-full" />
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

                {/* Capability Tags Marquee */}
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
                                className="font-mono text-[10px] px-4 py-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] uppercase tracking-wider hover:border-[#00ff87] hover:text-[#00ff87] hover:bg-[rgba(0,255,135,0.05)] transition-all"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

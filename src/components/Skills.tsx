"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React / Next.js", category: "Core Stack", description: "Building high-performance, SEO-friendly web applications.", size: "large" },
    { name: "Python", category: "Language", description: "Scripting, automation, and backend logic.", size: "medium" },
    { name: "PostgreSQL", category: "Database", description: "Deep dive into relational data & optimization.", size: "small" },
    { name: "Flask", category: "Backend", description: "Lightweight backend solutions.", size: "small" },
    { name: "Tailwind CSS", category: "Design", description: "Modern, utility-first styling systems.", size: "medium" },
    { name: "JavaScript", category: "Language", description: "The foundation of all my web work.", size: "small" },
    { name: "Git / GitHub", category: "Workflow", description: "Version control & collaboration.", size: "small" },
    { name: "REST APIs", category: "Architecture", description: "Designing robust interfaces.", size: "medium" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-40 px-6 max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24"
            >
                <h2 className="text-8xl md:text-[150px] font-black text-outline tracking-tighter leading-none mb-10 uppercase select-none opacity-20">
                    STACK
                </h2>
                <p className="text-3xl text-white font-black tracking-tight max-w-xl">
                    A curated collection of tools I use to <span className="text-white/40 italic">build & break</span> things.
                </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 h-auto md:h-[1200px]">
                {/* Large Featured Card: Next.js */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 md:row-span-2 p-12 bg-white text-black rounded-[40px] flex flex-col justify-between group overflow-hidden relative"
                >
                    <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Core Primary</span>
                        <h3 className="text-6xl font-black mb-6 tracking-tighter">React & Next.js</h3>
                        <p className="text-lg font-bold leading-relaxed opacity-70">The backbone of my modern web development process.</p>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <div className="w-64 h-64 border-[30px] border-black rounded-full"></div>
                    </div>
                </motion.div>

                {/* Medium Card: Python */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 md:row-span-1 p-8 bg-zinc-900 border border-white/5 rounded-[40px] flex items-center justify-between group hover:border-white/20 transition-all"
                >
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 block">Scripting</span>
                        <h3 className="text-4xl font-black text-white">Python</h3>
                    </div>
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-4 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <code className="text-2xl font-black">py</code>
                    </div>
                </motion.div>

                {/* Small Cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 md:row-span-1 p-8 bg-black border border-white/10 rounded-[35px] hover:bg-zinc-900 transition-colors"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block">DB</span>
                    <h3 className="text-2xl font-black text-white">PostgreSQL</h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 md:row-span-1 p-8 bg-zinc-900/50 backdrop-blur-3xl border border-white/5 rounded-[35px] hover:border-white/20 transition-all"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block">Logic</span>
                    <h3 className="text-2xl font-black text-white">JavaScript</h3>
                </motion.div>

                {/* Medium Card: Design System */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 md:row-span-2 p-12 bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-[45px] relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)]"></div>
                    <div className="relative z-10 flex flex-col justify-end h-full">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 block">Design Engineering</span>
                        <h3 className="text-5xl font-black text-white mb-6">Tailwind CSS</h3>
                        <p className="text-white/40 font-medium max-w-xs leading-relaxed">Systematic styling for rapid, polished, and custom-feel interfaces.</p>
                    </div>
                </motion.div>

                {/* Vertical Medium: Backend */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 md:row-span-1 p-10 bg-white/5 rounded-[40px] flex items-center justify-between border border-white/5 hover:bg-white/10 transition-all"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/50">Flask</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/50">REST APIs</span>
                        </div>
                        <h3 className="text-4xl font-black text-white leading-none">Robust Backend Systems</h3>
                    </div>
                </motion.div>

                {/* Dark Workflow Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 md:row-span-1 p-8 border border-white/5 rounded-[35px] bg-zinc-900 flex flex-col justify-center gap-4 group hover:bg-white transition-all duration-500"
                >
                    <span className="text-3xl font-black text-white group-hover:text-black">Git & GitHub</span>
                </motion.div>

                {/* Final Contribution Grid Styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 md:row-span-1 bg-black rounded-[35px] border border-white/5 p-8 flex flex-col justify-between overflow-hidden relative"
                >
                    <div className="relative z-10">
                        <h4 className="text-lg font-black text-white text-center">Consistency</h4>
                    </div>
                    <div className="grid grid-cols-7 gap-1 opacity-20 hover:opacity-40 transition-opacity">
                        {Array.from({ length: 28 }).map((_, i) => (
                            <div key={i} className={`w-full aspect-square rounded-sm ${i % 3 === 0 ? 'bg-white' : 'bg-white/10'}`}></div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

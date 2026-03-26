"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { MapPin, Award, Code2, Globe2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <CustomCursor />
            <Navbar />

            {/* Hero Section of About Page */}
            <section className="relative pt-60 pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/[0.015] rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-32 relative"
                    >
                        <h1 className="text-[12vw] md:text-[200px] font-black text-outline tracking-tighter leading-none mb-4 absolute -top-40 -left-10 opacity-10 select-none uppercase">
                            ORIGIN
                        </h1>
                        <div className="relative z-10 pt-20">
                            <h2 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-none">
                                THE STORY<span className="text-outline">.</span>
                            </h2>
                            <div className="flex items-center gap-6 mt-8">
                                <div className="h-[2px] w-32 bg-white flex-shrink-0"></div>
                                <p className="text-xl md:text-2xl text-white/40 font-black uppercase tracking-[0.4em] italic leading-none whitespace-nowrap">Who is Madhup?</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline & Philosophy Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Biography column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="flex flex-col gap-16"
                        >
                            <div className="p-12 border border-white/5 rounded-[50px] bg-zinc-950/50 backdrop-blur-3xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-10 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                        <Code2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">The Developer</h3>
                                    <p className="text-xl text-white/50 leading-relaxed font-medium">
                                        My name is <span className="text-white font-bold">Madhup Kumar Yadav</span>. I am a Full Stack Developer currently pursuing a B.Tech in IT at Amity University, Noida. My journey into programming started with a fascination for how logic orchestrates the digital world around us.
                                    </p>
                                    <br />
                                    <p className="text-xl text-white/50 leading-relaxed font-medium">
                                        Today, I specialize in architecting scalable backend systems with Python and crafting highly immersive, interaction-rich frontend interfaces with React and Next.js.
                                    </p>
                                </div>
                            </div>

                            <div className="p-12 border border-white/5 rounded-[50px] bg-zinc-950/50 backdrop-blur-3xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-10 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">The Vision</h3>
                                    <p className="text-xl text-white/50 leading-relaxed font-medium">
                                        I believe that modern web applications should not just be functional; they should evoke an emotional response. By blending rigorous engineering practices with avant-garde design principles, <span className="text-white italic">I build digital experiences that are robust, accessible, and breathtakingly beautiful.</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Experience / Stats Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="flex flex-col gap-12"
                        >
                            <div className="flex flex-col gap-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 border-l-2 border-white/20 pl-4">/ Chronicle</span>
                                <h3 className="text-5xl font-black text-white tracking-tighter mb-4">Milestones</h3>
                            </div>

                            {/* Timeline Item 1 */}
                            <div className="relative pl-12 border-l border-white/10 py-4 group">
                                <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 bg-black border-2 border-white rounded-full group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40 block mb-2">2023 - Present</span>
                                <h4 className="text-2xl font-black text-white mb-2">Freelance Full Stack Engineer</h4>
                                <p className="text-lg text-white/50">Designing and developing end-to-end web applications, including comprehensive ERP systems and sleek business portfolios.</p>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative pl-12 border-l border-white/10 py-4 group">
                                <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 bg-black border-2 border-white rounded-full group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40 block mb-2">2022 - 2026</span>
                                <h4 className="text-2xl font-black text-white mb-2">B.Tech IT - Amity University</h4>
                                <p className="text-lg text-white/50">Immersed in computer science fundamentals, data structures, and advanced software engineering methodologies.</p>
                            </div>

                            {/* Core Philosophy Banner */}
                            <div className="mt-10 p-10 bg-white text-black rounded-[40px] shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-transform duration-500">
                                <Globe2 className="w-10 h-10 mb-6" />
                                <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">"Simplicity is the ultimate sophistication."</h4>
                                <p className="text-lg font-bold opacity-80">- My approach to building architectures.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Contact />
            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} Madhup Kumar Yadav. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}

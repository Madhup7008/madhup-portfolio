"use client";

import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, MapPin, Award } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative py-60 px-6 overflow-hidden bg-zinc-950">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                {/* Massive Architectural Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-40 relative"
                >
                    <h2 className="text-[12vw] md:text-[200px] font-black text-outline tracking-tighter leading-none mb-4 absolute -top-40 -left-10 opacity-5 select-none uppercase">
                        STORY
                    </h2>
                    <div className="relative z-10">
                        <h3 className="text-8xl md:text-[140px] font-black text-white tracking-tighter leading-none">
                            ABOUT<span className="text-outline">.</span>
                        </h3>
                        <div className="flex items-center gap-6 mt-8">
                            <div className="h-[2px] w-24 bg-white/20"></div>
                            <p className="text-xl md:text-2xl text-white/40 font-black uppercase tracking-[0.4em] italic leading-none">Engineering Experiences</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    {/* Left Side - Professional Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative group"
                    >
                        {/* Portrait Container with Glow */}
                        <div className="relative">
                            {/* Glow Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-[60px] blur-3xl group-hover:blur-[100px] transition-all duration-1000 opacity-0 group-hover:opacity-100"></div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-[60px] border border-white/10 group-hover:border-white/20 transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    src="/images/profile.jpg"
                                    alt="Madhup Kumar Yadav - Full Stack Developer"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                                {/* Info Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl"
                                >
                                    <h4 className="text-2xl font-black text-white mb-2">Madhup Kumar Yadav</h4>
                                    <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Full Stack Developer</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <MapPin className="w-4 h-4 text-white/40" />
                                        <span className="text-white/40 text-xs font-bold">India</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - The Persona */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 relative group p-14 bg-white/[0.02] border border-white/5 rounded-[60px] shadow-2xl backdrop-blur-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-white text-black rounded-3xl flex items-center justify-center mb-10 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                                <Award className="w-10 h-10" />
                            </div>

                            <h3 className="text-5xl font-black mb-8 tracking-tighter leading-tight text-white">
                                Madhup Kumar <br />Yadav
                            </h3>

                            <p className="text-2xl text-white/40 font-medium leading-relaxed mb-12 tracking-tight">
                                Pursuing <span className="text-white font-bold">B.Tech in IT</span> at Amity University, Noida. Bridging the gap between <span className="text-white italic">logic</span> and <span className="text-white italic">aesthetics</span>.
                            </p>

                            <div className="flex flex-col gap-6 mb-16">
                                <div className="flex items-center gap-5 text-white/30 group/item">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover/item:bg-white/10 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.3em]">Noida, India // UTC+5:30</span>
                                </div>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[11px] overflow-hidden transition-all hover:scale-[1.05]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Connect on Auth <ExternalLink className="w-4 h-4" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - The Narrative (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-24 pt-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 border-l border-white/10 pl-4">/ Philosophy</span>
                            <p className="text-3xl md:text-4xl text-white/60 font-medium leading-[1.4] tracking-tight">
                                Delivering <span className="text-white">high-fidelity</span> user interfaces powered by <span className="text-white">scalable architectures</span>. My mission is to build digital artifacts that are as robust as they're beautiful.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-16">
                            {[
                                { title: "Specialization", content: "Frontend engineering with a focus on React, Next.js, and modern CSS architectures." },
                                { title: "Current Focus", content: "Exploring the intersections of 3D web experiences and accessible interface design." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 border border-white/5 rounded-[40px] hover:bg-white/[0.01] transition-colors"
                                >
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-6">{item.title}</h4>
                                    <p className="text-lg text-white/40 font-medium leading-relaxed">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Background3D from "./Background3D";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-[200px] md:pt-[240px] pb-20 px-6 overflow-hidden bg-zinc-950">
            {/* 3D Background Ribbon */}
            <Background3D />

            <div className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center">
                {/* Massive Level Displays */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="mb-12"
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-[160px] font-black leading-[0.85] tracking-tighter select-none mb-4"
                    >
                        <span className="text-outline block">DEVELOPING</span>
                        <span className="text-outline block">FULL STACK</span>
                        <span className="text-white block mt-2">SOLUTIONS</span>
                    </motion.h1>
                </motion.div>

                {/* Professional Description */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl px-4"
                >
                    <p className="text-2xl md:text-3xl text-white/30 font-light leading-relaxed mb-16 tracking-tight">
                        I engineer <span className="text-white font-medium italic">high-performance</span> digital products
                        where architectural precision meets <span className="text-white font-medium italic">pixel-perfect</span> execution.
                    </p>

                    {/* Action Hub */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <a
                            href="#contact"
                            className="group relative px-12 py-5 bg-white text-black font-black text-sm uppercase tracking-[0.3em] rounded-full transition-all duration-500 hover:scale-[1.05] active:scale-[0.95] hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
                        >
                            Start Project
                        </a>
                        <a
                            href="#projects"
                            className="group px-12 py-5 border border-white/10 text-white font-black text-sm uppercase tracking-[0.3em] rounded-full transition-all duration-500 hover:bg-white hover:text-black hover:border-white"
                        >
                            View Index
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator - minimal like Gabe's */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
            >
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
}

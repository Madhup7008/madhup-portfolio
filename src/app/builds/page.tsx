"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

export default function BuildsPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />

            <div className="pt-40">
                {/* Hero Section of Builds Page */}
                <section className="relative px-6">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-6 block">/ ARCHIVES</span>
                            <h1 className="text-6xl md:text-[100px] font-black text-white tracking-tighter leading-none mb-6">
                                THE BUILDS<span className="text-outline">.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-white/50 max-w-2xl mx-auto font-medium">Selected works demonstrating frontend finesse and backend robustness.</p>
                        </motion.div>
                    </div>
                </section>

                <Projects />
            </div>

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

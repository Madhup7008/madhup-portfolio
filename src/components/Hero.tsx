"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Background3D from "./Background3D";

const ROLES = ["Full Stack Developer", "Systems Architect", "UI Craftsman", "Open Source Builder"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    /* Mouse parallax tracking */
    const containerRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

    // Amplified 3D rotations for profound depth
    const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
    const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
    const translateX = useTransform(smoothX, [-1, 1], [-15, 15]);
    const translateY = useTransform(smoothY, [-1, 1], [-15, 15]);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            mouseX.set((e.clientX / w - 0.5) * 2);
            mouseY.set((e.clientY / h - 0.5) * 2);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [mouseX, mouseY]);

    /* Typewriter */
    useEffect(() => {
        const current = ROLES[roleIndex];
        const speed = isDeleting ? 40 : 80;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, displayText.length + 1));
                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(current.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((i) => (i + 1) % ROLES.length);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-start pt-[180px] md:pt-[200px] pb-20 px-6 overflow-hidden grid-pattern"
        >
            {/* Radial ambient gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,135,0.09)_0%,transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(0,212,255,0.06)_0%,transparent_60%)] pointer-events-none" />

            {/* 3D Background */}
            <Background3D />

            {/* ── Fixed corner HUD elements ────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                className="absolute top-28 left-6 hidden lg:flex flex-col gap-1 pointer-events-none z-20"
            >
                <span className="font-mono text-[8px] text-[#00ff87] opacity-40 tracking-[0.3em]">VIEWPORT</span>
                <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[0.2em]">LAT: 28.6°N</span>
                <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[0.2em]">LNG: 77.4°E</span>
                <div className="w-16 h-[1px] bg-[rgba(0,255,135,0.2)] mt-2" />
                <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[0.2em]">IND · UTC+5:30</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                className="absolute top-28 right-6 hidden lg:flex flex-col items-end gap-1 pointer-events-none z-20"
            >
                <span className="font-mono text-[8px] text-[#00ff87] opacity-40 tracking-[0.3em]">STATUS</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
                    <span className="font-mono text-[8px] text-[#00ff87] opacity-70 tracking-[0.2em]">ONLINE</span>
                </div>
                <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[0.2em]">SYS_V 4.2.1</span>
                <div className="w-16 h-[1px] bg-[rgba(0,255,135,0.2)] mt-2" />
                <span className="font-mono text-[8px] text-[var(--text-muted)] tracking-[0.2em]">AVAIL FOR WORK</span>
            </motion.div>

            {/* ── Main Content — parallax wrapper ──────────────────────── */}
            <motion.div
                className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center"
                style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(0,255,135,0.2)] bg-[rgba(0,255,135,0.04)] mb-10"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#00ff87] opacity-75">
                        Available for new projects
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgba(0,255,135,0.3)]" />
                </motion.div>

                {/* Main headline with per-word parallax depth */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-4 relative"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Deep Background 3D Ghost */}
                    <div className="absolute inset-0 select-none pointer-events-none" aria-hidden
                        style={{ transform: "translateZ(-120px)" }}>
                        <span
                            className="font-display block leading-[0.88] tracking-wide"
                            style={{
                                fontSize: "clamp(4rem, 13vw, 12rem)",
                                color: "transparent",
                                WebkitTextStroke: "2px rgba(0,255,135,0.08)",
                                textShadow: "0 0 40px rgba(0,255,135,0.1)",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                            }}
                        >
                            MADHUP<br />KUMAR<br />YADAV
                        </span>
                    </div>

                    <h1 className="font-display leading-[0.88] tracking-wide select-none relative"
                        style={{ fontSize: "clamp(4rem, 13vw, 12rem)", transformStyle: "preserve-3d" }}>

                        {/* MADHUP - Extrusion styling */}
                        <motion.span
                            className="block"
                            style={{
                                x: translateX,
                                y: translateY,
                                z: useTransform(smoothX, [-1, 1], [-30, 0]),
                                color: "#e2edf5",
                                textShadow: "1px 1px 0 #080c10, 2px 2px 0 #005040, 3px 3px 0 #005040, 4px 4px 0 #00ff87, 5px 5px 0 #00ff87, 8px 8px 20px rgba(0,0,0,0.8)"
                            }}
                        >
                            MADHUP
                        </motion.span>

                        {/* KUMAR - Massive z-pop forward */}
                        <motion.span
                            className="block"
                            style={{
                                color: "#00ff87", // Solid neon for better 3D readability
                                x: useTransform(smoothX, [-1, 1], [-10, 10]),
                                z: useTransform(smoothY, [-1, 1], [40, 90]), // Popping out of screen
                                textShadow: "1px 1px 0 #080c10, 2px 2px 0 #005040, 3px 3px 0 #00d4ff, 4px 4px 0 #00d4ff, 5px 5px 0 #00d4ff, 10px 10px 30px rgba(0,255,135,0.5)",
                                WebkitTextStroke: "1px #ffffff"
                            }}
                        >
                            KUMAR
                        </motion.span>

                        {/* YADAV - Deep block shadow */}
                        <motion.span
                            className="block relative"
                            style={{
                                color: "#e2edf5",
                                x: useTransform(smoothX, [-1, 1], [15, -15]),
                                y: useTransform(smoothY, [-1, 1], [-5, 5]),
                                z: 50,
                                textShadow: "1px 1px 0 #080c10, 2px 2px 0 #3a1c71, 3px 3px 0 #7c3aed, 4px 4px 0 #7c3aed, 5px 5px 0 #7c3aed, 6px 6px 0 #7c3aed, 12px 12px 40px rgba(0,0,0,0.9)"
                            }}
                        >
                            YADAV
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Typewriter role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8 h-9 flex items-center justify-center gap-3"
                >
                    {/* left bracket decoration */}
                    <span className="font-mono text-[#00ff87] opacity-30 text-2xl hidden md:block">[</span>
                    <span className="font-mono text-lg md:text-xl text-[#00ff87] tracking-widest">
                        {displayText}
                        <span className="animate-blink">_</span>
                    </span>
                    <span className="font-mono text-[#00ff87] opacity-30 text-2xl hidden md:block">]</span>
                </motion.div>

                {/* Sub-description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    className="max-w-xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-12"
                >
                    I engineer{" "}
                    <span className="text-[var(--text-primary)] font-semibold">high-performance</span>{" "}
                    digital systems where architectural precision meets{" "}
                    <span className="text-[var(--text-primary)] font-semibold">pixel-perfect</span>{" "}
                    execution.{" "}
                    <span className="text-[#00ff87] font-mono text-sm opacity-70">// Based in India</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="btn-primary px-10 py-4 rounded-xl text-sm group relative overflow-hidden">
                        <span className="relative z-10">↳ Start a Project</span>
                    </a>
                    <a href="/builds" className="btn-ghost px-10 py-4 rounded-xl text-sm">
                        /view builds
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="mt-20 grid grid-cols-3 gap-10 md:gap-24 border-t border-[var(--border-subtle)] pt-8 w-full max-w-lg"
                >
                    {[
                        { label: "Side Projects", value: "10+" },
                        { label: "Years Building", value: "3+" },
                        { label: "Stack Expertise", value: "Full" },
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5">
                            <span className="font-display text-3xl md:text-4xl text-[var(--text-primary)]">{s.value}</span>
                            <span className="font-mono text-[8px] tracking-widest uppercase text-[var(--text-muted)]">{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Side vertical text (left) */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
                className="absolute left-8 bottom-32 hidden xl:block pointer-events-none z-20"
            >
                <div
                    className="font-mono text-[9px] tracking-[0.4em] uppercase text-[var(--text-muted)] opacity-50"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                    MKY · FULLSTACK · 2024
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[var(--text-muted)]">scroll</span>
                    <motion.div
                        animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] h-10 bg-gradient-to-b from-[#00ff87] to-transparent origin-top"
                    />
                </div>
            </motion.div>
        </section>
    );
}

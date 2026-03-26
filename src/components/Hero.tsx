"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";

const ROLES = ["Full Stack Developer", "Frontend Engineer", "Backend Engineer", "Product Builder"];

/* ═══════════════════════════════════════════════════════════════
    CODE STREAM BACKDROP — Canvas-based vertical streaming
   ═══════════════════════════════════════════════════════════════ */

const CODE_CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|=+-*&^%$#@!?;:0123456789";
const TECH_WORDS = [
    "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Flask",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "REST", "GraphQL", "Tailwind CSS",
    "127.0.0.1", "0.0.0.0:3000", "localhost", ":3000", ":8080", "HTTP/3",
    "CI/CD", "Unit Tests", "Code Review", "Clean Architecture", "Design Systems",
    "$ npm run dev", "pnpm build", "git commit", "docker compose up", "SELECT *",
    "const app =", "export default", "async fetch()", "class Service:", "def main():",
    "C++", "Rust", "Go", "Bash", "Java", "DNS", "CDN", "WebSocket",
    "Vercel", "Netlify", "Supabase", "Prisma", "Figma", "Analytics",
    "import os", "return response;", "const config =", "socket.connect()",
];

function CodeStreamBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);

    const initRain = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const fontSize = 14;
        const cols = Math.floor(canvas.width / fontSize);
        const drops: number[] = new Array(cols).fill(0).map(() => Math.random() * -100);
        const speeds: number[] = new Array(cols).fill(0).map(() => 0.08 + Math.random() * 0.22);
        const brightCols = new Set<number>();
        // Randomly pick ~15% of columns to be brighter (featured)
        for (let i = 0; i < cols; i++) {
            if (Math.random() < 0.15) brightCols.add(i);
        }

        // Floating tech-word overlays
        const floaters: { text: string; x: number; y: number; speed: number; opacity: number }[] = [];
        for (let i = 0; i < 30; i++) {
            floaters.push({
                text: TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)],
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: 0.08 + Math.random() * 0.2,
                opacity: 0.06 + Math.random() * 0.12,
            });
        }

        const draw = () => {
            // Fade trail effect
            ctx.fillStyle = "rgba(5, 5, 5, 0.06)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                if (brightCols.has(i)) {
                    // Bright red column — head character is white, body is red
                    const headY = y;
                    // Head glow
                    ctx.shadowColor = "#ff0040";
                    ctx.shadowBlur = 8;
                    ctx.fillStyle = "#ffffff";
                    ctx.fillText(char, x, headY);
                    ctx.shadowBlur = 0;

                    // Trail chars in varying red
                    for (let t = 1; t < 6; t++) {
                        const trailOpacity = Math.max(0.05, 0.4 - t * 0.07);
                        ctx.fillStyle = `rgba(255, 0, 64, ${trailOpacity})`;
                        const tc = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
                        ctx.fillText(tc, x, headY - t * fontSize);
                    }
                } else {
                    // Normal dim columns
                    const opacity = 0.03 + Math.random() * 0.08;
                    ctx.fillStyle = `rgba(255, 0, 64, ${opacity})`;
                    ctx.fillText(char, x, y);
                }

                drops[i] += speeds[i];
                if (y > canvas.height + 50) {
                    drops[i] = Math.random() * -20;
                    speeds[i] = 0.08 + Math.random() * 0.22;
                }
            }

            // Draw floating tech words
            for (const f of floaters) {
                ctx.font = `${11 + Math.random() * 3}px 'JetBrains Mono', monospace`;
                const isRed = Math.random() < 0.3;
                ctx.fillStyle = isRed
                    ? `rgba(255, 0, 64, ${f.opacity})`
                    : `rgba(232, 232, 232, ${f.opacity * 0.6})`;
                ctx.fillText(f.text, f.x, f.y);

                f.y += f.speed;
                if (f.y > canvas.height + 20) {
                    f.y = -20;
                    f.x = Math.random() * canvas.width;
                    f.text = TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animRef.current);
        };
    }, []);

    useEffect(() => {
        const cleanup = initRain();
        return cleanup;
    }, [initRain]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
}

/* ═══════════════════════════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[roleIndex];
        const speed = isDeleting ? 40 : 80;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, displayText.length + 1));
                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated code stream background */}
            <CodeStreamBackground />

            {/* Gradient overlays on top of rain */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,0,64,0.12)_0%,transparent_60%)] pointer-events-none z-[2]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(255,45,45,0.06)_0%,transparent_50%)] pointer-events-none z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/80 pointer-events-none z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/40 pointer-events-none z-[2]" />

            {/* ── Content — centered layout ──────────────────────────── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
                    className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-[rgba(255,0,64,0.15)] bg-[rgba(255,0,64,0.04)] backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#ff0040] animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#ff0040]">
                        Open to Work
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.92] tracking-tight mb-6"
                >
                    <span className="text-[var(--text-primary)]">Madhup</span>
                    <br />
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #ff0040 0%, #ff2d2d 50%, #ff0040 100%)",
                        }}
                    >
                        Kumar Yadav
                    </span>
                </motion.h1>

                {/* Role typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-6 h-8"
                >
                    <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#ff0040]" />
                    <span className="font-mono text-sm md:text-base text-[var(--text-secondary)] tracking-[0.15em]">
                        {displayText}
                        <span className="text-[#ff0040] animate-blink">|</span>
                    </span>
                    <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#ff0040]" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1, ease: "easeOut" as const }}
                    className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-10"
                >
                    I build <span className="text-[var(--text-primary)] font-medium">high-performance, user-focused</span> digital
                    products across frontend and backend stacks.{" "}
                    <span className="text-[var(--text-primary)] font-medium">From idea to deployment, I ship with quality and speed.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" as const }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                >
                    <a href="#contact" className="btn-primary px-10 py-4 rounded-xl text-sm">
                        Get in Touch
                    </a>
                    <a href="/builds" className="btn-ghost px-10 py-4 rounded-xl text-sm">
                        View Projects
                    </a>
                    <a
                        href="/resume"
                        className="btn-ghost px-10 py-4 rounded-xl text-sm border-[rgba(255,45,45,0.15)] text-[#ff2d2d] hover:border-[#ff2d2d] hover:bg-[rgba(255,45,45,0.06)]"
                    >
                        Resume ↗
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" as const }}
                    className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-xl"
                >
                    {[
                        { value: "10+", label: "Projects Built" },
                        { value: "4+", label: "Years Coding" },
                        { value: "50+", label: "Features Shipped" },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-1.5 py-5 rounded-xl border border-[var(--border-subtle)] bg-[rgba(10,10,10,0.5)] backdrop-blur-sm"
                        >
                            <span className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">{s.value}</span>
                            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--text-muted)]">{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="flex items-center gap-6 mt-10"
                >
                    {[
                        { label: "GitHub", href: "https://github.com/Madhup7008" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/" },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-[#ff0040] transition-colors duration-300 border-b border-transparent hover:border-[#ff0040]"
                        >
                            {s.label} ↗
                        </a>
                    ))}
                    <span className="text-[var(--text-muted)] text-[10px]">·</span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">India · UTC+5:30</span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[var(--text-muted)]">scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-[#ff0040] to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}

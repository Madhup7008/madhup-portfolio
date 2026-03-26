"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail, Twitter, ChevronDown, Code2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Builds", href: "/builds" },
    { name: "Learn", href: "/learn" },
];

const connectLinks = [
    { name: "GitHub", href: "https://github.com/Madhup7008", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Resume", href: "/resume", icon: FileText },
    { name: "Contact Me", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [connectOpen, setConnectOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 pointer-events-none ${scrolled ? "py-3" : "py-8"}`}>
            <nav
                className={`max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto transition-all duration-700 ${scrolled
                    ? "bg-[rgba(9,20,38,0.88)] border border-[rgba(106,175,255,0.22)] rounded-3xl px-10 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(34,211,238,0.1)] backdrop-blur-2xl"
                    : "bg-transparent border border-transparent rounded-3xl px-12 py-6"
                    }`}
            >
                {/* Brand */}
                <Link href="/" className="relative group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#22d3ee,#3b82f6)] flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.32)]">
                        <Code2 className="w-5 h-5 text-[#071122]" />
                    </div>
                    <span className="font-mono text-lg font-bold text-[var(--text-primary)] tracking-wider">
                        MKY<span className="text-[var(--accent-primary)]">.</span><span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] ml-1 hidden sm:inline">DEV</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-14">
                    <div className="flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 relative group"
                            >
                                <span className="text-[var(--accent-primary)] opacity-50 mr-1.5">/</span>
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-primary)] transition-all duration-500 group-hover:w-full opacity-60" />
                            </Link>
                        ))}
                    </div>

                    <div className="h-4 w-[1px] bg-[var(--border-subtle)]" />

                    {/* Connect Dropdown */}
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setConnectOpen(!connectOpen)}
                            className="flex items-center gap-3 px-8 py-3.5 bg-[linear-gradient(135deg,#22d3ee,#3b82f6)] text-[#071122] rounded-2xl font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.36)]"
                        >
                            Connect
                            <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${connectOpen ? "rotate-180" : ""}`} />
                        </motion.button>

                        <AnimatePresence>
                            {connectOpen && (
                                <>
                                    <div className="fixed inset-0 z-[-1]" onClick={() => setConnectOpen(false)} />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute right-0 mt-4 w-64 bg-[rgba(12,22,41,0.95)] backdrop-blur-3xl border border-[var(--border-subtle)] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(34,211,238,0.08)] overflow-hidden p-3"
                                    >
                                        {connectLinks.map((social) => {
                                            const Icon = social.icon;
                                            return (
                                                <a
                                                    key={social.name}
                                                    href={social.href}
                                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="flex items-center gap-4 px-5 py-4 text-[var(--text-secondary)] hover:bg-[rgba(34,211,238,0.08)] hover:text-[var(--accent-primary)] transition-all group rounded-2xl"
                                                    onClick={() => setConnectOpen(false)}
                                                >
                                                    <Icon className="w-5 h-5 transition-colors" />
                                                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em]">{social.name}</span>
                                                </a>
                                            );
                                        })}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-4 top-24 bg-[rgba(12,22,41,0.96)] backdrop-blur-3xl md:hidden z-[100] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex flex-col p-8 gap-8">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="font-mono text-3xl font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors tracking-tight"
                                    >
                                        <span className="text-[var(--accent-primary)] opacity-40 mr-2">/</span>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="h-[1px] bg-[var(--border-subtle)]" />
                            <div className="grid grid-cols-2 gap-3">
                                {connectLinks.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-3 p-4 border border-[var(--border-subtle)] rounded-2xl hover:bg-[rgba(34,211,238,0.08)] hover:border-[var(--border-medium)] transition-all"
                                    >
                                        <s.icon className="w-4 h-4 text-[var(--accent-primary)]" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{s.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

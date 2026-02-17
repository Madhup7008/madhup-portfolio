"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail, Twitter, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Builds", href: "#projects" },
    { name: "Learn", href: "#skills" },
];

const connectLinks = [
    { name: "GitHub", href: "https://github.com/Madhup7008", icon: Github },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/",
        icon: Linkedin,
    },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Contact Me", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [connectOpen, setConnectOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 pointer-events-none ${scrolled ? 'py-4' : 'py-10'}`}>
            <nav className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto backdrop-blur-3xl border transition-all duration-1000 ${scrolled ? 'bg-black/80 border-white/10 rounded-full px-10 py-3.5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]' : 'bg-white/[0.02] border-white/[0.05] rounded-full px-12 py-5'}`}>
                {/* Brand Logo */}
                <Link href="/" className="relative group">
                    <span className="text-3xl font-black text-white transition-all duration-500 tracking-tighter hover:tracking-wiest">
                        MKY<span className="text-white/20">.</span>
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 opacity-50"></div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-14">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/40 hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.5em] relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-700 ease-out group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-5 w-[1px] bg-white/10"></div>

                    {/* Connect Dropdown Button */}
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setConnectOpen(!connectOpen)}
                            className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                        >
                            Connect
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-700 ${connectOpen ? 'rotate-180' : ''}`} />
                        </motion.button>

                        <AnimatePresence>
                            {connectOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-[-1]"
                                        onClick={() => setConnectOpen(false)}
                                    ></div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute right-0 mt-6 w-64 bg-zinc-900/90 backdrop-blur-3xl border border-white/10 rounded-[28px] shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden p-2"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {connectLinks.map((social) => {
                                                const Icon = social.icon;
                                                return (
                                                    <a
                                                        key={social.name}
                                                        href={social.href}
                                                        target={social.href.startsWith("http") ? "_blank" : undefined}
                                                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                        className="flex items-center gap-4 px-5 py-4 text-white/40 hover:bg-white hover:text-black transition-all group rounded-[20px]"
                                                        onClick={() => setConnectOpen(false)}
                                                    >
                                                        <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-transparent transition-all">
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{social.name}</span>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-white/40 hover:text-white transition-colors"
                >
                    {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-6 top-28 bg-zinc-900/95 backdrop-blur-3xl md:hidden z-[100] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-10 gap-10">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-6xl font-black text-outline hover:text-white transition-all tracking-tighter"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <div className="h-[1px] bg-white/10"></div>
                            <div className="grid grid-cols-2 gap-4">
                                {connectLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex flex-col items-center gap-4 p-8 border border-white/5 rounded-[24px] hover:bg-white/10 transition-colors"
                                    >
                                        <social.icon className="w-7 h-7" />
                                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30">{social.name}</span>
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

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, X, Mail, Linkedin, FileText } from "lucide-react";

export default function HireMeCTA() {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!dismissed) setVisible(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, [dismissed]);

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDismissed(true);
        setVisible(false);
        setExpanded(false);
    };

    const quickLinks = [
        {
            label: "Email Me",
            href: "mailto:madhupyadav1809@gmail.com",
            icon: Mail,
            color: "#ff0040",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/",
            icon: Linkedin,
            color: "#ff2d2d",
        },
        {
            label: "View Resume",
            href: "/resume",
            icon: FileText,
            color: "#cc0022",
        },
    ];

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="fixed bottom-8 right-6 z-[200] flex flex-col items-end gap-3"
                >
                    {/* Expanded quick-links */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="flex flex-col gap-2"
                            >
                                {quickLinks.map((link, i) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                            className="flex items-center gap-3 pr-4 pl-3 py-2.5 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(5,5,5,0.92)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] group hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 self-end"
                                            style={{ minWidth: "160px" }}
                                        >
                                            <div
                                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ background: `${link.color}22` }}
                                            >
                                                <Icon className="w-3.5 h-3.5" style={{ color: link.color }} />
                                            </div>
                                            <span
                                                className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] group-hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main pill button */}
                    <div className="relative flex items-center gap-2">
                        {/* Dismiss X */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleDismiss}
                            className="w-6 h-6 rounded-full bg-[rgba(8,12,16,0.8)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-red-500/40 transition-all"
                            title="Dismiss"
                        >
                            <X className="w-3 h-3" />
                        </motion.button>

                        {/* The CTA pill */}
                        <motion.button
                            onClick={() => setExpanded(!expanded)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_30px_rgba(255,0,64,0.35),0_8px_24px_rgba(0,0,0,0.4)]"
                            style={{
                                background: "linear-gradient(135deg, #ff0040 0%, #ff2d2d 100%)",
                            }}
                        >
                            {/* Shimmer */}
                            <motion.div
                                className="absolute inset-0 opacity-30"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                                    width: "60%",
                                }}
                            />
                            {/* Pulsing dot */}
                            <span className="relative w-2 h-2 rounded-full bg-[#050505] flex-shrink-0">
                                <span className="absolute inset-0 rounded-full bg-[#050505] animate-ping opacity-75" />
                            </span>
                            <span className="relative">Hire Me</span>
                            <Zap className="relative w-3.5 h-3.5" />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

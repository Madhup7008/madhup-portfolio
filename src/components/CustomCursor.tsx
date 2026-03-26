"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);
    const [touchDevice, setTouchDevice] = useState(false);

    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setTouchDevice(isTouch);
        if (isTouch) return;

        const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        const onOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setHovering(Boolean(target.closest("a, button, input, textarea, select")));
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseover", onOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
        };
    }, []);

    if (touchDevice) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-[var(--accent-primary)] pointer-events-none"
                animate={{ x: pos.x - 4, y: pos.y - 4 }}
                transition={{ type: "spring", stiffness: 700, damping: 35, mass: 0.25 }}
            />
            <motion.div
                className="fixed top-0 left-0 z-[9998] border border-[var(--accent-secondary)] rounded-full pointer-events-none"
                animate={{
                    x: pos.x - (hovering ? 22 : 16),
                    y: pos.y - (hovering ? 22 : 16),
                    width: hovering ? 44 : 32,
                    height: hovering ? 44 : 32,
                    opacity: hovering ? 0.75 : 0.45,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
            />
        </>
    );
}

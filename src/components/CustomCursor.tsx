"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.style.cursor === 'pointer' ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scale: isClicking ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                    className="w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
            </motion.div>

            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                        opacity: isHovering ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-8 h-8 border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2"
                />
            </motion.div>

            {/* Crosshair Lines - Horizontal */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scaleX: isHovering ? 1 : 0,
                        opacity: isHovering ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-[1px] w-8 bg-white -translate-x-1/2 -translate-y-1/2"
                />
            </motion.div>

            {/* Crosshair Lines - Vertical */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scaleY: isHovering ? 1 : 0,
                        opacity: isHovering ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-[1px] h-8 bg-white -translate-x-1/2 -translate-y-1/2"
                />
            </motion.div>

            {/* Subtle Glow */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9996]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1 : 0.8,
                        opacity: isHovering ? 0.15 : 0.08,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-[40px]"
                />
            </motion.div>
        </>
    );
}

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type CursorState = "default" | "hover" | "click";

export default function CustomCursor() {
    const [state, setState] = useState<CursorState>("default");
    const [hoverLabel, setHoverLabel] = useState("");
    const [visible, setVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Exact raw position (no spring, for perfect targeting)
    const rawX = useMotionValue(-400);
    const rawY = useMotionValue(-400);

    // Offset by 1px so the SVG tip (at 1,1) aligns exactly with the real mouse pixel
    const offsetX = useTransform(rawX, (x) => x - 1);
    const offsetY = useTransform(rawY, (y) => y - 1);

    // Smoothed position for the ambient background glow trail
    const smoothX = useSpring(rawX, { damping: 40, stiffness: 100, mass: 1 });
    const smoothY = useSpring(rawY, { damping: 40, stiffness: 100, mass: 1 });

    // Velocity tracking for the 3D tilt
    const velX = useRef(0);
    const velY = useRef(0);
    const prevX = useRef(-400);
    const prevY = useRef(-400);

    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const smoothTiltX = useSpring(tiltX, { damping: 20, stiffness: 150 });
    const smoothTiltY = useSpring(tiltY, { damping: 20, stiffness: 150 });

    // Rotate the arrow container so it tilts dynamically based on velocity
    const rotateX3D = useTransform(smoothTiltY, [-25, 25], [-45, 45]);
    const rotateY3D = useTransform(smoothTiltX, [-25, 25], [45, -45]);

    // Z-depth for holographic 3D layers based on hover state
    const depthZ1 = state === "hover" ? -30 : -10;
    const depthZ2 = state === "hover" ? -60 : -20;

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        velX.current = x - prevX.current;
        velY.current = y - prevY.current;
        prevX.current = x;
        prevY.current = y;

        // Clamp the tilt strictly to prevent extreme spinning
        const maxTilt = 25;
        tiltX.set(Math.max(-maxTilt, Math.min(maxTilt, velX.current * 0.9)));
        tiltY.set(Math.max(-maxTilt, Math.min(maxTilt, velY.current * 0.9)));

        rawX.set(x);
        rawY.set(y);
        if (!visible) setVisible(true);
    }, [rawX, rawY, tiltX, tiltY, visible]);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a");
        const button = target.closest("button");

        if (link || button) {
            setState("hover");
            setHoverLabel(
                link?.dataset.label ||
                button?.dataset.label ||
                link?.textContent?.trim().toUpperCase().slice(0, 12) ||
                "INTERACT"
            );
        } else {
            setState("default");
            setHoverLabel("");
        }
    }, []);

    useEffect(() => {
        const onDown = () => setState("click");
        const onUp = () => setState(hoverLabel ? "hover" : "default");
        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        // Detect touch devices
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) {
            setIsTouchDevice(true);
            return;
        }

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mouseenter", onEnter);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
        };
    }, [handleMouseMove, handleMouseOver, hoverLabel]);

    const isHover = state === "hover";
    const isClick = state === "click";

    // Don't render on touch devices
    if (isTouchDevice) return null;

    // Polygon coordinates shifted by 1px so the stroke isn't clipped
    const ARROW_POINTS = "1,1 1,23 7,17 11,27 15,25 11,15 21,15";

    return (
        <div aria-hidden className="select-none pointer-events-none">
            {/* ── Layer 0: Ambient Dream Glow Trail ── */}
            <motion.div
                className="fixed top-0 left-0 z-[9985] pointer-events-none"
                style={{ x: smoothX, y: smoothY }}
            >
                <motion.div
                    animate={{
                        width: isHover ? 220 : 120,
                        height: isHover ? 220 : 120,
                        opacity: visible ? (isHover ? 0.25 : 0.12) : 0
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        transform: "translate(-50%, -50%)",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, #ff0040 0%, rgba(255,45,45,0.4) 40%, transparent 70%)",
                        filter: "blur(24px)",
                    }}
                />
            </motion.div>

            {/* ── Layer 1: 3D Holographic Wireframe Arrow ── */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
                style={{
                    x: offsetX,
                    y: offsetY,
                    perspective: "1000px" // Creates the 3D space depth tracking
                }}
            >
                <motion.div
                    style={{
                        position: "relative",
                        transformStyle: "preserve-3d",
                        transformOrigin: "1px 1px", // Anchor the 3D tilt exactly at the tip of the arrow
                        rotateX: rotateX3D,
                        rotateY: rotateY3D,
                    }}
                    animate={{ scale: isClick ? 0.85 : isHover ? 1.25 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Z-Depth Layer 3: Farthest back (Cyan outline) */}
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        animate={{ z: depthZ2, opacity: visible ? (isHover ? 0.5 : 0.15) : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <svg width="32" height="32" style={{ filter: "drop-shadow(0 0 4px #ff2d2d)" }}>
                            <polygon points={ARROW_POINTS} fill="rgba(255,45,45,0.02)" stroke="#ff2d2d" strokeWidth="1.2" strokeLinejoin="miter" />
                        </svg>
                    </motion.div>

                    {/* Z-Depth Layer 2: Middle offset (Emerald outline) */}
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        animate={{ z: depthZ1, opacity: visible ? (isHover ? 0.7 : 0.4) : 0 }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    >
                        <svg width="32" height="32" style={{ filter: "drop-shadow(0 0 6px rgba(255,0,64,0.6))" }}>
                            <polygon points={ARROW_POINTS} fill="rgba(255,0,64,0.05)" stroke="#ff0040" strokeWidth="1.5" strokeLinejoin="miter" />
                        </svg>
                    </motion.div>

                    {/* Z-Depth Layer 1: Top face (Bright White primary cursor matching the reference photo) */}
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        animate={{ opacity: visible ? 1 : 0 }}
                    >
                        <svg width="32" height="32" style={{ filter: "drop-shadow(0px 6px 10px rgba(0,0,0,0.6))" }}>
                            <polygon
                                points={ARROW_POINTS}
                                fill="rgba(5,5,5,0.2)" // Barely visible internal dark glass, allows back layers to peek through
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinejoin="miter"
                            />
                        </svg>
                    </motion.div>

                </motion.div>

                {/* HUD Data Output */}
                <motion.div
                    animate={{
                        opacity: visible ? (isHover ? 1 : 0.6) : 0,
                        y: isHover ? 8 : 4,
                        x: isHover ? 24 : 16
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "absolute",
                        top: "28px",
                        left: "20px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        color: isHover ? "#ff0040" : "#ff2d2d",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        textShadow: isHover ? "0 0 10px rgba(255,0,64,0.6)" : "none",
                        pointerEvents: "none"
                    }}
                >
                    {isHover ? `[ ${hoverLabel} ]` : "MKY_OS v4"}
                </motion.div>
            </motion.div>
        </div>
    );
}

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── Floating Particle Field ──────────────────────────────────────── */
function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null!);

    const { positions, colors } = useMemo(() => {
        const count = 600;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const emerald = new THREE.Color("#00ff87");
        const cyan = new THREE.Color("#00d4ff");
        const white = new THREE.Color("#ffffff");

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

            const pick = Math.random();
            const c = pick < 0.4 ? emerald : pick < 0.7 ? cyan : white;
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.018;
            pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.08;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.25}
                vertexColors
                transparent
                opacity={0.65}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

/* ─── Mouse-Reactive Orb ────────────────────────────────────────────── */
function MouseOrb() {
    const orbRef = useRef<THREE.Mesh>(null!);
    const { pointer } = useThree();

    useFrame((state) => {
        if (orbRef.current) {
            const t = state.clock.getElapsedTime();
            orbRef.current.position.x = THREE.MathUtils.lerp(orbRef.current.position.x, pointer.x * 12, 0.04);
            orbRef.current.position.y = THREE.MathUtils.lerp(orbRef.current.position.y, pointer.y * 8, 0.04);
            orbRef.current.position.z = -5 + Math.sin(t * 0.5) * 2;
            (orbRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6 + Math.sin(t * 1.2) * 0.3;
        }
    });

    return (
        <mesh ref={orbRef} position={[0, 0, -5]}>
            <sphereGeometry args={[2.5, 64, 64]} />
            <meshStandardMaterial
                color="#00ff87"
                emissive="#00ff87"
                emissiveIntensity={0.6}
                roughness={0.1}
                metalness={0.8}
                transparent
                opacity={0.12}
            />
        </mesh>
    );
}

/* ─── Core Distorted Knot ───────────────────────────────────────────── */
function CoreKnot() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.06;
            meshRef.current.rotation.y = t * 0.08;
            meshRef.current.rotation.z = t * 0.04;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[9, 0.18, 400, 24, 3, 5]} />
                <MeshDistortMaterial
                    color="#00ff87"
                    speed={2}
                    distort={0.35}
                    radius={1}
                    emissive="#004422"
                    emissiveIntensity={0.8}
                    metalness={0.95}
                    roughness={0.05}
                    transparent
                    opacity={0.55}
                    wireframe={false}
                />
            </mesh>
        </Float>
    );
}

/* ─── Floating Icosahedra ───────────────────────────────────────────── */
function FloatingShapes() {
    const shapes = useMemo(() => [
        { pos: [-18, 6, -8] as [number, number, number], speed: 0.9, size: 0.8, color: "#00ff87" },
        { pos: [18, -5, -10] as [number, number, number], speed: 1.2, size: 1.1, color: "#00d4ff" },
        { pos: [12, 10, -5] as [number, number, number], speed: 0.7, size: 0.6, color: "#00ff87" },
        { pos: [-14, -8, -6] as [number, number, number], speed: 1.4, size: 0.9, color: "#00d4ff" },
        { pos: [0, 14, -12] as [number, number, number], speed: 0.8, size: 0.7, color: "#ffffff" },
    ], []);

    const refs = useRef<(THREE.Mesh | null)[]>([]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        refs.current.forEach((mesh, i) => {
            if (mesh) {
                mesh.rotation.x = t * shapes[i].speed * 0.4;
                mesh.rotation.y = t * shapes[i].speed * 0.6;
            }
        });
    });

    return (
        <>
            {shapes.map((s, i) => (
                <Float key={i} speed={s.speed} rotationIntensity={0.5} floatIntensity={1.2}>
                    <mesh ref={(el) => { refs.current[i] = el; }} position={s.pos}>
                        <icosahedronGeometry args={[s.size, 1]} />
                        <meshStandardMaterial
                            color={s.color}
                            emissive={s.color}
                            emissiveIntensity={0.5}
                            metalness={0.9}
                            roughness={0.1}
                            transparent
                            opacity={0.6}
                            wireframe
                        />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

/* ─── Grid Plane ─────────────────────────────────────────────────────── */
function GridPlane() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.z = -20 + Math.sin(state.clock.getElapsedTime() * 0.15) * 2;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, -12, -20]} rotation={[-Math.PI / 2.5, 0, 0]}>
            <planeGeometry args={[120, 80, 30, 20]} />
            <meshBasicMaterial
                color="#00ff87"
                wireframe
                transparent
                opacity={0.05}
            />
        </mesh>
    );
}

/* ─── Scene Lighting ─────────────────────────────────────────────────── */
function SceneLights() {
    const emeraldLight = useRef<THREE.PointLight>(null!);
    const cyanLight = useRef<THREE.PointLight>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (emeraldLight.current) {
            emeraldLight.current.position.x = Math.sin(t * 0.3) * 20;
            emeraldLight.current.position.y = Math.cos(t * 0.2) * 15;
        }
        if (cyanLight.current) {
            cyanLight.current.position.x = Math.cos(t * 0.25) * 18;
            cyanLight.current.position.y = Math.sin(t * 0.35) * 12;
        }
    });

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight ref={emeraldLight} color="#00ff87" intensity={4} distance={60} position={[10, 10, 5]} />
            <pointLight ref={cyanLight} color="#00d4ff" intensity={3} distance={50} position={[-10, -5, 5]} />
            <pointLight color="#ffffff" intensity={1.5} distance={40} position={[0, 0, 20]} />
            <spotLight
                color="#00ff87"
                intensity={8}
                position={[0, 20, 10]}
                angle={0.4}
                penumbra={0.8}
                castShadow={false}
            />
        </>
    );
}

/* ─── Main Export ─────────────────────────────────────────────────────── */
export default function Background3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Canvas
                camera={{ position: [0, 0, 28], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.5]}
            >
                <SceneLights />
                <ParticleField />
                <CoreKnot />
                <FloatingShapes />
                <MouseOrb />
                <GridPlane />
            </Canvas>

            {/* Multi-layer depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080c10]/80 via-[#080c10]/20 to-[#080c10]/90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-[#080c10]/60 pointer-events-none" />
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,12,16,0.75) 100%)" }} />
        </div>
    );
}

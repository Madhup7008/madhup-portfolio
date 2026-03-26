"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── Particle Field with Threat Network Lines ──────────────────────── */
function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null!);
    const linesRef = useRef<THREE.LineSegments>(null!);

    const { positions, colors, linePositions } = useMemo(() => {
        const count = 800;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const red = new THREE.Color("#ff0040");
        const darkRed = new THREE.Color("#ff2d2d");
        const crimson = new THREE.Color("#cc0022");
        const white = new THREE.Color("#ffffff");

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 90;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 55;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 45;

            const pick = Math.random();
            const c = pick < 0.4 ? red : pick < 0.65 ? darkRed : pick < 0.8 ? crimson : white;
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        const linePoints: number[] = [];
        const connectionDistance = 11;
        const maxConnections = 150;
        let connections = 0;

        for (let i = 0; i < count && connections < maxConnections; i++) {
            for (let j = i + 1; j < count && connections < maxConnections; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < connectionDistance) {
                    linePoints.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                    connections++;
                }
            }
        }

        return { positions, colors, linePositions: new Float32Array(linePoints) };
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = t * 0.015;
            pointsRef.current.rotation.x = Math.sin(t * 0.04) * 0.06;
        }
        if (linesRef.current) {
            linesRef.current.rotation.y = t * 0.015;
            linesRef.current.rotation.x = Math.sin(t * 0.04) * 0.06;
        }
    });

    return (
        <>
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
            {linePositions.length > 0 && (
                <lineSegments ref={linesRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
                    </bufferGeometry>
                    <lineBasicMaterial color="#ff0040" transparent opacity={0.06} />
                </lineSegments>
            )}
        </>
    );
}

/* ─── Wireframe Globe (Network Visualization) ────────────────── */
function WireframeGlobe() {
    const globeRef = useRef<THREE.Mesh>(null!);
    const ringRef1 = useRef<THREE.Mesh>(null!);
    const ringRef2 = useRef<THREE.Mesh>(null!);
    const ringRef3 = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (globeRef.current) {
            globeRef.current.rotation.y = t * 0.08;
            globeRef.current.rotation.x = Math.sin(t * 0.03) * 0.15;
        }
        if (ringRef1.current) {
            ringRef1.current.rotation.x = t * 0.12;
            ringRef1.current.rotation.z = t * 0.06;
        }
        if (ringRef2.current) {
            ringRef2.current.rotation.y = t * 0.1;
            ringRef2.current.rotation.x = Math.PI / 3 + t * 0.04;
        }
        if (ringRef3.current) {
            ringRef3.current.rotation.z = t * 0.14;
            ringRef3.current.rotation.y = Math.PI / 4 + t * 0.05;
        }
    });

    return (
        <group position={[0, 0, -8]}>
            {/* Main wireframe sphere */}
            <mesh ref={globeRef}>
                <sphereGeometry args={[6, 24, 24]} />
                <meshStandardMaterial
                    color="#ff0040"
                    emissive="#ff0040"
                    emissiveIntensity={0.3}
                    wireframe
                    transparent
                    opacity={0.12}
                />
            </mesh>
            {/* Orbital ring 1 */}
            <mesh ref={ringRef1}>
                <torusGeometry args={[8, 0.03, 16, 100]} />
                <meshStandardMaterial
                    color="#ff0040"
                    emissive="#ff0040"
                    emissiveIntensity={1.2}
                    transparent
                    opacity={0.35}
                />
            </mesh>
            {/* Orbital ring 2 */}
            <mesh ref={ringRef2}>
                <torusGeometry args={[9.5, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#ff2d2d"
                    emissive="#ff2d2d"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.2}
                />
            </mesh>
            {/* Orbital ring 3 */}
            <mesh ref={ringRef3}>
                <torusGeometry args={[11, 0.015, 16, 100]} />
                <meshStandardMaterial
                    color="#cc0022"
                    emissive="#cc0022"
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.12}
                />
            </mesh>
        </group>
    );
}

/* ─── Mouse-Reactive Threat Orb ─────────────────────────────────────── */
function MouseOrb() {
    const orbRef = useRef<THREE.Mesh>(null!);
    const { pointer } = useThree();

    useFrame((state) => {
        if (orbRef.current) {
            const t = state.clock.getElapsedTime();
            orbRef.current.position.x = THREE.MathUtils.lerp(orbRef.current.position.x, pointer.x * 12, 0.04);
            orbRef.current.position.y = THREE.MathUtils.lerp(orbRef.current.position.y, pointer.y * 8, 0.04);
            orbRef.current.position.z = -5 + Math.sin(t * 0.5) * 2;
            (orbRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8 + Math.sin(t * 1.2) * 0.4;
        }
    });

    return (
        <mesh ref={orbRef} position={[0, 0, -5]}>
            <sphereGeometry args={[2.5, 64, 64]} />
            <meshStandardMaterial
                color="#ff0040"
                emissive="#ff0040"
                emissiveIntensity={0.8}
                roughness={0.1}
                metalness={0.8}
                transparent
                opacity={0.1}
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
                    color="#ff0040"
                    speed={2}
                    distort={0.35}
                    radius={1}
                    emissive="#440011"
                    emissiveIntensity={1.0}
                    metalness={0.95}
                    roughness={0.05}
                    transparent
                    opacity={0.5}
                    wireframe={false}
                />
            </mesh>
        </Float>
    );
}

/* ─── Floating Icosahedra ───────────────────────────────────────────── */
function FloatingShapes() {
    const shapes = useMemo(() => [
        { pos: [-18, 6, -8] as [number, number, number], speed: 0.9, size: 0.8, color: "#ff0040" },
        { pos: [18, -5, -10] as [number, number, number], speed: 1.2, size: 1.1, color: "#ff2d2d" },
        { pos: [12, 10, -5] as [number, number, number], speed: 0.7, size: 0.6, color: "#ff0040" },
        { pos: [-14, -8, -6] as [number, number, number], speed: 1.4, size: 0.9, color: "#cc0022" },
        { pos: [0, 14, -12] as [number, number, number], speed: 0.8, size: 0.7, color: "#ffffff" },
        { pos: [-22, 2, -15] as [number, number, number], speed: 1.0, size: 0.5, color: "#ff0040" },
        { pos: [20, 12, -7] as [number, number, number], speed: 0.6, size: 0.4, color: "#ff2d2d" },
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
                color="#ff0040"
                wireframe
                transparent
                opacity={0.04}
            />
        </mesh>
    );
}

/* ─── Scene Lighting ─────────────────────────────────────────────────── */
function SceneLights() {
    const redLight = useRef<THREE.PointLight>(null!);
    const crimsonLight = useRef<THREE.PointLight>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (redLight.current) {
            redLight.current.position.x = Math.sin(t * 0.3) * 20;
            redLight.current.position.y = Math.cos(t * 0.2) * 15;
        }
        if (crimsonLight.current) {
            crimsonLight.current.position.x = Math.cos(t * 0.25) * 18;
            crimsonLight.current.position.y = Math.sin(t * 0.35) * 12;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight ref={redLight} color="#ff0040" intensity={5} distance={60} position={[10, 10, 5]} />
            <pointLight ref={crimsonLight} color="#ff2d2d" intensity={3.5} distance={50} position={[-10, -5, 5]} />
            <pointLight color="#ffffff" intensity={1} distance={40} position={[0, 0, 20]} />
            <spotLight
                color="#ff0040"
                intensity={10}
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
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
            <Canvas
                camera={{ position: [0, 0, 28], fov: 50 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
            >
                <SceneLights />
                <ParticleField />
                <WireframeGlobe />
                <CoreKnot />
                <FloatingShapes />
                <MouseOrb />
                <GridPlane />
            </Canvas>

            {/* Multi-layer depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-[#050505]/90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60 pointer-events-none" />
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.75) 100%)" }} />
        </div>
    );
}

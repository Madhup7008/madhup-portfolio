"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Ribbon() {
    const mesh = useRef<THREE.Mesh>(null!);

    // Create a custom path for a "ribbon" look
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, 10),
            new THREE.Vector3(-5, 5, 5),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(5, -5, 5),
            new THREE.Vector3(10, 0, 10),
        ]);
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = Math.cos(t / 4) / 4;
            mesh.current.rotation.y = Math.sin(t / 4) / 4;
            mesh.current.rotation.z = Math.sin(t / 4) / 4;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh}>
                {/* A TorusKnot is the closest thing to that complex 3D ribbon shape */}
                <torusKnotGeometry args={[10, 0.25, 300, 20, 3, 5]} />
                <MeshDistortMaterial
                    color="#ffffff"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    emissive="#000"
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

export default function Background3D() {
    return (
        <div className="absolute inset-0 z-0 bg-black pointer-events-none">
            <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-20, -20, -20]} intensity={1.5} />
                <Ribbon />
            </Canvas>
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50"></div>
        </div>
    );
}

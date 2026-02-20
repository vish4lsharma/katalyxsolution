import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Sphere, Line } from '@react-three/drei';

const Milestone = ({ position, year, text }) => {
    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[0.2, 32, 32]}>
                    <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.8} emissive="#3b82f6" emissiveIntensity={0.5} />
                </Sphere>
            </Float>
            <Text
                position={[0, 0.4, 0]}
                fontSize={0.3}
                color="#60a5fa"
                anchorX="center"
                anchorY="middle"
            >
                {year}
            </Text>
            <Text
                position={[0, -0.6, 0]}
                fontSize={0.15}
                color="#94a3b8"
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
            >
                {text}
            </Text>
        </group>
    );
};

const TimelineScene = () => {
    const points = [
        [-2.5, 0, 0],
        [0, 0.5, 0],
        [2.5, -0.2, 0],
    ];

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/* Connecting Line */}
            <Line
                points={points}
                color="#3b82f6"
                lineWidth={2}
                transparent
                opacity={0.5}
            />

            <Milestone position={points[0]} year="2025" text="Founded by Vishal Sharma" />
            <Milestone position={points[1]} year="Q4 2025" text="Launched Camu ERP & HealthcareX24.com" />
            <Milestone position={points[2]} year="2026" text="Global Innovation Partnership" />

            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </>
    );
};

const Timeline = () => {
    return (
        <div className="h-[400px] w-full bg-transparent rounded-2xl overflow-hidden mt-12 border border-gray-800/50">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <TimelineScene />
            </Canvas>
        </div>
    );
};

export default Timeline;

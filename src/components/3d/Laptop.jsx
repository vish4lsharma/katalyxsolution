import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Box, useTexture } from '@react-three/drei';

const ScreenMaterial = ({ url }) => {
    const texture = useTexture(url);
    return <meshBasicMaterial map={texture} toneMapped={false} />;
};

const LaptopModel = ({ screenImage }) => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) * 0.2;
        group.current.rotation.x = Math.cos(t / 4) * 0.1;
    });

    const DefaultScreen = () => (
        <meshStandardMaterial color="#007BFF" emissive="#002244" emissiveIntensity={0.5} roughness={0.2} />
    );

    return (
        <group ref={group} rotation={[0.4, 0, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Base */}
                <Box args={[3, 0.2, 2]} position={[0, -0.1, 0]}>
                    <meshStandardMaterial color="#333" roughness={0.4} metalness={0.6} />
                </Box>
                {/* Screen */}
                <group position={[0, 0.1, -1]} rotation={[-Math.PI / 12, 0, 0]}>
                    {/* Screen Back */}
                    <Box args={[3, 2, 0.1]} position={[0, 1, 0]}>
                        <meshStandardMaterial color="#222" roughness={0.2} metalness={0.8} />
                    </Box>
                    {/* Screen Display (Emissive for 'lit' look) */}
                    <Box args={[2.8, 1.8, 0.05]} position={[0, 1, 0.05]}>
                        <Suspense fallback={<DefaultScreen />}>
                            {screenImage ? <ScreenMaterial url={screenImage} /> : <DefaultScreen />}
                        </Suspense>
                    </Box>
                </group>
            </Float>
        </group>
    );
};

const Laptop = ({ screenImage }) => {
    return (
        <div className="h-[400px] w-full">
            <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[-5, 5, 5]} color="#00C6FF" intensity={0.8} />
                <LaptopModel screenImage={screenImage} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default Laptop;

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Globe = () => {
    return (
        <Canvas className="h-full w-full">
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
                <Sphere visible args={[1, 100, 200]} scale={2.5}>
                    <MeshDistortMaterial
                        color="#007BFF"
                        attach="material"
                        distort={0.4} // Strength, 0 disables the effect (default=1)
                        speed={2} // Speed (default=1)
                        roughness={0.2}
                        metalness={0.8}
                        wireframe
                    />
                </Sphere>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
        </Canvas>
    );
};

export default Globe;

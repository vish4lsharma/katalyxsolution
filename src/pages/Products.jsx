import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { Check } from 'lucide-react';

const ProductViz = () => (
    <Canvas className="h-full w-full">
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" />
        <Box args={[2, 2, 2]}>
            <meshStandardMaterial
                color="#2563eb"
                metalness={0.6}
                roughness={0.2}
                wireframe={true}
            />
        </Box>
        <Box args={[1.5, 1.5, 1.5]}>
            <meshStandardMaterial
                color="#9333ea"
                metalness={0.8}
                roughness={0.1}
            />
        </Box>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    </Canvas>
);

const Products = () => {
    return (
        <>
            <Helmet>
                <title>Products - Katalyx Solutions</title>
            </Helmet>

            <section className="py-24 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] min-h-screen text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Enterprise <span className="text-blue-400">Platforms</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 max-w-2xl mx-auto"
                        >
                            Scalable software products designed to accelerate your digital transformation journey.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl overflow-hidden h-96 border border-blue-500/20 shadow-2xl shadow-blue-500/10 backdrop-blur-sm"
                        >
                            <div className="h-full w-full">
                                <ProductViz />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-blue-400 font-semibold mb-2 block tracking-wide uppercase text-sm">Flagship Product</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">KataAI Platform</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                An all-in-one artificial intelligence platform that simplifies model deployment, monitoring, and scaling. Built for data scientists and engineers and optimized for performance.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Automated MLOps', 'Real-time Analytics', 'Secure & Compliant', 'Cloud Agnostic'].map((feat) => (
                                    <li key={feat} className="flex items-center gap-3 text-gray-300">
                                        <div className="bg-blue-500/20 p-1 rounded-full">
                                            <Check className="text-blue-400 w-4 h-4" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                                Request Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;

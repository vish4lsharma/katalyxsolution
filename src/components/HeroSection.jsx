import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EnergyButton from './effects/EnergyButton';

const Globe = lazy(() => import('./3d/Globe'));

const LoopTypewriter = memo(function LoopTypewriter({ text = '', speed = 65, pause = 1200, className = '' }) {
    const [pos, setPos] = useState(0);
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        let t = 0;
        if (!deleting) {
            if (pos < text.length) t = window.setTimeout(() => setPos(p => p + 1), speed);
            else t = window.setTimeout(() => setDeleting(true), pause);
        } else {
            if (pos > 0) t = window.setTimeout(() => setPos(p => p - 1), Math.max(20, Math.floor(speed / 2)));
            else t = window.setTimeout(() => setDeleting(false), 200);
        }
        return () => clearTimeout(t);
    }, [pos, deleting, text, speed, pause]);

    return (
        <span className={className} aria-hidden={false}>
            {text.slice(0, pos)}
            <span className="inline-block ml-1 w-1 h-6 align-middle bg-current animate-pulse" />
        </span>
    );
});

export default function HeroSection() {
    const shouldReduce = useReducedMotion();

    const fadeIn = shouldReduce
        ? {}
        : { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };

    return (
        <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0f0f1a] pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1a] to-[#0f0f1a] opacity-80" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div {...fadeIn} className="z-10 order-2 md:order-1">
                    <motion.span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30 tracking-widest uppercase">
                        KATALYX Solutions
                    </motion.span>

                    <motion.p className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                        Build Faster.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale Smarter.</span>
                    </motion.p>

                    <div className="mb-8 relative z-20">
                        <motion.h1 className="text-5xl md:text-6xl font-bold leading-[1.02] text-white mb-4">
                            <span className="block text-gray-400 text-3xl md:text-4xl mb-0">We build</span>
                            <div className="min-h-[1.2em] md:min-h-[1.0em]">
                                <span className="block text-gray-400 text-4xl md:text-5xl">Future-Ready</span>
                                <div className="mt-0">
                                    <LoopTypewriter text="Digital Solutions" speed={65} pause={1400} className="text-blue-400 text-4xl md:text-5xl font-bold" />
                                </div>
                            </div>
                        </motion.h1>

                        <motion.p className="text-lg text-gray-300 leading-7 max-w-lg mt-4">
                            We are a passionate team of innovators dedicated to crafting scalable, high-performance digital solutions for modern enterprises.
                        </motion.p>
                        <motion.p className="text-sm text-blue-300/80 leading-6 max-w-lg mt-3 font-medium border-l-2 border-blue-500/40 pl-3">
                            Katalyx Solutions builds AI-powered software, automation systems, and scalable digital platforms for startups and businesses.
                        </motion.p>
                    </div>

                    <motion.div className="flex flex-wrap gap-4">
                        <Link to="/products">
                            <EnergyButton variant="primary">
                                Our Work <ArrowRight size={20} />
                            </EnergyButton>
                        </Link>
                        <Link to="/contact">
                            <EnergyButton variant="secondary">Let's Talk</EnergyButton>
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="order-1 md:order-2 h-[260px] md:h-[560px] w-full relative flex items-center justify-center">
                    <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-3xl opacity-30" />
                        <Suspense fallback={<div className="w-48 h-48 rounded-full bg-blue-500/10 animate-pulse" aria-hidden />}>
                            <Globe />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}

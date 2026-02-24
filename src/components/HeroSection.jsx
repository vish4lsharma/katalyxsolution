import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, BrainCircuit, BarChart3, Workflow, TrendingUp } from 'lucide-react';
import EnergyButton from './effects/EnergyButton';
import Typewriter from './ui/Typewriter';

const WAVE_PATH = 'M0 14 C8 3 18 25 28 14 C38 3 48 25 58 14 C68 3 78 25 88 14 C93 8 97 10 100 14';

const JOURNEY_STAGES = [
    {
        id: 'vision',
        title: 'Vision',
        subtitle: 'Idea to Connected Intent',
        narrative: 'A simple business idea expands into connected opportunity nodes and clear direction.',
        outcome: 'Aligned business vision',
        meaning: 'From abstract ideas to mapped priorities your team can commit to.',
        signal: 'Core goals and value mapped',
        theme: 'vision',
        icon: Lightbulb,
    },
    {
        id: 'intelligence',
        title: 'Intelligence',
        subtitle: 'Glowing AI Core',
        narrative: 'Connected logic converges into an AI core that powers intelligent automation.',
        outcome: 'AI-powered decision engine',
        meaning: 'Knowledge and patterns become a live engine that learns from every process.',
        signal: 'Neural workflows activated',
        theme: 'intelligence',
        icon: BrainCircuit,
    },
    {
        id: 'insights',
        title: 'Insights',
        subtitle: 'Real-Time Dashboards',
        narrative: 'The AI core streams live metrics into dynamic dashboards for instant clarity.',
        outcome: 'Actionable business insights',
        meaning: 'Leaders stop guessing because operations and risk are visible in real time.',
        signal: 'Real-time data pipelines flowing',
        theme: 'insights',
        icon: BarChart3,
    },
    {
        id: 'workflow',
        title: 'Workflow',
        subtitle: 'Automation Pipelines',
        narrative: 'Dashboards evolve into automated pipelines that execute repeatable business flow.',
        outcome: 'Faster, reliable operations',
        meaning: 'Manual bottlenecks are replaced with dependable, auditable automation chains.',
        signal: 'Automation chains orchestrated',
        theme: 'workflow',
        icon: Workflow,
    },
    {
        id: 'growth',
        title: 'Growth',
        subtitle: 'Connected Enterprise Expansion',
        narrative: 'Pipelines scale into growth trajectories across connected business platforms.',
        outcome: 'Scalable business growth',
        meaning: 'Every automated loop compounds into stronger revenue, retention, and expansion.',
        signal: 'Enterprise network expansion live',
        theme: 'growth',
        icon: TrendingUp,
    },
];

export default function HeroSection() {
    const shouldReduce = useReducedMotion();
    const [activeStage, setActiveStage] = useState(0);
    const [typedMeaning, setTypedMeaning] = useState('');
    const parallaxX = useMotionValue(0);
    const parallaxY = useMotionValue(0);
    const smoothX = useSpring(parallaxX, { stiffness: 52, damping: 22, mass: 0.8 });
    const smoothY = useSpring(parallaxY, { stiffness: 52, damping: 22, mass: 0.8 });
    const farX = useTransform(smoothX, (v) => v * -0.22);
    const farY = useTransform(smoothY, (v) => v * -0.22);

    useEffect(() => {
        if (shouldReduce) return undefined;

        const interval = window.setInterval(() => {
            setActiveStage((prev) => (prev + 1) % JOURNEY_STAGES.length);
        }, 3400);

        return () => window.clearInterval(interval);
    }, [shouldReduce]);

    const fadeIn = shouldReduce
        ? {}
        : { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };

    const currentStage = JOURNEY_STAGES[activeStage];
    const CurrentIcon = currentStage.icon;
    const nextStage = JOURNEY_STAGES[(activeStage + 1) % JOURNEY_STAGES.length];

    useEffect(() => {
        if (shouldReduce) {
            setTypedMeaning(currentStage.meaning);
            return undefined;
        }

        let index = 0;
        setTypedMeaning('');
        const typing = window.setInterval(() => {
            index += 1;
            setTypedMeaning(currentStage.meaning.slice(0, index));
            if (index >= currentStage.meaning.length) {
                window.clearInterval(typing);
            }
        }, 24);

        return () => window.clearInterval(typing);
    }, [activeStage, shouldReduce, currentStage.meaning]);

    const handleParallaxMove = (event) => {
        if (shouldReduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        parallaxX.set(x * 7);
        parallaxY.set(y * 5.5);
    };

    const handleParallaxLeave = () => {
        parallaxX.set(0);
        parallaxY.set(0);
    };

    return (
        <section data-navbar-theme="dark" className="relative min-h-[76vh] md:min-h-[84vh] flex items-center overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846] pt-8 pb-0 md:pt-10 md:pb-1">
            <div className="absolute inset-0 bg-[#081321]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(56,189,248,0.22),transparent_55%)]" />

            <div className="container mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center relative z-10">
                <motion.div {...fadeIn} className="z-10 order-2 md:order-1">
                    <motion.span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30 tracking-widest uppercase">
                        KATALYX Solutions
                    </motion.span>

                    <motion.p className="text-base md:text-lg font-semibold text-white mb-4 md:mb-5 tracking-tight">
                        Build Faster.{' '}
                        <span className="text-sky-300">Scale Smarter.</span>
                    </motion.p>

                    <div className="mb-8 relative z-20">
                        <motion.h1 className="font-bold leading-[1.02] text-white mb-4">
                            <div className="flex items-baseline gap-2 md:gap-3 whitespace-nowrap">
                                <span className="text-slate-100 text-3xl md:text-4xl">We build</span>
                                <span className="text-3xl md:text-4xl text-white">Future-Ready</span>
                            </div>
                            <div className="min-h-[1.2em] md:min-h-[1.0em]">
                                    <div className="mt-3 md:mt-4">
                                        <Typewriter
                                            text="Digital Solutions"
                                            speed={65}
                                            restartDelay={1300}
                                            className="text-5xl md:text-7xl font-bold text-sky-300 leading-[1.02]"
                                        />
                                    </div>
                                </div>
                        </motion.h1>

                        <motion.p className="text-lg text-white leading-7 max-w-lg mt-4">
                            {/* We are a passionate team of innovators dedicated to crafting scalable, high-performance digital solutions for modern enterprises. */}
                        </motion.p>
                        <motion.p className="text-sm text-white leading-6 max-w-lg mt-3 font-medium border-l-2 border-blue-500/40 pl-3">
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

                <div className="order-1 md:order-2 h-[340px] md:h-[560px] w-full relative flex items-center justify-center mt-4 mb-4 md:mt-6 md:mb-6">
                    <div
                        className="w-full h-full relative"
                        onMouseMove={handleParallaxMove}
                        onMouseLeave={handleParallaxLeave}
                    >
                        <motion.div className="absolute left-[7%] right-[7%] bottom-[18%] md:bottom-[20%] z-20 [perspective:1400px]" style={{ x: farX, y: farY }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`step-card-${currentStage.id}`}
                                    className="relative rounded-2xl border border-white/20 bg-[#0a1220]/90 shadow-[0_22px_60px_rgba(6,18,35,0.74)] backdrop-blur-md p-4 md:p-5 overflow-hidden"
                                    initial={shouldReduce ? { opacity: 1 } : { opacity: 0, rotateY: -16, rotateX: 6, z: -30 }}
                                    animate={shouldReduce ? { opacity: 1 } : { opacity: 1, rotateY: 0, rotateX: 0, z: 0 }}
                                    exit={shouldReduce ? { opacity: 0 } : { opacity: 0, rotateY: 14, rotateX: -4, z: -35 }}
                                    transition={{ duration: 0.72, ease: 'easeInOut' }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <motion.div
                                        className="absolute -inset-6 bg-[#1a3359]/25 blur-2xl pointer-events-none"
                                        animate={shouldReduce ? { opacity: 0.32 } : { opacity: [0.2, 0.48, 0.2] }}
                                        transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                                        aria-hidden
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] pointer-events-none"
                                        animate={shouldReduce ? { x: '0%' } : { x: ['-120%', '120%'] }}
                                        transition={shouldReduce ? { duration: 0 } : { duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                                        aria-hidden
                                    />

                                    <div className="relative flex items-center gap-3 mb-3">
                                        <motion.div
                                            className="w-10 h-10 rounded-xl border border-white/25 bg-white/10 flex items-center justify-center relative"
                                            animate={shouldReduce ? { opacity: 1 } : { scale: [1, 1.09, 1], opacity: [0.8, 1, 0.8] }}
                                            transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                                        >
                                            <CurrentIcon className="w-5 h-5 text-white relative z-10" />
                                            {!shouldReduce && [0, 1, 2, 3].map((orbit) => (
                                                <motion.span
                                                    key={`orbit-${orbit}`}
                                                    className="absolute inset-0"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 2.2 + orbit * 0.8, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                                                >
                                                    <span
                                                        className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                                                        style={{ transform: `translate(-50%, -50%) rotate(${orbit * 90}deg) translateY(-22px)` }}
                                                    />
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        <div>
                                            <p className="text-[10px] tracking-[0.14em] uppercase text-white/80">Step {activeStage + 1} of {JOURNEY_STAGES.length}</p>
                                            <p className="text-sm md:text-base text-white font-semibold">{currentStage.title}</p>
                                        </div>
                                    </div>

                                    <motion.p
                                        key={`narrative-${currentStage.id}`}
                                        className="text-xs md:text-sm text-white/90 leading-relaxed mb-3"
                                        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                                        animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, ease: 'easeOut' }}
                                    >
                                        {currentStage.narrative}
                                    </motion.p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                        <motion.div className="rounded-lg border border-white/12 bg-[#08101d]/88 px-2.5 py-2" initial={shouldReduce ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
                                            <p className="text-[10px] uppercase tracking-[0.1em] text-white/65">Now Building</p>
                                            <p className="text-xs text-white/95 mt-0.5">{currentStage.signal}</p>
                                        </motion.div>
                                        <motion.div className="rounded-lg border border-white/12 bg-[#08101d]/88 px-2.5 py-2" initial={shouldReduce ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.14 }}>
                                            <p className="text-[10px] uppercase tracking-[0.1em] text-white/65">Business Impact</p>
                                            <p className="text-xs text-white/95 mt-0.5">{currentStage.outcome}</p>
                                        </motion.div>
                                    </div>

                                    <motion.p
                                        className="text-[10px] md:text-xs text-white/88 leading-relaxed mb-3 border border-white/12 rounded-lg px-2.5 py-2 bg-[#08101d]/84 min-h-[44px]"
                                        initial={shouldReduce ? false : { opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.18 }}
                                    >
                                        Why it matters: <span className="text-white">{typedMeaning}</span>
                                        {!shouldReduce && typedMeaning.length < currentStage.meaning.length && <span className="inline-block ml-0.5 w-[1px] h-[11px] bg-white animate-pulse align-middle" />}
                                    </motion.p>

                                    <p className="text-[10px] md:text-xs text-white/75 mb-2">
                                        Next: <span className="text-white/90">{nextStage.subtitle}</span>
                                    </p>

                                    <div className="relative h-6 mb-2 overflow-hidden rounded-md bg-[#08101d] border border-white/12">
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden>
                                            <path d={WAVE_PATH} stroke="rgba(255,255,255,0.28)" strokeWidth="1.1" fill="none" />
                                            <motion.path
                                                d={WAVE_PATH}
                                                stroke="rgba(255,255,255,0.92)"
                                                strokeWidth="1.4"
                                                fill="none"
                                                strokeDasharray="4 3"
                                                animate={shouldReduce ? { strokeDashoffset: 0 } : { strokeDashoffset: [-18, 0] }}
                                                transition={shouldReduce ? { duration: 0 } : { duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                                            />
                                        </svg>
                                        {!shouldReduce && [0, 1, 2, 3].map((particle) => (
                                            <motion.span
                                                key={`wave-particle-${particle}`}
                                                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                                                animate={{ left: ['2%', '98%'], y: [0, -5, 0, 5, 0], opacity: [0, 1, 1, 0] }}
                                                transition={{ duration: 2.8, delay: particle * 0.45, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                                            />
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-5 gap-1.5">
                                        {JOURNEY_STAGES.map((stage, index) => (
                                            <div
                                                key={`${stage.id}-bar`}
                                                className={`h-7 rounded-md border text-[9px] md:text-[10px] flex items-center justify-center px-1 ${index === activeStage ? 'border-white/35 text-white bg-white/12 shadow-[0_0_14px_rgba(255,255,255,0.18)]' : 'border-white/12 text-white/70 bg-white/5'}`}
                                            >
                                                {stage.title}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

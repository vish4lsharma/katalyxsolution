import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const OutcomesIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 9V18L24 21" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="2" fill="#0ea5e9" />
    </svg>
);

const HumilityIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 24C22.4183 24 26 20.4183 26 16C26 11.5817 22.4183 8 18 8C13.5817 8 10 11.5817 10 16C10 20.4183 13.5817 24 18 24Z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 15C14 15 15.5 17 18 17C20.5 17 22 15 22 15" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 24V28M14 28H22M18 8V4" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="13" r="1.5" fill="#0ea5e9" />
        <circle cx="21" cy="13" r="1.5" fill="#0ea5e9" />
    </svg>
);

const CommitmentIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3L20.7279 12.7721L30.5 15.5L20.7279 18.2279L18 28L15.2721 18.2279L5.5 15.5L15.2721 12.7721L18 3Z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round" />
        <path d="M27 27L28.5 31L32.5 32.5L28.5 34L27 38L25.5 34L21.5 32.5L25.5 31L27 27Z" stroke="#0ea5e9" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="18" cy="15.5" r="2" fill="#0ea5e9" />
    </svg>
);

const CollaborationIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="10" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <circle cx="24" cy="10" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <circle cx="18" cy="24" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <path d="M15 13L13.5 21M21 13L22.5 21" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 30C9 26 12 23 18 23C24 23 27 26 27 30" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const values = [
    {
        icon: OutcomesIcon,
        title: 'Outcomes-Oriented',
        description:
            'We deliver measurable business impact - from operational efficiency to intelligent automation - balancing execution excellence with speed.',
    },
    {
        icon: HumilityIcon,
        title: 'Humility',
        description:
            'No egos, just impact. Every voice matters. We value diverse perspectives and believe the best ideas win - regardless of title.',
    },
    {
        icon: CommitmentIcon,
        title: 'Commitment',
        description:
            'We champion forward-thinking organizations building scalable, future-ready digital ecosystems.',
    },
    {
        icon: CollaborationIcon,
        title: 'Collaboration',
        description:
            'Ideas come first - not hierarchy. We work as partners, not vendors, and build alongside the people we serve.',
    },
];

const titleEffects = [
    { initial: { opacity: 0, x: -16 }, animate: { opacity: [0, 1, 0.9, 1], x: 0 } },
    { initial: { opacity: 0, y: -14 }, animate: { opacity: [0, 1, 0.88, 1], y: 0 } },
    { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: [0, 1, 0.92, 1], scale: 1 } },
    { initial: { opacity: 0, rotate: -5, y: 8 }, animate: { opacity: [0, 1, 0.9, 1], rotate: 0, y: 0 } },
];

const bodyEffects = [
    { initial: { opacity: 0, y: 16, filter: 'blur(4px)' }, animate: { opacity: [0, 1, 0.93, 1], y: 0, filter: 'blur(0px)' } },
    { initial: { opacity: 0, x: 14 }, animate: { opacity: [0, 1, 0.9, 1], x: 0 } },
    { initial: { opacity: 0, y: -12 }, animate: { opacity: [0, 1, 0.9, 1], y: 0 } },
    { initial: { opacity: 0, letterSpacing: '0.08em' }, animate: { opacity: [0, 1, 0.92, 1], letterSpacing: '0em' } },
];

const missionIntroLines = [
    'Katalyx Solutions is an AI-powered digital innovation partner built for ambitious businesses, replacing fragmented legacy systems with intelligent, scalable, real-time infrastructure.',
    'Our mission is to ensure digital growth is driven by reliable systems - not complexity, inefficiency, or manual bottlenecks.',
    'We align strategy, technology, and execution to create measurable, long-term impact.',
];

const missionIntroEffects = [
    { initial: { opacity: 0, x: 20, filter: 'blur(4px)' }, animate: { opacity: [0, 1, 0.92, 1], x: 0, filter: 'blur(0px)' } },
    { initial: { opacity: 0, y: -14, scale: 0.97 }, animate: { opacity: [0, 1, 0.9, 1], y: 0, scale: 1 } },
    { initial: { opacity: 0, x: -20, rotate: -2 }, animate: { opacity: [0, 1, 0.9, 1], x: 0, rotate: 0 } },
];

const MissionValues = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => setVisible(e.isIntersecting),
            { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            data-navbar-theme="light"
            className="relative bg-white overflow-visible -mt-6 md:-mt-8 pt-6 md:pt-8 z-20 rounded-t-[28px] md:rounded-t-[36px]"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-12 -left-16 w-56 h-56 rounded-full bg-cyan-100/30 blur-3xl" />
                <div className="absolute -bottom-16 right-[-50px] w-60 h-60 rounded-full bg-sky-100/30 blur-3xl" />
            </div>
            <div className="container mx-auto px-6 max-w-screen-2xl py-16 md:py-24 lg:py-28">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 24 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div>
                        <motion.h2
                            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-light text-gray-900 leading-[1.1] tracking-tight"
                            initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
                            animate={visible ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' } : { opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
                            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
                        >
                            Our{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 px-2 text-sky-400">Mission</span>
                                <span
                                    className="absolute inset-0 border border-dashed border-sky-500/60 rounded-md bg-sky-50/70"
                                    style={{ top: '2px', bottom: '2px', left: '-2px', right: '-2px' }}
                                />
                                <span className="absolute -top-[3px] -left-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
                                <span className="absolute -top-[3px] -right-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
                                <span className="absolute -bottom-[3px] -left-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
                                <span className="absolute -bottom-[3px] -right-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
                            </span>{' '}
                            &amp; Values
                        </motion.h2>
                    </div>

                    <div className="flex items-center">
                        <motion.div
                            className="text-[15px] md:text-[16px] text-gray-600 leading-[1.75] max-w-[560px]"
                            initial="hidden"
                            animate={visible ? 'visible' : 'hidden'}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.16,
                                        delayChildren: 0.14,
                                    },
                                },
                            }}
                        >
                            {missionIntroLines.map((line, idx) => (
                                <motion.p
                                    key={line}
                                    className={idx === missionIntroLines.length - 1 ? '' : 'mb-2'}
                                    initial={missionIntroEffects[idx].initial}
                                    animate={visible ? missionIntroEffects[idx].animate : missionIntroEffects[idx].initial}
                                    transition={{ duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {values.map((value, index) => {
                        const delay = 100 + index * 100;
                        return (
                            <div
                                key={value.title}
                                className="relative group rounded-2xl p-7 md:p-8 flex flex-col overflow-hidden min-h-[280px]"
                                style={{
                                    background:
                                        'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.96) 65%, rgba(241,245,249,0.96) 100%)',
                                    border: '1px solid rgba(148,163,184,0.22)',
                                    boxShadow: '0 18px 38px rgba(2,6,23,0.08)',
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(32px)',
                                    transition: `all 0.6s cubic-bezier(.25,.46,.45,.94) ${delay}ms`,
                                }}
                            >
                                <span className="absolute top-0 left-0 w-[6px] h-[6px] rounded-full bg-sky-300/70 shadow-[0_0_8px_2px_rgba(14,165,233,0.2)]" />
                                <span className="absolute top-0 right-0 w-[6px] h-[6px] rounded-full bg-cyan-300/70 shadow-[0_0_8px_2px_rgba(34,211,238,0.2)]" />
                                <span className="absolute bottom-0 left-0 w-[6px] h-[6px] rounded-full bg-sky-200/70 shadow-[0_0_8px_2px_rgba(14,165,233,0.14)]" />
                                <span className="absolute bottom-0 right-0 w-[6px] h-[6px] rounded-full bg-cyan-200/70 shadow-[0_0_8px_2px_rgba(34,211,238,0.14)]" />

                                <span className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
                                <span className="absolute left-0 top-[10%] bottom-[40%] w-[1px] bg-gradient-to-b from-slate-300/70 via-slate-200/50 to-transparent" />
                                <span className="absolute right-0 top-[10%] bottom-[40%] w-[1px] bg-gradient-to-b from-slate-300/70 via-slate-200/50 to-transparent" />

                                <div
                                    className="absolute bottom-0 right-0 w-[52%] h-[52%] rounded-br-2xl pointer-events-none z-0"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse at 100% 100%, rgba(240,249,255,0.92) 0%, rgba(224,242,254,0.64) 36%, rgba(186,230,253,0.22) 56%, transparent 74%)',
                                    }}
                                />
                                <div
                                    className="absolute -bottom-2 -right-2 w-[36%] h-[36%] rounded-full pointer-events-none z-0 blur-xl"
                                    style={{
                                        background:
                                            'radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0.12) 45%, transparent 75%)',
                                    }}
                                />

                                <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.2)_0%,_rgba(125,211,252,0.12)_40%,_transparent_74%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                <div className="relative z-10 mb-6 w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-sky-300 group-hover:bg-sky-50 transition-all duration-300">
                                    <value.icon />
                                </div>

                                <motion.h3
                                    className="relative z-10 text-[18px] md:text-[20px] font-semibold text-gray-900 mb-3 tracking-tight"
                                    initial={titleEffects[index % titleEffects.length].initial}
                                    animate={visible ? titleEffects[index % titleEffects.length].animate : titleEffects[index % titleEffects.length].initial}
                                    transition={{ duration: 0.7, delay: 0.18 + index * 0.09, ease: 'easeOut' }}
                                >
                                    {value.title}
                                </motion.h3>

                                <motion.p
                                    className="relative z-10 text-[13px] md:text-[14px] text-gray-600 leading-[1.7] flex-1"
                                    initial={bodyEffects[index % bodyEffects.length].initial}
                                    animate={visible ? bodyEffects[index % bodyEffects.length].animate : bodyEffects[index % bodyEffects.length].initial}
                                    transition={{ duration: 0.75, delay: 0.24 + index * 0.1, ease: 'easeOut' }}
                                >
                                    {value.description}
                                </motion.p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MissionValues;

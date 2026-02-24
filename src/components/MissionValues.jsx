import React, { useEffect, useRef, useState } from 'react';

const OutcomesIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 9V18L24 21" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="2" fill="#3b82f6" />
    </svg>
);

const HumilityIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 24C22.4183 24 26 20.4183 26 16C26 11.5817 22.4183 8 18 8C13.5817 8 10 11.5817 10 16C10 20.4183 13.5817 24 18 24Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 15C14 15 15.5 17 18 17C20.5 17 22 15 22 15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 24V28M14 28H22M18 8V4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="13" r="1.5" fill="#3b82f6" />
        <circle cx="21" cy="13" r="1.5" fill="#3b82f6" />
    </svg>
);

const CommitmentIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3L20.7279 12.7721L30.5 15.5L20.7279 18.2279L18 28L15.2721 18.2279L5.5 15.5L15.2721 12.7721L18 3Z" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
        <path d="M27 27L28.5 31L32.5 32.5L28.5 34L27 38L25.5 34L21.5 32.5L25.5 31L27 27Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="18" cy="15.5" r="2" fill="#3b82f6" />
    </svg>
);

const CollaborationIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="10" r="4" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="24" cy="10" r="4" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="18" cy="24" r="4" stroke="#3b82f6" strokeWidth="2" />
        <path d="M15 13L13.5 21M21 13L22.5 21" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 30C9 26 12 23 18 23C24 23 27 26 27 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
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

const MissionValues = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.08 });
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
                <div className="absolute -bottom-16 right-[-50px] w-60 h-60 rounded-full bg-blue-100/30 blur-3xl" />
            </div>
            <div className="absolute inset-x-0 -top-12 h-20 bg-gradient-to-b from-blue-100/45 to-transparent blur-2xl pointer-events-none" />
            <div className="container mx-auto px-6 max-w-screen-2xl py-16 md:py-24 lg:py-28">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-16 md:mb-20"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(28px)',
                        transition: 'all 0.7s cubic-bezier(.25,.46,.45,.94)',
                    }}
                >
                    <div>
                        <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-light text-gray-900 leading-[1.1] tracking-tight">
                            Our{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 px-2 text-blue-600">Mission</span>
                                <span
                                    className="absolute inset-0 border border-dashed border-blue-500/60 rounded-md bg-blue-50/70"
                                    style={{ top: '2px', bottom: '2px', left: '-2px', right: '-2px' }}
                                />
                                <span className="absolute -top-[3px] -left-[5px] w-[6px] h-[6px] bg-blue-500 rounded-full" />
                                <span className="absolute -top-[3px] -right-[5px] w-[6px] h-[6px] bg-blue-500 rounded-full" />
                                <span className="absolute -bottom-[3px] -left-[5px] w-[6px] h-[6px] bg-blue-500 rounded-full" />
                                <span className="absolute -bottom-[3px] -right-[5px] w-[6px] h-[6px] bg-blue-500 rounded-full" />
                            </span>{' '}
                            &amp; Values
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.75] max-w-[560px]">
                            Katalyx Solutions is an AI-powered digital innovation partner built for ambitious businesses, replacing fragmented legacy systems with intelligent, scalable, real-time infrastructure. Our mission is to ensure digital growth is driven by reliable systems - not complexity, inefficiency, or manual bottlenecks. We align strategy, technology, and execution to create measurable, long-term impact.
                        </p>
                    </div>
                </div>

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
                                <span className="absolute top-0 left-0 w-[6px] h-[6px] rounded-full bg-blue-300/70 shadow-[0_0_8px_2px_rgba(59,130,246,0.2)]" />
                                <span className="absolute top-0 right-0 w-[6px] h-[6px] rounded-full bg-cyan-300/70 shadow-[0_0_8px_2px_rgba(34,211,238,0.2)]" />
                                <span className="absolute bottom-0 left-0 w-[6px] h-[6px] rounded-full bg-blue-200/70 shadow-[0_0_8px_2px_rgba(59,130,246,0.14)]" />
                                <span className="absolute bottom-0 right-0 w-[6px] h-[6px] rounded-full bg-cyan-200/70 shadow-[0_0_8px_2px_rgba(34,211,238,0.14)]" />

                                <span className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
                                <span className="absolute left-0 top-[10%] bottom-[40%] w-[1px] bg-gradient-to-b from-slate-300/70 via-slate-200/50 to-transparent" />
                                <span className="absolute right-0 top-[10%] bottom-[40%] w-[1px] bg-gradient-to-b from-slate-300/70 via-slate-200/50 to-transparent" />

                                <div
                                    className="absolute bottom-0 right-0 w-[52%] h-[52%] rounded-br-2xl pointer-events-none z-0"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse at 100% 100%, rgba(239,246,255,0.92) 0%, rgba(219,234,254,0.64) 36%, rgba(191,219,254,0.22) 56%, transparent 74%)',
                                    }}
                                />
                                <div
                                    className="absolute -bottom-2 -right-2 w-[36%] h-[36%] rounded-full pointer-events-none z-0 blur-xl"
                                    style={{
                                        background:
                                            'radial-gradient(circle, rgba(96,165,250,0.28) 0%, rgba(96,165,250,0.12) 45%, transparent 75%)',
                                    }}
                                />

                                <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(96,165,250,0.2)_0%,_rgba(125,211,238,0.12)_40%,_transparent_74%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                <div className="relative z-10 mb-6 w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-all duration-300">
                                    <value.icon />
                                </div>

                                <h3 className="relative z-10 text-[18px] md:text-[20px] font-semibold text-gray-900 mb-3 tracking-tight">
                                    {value.title}
                                </h3>

                                <p className="relative z-10 text-[13px] md:text-[14px] text-gray-600 leading-[1.7] flex-1">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MissionValues;

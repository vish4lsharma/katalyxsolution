import React, { useState, useEffect, useRef } from 'react';
import SectionWrapper from './Shared/SectionWrapper';
import { motion } from 'framer-motion';
import { Code, Users, Shield, BarChart3 } from 'lucide-react';

const stats = [
    { target: 3, suffix: '+', label: 'Innovative Products', decimals: 0 },
    { target: 100, suffix: '%', label: 'Client Satisfaction', decimals: 0 },
    { target: 99.9, suffix: '%', label: 'Uptime Guarantee', decimals: 1 },
    { target: 2, suffix: 'X', label: 'Revenue Growth', decimals: 0 },
];

const statIcons = [Code, Users, Shield, BarChart3];

const AnimatedNumber = ({ value = 0, prefix = '', suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const target = Number(value) || 0;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 1500;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(current);
                        }
                    }, Math.max(8, Math.floor(duration / steps)));
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value, hasAnimated]);

    const formatNumber = (num) => {
        const opts = { minimumFractionDigits: decimals, maximumFractionDigits: decimals };
        if (decimals === 0) {
            return Math.round(num).toLocaleString();
        }
        return Number(num).toLocaleString(undefined, opts);
    };

    return (
        <span ref={ref} className="font-variant-numeric tabular-nums">
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section data-navbar-theme='dark' className='pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] relative overflow-hidden'>
            {/* Subtle background gradient to match hero theme */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#14141c] via-[#0f1624] to-[#071023] opacity-90' />

            <div className='max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-20 lg:gap-24 items-center'>
                    {/* Left Content */}
                    <SectionWrapper>
                        <h2 className='text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white leading-[0.95] tracking-tight'>
                            <span className='block'>Where Innovation Meets</span>
                            <span className='block mt-2 text-sky-400 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black'>
                                Measurable Growth.
                            </span>
                        </h2>
                        <p className='mt-8 text-sm sm:text-base md:text-lg text-gray-200 max-w-md font-normal leading-relaxed border-l-2 border-sky-400/80 pl-6'>
                            Our solutions are built with precision, transparency, and performance — ensuring every client receives measurable value and long-term impact.
                        </p>
                        <div className='mt-12'>
                            <a
                                href='/blog#case-studies'
                                className='inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:opacity-95 transition-all duration-300 shadow-xl'
                            >
                                See Blogs
                                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </a>
                        </div>
                    </SectionWrapper>

                    {/* Right Content - Stats Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
                        {stats.map((stat, index) => (
                            <SectionWrapper key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className={`relative overflow-hidden h-full transition-all duration-300 group flex flex-col justify-between min-h-[200px] hover:shadow-2xl hover:-translate-y-1`}
                                >
                                    {/* gradient border overlay (appears on hover) */}
                                    {/* inner card (glassmorphism, no gradient overlay) */}
                                    <div className='relative z-10 h-full p-8 bg-gray-900/30 backdrop-blur-md rounded-3xl border border-white/10 transition-all duration-300 flex flex-col justify-between'>
                                        <div>
                                            {/* icon */}
                                            {(() => {
                                                const Icon = statIcons[index];
                                                return Icon ? <Icon className='w-6 h-6 mb-4 text-sky-400' /> : null;
                                            })()}

                                                <div className='text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight transition-all'>
                                                    <AnimatedNumber value={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
                                                </div>
                                        </div>

                                        <p className={`text-sky-400 font-semibold text-xs sm:text-sm tracking-widest uppercase`}>{stat.label}</p>
                                    </div>
                                </motion.div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

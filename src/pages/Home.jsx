import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, BarChart3, Users, Code, Globe as GlobeIcon, Cpu, ChevronRight, Calendar, BookOpen, Brain, Briefcase, Settings, Lightbulb, Mail, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import EnergyButton from '../components/effects/EnergyButton';
 
import Counter from '../components/ui/Counter';

import camuImg from '../assets/images/camu.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import abhiroomImg from '../assets/images/abhiroom.jpg';
import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0 },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
};

const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0 },
};

const staggerGroup = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const textSlideUp = {
    hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.55, delay, ease: 'easeOut' },
    }),
};

const textSlideIn = {
    hidden: { opacity: 0, x: -20, filter: 'blur(3px)' },
    show: (delay = 0) => ({
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.55, delay, ease: 'easeOut' },
    }),
};

const textPopIn = {
    hidden: { opacity: 0, scale: 0.94, y: 10 },
    show: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.45, delay, ease: 'easeOut' },
    }),
};

const Home = () => {
    const whoSectionRef = useRef(null);
    const { scrollY } = useScroll();
    const overlapOffset = useTransform(scrollY, [0, 700], [240, 0]);
    const smoothOverlapOffset = useSpring(overlapOffset, { stiffness: 70, damping: 20, mass: 0.7 });
    const { scrollYProgress: whoScrollProgress } = useScroll({
        target: whoSectionRef,
        offset: ['start 92%', 'start 55%'],
    });
    const whoSectionOffset = useTransform(whoScrollProgress, [0, 1], [140, 0]);
    const smoothWhoSectionOffset = useSpring(whoSectionOffset, { stiffness: 72, damping: 22, mass: 0.7 });

    return (
        <>
            <Helmet>
                <title>Katalyx Solutions - Transforming Ideas into Innovation</title>
                <meta name="description" content="Katalyx Solutions is a dynamic startup delivering next-gen AI, cloud, and digital transformation solutions." />
            </Helmet>

            <div className="bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846]">
                <div className="sticky top-0 z-0">
                    {/* Hero Section */}
                    <HeroSection />
                </div>

                <motion.div
                    className="relative z-20 bg-[#f8fbff] rounded-t-[32px] md:rounded-t-[40px]"
                    style={{ y: smoothOverlapOffset }}
                >
                {/* Stats Section */}
                <StatsSection />

            {/* About Us Preview */}
            <section data-navbar-theme="light" className="py-24 bg-[#f8fbff] relative overflow-hidden rounded-t-[28px] md:rounded-t-[36px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.08),transparent_48%),radial-gradient(circle_at_86%_74%,rgba(245,158,11,0.06),transparent_55%)]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            className="max-w-2xl"
                            variants={staggerGroup}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <motion.span variants={textPopIn} custom={0.02} className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase rounded-full px-3 py-1 border border-sky-300 bg-transparent text-sky-500 mb-4">
                                Digital Evolution Engine
                            </motion.span>
                            <motion.h2 variants={textSlideIn} custom={0.08} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Driven by <span className="text-slate-900">Passion, Precision</span> and <span className="text-sky-500">Future-Ready Technology</span>
                            </motion.h2>
                            <motion.p variants={textSlideUp} custom={0.14} className="text-slate-700 text-lg leading-relaxed mb-5">
                                Katalyx Solutions turns bold ideas into powerful digital systems.
                                {/* Katalyx Solutions operates as a strategic innovation partner that helps businesses translate bold ideas into practical digital systems. Our startup agility, product thinking, and engineering depth let us move faster from concept to impact. */}
                            </motion.p>
                            <motion.p variants={textSlideUp} custom={0.2} className="text-slate-600 text-lg leading-relaxed mb-8">
                                {/* We architect robust ERP ecosystems, intuitive web platforms, and AI-powered intelligence layers that simplify operational complexity, accelerate decisions, and unlock scalable growth. */}
                                We combine startup agility, product thinking, and engineering depth to build scalable ERP platforms, intuitive web experiences, and AI-driven intelligence that fuels growth.
                            </motion.p>

                            <motion.div variants={textPopIn} custom={0.24}>
                                <Link to="/about" className="inline-flex items-center px-7 py-3.5 rounded-xl font-bold transition-all duration-300 border border-sky-500 text-white bg-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-[0_12px_28px_rgba(14,116,144,0.24)]">
                                Read Our Story <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                        >
                            <div className="absolute inset-0 blur-3xl bg-sky-200/60" />
                            <div className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 md:p-8 overflow-hidden shadow-[0_12px_36px_rgba(15,23,42,0.08)]">

                                <motion.div
                                    className="relative mb-5 rounded-2xl border border-sky-200 bg-[#eaf4ff] px-3.5 py-3.5 overflow-hidden"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                >
                                    <motion.div
                                        className="absolute -inset-6 bg-sky-300/25 blur-2xl"
                                        animate={{ opacity: [0.2, 0.48, 0.2] }}
                                        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                                        aria-hidden
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]"
                                        animate={{ x: ['-120%', '120%'] }}
                                        transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
                                        aria-hidden
                                    />

                                    <div className="relative mb-2 rounded-xl border border-sky-200 bg-white/92 px-3 py-2.5">
                                        <div className="grid grid-cols-4 gap-2 text-[10px] uppercase tracking-[0.1em] text-sky-700 mb-2">
                                            <span>Discovery</span>
                                            <span>Design</span>
                                            <span>Automation</span>
                                            <span>Scale</span>
                                        </div>

                                        <div className="relative h-7">
                                            <div className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-[2px] bg-sky-200" />
                                            <motion.div
                                                className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-[2px] bg-sky-500 origin-left"
                                                animate={{ scaleX: [0.2, 1, 0.2] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                            />

                                            {[8, 35, 63, 92].map((point, idx) => (
                                                <motion.span
                                                    key={`flow-node-${point}`}
                                                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white border border-sky-500"
                                                    style={{ left: `${point}%` }}
                                                    animate={{ scale: [1, 1.16, 1], opacity: [0.8, 1, 0.8] }}
                                                    transition={{ duration: 2.1, delay: idx * 0.2, repeat: Infinity }}
                                                />
                                            ))}

                                            <motion.span
                                                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-500 border-2 border-white shadow-[0_0_0_3px_rgba(125,211,252,0.3)]"
                                                animate={{ left: ['8%', '92%'], opacity: [0, 1, 1, 0] }}
                                                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative mt-2.5 mb-1.5 flex items-center justify-between">
                                        {['Brief', 'Blueprint', 'Automate', 'Launch'].map((tag, idx) => (
                                            <motion.span
                                                key={tag}
                                                className="text-[10px] px-2 py-1 rounded-full border border-sky-300 bg-transparent text-sky-500 tracking-[0.08em] uppercase"
                                                animate={{ y: [0, -2, 0], opacity: [0.72, 1, 0.72] }}
                                                transition={{ duration: 1.9, delay: idx * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="relative grid grid-cols-4 gap-2 mt-3">
                                        {[0, 1, 2, 3].map((idx) => (
                                            <motion.div
                                                key={`signal-${idx}`}
                                                className="h-1.5 rounded-full bg-sky-100 overflow-hidden"
                                            >
                                                <motion.span
                                                    className="block h-full bg-sky-500"
                                                    animate={{ width: ['18%', '100%', '18%'] }}
                                                    transition={{ duration: 2.6, delay: idx * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Cpu, title: 'Modern Tech Stack', detail: 'Cloud-native architecture, AI tooling, and reliable engineering standards.', tone: 'text-cyan-600' },
                                        { icon: GlobeIcon, title: 'Global Vision', detail: 'Products designed for scale across markets, teams, and platforms.', tone: 'text-blue-600' },
                                        { icon: Brain, title: 'Applied Intelligence', detail: 'Data-to-decision pipelines that turn insights into business action.', tone: 'text-sky-600' },
                                        { icon: Shield, title: 'Built for Trust', detail: 'Secure foundations, resilient delivery, and measurable outcomes.', tone: 'text-indigo-600' },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.title}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: i * 0.08 }}
                                        >
                                            <item.icon className={`${item.tone} mb-3`} size={22} />
                                            <h4 className="font-semibold text-slate-900 mb-1.5">{item.title}</h4>
                                            <p className="text-xs leading-relaxed text-slate-600">{item.detail}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section data-navbar-theme="light" className="py-24 bg-[#f8fbff] relative overflow-hidden rounded-t-[28px] md:rounded-t-[36px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.08),transparent_48%),radial-gradient(circle_at_86%_74%,rgba(245,158,11,0.06),transparent_55%)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <motion.span initial="hidden" whileInView="show" custom={0.02} variants={textPopIn} viewport={{ once: true, amount: 0.4 }} className="inline-flex mb-4 rounded-full border border-sky-300 bg-transparent px-3 py-1 text-[11px] tracking-[0.14em] uppercase text-sky-500">
                                Product Showcase
                            </motion.span>
                            <motion.h2 initial="hidden" whileInView="show" custom={0.08} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-4xl font-bold text-slate-900 mb-4">Featured <span className="text-sky-500">Work</span></motion.h2>
                            <motion.p initial="hidden" whileInView="show" custom={0.14} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-slate-600 max-w-2xl">Real-world solutions we've engineered to solve complex business challenges.</motion.p>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
                            <Link to="/products" className="hidden md:inline-flex items-center px-7 py-3.5 rounded-xl font-bold transition-all duration-300 border border-sky-500 text-white bg-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-[0_12px_28px_rgba(14,116,144,0.24)]">
                                View all projects <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Camu ERP', desc: 'Comprehensive Campus Management', img: camuImg, id: 'camu-erp', signal: 'Education ERP Core' },
                            { name: 'HealthcareX24.com', desc: 'Next-Gen Medical ERP', img: clinicImg, id: 'healthcarex24', signal: 'Healthcare Automation Grid' },
                            { name: 'Abhiroom', desc: 'Smart Accommodation Solutions', img: abhiroomImg, id: 'abhiroom', signal: 'Hospitality Intelligence Stack' },
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.16 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="group relative rounded-[26px] border border-slate-200 bg-white backdrop-blur-xl overflow-hidden hover:border-sky-300 transition-all duration-300 shadow-[0_10px_26px_rgba(15,23,42,0.07)]"
                            >
                                <div className="absolute -inset-px rounded-[26px] opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
                                <div className="relative h-48 overflow-hidden bg-slate-900/10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent z-10" />
                                    <motion.div className="absolute inset-0 z-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" animate={{ x: ['-120%', '120%'] }} transition={{ duration: 3.6, delay: i * 0.5, repeat: Infinity, ease: 'linear' }} />
                                    <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-82 group-hover:opacity-100" />
                                    <span className="absolute top-4 left-4 z-30 rounded-full border border-sky-300 bg-[#f8fbff]/90 px-3 py-1 text-[10px] tracking-[0.12em] uppercase text-sky-500">
                                        {project.signal}
                                    </span>
                                </div>
                                <div className="relative p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                                    <p className="text-slate-600 text-sm mb-4">{project.desc}</p>
                                    <Link to={`/products/${project.id}`} className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 border border-sky-300 bg-transparent text-sky-500 hover:text-sky-600 hover:border-sky-400">
                                        View Case Study <ChevronRight size={14} className="ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/products" className="inline-flex items-center px-7 py-3.5 rounded-xl font-bold transition-all duration-300 border border-sky-500 text-white bg-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-[0_12px_28px_rgba(14,116,144,0.24)]">
                            View all projects <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Solutions */}
            <section data-navbar-theme="light" className="py-24 bg-[#f8fbff] relative overflow-hidden rounded-t-[28px] md:rounded-t-[36px]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span initial="hidden" whileInView="show" custom={0.02} variants={textPopIn} viewport={{ once: true, amount: 0.4 }} className="inline-flex mb-4 rounded-full border border-sky-300 bg-transparent px-3 py-1 text-[11px] tracking-[0.14em] uppercase text-sky-500">
                            Capability Grid
                        </motion.span>
                        <motion.h2 initial="hidden" whileInView="show" custom={0.08} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-4xl font-bold text-slate-900 mb-4">Our <span className="text-sky-500">Expertise</span></motion.h2>
                        <motion.p initial="hidden" whileInView="show" custom={0.14} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-slate-600 max-w-2xl mx-auto">Driving business value through integrated technology developed by our expert team.</motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'AI & Analytics', desc: 'Predictive modeling and automated workflows.', icon: Zap, tone: 'text-cyan-600', tag: 'Neural Ops' },
                            { title: 'Cloud Services', desc: 'Scalable infrastructure for growing startups.', icon: GlobeIcon, tone: 'text-blue-600', tag: 'Elastic Cloud' },
                            { title: 'Digital Consulting', desc: 'Strategic tech roadmaps for digital success.', icon: BarChart3, tone: 'text-sky-600', tag: 'Strategy Engine' }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="relative bg-white p-8 rounded-2xl border border-slate-200 overflow-hidden shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                            >
                                <span className="relative inline-flex mb-4 rounded-full border border-sky-300 bg-transparent px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-sky-500">{service.tag}</span>
                                <service.icon className={`w-10 h-10 mb-6 ${service.tone}`} />
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                                <div className="mt-5 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                                    <span className="block h-full bg-sky-500" style={{ width: '72%' }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Insights */}
            <section data-navbar-theme="light" className="py-24 bg-[#f8fbff] relative border-t border-slate-200 overflow-hidden rounded-t-[28px] md:rounded-t-[36px]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <motion.h2 initial="hidden" whileInView="show" custom={0.06} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-3xl font-bold text-slate-900 mb-2">Recent <span className="text-sky-500">Insights</span></motion.h2>
                            <motion.p initial="hidden" whileInView="show" custom={0.12} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-slate-600">Trends and thoughts from our tech experts.</motion.p>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
                            <Link to="/blog" className="hidden md:inline-flex items-center px-7 py-3.5 rounded-xl font-bold transition-all duration-300 border border-sky-500 text-white bg-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-[0_12px_28px_rgba(14,116,144,0.24)]">
                                View all posts <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                id: 'ai-in-enterprise',
                                title: 'The Future of AI in Enterprise',
                                category: 'Artificial Intelligence',
                                date: 'Oct 12, 2023',
                                excerpt: 'How generative AI is reshaping business operations and decision making.',
                                icon: BookOpen,
                                image: aiBlog
                            },
                            {
                                id: 'cloud-security-best-practices',
                                title: 'Cloud Security Best Practices',
                                category: 'Cybersecurity',
                                date: 'Sep 28, 2023',
                                excerpt: 'Essential strategies to protect your infrastructure in a multi-cloud environment.',
                                icon: Zap,
                                image: cloudBlog
                            },
                            {
                                id: 'digital-transformation-roadmap',
                                title: 'Digital Transformation Roadmap',
                                category: 'Strategy',
                                date: 'Sep 15, 2023',
                                excerpt: 'A step-by-step guide to modernizing your legacy systems.',
                                icon: Cpu,
                                image: strategyBlog
                            }
                        ].map((post, i) => (
                            <Link to={`/blog/${post.id}`} key={i} className="group h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-sky-300 transition-all h-full flex flex-col group shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="border border-sky-300 bg-transparent text-sky-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-slate-500 text-xs flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors flex-1">{post.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    </div>
                                    <div className="px-6 py-4 border-t border-slate-200 flex items-center text-sm font-medium text-slate-600 group-hover:text-sky-700 transition-colors mt-auto">
                                        Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/blog" className="inline-flex items-center px-7 py-3.5 rounded-xl font-bold transition-all duration-300 border border-sky-500 text-white bg-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-[0_12px_28px_rgba(14,116,144,0.24)]">
                            View all posts <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="relative bg-[#f8fbff]">
            {/* ── Services Section ── */}
            <section data-navbar-theme="light" className="py-24 bg-[#f8fbff] relative border-t border-slate-200 overflow-hidden rounded-t-[28px] md:rounded-t-[36px] sticky top-0 z-0">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-transparent text-sky-500 text-sm font-semibold mb-4 border border-sky-300"
                            initial="hidden"
                            whileInView="show"
                            custom={0.02}
                            variants={textPopIn}
                            viewport={{ once: true }}
                        >
                            What We Do
                        </motion.span>
                        <motion.h2 initial="hidden" whileInView="show" custom={0.08} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-4xl font-bold text-slate-900 mb-4">Our <span className="text-sky-500">Services</span></motion.h2>
                        <motion.p initial="hidden" whileInView="show" custom={0.14} variants={textSlideUp} viewport={{ once: true, amount: 0.4 }} className="text-slate-600 max-w-2xl mx-auto">End-to-end intelligent solutions to help your business grow faster in the digital era.</motion.p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Brain,
                                title: 'AI Solutions',
                                desc: 'Custom AI apps, chatbots, automation pipelines, and LLM integrations tailored to your business needs.',
                                tone: 'text-cyan-700',
                                card: 'bg-cyan-50 border-cyan-200'
                            },
                            {
                                icon: Code,
                                title: 'Web & SaaS Development',
                                desc: 'Full-stack web apps, SaaS dashboards, and scalable platforms built with modern tech stacks.',
                                tone: 'text-blue-700',
                                card: 'bg-blue-50 border-blue-200'
                            },
                            {
                                icon: Settings,
                                title: 'Business Automation',
                                desc: 'Workflow automation, third-party integrations, and internal tools to streamline your operations.',
                                tone: 'text-sky-700',
                                card: 'bg-sky-50 border-sky-200'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Tech Consulting',
                                desc: 'Architecture reviews, scaling strategies, and MVP development guidance for startups and teams.',
                                tone: 'text-indigo-700',
                                card: 'bg-indigo-50 border-indigo-200'
                            },
                        ].map((svc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white backdrop-blur-sm border border-slate-200 hover:border-sky-300 rounded-2xl p-6 flex flex-col gap-4 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${svc.card} ${svc.tone}`}>
                                    <svc.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed flex-1">{svc.desc}</p>
                                <Link to="/services" className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 border border-sky-300 bg-transparent text-sky-500 hover:text-sky-600 hover:border-sky-400 mt-auto">
                                    Learn more <ChevronRight size={14} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About Katalyx Section ── */}
            <motion.section
                ref={whoSectionRef}
                data-navbar-theme="dark"
                className="py-24 -mt-16 md:-mt-24 bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846] relative z-20 overflow-hidden"
                style={{ y: smoothWhoSectionOffset }}
            >
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0a1220]/82 border border-white/12 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-[0_14px_34px_rgba(7,20,38,0.38)]"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.16),transparent_52%)] rounded-3xl" />
                            <div className="relative z-10">
                                <motion.span
                                    className="inline-block py-1 px-3 rounded-full bg-transparent text-sky-300 text-sm font-semibold mb-6 border border-sky-300/60"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Who We Are
                                </motion.span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-sky-300">Katalyx</span></h2>
                                <p className="text-slate-100 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
                                    Katalyx Solutions is an emerging AI and software development company focused on building intelligent digital products, automation systems, and scalable platforms.
                                </p>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                                    We help startups and businesses transform ideas into high-performance technology solutions. Founded by engineers building AI-driven software and scalable digital platforms for modern businesses.
                                </p>
                                <div className="mt-8">
                                    <Link to="/about">
                                        <EnergyButton variant="primary">Our Story <ArrowRight size={18} /></EnergyButton>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            </div>

            {/* ── CTA Section ── */}
            <section data-navbar-theme="dark" className="py-24 bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <span className="text-sky-300">Intelligent !</span></h2>
                        {/* <p className="text-slate-300 text-sm mb-2">Let’s discuss your project, idea, or automation needs.</p> */}
                        <p className="text-slate-200 text-lg max-w-xl mx-auto mb-10">Have a project in mind? We'd love to hear about it. Let's turn your vision into a working product.</p>
                        <a href="mailto:info@katalyxsolutions.com">
                            <EnergyButton variant="primary">Contact Us <Mail size={18} /></EnergyButton>
                        </a>
                    </motion.div>
                </div>
            </section>
                </motion.div>
            </div>
        </>
    );
};

export default Home;

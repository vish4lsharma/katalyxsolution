import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, BarChart3, Users, Code, Globe as GlobeIcon, Cpu, ChevronRight, Calendar, BookOpen, Brain, Briefcase, Settings, Lightbulb, Mail, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import EnergyButton from '../components/effects/EnergyButton';
import StatsSection from '../components/StatsSection';
 
import Counter from '../components/ui/Counter';

import camuImg from '../assets/images/camu.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import abhiroomImg from '../assets/images/abhiroom.jpg';
import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Katalyx Solutions - Transforming Ideas into Innovation</title>
                <meta name="description" content="Katalyx Solutions is a dynamic startup delivering next-gen AI, cloud, and digital transformation solutions." />
            </Helmet>

            {/* Hero Section */}
            <HeroSection />

            {/* Stats Section */}
            <StatsSection />

            {/* About Us Preview */}
            <section className="py-24 bg-[#081321] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#081321]/90" />
                <div className="absolute inset-0 bg-[#0f1d36]/45" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase rounded-full px-3 py-1 border border-cyan-300/30 bg-cyan-400/10 text-cyan-100 mb-4">
                                Digital Evolution Engine
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Driven by <span className="text-slate-100">Passion, Precision</span> and <span className="gradient-text-base gradient-future-ready-tech">Future-Ready Technology</span>
                            </h2>
                            <p className="text-slate-200/90 text-lg leading-relaxed mb-5">
                                Katalyx Solutions operates as a strategic innovation partner that helps businesses translate bold ideas into practical digital systems. Our startup agility, product thinking, and engineering depth let us move faster from concept to impact.
                            </p>
                            <p className="text-slate-300/90 text-lg leading-relaxed mb-8">
                                We architect robust ERP ecosystems, intuitive web platforms, and AI-powered intelligence layers that simplify operational complexity, accelerate decisions, and unlock scalable growth.
                            </p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-cyan-200 font-semibold border border-cyan-200/30 bg-cyan-300/10 rounded-full px-5 py-2.5 hover:bg-cyan-300/20 hover:gap-3 transition-all">
                                Read Our Story <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                        >
                            <div className="absolute inset-0 blur-3xl bg-[#12233e]/70" />
                            <div className="relative rounded-3xl border border-cyan-100/20 bg-slate-950/45 backdrop-blur-xl p-6 md:p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10" />

                                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Cpu, title: 'Modern Tech Stack', detail: 'Cloud-native architecture, AI tooling, and reliable engineering standards.', tone: 'text-cyan-200' },
                                        { icon: GlobeIcon, title: 'Global Vision', detail: 'Products designed for scale across markets, teams, and platforms.', tone: 'text-teal-200' },
                                        { icon: Brain, title: 'Applied Intelligence', detail: 'Data-to-decision pipelines that turn insights into business action.', tone: 'text-sky-200' },
                                        { icon: Shield, title: 'Built for Trust', detail: 'Secure foundations, resilient delivery, and measurable outcomes.', tone: 'text-emerald-200' },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-slate-900/45 p-4"
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: i * 0.08 }}
                                        >
                                            <item.icon className={`${item.tone} mb-3`} size={22} />
                                            <h4 className="font-semibold text-white mb-1.5">{item.title}</h4>
                                            <p className="text-xs leading-relaxed text-slate-300/90">{item.detail}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-gradient-to-br from-[#111b31] to-[#0b1224] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="gradient-text-base gradient-work">Work</span></h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">Real-world solutions we've engineered to solve complex business challenges.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Camu ERP', desc: 'Comprehensive Campus Management', img: camuImg, id: 'camu-erp' },
                            { name: 'HealthcareX24.com', desc: 'Next-Gen Medical ERP', img: clinicImg, id: 'healthcarex24' },
                            { name: 'Abhiroom', desc: 'Smart Accommodation Solutions', img: abhiroomImg, id: 'abhiroom' },
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative overflow-hidden rounded-2xl border border-slate-700 hover:border-cyan-300/40 transition-all bg-[#132038]"
                            >
                                <div className="h-48 overflow-hidden bg-gray-900 relative">
                                    <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">{project.name}</h3>
                                    <p className="text-slate-300 text-sm mb-4">{project.desc}</p>
                                    <Link to={`/products/${project.id}`} className="text-cyan-200 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                                        View Case Study <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/products">
                            <EnergyButton variant="secondary">View All Projects</EnergyButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Solutions */}
            <section className="py-24 bg-[#0b1327] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our <span className="gradient-text-base gradient-expertise">Expertise</span></h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">Driving business value through integrated technology developed by our expert team.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'AI & Analytics', desc: 'Predictive modeling and automated workflows.', icon: Zap, tone: 'text-cyan-200' },
                            { title: 'Cloud Services', desc: 'Scalable infrastructure for growing startups.', icon: GlobeIcon, tone: 'text-teal-200' },
                            { title: 'Digital Consulting', desc: 'Strategic tech roadmaps for digital success.', icon: BarChart3, tone: 'text-sky-200' }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-300/40 transition-all hover:bg-slate-800/80 hover:-translate-y-1 duration-300"
                            >
                                <service.icon className={`w-10 h-10 mb-6 ${service.tone}`} />
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Insights */}
            <section className="py-24 bg-[#0d162b] relative border-t border-slate-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Recent <span className="gradient-text-base gradient-insights">Insights</span></h2>
                            <p className="text-slate-300">Trends and thoughts from our tech experts.</p>
                        </div>
                        <Link to="/blog" className="hidden md:flex items-center gap-2 text-cyan-200 hover:text-white transition-colors">
                            View all posts <ArrowRight size={16} />
                        </Link>
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
                                    className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-300/40 transition-all h-full flex flex-col group shadow-lg hover:shadow-cyan-400/10"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10" />
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-cyan-500/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors flex-1">{post.title}</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    </div>
                                    <div className="px-6 py-4 border-t border-slate-800 flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors mt-auto">
                                        Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/blog" className="text-cyan-200 hover:text-white inline-flex items-center gap-2">
                            View all posts <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Services Section ── */}
            <section className="py-24 bg-gradient-to-br from-[#0c162d] to-[#11223a] relative border-t border-slate-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-cyan-400/20 text-cyan-200 text-sm font-semibold mb-4 border border-cyan-300/30"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            What We Do
                        </motion.span>
                        <h2 className="text-4xl font-bold text-white mb-4">Our <span className="gradient-text-base gradient-services">Services</span></h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">End-to-end intelligent solutions to help your business grow faster in the digital era.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Brain,
                                title: 'AI Solutions',
                                desc: 'Custom AI apps, chatbots, automation pipelines, and LLM integrations tailored to your business needs.',
                                tone: 'text-cyan-200',
                                card: 'bg-cyan-400/10 border-cyan-300/30'
                            },
                            {
                                icon: Code,
                                title: 'Web & SaaS Development',
                                desc: 'Full-stack web apps, SaaS dashboards, and scalable platforms built with modern tech stacks.',
                                tone: 'text-teal-200',
                                card: 'bg-teal-400/10 border-teal-300/30'
                            },
                            {
                                icon: Settings,
                                title: 'Business Automation',
                                desc: 'Workflow automation, third-party integrations, and internal tools to streamline your operations.',
                                tone: 'text-sky-200',
                                card: 'bg-sky-400/10 border-sky-300/30'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Tech Consulting',
                                desc: 'Architecture reviews, scaling strategies, and MVP development guidance for startups and teams.',
                                tone: 'text-emerald-200',
                                card: 'bg-emerald-400/10 border-emerald-300/30'
                            },
                        ].map((svc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 hover:border-cyan-300/40 rounded-2xl p-6 flex flex-col gap-4 hover:bg-slate-800/60 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-400/10"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${svc.card} ${svc.tone}`}>
                                    <svc.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed flex-1">{svc.desc}</p>
                                <Link to="/services" className="text-cyan-200 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                                    Learn more <ChevronRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About Katalyx Section ── */}
            <section className="py-24 bg-[#0c1529] relative border-t border-slate-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-900 to-slate-800/60 border border-slate-700 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-cyan-400/8 rounded-3xl" />
                            <div className="relative z-10">
                                <motion.span
                                    className="inline-block py-1 px-3 rounded-full bg-cyan-400/20 text-cyan-200 text-sm font-semibold mb-6 border border-cyan-300/30"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Who We Are
                                </motion.span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="gradient-text-base gradient-katalyx">Katalyx</span></h2>
                                <p className="text-slate-200 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
                                    Katalyx Solutions is an emerging AI and software development company focused on building intelligent digital products, automation systems, and scalable platforms.
                                </p>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                                    We help startups and businesses transform ideas into high-performance technology solutions. Founded by engineers building AI-driven software and scalable digital platforms for modern businesses.
                                </p>
                                <div className="mt-8">
                                    <Link to="/about">
                                        <EnergyButton variant="secondary">Our Story <ArrowRight size={18} /></EnergyButton>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="py-24 bg-gradient-to-r from-cyan-900/35 via-[#111f37] to-teal-900/35 relative border-t border-slate-800">
                <div className="absolute inset-0 bg-black/30" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <span className="gradient-text-base gradient-intelligent">Intelligent</span></h2>
                        <p className="text-slate-300 text-sm mb-2">Let’s discuss your project, idea, or automation needs.</p>
                        <p className="text-slate-200 text-lg max-w-xl mx-auto mb-10">Have a project in mind? We'd love to hear about it. Let's turn your vision into a working product.</p>
                        <a href="mailto:info@katalyxsolutions.com">
                            <EnergyButton variant="primary">Contact Us <Mail size={18} /></EnergyButton>
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;

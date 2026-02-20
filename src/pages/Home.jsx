import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, BarChart3, Users, Code, Globe as GlobeIcon, Cpu, ChevronRight, Calendar, BookOpen, Brain, Briefcase, Settings, Lightbulb, Mail, MapPin } from 'lucide-react';
import Globe from '../components/3d/Globe';
import EnergyButton from '../components/effects/EnergyButton';
import Typewriter from '../components/ui/Typewriter';
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
                <title>Katalyx Solutions – AI Software, ERP & Digital Transformation Company India</title>
                <meta name="description" content="Katalyx Solutions builds AI-powered ERPs, SaaS platforms, campus management software, healthcare systems, and digital transformation solutions for businesses in India and worldwide." />
                <meta name="keywords" content="Katalyx Solutions, AI software India, ERP development India, SaaS company India, digital transformation India, campus ERP, healthcare ERP, cloud solutions India, Camu ERP, HealthcareX24" />
                <link rel="canonical" href="https://katalyxsolutions.com/" />
                <meta property="og:title" content="Katalyx Solutions – AI Software, ERP & Digital Transformation" />
                <meta property="og:description" content="We build AI-powered ERPs, SaaS platforms and cloud solutions for startups and enterprises. Get a free consultation today." />
                <meta property="og:url" content="https://katalyxsolutions.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="Katalyx Solutions – AI Software & ERP Company India" />
                <meta name="twitter:description" content="Next-gen AI ERPs, SaaS platforms and digital transformation solutions." />
                <meta name="twitter:image" content="https://katalyxsolutions.com/og-image.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Katalyx Solutions – Home",
                    "url": "https://katalyxsolutions.com/",
                    "description": "Katalyx Solutions builds AI-powered ERPs, SaaS platforms and digital transformation solutions for startups and enterprises in India.",
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }] },
                    "publisher": { "@type": "Organization", "name": "Katalyx Solutions", "url": "https://katalyxsolutions.com" }
                })}</script>
            </Helmet>


            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f1a] pt-20">
                {/* Clean Background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1a] to-[#0f0f1a] opacity-80" />

                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="z-10 order-2 md:order-1"
                    >
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30 tracking-widest uppercase"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            KATALYX Solutions
                        </motion.span>

                        <motion.p
                            className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Build Faster.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale Smarter.</span>
                        </motion.p>

                        {/* Heading Section */}
                        <div className="mb-8 relative z-20">
                            <motion.h1
                                className="text-4xl md:text-7xl font-bold leading-tight text-white mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <span className="block text-gray-400 text-3xl md:text-5xl mb-2">We build</span>
                                <div className="min-h-[1.5em] md:min-h-[1.2em]">
                                    <Typewriter
                                        text="Future-Ready Digital Solutions"
                                        speed={50}
                                        delay={0.5}
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                                    />
                                </div>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-300 leading-relaxed max-w-lg mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                            >
                                We are a passionate team of innovators dedicated to crafting scalable, high-performance digital solutions for modern enterprises.
                            </motion.p>
                            <motion.p
                                className="text-base text-blue-300/80 leading-relaxed max-w-lg mt-3 font-medium border-l-2 border-blue-500/40 pl-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.9 }}
                            >
                                Katalyx Solutions builds AI-powered software, automation systems, and scalable digital platforms for startups and businesses.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7 }}
                        >
                            <Link to="/products">
                                <EnergyButton variant="primary">
                                    Our Work <ArrowRight size={20} />
                                </EnergyButton>
                            </Link>
                            <Link to="/contact">
                                <EnergyButton variant="secondary">
                                    Let's Talk
                                </EnergyButton>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* 3D Globe / Visual - Responsive */}
                    <div className="order-1 md:order-2 h-[300px] md:h-[600px] w-full relative flex items-center justify-center">
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-3xl opacity-30" />
                            <Globe />
                        </div>
                    </div>
                </div>
            </section>

            {/* Creating Value Section (Stats Replacement) */}
            <section className="py-16 bg-[#0f0f1a] relative border-b border-gray-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Innovative Products', value: '3+', icon: Code },
                            { label: 'Client Satisfaction', value: '100%', icon: Users },
                            { label: 'Uptime Guarantee', value: '99.9%', icon: Shield },
                            { label: 'Growth Rate', value: 'Rapid', icon: BarChart3 },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/30 transition-all group"
                            >
                                <stat.icon className="w-8 h-8 mx-auto text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-3xl font-bold text-white mb-1">
                                    <Counter value={stat.value} />
                                </h3>
                                <p className="text-gray-400 font-medium text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Preview */}
            <section className="py-24 bg-[#0f0f1a] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">Driven by <span className="text-blue-500">Passion</span> & Technology</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                At Katalyx Solutions, we are more than just a software company; we are your strategic partners in digital evolution. As a dynamic startup, we bring agility, fresh perspectives, and cutting-edge expertise to every project.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Founded with a vision to simplify complexity, we specialize in building robust ERPs, intuitive web platforms, and AI-driven analytics that help businesses scale effortlessly.
                            </p>
                            <Link to="/about" className="text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Read Our Story <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                        <motion.div
                            className="flex-1 relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                                        <Cpu className="text-blue-400 mb-2" size={24} />
                                        <h4 className="font-bold text-white">Modern Tech</h4>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                                        <GlobeIcon className="text-purple-400 mb-2" size={24} />
                                        <h4 className="font-bold text-white">Global Vision</h4>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-blue-500">Work</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Real-world solutions we've engineered to solve complex business challenges.</p>
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
                                className="group relative overflow-hidden rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all bg-[#16213e]"
                            >
                                <div className="h-48 overflow-hidden bg-gray-900 relative">
                                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                                    <Link to={`/products/${project.id}`} className="text-blue-400 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
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
            <section className="py-24 bg-[#0f0f1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Driving business value through integrated technology developed by our expert team.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'AI & Analytics', desc: 'Predictive modeling and automated workflows.', color: 'blue', icon: Zap },
                            { title: 'Cloud Services', desc: 'Scalable infrastructure for growing startups.', color: 'cyan', icon: GlobeIcon },
                            { title: 'Digital Consulting', desc: 'Strategic tech roadmaps for digital success.', color: 'indigo', icon: BarChart3 }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/40 transition-all hover:bg-gray-800 hover:-translate-y-1 duration-300"
                            >
                                <service.icon className="w-10 h-10 text-blue-400 mb-6" />
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Insights */}
            <section className="py-24 bg-[#0f0f1a] relative border-t border-gray-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Recent Insights</h2>
                            <p className="text-gray-400">Trends and thoughts from our tech experts.</p>
                        </div>
                        <Link to="/blog" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-white transition-colors">
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
                                    className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all h-full flex flex-col group shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors flex-1">{post.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    </div>
                                    <div className="px-6 py-4 border-t border-gray-800 flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors mt-auto">
                                        Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/blog" className="text-blue-400 hover:text-white inline-flex items-center gap-2">
                            View all posts <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Services Section ── */}
            <section className="py-24 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] relative border-t border-gray-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            What We Do
                        </motion.span>
                        <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-blue-500">Services</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">End-to-end intelligent solutions to help your business grow faster in the digital era.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Brain,
                                title: 'AI Solutions',
                                desc: 'Custom AI apps, chatbots, automation pipelines, and LLM integrations tailored to your business needs.',
                                color: 'blue'
                            },
                            {
                                icon: Code,
                                title: 'Web & SaaS Development',
                                desc: 'Full-stack web apps, SaaS dashboards, and scalable platforms built with modern tech stacks.',
                                color: 'cyan'
                            },
                            {
                                icon: Settings,
                                title: 'Business Automation',
                                desc: 'Workflow automation, third-party integrations, and internal tools to streamline your operations.',
                                color: 'purple'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Tech Consulting',
                                desc: 'Architecture reviews, scaling strategies, and MVP development guidance for startups and teams.',
                                color: 'indigo'
                            },
                        ].map((svc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-blue-500/40 rounded-2xl p-6 flex flex-col gap-4 hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${svc.color}-500/10 border border-${svc.color}-500/20 text-${svc.color}-400`}>
                                    <svc.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">{svc.desc}</p>
                                <Link to="/services" className="text-blue-400 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                                    Learn more <ChevronRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About Katalyx Section ── */}
            <section className="py-24 bg-[#0f0f1a] relative border-t border-gray-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800/60 border border-gray-700 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl" />
                            <div className="relative z-10">
                                <motion.span
                                    className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Who We Are
                                </motion.span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-blue-500">Katalyx</span></h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
                                    Katalyx Solutions is an emerging AI and software development company focused on building intelligent digital products, automation systems, and scalable platforms.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
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
            <section className="py-24 bg-gradient-to-r from-blue-900/50 via-[#1a1a2e] to-indigo-900/50 relative border-t border-gray-800">
                <div className="absolute inset-0 bg-black/30" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Intelligent</span></h2>
                        <p className="text-gray-400 text-sm mb-2">Let’s discuss your project, idea, or automation needs.</p>
                        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">Have a project in mind? We'd love to hear about it. Let's turn your vision into a working product.</p>
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

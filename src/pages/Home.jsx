import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, BarChart3, Users, Code, Globe as GlobeIcon, Cpu, ChevronRight, Calculator, Calendar, BookOpen } from 'lucide-react';
import Globe from '../components/3d/Globe';
import CinematicBackground from '../components/effects/CinematicBackground';
import AnimatedText from '../components/effects/AnimatedText';
import EnergyButton from '../components/effects/EnergyButton';

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
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] pt-20">
                <CinematicBackground />
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="z-10"
                    >
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Startup Innovation Partner
                        </motion.span>
                        <AnimatedText className="text-4xl md:text-7xl font-bold leading-tight mb-6">
                            Building the Future, One Line of Code at a Time
                        </AnimatedText>
                        <motion.p
                            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            We are a passionate team of innovators dedicated to crafting scalable, high-performance digital solutions for modern enterprises.
                        </motion.p>
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:h-[600px] h-[400px] w-full relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl opacity-50" />
                        <Globe />
                    </motion.div>
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
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/30 transition-all"
                            >
                                <stat.icon className="w-8 h-8 mx-auto text-blue-400 mb-4" />
                                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
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
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-gray-700">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 p-4 rounded-xl">
                                        <Cpu className="text-blue-400 mb-2" size={24} />
                                        <h4 className="font-bold text-white">Modern Tech</h4>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-xl">
                                        <GlobeIcon className="text-purple-400 mb-2" size={24} />
                                        <h4 className="font-bold text-white">Global Vision</h4>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Journey / Timeline Section */}
            <section className="py-24 bg-[#0f0f1a] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-blue-500">Journey</span></h2>
                        <p className="text-gray-400">From a small startup to a global innovation partner.</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>

                        {/* Timeline Item 1: 2025 Founding */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20"
                        >
                            <div className="md:w-5/12 w-full pl-12 md:pl-0 md:pr-12 md:text-right mb-4 md:mb-0">
                                <h3 className="text-2xl font-bold text-white mb-2">Inception</h3>
                                <p className="text-gray-400">Katalyx Solutions founded by Vishal Sharma and Yash Gupta with a vision to redefine digital transformation.</p>
                            </div>
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full border-4 border-[#0f0f1a] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                            </div>
                            <div className="md:w-5/12 w-full pl-12 md:pl-12">
                                <span className="text-blue-400 font-bold text-xl">2025</span>
                            </div>
                        </motion.div>

                        {/* Timeline Item 2: Product Launch */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-12 md:mb-20"
                        >
                            <div className="md:w-5/12 w-full pl-12 md:pl-0 md:pl-12 text-left mb-4 md:mb-0">
                                <h3 className="text-2xl font-bold text-white mb-2">Product Launch</h3>
                                <p className="text-gray-400">Launched flagship solutions Camu ERP and ClinicX24, achieving rapid market adoption and client success.</p>
                            </div>
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full border-4 border-[#0f0f1a] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                                <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                            </div>
                            <div className="md:w-5/12 w-full pl-12 md:pr-12 md:pl-0 md:text-right">
                                <span className="text-purple-400 font-bold text-xl">Q4 2025</span>
                            </div>
                        </motion.div>

                        {/* Timeline Item 3: Global Expansion */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="relative flex flex-col md:flex-row items-center justify-between"
                        >
                            <div className="md:w-5/12 w-full pl-12 md:pl-0 md:pr-12 md:text-right mb-4 md:mb-0">
                                <h3 className="text-2xl font-bold text-white mb-2">Global Innovation Partner</h3>
                                <p className="text-gray-400">Scaling operations with over 100% growth, expanding our expert team, and entering international markets.</p>
                            </div>
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-full border-4 border-[#0f0f1a] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                            </div>
                            <div className="md:w-5/12 w-full pl-12 md:pl-12">
                                <span className="text-cyan-400 font-bold text-xl">2026</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section (New with Real Images) */}
            <section className="py-24 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-blue-500">Work</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Real-world solutions we've engineered to solve complex business challenges.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Camu ERP', desc: 'Comprehensive Campus Management', img: camuImg, id: 'camu-erp' },
                            { name: 'ClinicX24', desc: 'Next-Gen Medical ERP', img: clinicImg, id: 'clinicx24' },
                            { name: 'Abhiroom', desc: 'Smart Accommodation Solutions', img: abhiroomImg, id: 'abhiroom' },
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative overflow-hidden rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
                            >
                                <div className="h-48 overflow-hidden bg-gray-900">
                                    <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                </div>
                                <div className="p-6 bg-[#16213e]">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
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

            {/* Core Solutions (Existing Services) */}
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
                                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/40 transition-all hover:bg-gray-800/50"
                            >
                                <service.icon className="w-10 h-10 text-blue-400 mb-6" />
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team (New) */}
            <section className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Meet The <span className="text-blue-500">Leadership</span></h2>
                        <p className="text-gray-400">The visionaries behind Katalyx Solutions.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Vishal Sharma',
                                role: 'Co-Founder & CEO',
                                initials: 'VS',
                                bio: 'A visionary leader with deep expertise in strategic planning and business growth, driving Katalyx towards global recognition.'
                            },
                            {
                                name: 'Yash Gupta',
                                role: 'Co-Founder',
                                initials: 'YG',
                                bio: 'Passionate about product innovation and market strategy, ensuring our solutions solve real-world problems effectively.'
                            },
                            {
                                name: 'Anmol Babu',
                                role: 'CTO',
                                initials: 'AB',
                                bio: 'Tech architect with a mastery of cloud infrastructure and AI, leading our engineering teams to build scalable future-ready systems.'
                            }
                        ].map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-[#16213e] p-8 rounded-2xl text-center border border-gray-700 hover:border-blue-500/50 transition-all hover:-translate-y-2 group"
                            >
                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 ring-4 ring-gray-800 group-hover:ring-blue-500/30 transition-all shadow-lg">
                                    {leader.initials}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                                <p className="text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">{leader.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed opacity-80">{leader.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Insights / Blog (New) */}
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
                            <Link to={`/blog/${post.id}`} key={i} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all h-full flex flex-col group shadow-lg"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    </div>
                                    <div className="px-6 py-4 border-t border-gray-800 flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
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
        </>
    );
};

export default Home;

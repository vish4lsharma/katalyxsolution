import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Palette, Share2, ShieldCheck, Database, Server, Smartphone } from 'lucide-react';
import TechBackground from '../components/3d/TechBackground';

const Services = () => {
    const services = [
        {
            title: 'AI & Machine Learning',
            desc: 'Predictive analytics, NLP, and computer vision solutions.',
            icon: Database,
        },
        {
            title: 'Cloud Infrastructure',
            desc: 'AWS, Azure, and Google Cloud migration and management.',
            icon: Server,
        },
        {
            title: 'Cybersecurity',
            desc: 'Advanced threat detection and compliance management.',
            icon: ShieldCheck,
        },
        {
            title: 'Digital Experience',
            desc: 'UX/UI design and full-stack web development.',
            icon: Palette,
        },
        {
            title: 'Mobile Solutions',
            desc: 'Native and cross-platform mobile application development.',
            icon: Smartphone,
        },
        {
            title: 'IoT Integration',
            desc: 'Connecting devices for smart data collection and automation.',
            icon: Share2,
        },
    ];

    return (
        <>
            <Helmet>
                <title>Services - Katalyx Solutions</title>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-white py-32 relative overflow-hidden text-center">
                <TechBackground />
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        End-to-End <span className="text-blue-400">Technology Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        From strategy to execution, we deliver comprehensive solutions that drive business growth.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 bg-[#0f0f1a] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#0f0f1a]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all group backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform border border-blue-500/20">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;

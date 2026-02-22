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

    // unified card background (keeps all cards visually consistent)
    const cardBg = 'bg-gradient-to-br from-[#0f1724] to-[#071022]';

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
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`${cardBg} p-8 rounded-2xl shadow-lg transition-all group backdrop-blur-sm hover:scale-[1.01] hover:shadow-xl`}
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed transition-colors">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Zap, CheckCircle, Globe as GlobeIcon } from 'lucide-react';
import Globe3D from '../components/3d/Globe';
import Timeline from '../components/3d/Timeline';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Katalyx Solutions</title>
            </Helmet>

            <section className="bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] py-32 border-b border-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
                            Our Mission
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            We empower organizations to thrive in the digital age by creating intelligent, scalable, and resilient technology solutions. At Katalyx, we believe in the transformative power of data and design.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: 'Innovation', icon: Zap },
                                { title: 'Integrity', icon: CheckCircle },
                                { title: 'Global Reach', icon: GlobeIcon },
                                { title: 'People First', icon: Users },
                            ].map((val, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <val.icon className="text-blue-400 w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-gray-200">{val.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-96 w-full relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20">
                            <Globe3D />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-[#0f0f1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
                        <p className="text-gray-400">From a small startup to a global innovation partner.</p>
                        {/* Timeline component might need dark mode check, assuming it adapts or is transparent */}
                        <div className="hidden md:block">
                            <Timeline />
                        </div>
                        {/* Static Vertical Timeline for Mobile */}
                        <div className="md:hidden mt-12 space-y-8 text-left max-w-sm mx-auto">
                            {[
                                { year: '2025', text: 'Inception: Founded by Vishal Sharma & Yash Gupta.' },
                                { year: 'Q4 2025', text: 'Product Launch: Camu ERP & HealthcareX24.com launched.' },
                                { year: '2026', text: 'Scale: Global Innovation Partnership status.' }
                            ].map((milestone, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="bg-blue-600 px-3 py-1 rounded text-white font-bold text-sm min-w-[70px] text-center">
                                        {milestone.year}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-[#0f0f1a] to-[#16213e] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-16 text-white">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all text-center p-8"
                            >
                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 ring-4 ring-gray-800 group-hover:ring-blue-500/30 transition-all shadow-lg">
                                    {member.initials}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed opacity-80">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

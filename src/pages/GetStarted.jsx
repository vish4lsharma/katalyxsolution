import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Rocket, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';

const GetStarted = () => {
    return (
        <>
            <Helmet>
                <title>Get Started - Katalyx Solutions</title>
            </Helmet>

            <section className="min-h-screen bg-[#0f0f1a] flex items-center justify-center py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1a] to-[#0f0f1a] opacity-80" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            How can we <span className="text-blue-500">help you?</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            Choose the path that best describes your needs.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Link to="/contact">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-[#16213e] p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group h-full flex flex-col items-center text-center cursor-pointer"
                            >
                                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Rocket size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Start a Project</h3>
                                <p className="text-gray-400 mb-8 flex-1">I have a vision and need a technical partner to build or scale it.</p>
                                <span className="text-blue-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Let's Build <ArrowRight size={18} />
                                </span>
                            </motion.div>
                        </Link>

                        <Link to="/careers">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="bg-[#16213e] p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group h-full flex flex-col items-center text-center cursor-pointer"
                            >
                                <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                    <Briefcase size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Join the Team</h3>
                                <p className="text-gray-400 mb-8 flex-1">I'm looking for career opportunities and want to join Katalyx.</p>
                                <span className="text-purple-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Openings <ArrowRight size={18} />
                                </span>
                            </motion.div>
                        </Link>

                        <Link to="/contact">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ y: -10 }}
                                className="bg-[#16213e] p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group h-full flex flex-col items-center text-center cursor-pointer"
                            >
                                <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <MessageSquare size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">General Inquiry</h3>
                                <p className="text-gray-400 mb-8 flex-1">I have a question or want to explore partnership opportunities.</p>
                                <span className="text-cyan-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Get in Touch <ArrowRight size={18} />
                                </span>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetStarted;

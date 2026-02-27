import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Rocket, MessageSquare, ArrowRight } from 'lucide-react';

const GetStarted = () => {
    return (
        <>
            <Helmet>
                <title>Get Started - Katalyx Solutions</title>
            </Helmet>

            <section data-navbar-theme="light" className="relative min-h-screen overflow-hidden bg-white py-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_rgba(248,250,252,0.92),_rgba(255,255,255,1))]" />
                <div className="absolute -top-36 right-[-8%] h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-3xl" />
                <div className="absolute bottom-[-16%] left-[-8%] h-[360px] w-[360px] rounded-full bg-indigo-100/30 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-[76rem] px-6">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl"
                        >
                            How can we <span className="text-sky-500">help you?</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mx-auto max-w-2xl text-xl text-slate-600"
                        >
                            Choose the path that best describes your needs.
                        </motion.p>
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                        <Link to="/contact#contact-card">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group flex h-full cursor-pointer flex-col items-center rounded-2xl border border-sky-100 bg-white p-8 text-center shadow-sm transition-all hover:border-sky-300 hover:shadow-[0_14px_30px_rgba(14,116,144,0.14)]"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 text-sky-500 transition-all group-hover:bg-sky-500 group-hover:text-white">
                                    <Rocket size={40} />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-slate-900">Start a Project</h3>
                                <p className="mb-8 flex-1 text-slate-600">I have a vision and need a technical partner to build or scale it.</p>
                                <span className="flex items-center gap-2 font-bold text-sky-600 transition-all group-hover:gap-3">
                                    Let's Build <ArrowRight size={18} />
                                </span>
                            </motion.div>
                        </Link>

                        <Link to="/contact#contact-card">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="group flex h-full cursor-pointer flex-col items-center rounded-2xl border border-sky-100 bg-white p-8 text-center shadow-sm transition-all hover:border-sky-300 hover:shadow-[0_14px_30px_rgba(14,116,144,0.14)]"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 text-sky-500 transition-all group-hover:bg-sky-500 group-hover:text-white">
                                    <MessageSquare size={40} />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-slate-900">General Inquiry</h3>
                                <p className="mb-8 flex-1 text-slate-600">I have a question or want to explore partnership opportunities.</p>
                                <span className="flex items-center gap-2 font-bold text-sky-600 transition-all group-hover:gap-3">
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

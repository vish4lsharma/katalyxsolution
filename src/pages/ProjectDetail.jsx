import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import NotFound from './NotFound';

import camuImg from '../assets/images/camu.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import abhiroomImg from '../assets/images/abhiroom.jpg';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData[id];

    const projectImages = {
        'camu-erp': camuImg,
        'healthcarex24': clinicImg,
        'abhiroom': abhiroomImg
    };

    const revealUp = {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0 }
    };

    if (!project) return <NotFound />;

    return (
        <>
            <Helmet><title>{project.title} - Katalyx Projects</title></Helmet>

            <section data-navbar-theme="light" className="bg-[#f7fbff] text-slate-900 min-h-[60vh] flex items-center relative overflow-hidden pt-32 pb-14 rounded-t-[28px] md:rounded-t-[36px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_rgba(247,251,255,0.95),_rgba(247,251,255,1))]" />
                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ staggerChildren: 0.12 }}
                    >
                        <motion.div variants={revealUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                            <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                            <ArrowLeft size={20} /> Back to Projects
                            </Link>
                        </motion.div>
                        <motion.h1
                            variants={revealUp}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="text-5xl font-bold mb-4 text-slate-900"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p
                            variants={revealUp}
                            transition={{ duration: 0.48, ease: 'easeOut' }}
                            className="text-xl text-sky-700 font-medium mb-6"
                        >
                            {project.tagline}
                        </motion.p>
                        <motion.p
                            variants={revealUp}
                            transition={{ duration: 0.48, ease: 'easeOut' }}
                            className="text-slate-600 max-w-lg text-lg leading-relaxed"
                        >
                            {project.description}
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="relative w-full"
                    >
                        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_18px_34px_rgba(15,23,42,0.12)]">
                            <img
                                src={projectImages[id]}
                                alt={project.title}
                                className="h-[320px] sm:h-[380px] md:h-[430px] w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section data-navbar-theme="light" className="py-24 bg-[#f7fbff] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:border-sky-300 hover:shadow-[0_16px_32px_rgba(14,116,144,0.12)] transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-700 border border-sky-200">
                                        <Layers size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {feature.details.map((detail, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.7 }}
                                            transition={{ duration: 0.35, delay: idx * 0.06 }}
                                            className="flex items-start gap-3 text-slate-600"
                                        >
                                            <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                            <span>{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-[#f7fbff] py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),_rgba(247,251,255,0.95),_rgba(247,251,255,1))]" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.45 }}
                        className="text-3xl font-bold mb-6 text-slate-900"
                    >
                        Interested in this solution?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="mb-8 text-slate-600 max-w-xl mx-auto"
                    >
                        Contact our team to schedule a personalized demo or discuss implementation details.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.45, delay: 0.14 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-colors shadow-[0_14px_30px_rgba(14,116,144,0.26)]"
                        >
                            Request Demo
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;

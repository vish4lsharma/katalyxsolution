import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import NotFound from './NotFound';
import Laptop from '../components/3d/Laptop';

import camuImg from '../assets/images/camu.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import abhiroomImg from '../assets/images/abhiroom.jpg';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData[id];

    const projectImages = {
        'camu-erp': camuImg,
        'clinicx24': clinicImg,
        'abhiroom': abhiroomImg
    };

    if (!project) return <NotFound />;

    return (
        <>
            <Helmet><title>{project.title} - Katalyx Projects</title></Helmet>

            <section className="bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-white min-h-[60vh] flex items-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft size={20} /> Back to Projects
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl font-bold mb-4"
                        >
                            {project.title}
                        </motion.h1>
                        <p className="text-xl text-blue-400 font-medium mb-6">{project.tagline}</p>
                        <p className="text-gray-300 max-w-lg text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] w-full"
                    >
                        <Laptop screenImage={projectImages[id]} />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-[#0f0f1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20">
                                        <Layers size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {feature.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Interested in this solution?</h2>
                    <p className="mb-8 text-blue-100 max-w-xl mx-auto">
                        Contact our team to schedule a personalized demo or discuss implementation details.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-black/20"
                    >
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;

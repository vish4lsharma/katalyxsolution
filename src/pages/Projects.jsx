import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { School, Home, Activity, Check, ArrowRight, LayoutDashboard, Database, Shield } from 'lucide-react';

import camuImg from '../assets/images/camu.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import abhiroomImg from '../assets/images/abhiroom.jpg';

const Projects = () => {
    const projects = [
        {
            id: 'camu-erp',
            title: 'Camu ERP',
            tagline: 'Comprehensive Campus Management',
            features: [
                'Faculty Portal: Attendance, Grading, Scheduling',
                'Student Dashboard: Results, Assignments, Events',
                'Parent Connect: Real-time Academic Tracking',
                'Administrative Analytics & Reports'
            ],
            icon: School,
            color: 'blue',
            image: camuImg
        },
        {
            id: 'clinicx24',
            title: 'ClinicX24',
            tagline: 'Next-Gen Medical ERP',
            features: [
                'Doctor Workbench: E-Prescriptions, Patient History',
                'Patient Portal: Appointments, Health Records',
                'Lab Integration: Sample Tracking, Auto-Reports',
                'Pharmacy Management: Inventory & Billing'
            ],
            icon: Activity,
            color: 'green',
            image: clinicImg
        },
        {
            id: 'abhiroom',
            title: 'Abhiroom.in',
            tagline: 'Smart Accommodation Solutions',
            features: [
                'Real-time Room Availability Tracking',
                'Tenant Management & Onboarding',
                'Automated Rent Collection & Billing',
                'Maintenance Ticketing System'
            ],
            icon: Home,
            color: 'orange',
            image: abhiroomImg
        }
    ];

    return (
        <>
            <Helmet><title>Projects - Katalyx Solutions</title></Helmet>

            <section className="py-24 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Our Featured <span className="text-blue-500">Projects</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            Showcasing our expertise in building robust, scalable enterprise solutions across industries.
                        </motion.p>
                    </div>

                    <div className="space-y-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                            >
                                <div className="flex-1 space-y-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-${project.color}-500/20 text-${project.color}-400 mb-4 border border-${project.color}-500/30`}>
                                        <project.icon size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-white">{project.title}</h2>
                                    <p className={`text-xl text-${project.color}-400 font-medium`}>{project.tagline}</p>

                                    <div className="bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm">
                                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                            <LayoutDashboard size={20} className="text-blue-500" /> Key Features
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <Check className={`w-5 h-5 text-${project.color}-500 flex-shrink-0 mt-0.5`} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to={`/products/${project.id}`} className={`flex items-center gap-2 font-semibold text-${project.color}-400 hover:text-${project.color}-300 hover:gap-3 transition-all`}>
                                        View Case Study <ArrowRight size={18} />
                                    </Link>
                                </div>

                                <div className="flex-1 w-full relative group cursor-pointer">
                                    <div className={`absolute inset-0 bg-${project.color}-500/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6 border border-${project.color}-500/20`}></div>
                                    <div className="bg-[#1a1a2e] rounded-3xl p-2 transform -rotate-2 group-hover:rotate-0 transition-transform relative overflow-hidden h-[400px] border border-gray-700 shadow-2xl">
                                        <div className="absolute top-0 left-0 w-full h-8 bg-[#0f0f1a] flex items-center px-4 space-x-2 border-b border-gray-800 z-20">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                        </div>
                                        {/* Real Image Mockup */}
                                        <div className="relative w-full h-full pt-8 overflow-hidden rounded-2xl bg-black">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} Dashboard Interface`}
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-40 mix-blend-multiply pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;

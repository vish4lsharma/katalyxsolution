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
            id: 'healthcarex24',
            title: 'HealthcareX24.com',
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

    const themeByColor = {
        blue: {
            iconWrap: 'bg-sky-50 text-sky-700 border border-sky-200',
            accent: 'text-sky-700',
            link: 'text-sky-700 hover:text-sky-800',
            check: 'text-sky-600',
            halo: 'bg-sky-500/10 border-sky-200',
        },
        green: {
            iconWrap: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
            accent: 'text-emerald-700',
            link: 'text-emerald-700 hover:text-emerald-800',
            check: 'text-emerald-600',
            halo: 'bg-emerald-500/10 border-emerald-200',
        },
        orange: {
            iconWrap: 'bg-amber-50 text-amber-700 border border-amber-200',
            accent: 'text-amber-700',
            link: 'text-amber-700 hover:text-amber-800',
            check: 'text-amber-600',
            halo: 'bg-amber-500/10 border-amber-200',
        },
    };

    return (
        <>
            <Helmet>
                <title>Products – Camu ERP, HealthcareX24 & Abhiroom | Katalyx Solutions</title>
                <meta name="description" content="Explore Katalyx Solutions' product suite: Camu Campus ERP, HealthcareX24 medical management system, and Abhiroom smart accommodation platform — built for modern India." />
                <meta name="keywords" content="Camu ERP, campus management software India, HealthcareX24, healthcare management system, Abhiroom, accommodation management, Katalyx products, ERP software" />
                <link rel="canonical" href="https://katalyxsolutions.com/products" />
                <meta property="og:title" content="Products – Camu ERP, HealthcareX24 & Abhiroom | Katalyx Solutions" />
                <meta property="og:description" content="Discover our AI-powered product suite: campus ERP, healthcare management, and smart accommodation platforms." />
                <meta property="og:url" content="https://katalyxsolutions.com/products" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="Katalyx Products – ERP & AI-Powered Platforms" />
                <meta name="twitter:description" content="Camu ERP, HealthcareX24 and Abhiroom – enterprise-grade software by Katalyx Solutions." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Katalyx Solutions Products",
                    "url": "https://katalyxsolutions.com/products",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "item": { "@type": "SoftwareApplication", "name": "Camu ERP", "applicationCategory": "BusinessApplication", "description": "Comprehensive Campus Management ERP with faculty, student and admin portals.", "url": "https://katalyxsolutions.com/products/camu-erp", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" } } },
                        { "@type": "ListItem", "position": 2, "item": { "@type": "SoftwareApplication", "name": "HealthcareX24", "applicationCategory": "MedicalApplication", "description": "Next-Gen Medical ERP for doctors, patients, labs and pharmacies.", "url": "https://katalyxsolutions.com/products/healthcarex24", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" } } },
                        { "@type": "ListItem", "position": 3, "item": { "@type": "SoftwareApplication", "name": "Abhiroom", "applicationCategory": "BusinessApplication", "description": "Smart accommodation solutions with real-time availability and tenant management.", "url": "https://katalyxsolutions.com/products/abhiroom", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" } } }
                    ],
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://katalyxsolutions.com/products" }] }
                })}</script>
            </Helmet>


            <section data-navbar-theme="light" className="py-24 bg-[#f7fbff] min-h-screen relative overflow-hidden rounded-t-[28px] md:rounded-t-[36px]">
                <div className="absolute inset-0 rounded-t-[28px] md:rounded-t-[36px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_rgba(247,251,255,0.96),_rgba(247,251,255,1))] z-0" />
                <div className="mx-auto max-w-[90rem] px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                        >
                            Our Featured <span className="text-sky-700">Projects</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-2xl mx-auto"
                        >
                            Showcasing our expertise in building robust, scalable enterprise solutions across industries.
                        </motion.p>
                    </div>

                    <div className="space-y-10">
                        {projects.map((project) => {
                            const theme = themeByColor[project.color];

                            return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full rounded-3xl border border-slate-200 bg-white/95 shadow-lg p-6 md:p-8"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10 items-start">
                                <div className="space-y-6 text-left">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${theme.iconWrap}`}>
                                        <project.icon size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900">{project.title}</h2>
                                    <p className={`text-xl font-medium ${theme.accent}`}>{project.tagline}</p>

                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 backdrop-blur-sm">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <LayoutDashboard size={20} className="text-sky-700" /> Key Features
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${theme.check}`} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to={`/products/${project.id}`} className={`flex items-center gap-2 font-semibold hover:gap-3 transition-all ${theme.link}`}>
                                        View Case Study <ArrowRight size={18} />
                                    </Link>
                                </div>

                                <div className="w-full relative group cursor-pointer">
                                    <div className={`absolute inset-0 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6 border ${theme.halo}`}></div>
                                    <div className="bg-white rounded-3xl p-2 transform -rotate-2 group-hover:rotate-0 transition-transform relative overflow-hidden h-[400px] border border-slate-200 shadow-xl">
                                        <div className="absolute top-0 left-0 w-full h-8 bg-slate-50 flex items-center px-4 space-x-2 border-b border-slate-200 z-20">
                                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                                        </div>
                                        {/* Real Image Mockup */}
                                        <div className="relative w-full h-full pt-8 overflow-hidden rounded-2xl bg-slate-100">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} Dashboard Interface`}
                                                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/70 via-transparent to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;

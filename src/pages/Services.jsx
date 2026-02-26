import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Palette, Brain, Shield, Cloud, Smartphone, Cpu } from 'lucide-react';
import TechBackground from '../components/3d/TechBackground';

const Services = () => {
    const services = [
        {
            title: 'AI & Machine Learning',
            desc: 'Predictive analytics, NLP, and computer vision solutions.',
            icon: Brain,
            label: 'Intelligence Layer',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=800&q=80',
        },
        {
            title: 'Cloud Infrastructure',
            desc: 'AWS, Azure, and Google Cloud migration and management.',
            icon: Cloud,
            label: 'Cloud Foundation',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=800&q=80',
        },
        {
            title: 'Cybersecurity',
            desc: 'Advanced threat detection and compliance management.',
            icon: Shield,
            label: 'Security Core',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=800&q=80',
        },
        {
            title: 'Digital Experience',
            desc: 'UX/UI design and full-stack web development.',
            icon: Palette,
            label: 'Experience Design',
            image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&h=800&q=80',
        },
        {
            title: 'Mobile Solutions',
            desc: 'Native and cross-platform mobile application development.',
            icon: Smartphone,
            label: 'Mobile Platform',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=800&q=80',
        },
        {
            title: 'IoT Integration',
            desc: 'Connecting devices for smart data collection and automation.',
            icon: Cpu,
            label: 'Connected Systems',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&h=800&q=80',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Services – AI, Cloud, ERP & Web Development | Katalyx Solutions India</title>
                <meta name="description" content="Katalyx Solutions offers AI & Machine Learning, Cloud Infrastructure, ERP development, Web & SaaS Development, Mobile App Development and Tech Consulting services in India." />
                <meta name="keywords" content="AI services India, cloud infrastructure, ERP development services, SaaS development, mobile app development India, tech consulting, Katalyx services" />
                <link rel="canonical" href="https://katalyxsolutions.com/services" />
                <meta property="og:title" content="Services – AI, Cloud, ERP & Web Development | Katalyx Solutions" />
                <meta property="og:description" content="End-to-end technology services including AI, cloud, ERP and SaaS development from Katalyx Solutions India." />
                <meta property="og:url" content="https://katalyxsolutions.com/services" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="Katalyx Solutions – AI, Cloud & ERP Services India" />
                <meta name="twitter:description" content="Full-stack AI, cloud and ERP solutions for modern enterprises." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Software Development & AI Solutions",
                    "provider": { "@type": "Organization", "name": "Katalyx Solutions", "url": "https://katalyxsolutions.com" },
                    "areaServed": "IN",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Katalyx Services",
                        "itemListElement": [
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Machine Learning" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Infrastructure" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Development" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & SaaS Development" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tech Consulting" } }
                        ]
                    },
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://katalyxsolutions.com/services" }] }
                })}</script>
            </Helmet>


            {/* Hero Section */}
            <section data-navbar-theme="dark" className="bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-white pt-40 pb-32 relative overflow-hidden text-center">
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

            <section data-navbar-theme="light" className="py-24 bg-[#f7fbff] relative rounded-t-[28px] md:rounded-t-[36px] overflow-visible">
                <div className="absolute inset-0 rounded-t-[28px] md:rounded-t-[36px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_rgba(247,251,255,0.95),_rgba(247,251,255,1))]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="relative">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className={`sticky top-24 md:top-28 ${index === 0 ? '' : 'mt-8 md:mt-10'}`}
                                style={{ zIndex: 20 + index }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="relative overflow-hidden w-full max-w-[72rem] mx-auto rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_22px_60px_-22px_rgba(15,23,42,0.18)] p-6 md:p-8 transition-all duration-300 group min-h-[420px] md:min-h-[500px]"
                                >
                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.12fr] gap-6 md:gap-8 items-stretch h-full">
                                        <div className="relative h-full flex flex-col items-start justify-center text-left">
                                            <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700 mb-5">
                                                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                                                {service.label}
                                            </div>

                                            <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-sky-700 bg-sky-50 border border-sky-200 shadow-[0_12px_26px_rgba(14,116,144,0.16)] group-hover:text-sky-800 group-hover:bg-sky-100 group-hover:border-sky-300 group-hover:scale-105 transition-all">
                                                <div className="absolute inset-[4px] rounded-[14px] border border-white/90" />
                                                <service.icon size={34} className="relative z-10" />
                                            </div>
                                            <h3 className="text-2xl md:text-[30px] font-bold text-[#0f172a] mb-4 transition-colors">{service.title}</h3>
                                            <p className="text-[#475569] leading-relaxed transition-colors max-w-[42ch]">{service.desc}</p>
                                        </div>

                                        <div className="w-full relative group/image h-full">
                                            <div className="absolute inset-0 rounded-2xl transform rotate-2 transition-transform duration-300 group-hover:rotate-3 bg-gradient-to-br from-sky-300/25 via-cyan-200/20 to-indigo-300/25 blur-[1px]" />
                                            <div className="relative rounded-2xl p-2 border border-slate-200 shadow-[0_18px_38px_rgba(15,23,42,0.14)] bg-white overflow-hidden h-full">
                                                <div className="relative w-full h-80 md:h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-50">
                                                    <img
                                                        src={service.image}
                                                        alt={`${service.title} service illustration`}
                                                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover/image:scale-[1.06]"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/8 to-transparent pointer-events-none" />
                                                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                                                        <span className="rounded-full bg-white/90 backdrop-blur-md border border-white/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
                                                            {service.title}
                                                        </span>
                                                        <span className="rounded-full bg-slate-900/70 text-white px-3 py-1 text-[10px] font-medium tracking-[0.12em] uppercase">
                                                            Katalyx
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;

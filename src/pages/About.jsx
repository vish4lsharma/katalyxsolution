import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Zap, CheckCircle, Globe as GlobeIcon } from 'lucide-react';
import Globe3D from '../components/3d/Globe';
import Timeline from '../components/3d/Timeline';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Katalyx Solutions – AI Software Company India | Our Story & Mission</title>
                <meta name="description" content="Learn about Katalyx Solutions – an India-based AI software startup on a mission to build intelligent ERPs, SaaS platforms and digital transformation solutions for modern businesses." />
                <meta name="keywords" content="about Katalyx Solutions, AI company India, software startup India, Katalyx team, digital transformation company" />
                <link rel="canonical" href="https://katalyxsolutions.com/about" />
                <meta property="og:title" content="About Katalyx Solutions – Our Story & Mission" />
                <meta property="og:description" content="Katalyx Solutions is an India-based AI software startup building intelligent ERPs and SaaS platforms for startups and enterprises worldwide." />
                <meta property="og:url" content="https://katalyxsolutions.com/about" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="About Katalyx Solutions – AI Software Company India" />
                <meta name="twitter:description" content="Meet the team behind AI-powered ERPs and SaaS platforms at Katalyx Solutions." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Katalyx Solutions",
                    "url": "https://katalyxsolutions.com/about",
                    "description": "Katalyx Solutions is an emerging AI and software company building intelligent ERPs, SaaS platforms, and cloud solutions.",
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://katalyxsolutions.com/about" }] }
                })}</script>
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
                                { year: '2025', text: 'Inception: Katalyx Solutions founded.' },
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


        </>
    );
};

export default About;

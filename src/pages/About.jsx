import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Zap, CheckCircle, Globe as GlobeIcon } from 'lucide-react';
import Globe3D from '../components/3d/Globe';
import Timeline from '../components/3d/Timeline';
import AboutUsBanner from '../components/AboutUsBanner';

const missionContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08,
        },
    },
};

const missionBadge = {
    hidden: { opacity: 0, y: -14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const missionHeading = {
    hidden: { opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' },
    show: {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        transition: { duration: 0.65, ease: 'easeOut' },
    },
};

const missionParagraph = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const missionValue = {
    hidden: (idx = 0) => ({
        opacity: 0,
        x: idx === 0 ? -24 : idx === 2 ? 24 : 0,
        y: idx === 1 ? -18 : idx === 3 ? 18 : 0,
        scale: 0.96,
    }),
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: 'easeOut' },
    },
};

const globeReveal = {
    hidden: { opacity: 0, scale: 0.92, x: 24 },
    show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut', delay: 0.2 } },
};

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


            <AboutUsBanner />

            <section data-navbar-theme="dark" className="bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846] py-32 border-b border-white/10 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_48%),radial-gradient(circle_at_84%_70%,rgba(30,64,175,0.18),transparent_54%)] z-0" />
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div variants={missionContainer} initial="hidden" animate="show">
                        <motion.span variants={missionBadge} className="inline-block py-1 px-3 rounded-full bg-transparent text-sky-300 text-sm font-semibold mb-4 border border-sky-300/60 tracking-widest uppercase">
                            Our Mission
                        </motion.span>
                        <motion.h1 variants={missionHeading} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Our Mission
                        </motion.h1>
                        <motion.p variants={missionParagraph} className="text-xl text-slate-200 mb-8 leading-relaxed">
                            We empower organizations to thrive in the digital age by creating intelligent, scalable, and resilient technology solutions. At Katalyx, we believe in the transformative power of data and design.
                        </motion.p>
                        <motion.div variants={missionParagraph} className="h-[3px] w-full max-w-[420px] rounded-full bg-white/15 mb-7 overflow-hidden">
                            <motion.span
                                className="block h-full bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-300"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.1, ease: 'easeOut', delay: 0.35 }}
                            />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: 'Innovation', icon: Zap },
                                { title: 'Integrity', icon: CheckCircle },
                                { title: 'Global Reach', icon: GlobeIcon },
                                { title: 'People First', icon: Users },
                            ].map((val, i) => (
                                <motion.div key={i} custom={i} variants={missionValue} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                                    <div className="p-2 bg-sky-400/20 rounded-lg border border-sky-300/30">
                                        <val.icon className="text-sky-300 w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-slate-100">{val.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={globeReveal} initial="hidden" animate="show" className="h-96 w-full relative">
                        <div className="absolute inset-0 bg-sky-400/10 rounded-3xl overflow-hidden shadow-2xl border border-sky-300/20">
                            <motion.div
                                className="absolute inset-0 border border-sky-300/25 rounded-3xl"
                                animate={{ opacity: [0.2, 0.55, 0.2], scale: [0.98, 1.01, 0.98] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                            />
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

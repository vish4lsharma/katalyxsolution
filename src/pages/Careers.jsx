import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import abhiroomImg from '../assets/images/abhiroom.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import camuImg from '../assets/images/camu.jpg';
import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';
import katalyxLogo from '../assets/images/katalyx-logo.png';
import twoFingerSvg from '../assets/images/imgi_2_twofinger-30aeacc5.svg';

const RibbonDoodle = () => (
    <svg
        className="absolute bottom-0 left-0 w-full h-[38%] pointer-events-none"
        viewBox="0 0 1440 500"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M-80 420 C100 320, 250 180, 420 240 S620 420, 780 340 S980 100, 1100 200 S1300 400, 1520 320"
            stroke="#bdd4f7"
            strokeWidth="90"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
        />
        <path
            d="M-60 430 C120 330, 260 190, 430 250 S630 430, 790 350 S990 110, 1110 210 S1310 410, 1540 330"
            stroke="#d0e2fc"
            strokeWidth="50"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
        />
        <path
            d="M-70 425 C110 325, 255 185, 425 245 S625 425, 785 345 S985 105, 1105 205 S1305 405, 1530 325"
            stroke="#a4c4f4"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
        />
    </svg>
);

const AvatarBubble = ({
    image,
    greeting,
    size = 64,
    bubblePos = 'top',
    className = '',
    delay = 0,
    mobileSize,
}) => {
    const bubblePositionClass = {
        top: 'bottom-full mb-1.5 sm:mb-2 left-1/2 -translate-x-1/2',
        right: 'left-full ml-1.5 sm:ml-2 top-1/2 -translate-y-1/2',
        left: 'right-full mr-1.5 sm:mr-2 top-1/2 -translate-y-1/2',
    };

    const responsiveSize = mobileSize || size * 0.7;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${className}`}
        >
            <div className="relative">
                {greeting && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: delay + 0.3 }}
                        className={`absolute ${bubblePositionClass[bubblePos]} whitespace-nowrap hidden sm:block`}
                    >
                        <span className="inline-block bg-white text-gray-800 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-gray-100">
                            {greeting}
                        </span>
                    </motion.div>
                )}

                <div className="rounded-full border-[2px] sm:border-[3px] border-white shadow-lg overflow-hidden bg-gray-200">
                    <img
                        src={image}
                        alt="Team member"
                        className="w-full h-full object-cover block sm:hidden"
                        style={{ width: `${responsiveSize}px`, height: `${responsiveSize}px` }}
                    />
                    <img
                        src={image}
                        alt="Team member"
                        className="w-full h-full object-cover hidden sm:block"
                        style={{ width: `${size}px`, height: `${size}px` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const BlobSVGDefs = () => (
    <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
            <clipPath id="blob-0" clipPathUnits="objectBoundingBox">
                <path d="M0.15,0 L1,0 Q1,0 1,0 L1,1 Q1,1 1,1 L0,1 Q0,1 0,1 L0,0.4 Q0,0 0.15,0 Z" />
            </clipPath>

            <clipPath id="blob-1" clipPathUnits="objectBoundingBox">
                <path d="M0.25,0 L0.75,0 Q0.95,0 0.95,0.2 L0.95,0.35 Q0.82,0.5 0.82,0.5 Q0.82,0.5 0.95,0.65 L0.95,0.8 Q0.95,1 0.75,1 L0.25,1 Q0.05,1 0.05,0.8 L0.05,0.65 Q0.18,0.5 0.18,0.5 Q0.18,0.5 0.05,0.35 L0.05,0.2 Q0.05,0 0.25,0 Z" />
            </clipPath>

            <clipPath id="blob-2" clipPathUnits="objectBoundingBox">
                <path d="M0,0 L1,0 Q1,0 1,0 L1,0.6 Q1,1 0.6,1 L0,1 Q0,1 0,1 L0,0 Z" />
            </clipPath>

            <clipPath id="blob-3" clipPathUnits="objectBoundingBox">
                <path d="M0.4,0 Q1,0 1,0.4 L1,1 Q1,1 1,1 L0.6,1 Q0,1 0,0.6 L0,0 Q0,0 0.4,0 Z" />
            </clipPath>
        </defs>
    </svg>
);

const benefits = [
    {
        title: 'Health & Wellness',
        description:
            'Comprehensive health insurance for you and your family, mental wellness support, and wellness reimbursements.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        title: 'Accelerated Growth',
        description:
            'Work directly with founders, ship production code from week one, and grow faster with mentorship and learning support.',
        image: aiBlog,
    },
    {
        title: 'Flexible & Remote-First',
        description:
            'Work from anywhere in India with flexible hours, async-friendly collaboration, and trust-based time off.',
        image: cloudBlog,
    },
    {
        title: 'Mission-Driven Team',
        description:
            "Join a high-impact team fixing India's claims infrastructure where your work directly affects real outcomes.",
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&h=400&q=80',
    },
];

const CareersBenefits = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
        }),
    };

    return (
        <section id="benefits-section" className="mx-auto max-w-screen-2xl px-6 py-20 md:py-28 bg-white">
            <BlobSVGDefs />

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="text-sm md:text-base text-gray-500 italic mb-3"
            >
                Our benefits
            </motion.p>

            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-gray-900 leading-tight tracking-tight mb-16"
            >
                A culture built for builders
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index + 2}
                        className="flex flex-col"
                    >
                        <div className="w-full aspect-square mb-6 flex items-center justify-center">
                            <div
                                className="w-full h-full overflow-hidden"
                                style={{ clipPath: `url(#blob-${index})`, WebkitClipPath: `url(#blob-${index})` }}
                            >
                                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const perks = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        title: 'Full Health Coverage',
        description:
            'Comprehensive medical insurance for you and your family, including dental, vision, and mental health support.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        title: 'Remote-First, Always',
        description:
            "Work from anywhere in India. We're async-friendly with flexible hours; your output matters, not your location.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: 'Competitive Pay + Equity',
        description:
            "Above-market compensation with meaningful ESOP grants. You're building this company, so you should own part of it.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
        title: 'Learning Budget',
        description:
            'Annual budget for courses, conferences, and certifications. We invest in your growth because our mission demands world-class talent.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        title: 'Generous Time Off',
        description:
            'Flexible PTO, public holidays, and wellness days. Recharge when you need to; we trust you to manage your time.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Team Offsites & Bonding',
        description:
            'Quarterly team offsites, annual retreats, and regular virtual hangouts. Building a company is more fun together.',
    },
];

const perksFadeUp = {
    hidden: { opacity: 0, y: 0 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const CornerPlus = ({ style = {}, className = '' }) => (
    <span
        style={style}
        className={`absolute z-10 flex items-center justify-center w-7 h-7 text-slate-400 text-[20px] font-light leading-none select-none pointer-events-none -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
        +
    </span>
);

const CareersPerks = () => {
    return (
        <section id="perks-section" className="relative bg-[#0b1424] text-white rounded-t-[28px] md:rounded-t-[36px] overflow-hidden scroll-mt-28">
            <div className="absolute inset-0 rounded-t-[28px] md:rounded-t-[36px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.14),_rgba(11,20,36,0.92),_rgba(11,20,36,1))] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[76rem] px-6 py-16 md:py-20">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 md:mb-14">
                    <motion.h2
                        variants={perksFadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.1] tracking-tight max-w-md"
                    >
                        Life at Katalyx is
                        <br />
                        Full of Perks
                    </motion.h2>

                    <motion.p
                        variants={perksFadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md lg:pt-2"
                    >
                        We make sure you're supported with the right balance of growth opportunities,
                        flexibility, and benefits that help you thrive both at work and in life.
                    </motion.p>
                </div>

                <div className="relative">
                    <CornerPlus style={{ top: 0, left: 0 }} />
                    <CornerPlus style={{ top: 0, left: '33.333%' }} className="hidden lg:block" />
                    <CornerPlus style={{ top: 0, left: '50%' }} className="hidden sm:block lg:hidden" />
                    <CornerPlus style={{ top: 0, left: '66.666%' }} className="hidden lg:block" />
                    <CornerPlus style={{ top: 0, left: '100%' }} />

                    <CornerPlus style={{ top: '50%', left: 0 }} />
                    <CornerPlus style={{ top: '50%', left: '33.333%' }} className="hidden lg:block" />
                    <CornerPlus style={{ top: '50%', left: '50%' }} className="hidden sm:block lg:hidden" />
                    <CornerPlus style={{ top: '50%', left: '66.666%' }} className="hidden lg:block" />
                    <CornerPlus style={{ top: '50%', left: '100%' }} />

                    <CornerPlus style={{ top: '100%', left: 0 }} />
                    <CornerPlus style={{ top: '100%', left: '33.333%' }} className="hidden lg:block" />
                    <CornerPlus style={{ top: '100%', left: '50%' }} className="hidden sm:block lg:hidden" />
                    <CornerPlus style={{ top: '100%', left: '66.666%' }} className="hidden lg:block" />
                    <CornerPlus style={{ top: '100%', left: '100%' }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-dashed border-slate-700">
                        {perks.map((perk, index) => (
                            <motion.div
                                key={perk.title}
                                variants={perksFadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index + 2}
                                className="p-6 md:p-7 border-r border-b border-dashed border-slate-700"
                            >
                                <div className="text-white mb-4">{perk.icon}</div>
                                <h3 className="text-[15px] md:text-base font-semibold mb-2">{perk.title}</h3>
                                <p className="text-[13px] md:text-sm text-slate-300 leading-relaxed">{perk.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const categories = [
    'Engineering',
    'Leadership',
    'Operations',
    'Product Experience',
    'Product',
];

const positions = [
    {
        role: 'VP of Engineering - AI & Healthcare',
        team: 'Leadership',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Leadership',
    },
    {
        role: 'Senior AI/ML Engineer',
        team: 'AI & Machine Learning',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Engineering',
    },
    {
        role: 'Healthcare Product Manager',
        team: 'Product Management',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Product',
    },
    {
        role: 'Full Stack Developer',
        team: 'Engineering',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Engineering',
    },
    {
        role: 'UX/UI Designer - Health Tech',
        team: 'Design & User Experience',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Product Experience',
    },
    {
        role: 'Data Scientist - Medical Analytics',
        team: 'Data Science & Analytics',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Operations',
    },
    {
        role: 'Clinical Integration Specialist',
        team: 'Healthcare Operations',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Operations',
    },
    {
        role: 'Backend Engineer - ABDM Integration',
        team: 'Engineering',
        workTime: 'Full-time',
        location: 'Remote',
        category: 'Engineering',
    },
];

const CareersPositions = () => {
    const [activeFilter, setActiveFilter] = useState('Engineering');

    const filteredPositions = activeFilter
        ? positions.filter((position) => position.category === activeFilter)
        : positions;

    return (
        <section
            id="available-positions"
            data-navbar-theme="dark"
            className="relative bg-[#0b1424] text-white overflow-hidden"
            style={{ overflowAnchor: 'none' }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.14),_rgba(11,20,36,0.92),_rgba(11,20,36,1))] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-20 md:py-28">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.1] tracking-tight">
                            Available positions
                        </h2>
                        <p className="text-slate-300 text-[20px] md:text-[26px] italic mt-1">
                            waiting to be filled
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(activeFilter === category ? null : category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                                    activeFilter === category
                                        ? 'bg-white text-[#111111] border-white'
                                        : 'bg-transparent text-white border-[#444] hover:border-white'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr_auto] gap-4 px-4 pb-4 text-[11px] md:text-xs tracking-widest uppercase text-[#888]">
                        <span>Role</span>
                        <span>Team</span>
                        <span>Work Time</span>
                        <span>Location</span>
                        <span className="w-[90px]" />
                    </div>

                    <div className="flex flex-col">
                        {filteredPositions.map((position) => (
                            <div
                                key={position.role}
                                className="border-t border-[#2a2a2a] py-5 px-4 hover:bg-[#1a1a1a] transition-colors duration-200"
                            >
                                <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr_auto] gap-4 items-center">
                                    <span className="text-white text-sm font-medium">{position.role}</span>
                                    <span className="text-[#ccc] text-sm">{position.team}</span>
                                    <span className="text-[#ccc] text-sm font-medium">{position.workTime}</span>
                                    <span className="text-[#ccc] text-sm">{position.location}</span>
                                    <button className="w-[90px] py-2 rounded-full bg-white text-[#0a0a0a] text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                                        Apply
                                    </button>
                                </div>

                                <div className="md:hidden flex flex-col gap-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-white text-sm font-medium">{position.role}</span>
                                        <button className="shrink-0 px-5 py-1.5 rounded-full bg-white text-[#0a0a0a] text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                                            Apply
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#999]">
                                        <span>{position.team}</span>
                                        <span>{position.workTime}</span>
                                        <span>{position.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-[#2a2a2a]" />
                </div>
            </div>
        </section>
    );
};

const teamImages = [
    {
        src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&h=400&q=80',
        alt: 'Team gathering',
    },
    {
        src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&h=400&q=80',
        alt: 'Team collaboration',
    },
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80',
        alt: 'Team working together',
    },
    {
        src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&h=400&q=80',
        alt: 'Team meeting',
    },
    {
        src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&h=500&q=80',
        alt: 'Full team photo',
    },
    {
        src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&h=400&q=80',
        alt: 'Small team photo',
    },
];

const impactFadeUp = {
    hidden: { opacity: 0, y: 0 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const impactFadeIn = {
    hidden: { opacity: 0, scale: 1 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const CareersImpact = () => {
    return (
        <section data-navbar-theme="dark" className="relative bg-[#0b1424] overflow-x-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.14),_rgba(11,20,36,0.92),_rgba(11,20,36,1))] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute top-0 left-0 w-full h-full opacity-[0.06]"
                    viewBox="0 0 1200 800"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M-100 200 C200 100, 400 500, 700 300 S1100 100, 1300 400"
                        stroke="white"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M-100 500 C200 400, 500 700, 800 500 S1100 300, 1400 600"
                        stroke="white"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M-50 700 C250 600, 450 800, 750 650 S1050 500, 1350 750"
                        stroke="white"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-20 md:py-28">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <div className="lg:w-[45%] shrink-0">
                        <motion.span
                            variants={impactFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="inline-block text-blue-400 text-sm md:text-base font-semibold mb-4"
                        >
                            Impact
                        </motion.span>

                        <motion.h2
                            variants={impactFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            className="text-[32px] md:text-[42px] lg:text-[52px] font-semibold text-white leading-[1.1] tracking-tight mb-6"
                        >
                            Let's make an
                            <br />
                            impact, together
                        </motion.h2>

                        <motion.p
                            variants={impactFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md"
                        >
                            Join a team that's rebuilding India's claims infrastructure from the ground up.
                            At Katalyx, your work directly impacts how insurers process millions of claims,
                            how hospitals get reimbursed, and how patients access insured healthcare.
                        </motion.p>
                    </div>

                    <div className="lg:w-[55%] w-full">
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {teamImages.map((image, index) => (
                                <motion.div
                                    key={image.alt}
                                    variants={impactFadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={3 + index * 0.5}
                                    className="rounded-xl overflow-hidden aspect-[3/2]"
                                >
                                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Careers = () => {
    const smoothScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const headerOffset = 96;
        const y = section.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const scrollToPositions = () => {
        smoothScrollToSection('available-positions');
    };

    const scrollToPerks = () => {
        const perks = document.getElementById('perks-section');
        if (perks) {
            smoothScrollToSection('perks-section');
            return;
        }
        smoothScrollToSection('available-positions');
    };

    return (
        <>
            <Helmet>
                <title>Careers at Katalyx Solutions – Join Our AI & Software Team India</title>
                <meta name="description" content="Explore career opportunities at Katalyx Solutions. We're hiring software engineers, AI specialists, and digital product managers in India. Build the future of enterprise software with us." />
                <meta name="keywords" content="jobs at Katalyx Solutions, software engineer jobs India, AI jobs India, tech career India, Katalyx careers, ERP developer jobs" />
                <link rel="canonical" href="https://katalyxsolutions.com/careers" />
                <meta property="og:title" content="Careers at Katalyx Solutions – Join Our AI & Software Team" />
                <meta property="og:description" content="Exciting career opportunities in AI, cloud, and ERP development at Katalyx Solutions India." />
                <meta property="og:url" content="https://katalyxsolutions.com/careers" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="Katalyx Careers – Software & AI Jobs India" />
                <meta name="twitter:description" content="Join Katalyx Solutions – build next-gen AI ERPs and SaaS platforms." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Careers at Katalyx Solutions",
                    "url": "https://katalyxsolutions.com/careers",
                    "description": "Explore career opportunities at Katalyx Solutions in AI, software and cloud engineering.",
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://katalyxsolutions.com/careers" }] }
                })}</script>
            </Helmet>


            {/* Hero */}
            <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col pb-32 md:pb-44">
                <div className="absolute top-0 -right-[5%] w-[1200px] h-[1200px] bg-blue-50/30 rounded-full blur-[160px] pointer-events-none" style={{ transform: 'translateY(-50%)' }} />
                <div className="absolute bottom-0 -left-[10%] w-[1000px] h-[1000px] bg-indigo-50/20 rounded-full blur-[140px] pointer-events-none" style={{ transform: 'translateY(50%)' }} />

                <div className="relative z-10 flex flex-col items-center text-center pt-[114px] sm:pt-[134px] md:pt-[156px] px-4 sm:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-gray-700 leading-[1.12] tracking-tight px-2"
                        style={{ fontSize: 'clamp(1.5rem, 2.6vw + 0.45rem, 2.5rem)' }}
                    >
                        <span className="block">
                            {['Hey', 'future', 'builder'].map((word, index) => (
                                <motion.span
                                    key={`intro-${word}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block mr-1 sm:mr-3"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <motion.img
                                src={twoFingerSvg}
                                alt="peace sign"
                                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-block align-middle w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]"
                            />
                        </span>

                        <span className="block mt-1 md:mt-2">
                            {['Join', 'us', 'in', 'rebuilding', "India's", 'claims'].map((word, index) => (
                                <motion.span
                                    key={`middle-${word}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block mr-1 sm:mr-3"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>

                        <span className="block mt-1 md:mt-2">
                            {['infrastructure', 'from', 'Day', '1'].map((word, index) => (
                                <motion.span
                                    key={`end-${word}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block mr-1 sm:mr-3"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 mb-32 md:mb-44"
                    >
                        <button
                            onClick={scrollToPositions}
                            className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                        >
                            See openings
                        </button>
                        <button
                            onClick={scrollToPerks}
                            className="w-full sm:w-auto bg-white text-sky-700 text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full border border-sky-200 hover:border-sky-300 hover:bg-sky-50 transition-all duration-300"
                        >
                            See Perks
                        </button>
                    </motion.div>
                </div>

                <RibbonDoodle />

                <AvatarBubble image={abhiroomImg} greeting="Hello!" size={50} mobileSize={34} bubblePos="left" className="top-[75%] left-[8%] sm:top-[72%] sm:left-[12%] md:top-[70%] md:left-[18%]" delay={0.7} />
                <AvatarBubble image={clinicImg} greeting={null} size={44} mobileSize={30} className="top-[82%] left-[1%] sm:top-[80%] sm:left-[2%] md:top-[78%] md:left-[4%]" delay={0.9} />
                <AvatarBubble image={camuImg} greeting="Welcome aboard!" size={48} mobileSize={32} bubblePos="top" className="top-[80%] left-[28%] sm:top-[78%] sm:left-[32%] md:top-[76%] md:left-[34%]" delay={1.1} />
                <AvatarBubble image={aiBlog} greeting="Nice to see you!" size={40} mobileSize={28} bubblePos="top" className="top-[88%] left-[42%] sm:top-[92%] sm:left-[44%] md:top-[90%] md:left-[46%]" delay={1.0} />
                <AvatarBubble image={cloudBlog} greeting="Nice to meet you!" size={50} mobileSize={34} bubblePos="right" className="top-[75%] right-[28%] sm:top-[72%] sm:right-[34%] md:top-[70%] md:right-[37%]" delay={0.8} />
                <AvatarBubble image={strategyBlog} greeting={null} size={44} mobileSize={30} bubblePos="top" className="top-[78%] right-[12%] sm:top-[76%] sm:right-[18%] md:top-[74%] md:right-[20%]" delay={1.2} />
                <AvatarBubble image={katalyxLogo} greeting="Glad you're here!" size={38} mobileSize={26} bubblePos="top" className="top-[85%] right-[2%] sm:top-[84%] sm:right-[6%] md:top-[82%] md:right-[8%]" delay={1.3} />
            </section>

            <CareersBenefits />
            <CareersPerks />

            <CareersPositions />
            <CareersImpact />
        </>
    );
};

export default Careers;

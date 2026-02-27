import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    CheckCircle2,
    Headphones,
    Mail,
    MessageCircle,
    PenSquare,
    Phone,
    Send,
    User,
} from 'lucide-react';

const useTypewriter = (text, startDelay = 0, speed = 60) => {
    const [displayed, setDisplayed] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => setStarted(true), startDelay);
        return () => clearTimeout(delayTimer);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return undefined;
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1));
                i += 1;
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [started, text, speed]);

    return { displayed, done: displayed.length === text.length && started };
};

const FormField = ({ label, value, Icon, delay }) => {
    const { displayed, done } = useTypewriter(value, delay);

    return (
        <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Icon size={10} className="text-slate-500" />
                {label}
            </label>
            <div className={`relative bg-[#1a1d28] rounded-xl px-3.5 py-2.5 border transition-all duration-300 ${!done && displayed.length > 0 ? 'border-sky-400/50 shadow-[0_0_12px_rgba(56,189,248,0.14)]' : 'border-slate-800/70'}`}>
                <span className="text-[12px] text-slate-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {displayed}
                    {!done && displayed.length > 0 && (
                        <span className="inline-block w-px h-3 bg-sky-300 ml-0.5 animate-pulse" />
                    )}
                </span>
                {done && (
                    <Check size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400" />
                )}
            </div>
        </div>
    );
};

const ChannelCard = ({ Icon, label, detail, colorClass, bgClass, isActive }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-500 ${isActive ? 'border-sky-400/30 bg-[#1a1d28] shadow-[0_0_20px_rgba(56,189,248,0.10)]' : 'border-slate-800/40 bg-[#161922]/70 hover:border-slate-700/60'}`}
    >
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${bgClass}`}>
            <Icon size={15} className={colorClass} />
        </div>
        <div className="flex-1 min-w-0" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-[11px] font-semibold text-slate-300">{label}</p>
            <p className="text-[9px] text-slate-500">{detail}</p>
        </div>
        {isActive && <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />}
    </motion.div>
);

const ContactFormMockup = () => {
    const [phase, setPhase] = useState(0);
    const [activeChannel, setActiveChannel] = useState(0);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveChannel((prev) => (prev + 1) % 4);
        }, 2300);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let mounted = true;
        let t1;
        let t2;
        let t3;

        const run = () => {
            if (!mounted) return;
            setPhase(0);
            setCycle((prev) => prev + 1);
            t1 = setTimeout(() => mounted && setPhase(1), 8200);
            t2 = setTimeout(() => mounted && setPhase(2), 9800);
            t3 = setTimeout(() => mounted && run(), 14000);
        };

        run();

        return () => {
            mounted = false;
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    const channels = [
        { Icon: Mail, label: 'Email Us', detail: 'info@katalyxsolutions.com', colorClass: 'text-sky-400', bgClass: 'bg-sky-400/15' },
        { Icon: Phone, label: 'Call Us', detail: '+91 00000 00000', colorClass: 'text-emerald-400', bgClass: 'bg-emerald-400/15' },
        { Icon: MessageCircle, label: 'Live Chat', detail: 'Avg response: < 2 min', colorClass: 'text-violet-400', bgClass: 'bg-violet-400/15' },
        { Icon: Headphones, label: 'Schedule Call', detail: 'Book a 30-min slot', colorClass: 'text-amber-400', bgClass: 'bg-amber-400/15' },
    ];

    return (
        <div className="relative w-full h-full flex items-start justify-center lg:justify-start overflow-hidden">
            <div className="relative w-full max-w-[560px] overflow-hidden mx-auto lg:mx-0 rounded-3xl">
                <div className="absolute -inset-8 bg-gradient-to-br from-sky-400/10 via-transparent to-indigo-400/10 rounded-3xl blur-2xl" />

                <div className="relative bg-[#0f1117] rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden border border-slate-800/70">
                    <div className="bg-[#161922] px-5 py-3 border-b border-slate-800/70 rounded-t-3xl" />

                    <div className="flex flex-col sm:flex-row p-2 gap-2 sm:gap-0">
                        <div className="flex-1 p-5 bg-[#121723]/70 rounded-2xl sm:rounded-r-none">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-7 h-7 rounded-lg bg-sky-400/15 flex items-center justify-center">
                                    <PenSquare size={13} className="text-sky-300" />
                                </div>
                                <div style={{ fontFamily: 'Inter, sans-serif' }}>
                                    <h4 className="text-[12px] font-bold text-white">Send us a message</h4>
                                    <p className="text-[9px] text-slate-500">We'll get back within 24 hours</p>
                                </div>
                            </div>

                            {phase < 2 ? (
                                <div key={cycle} className="space-y-3">
                                    <FormField label="Full Name" value="John Doe" Icon={User} delay={700} />
                                    <FormField label="Email Address" value="john@example.com" Icon={Mail} delay={2600} />
                                    <FormField label="Message" value="Tell us about your project or requirements..." Icon={MessageCircle} delay={5000} />

                                    <button
                                        type="button"
                                        className={`w-full mt-1 py-2.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-2 transition-all duration-500 ${phase === 1 ? 'bg-sky-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]' : 'bg-[#1a1d28] text-slate-400 border border-slate-800/60'}`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {phase === 1 ? (
                                            <>
                                                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={12} />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center py-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/5"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                                        <CheckCircle2 size={28} className="text-emerald-400" />
                                    </div>
                                    <h4 className="text-[14px] font-bold text-white mb-1">Message Sent!</h4>
                                    <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                                        Thanks for reaching out! Our team will
                                        <br />
                                        respond within 24 hours.
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-3 text-[9px] text-emerald-400 font-medium">
                                        <Check size={10} />
                                        Confirmation email sent
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="w-full sm:w-[220px] border border-slate-800/50 sm:border-l-0 flex flex-col rounded-2xl sm:rounded-l-none sm:rounded-r-2xl overflow-hidden">
                            <div className="px-4 py-3 border-b border-slate-800/50 bg-[#141824]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <p className="text-[11px] font-bold text-slate-300">Reach Out Via</p>
                                <p className="text-[8px] text-slate-600 mt-0.5">Choose your preferred channel</p>
                            </div>

                            <div className="p-3 space-y-2 flex-1 bg-[#121621]/45">
                                {channels.map((channel, index) => (
                                    <ChannelCard
                                        key={channel.label}
                                        {...channel}
                                        isActive={activeChannel === index}
                                    />
                                ))}
                            </div>

                            <div className="px-4 pb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <div className="bg-[#161922]/85 rounded-xl p-2.5 border border-slate-800/40 text-center">
                                    <p className="text-[9px] text-slate-500">Avg. Response Time</p>
                                    <p className="text-[16px] font-bold text-white leading-tight mt-0.5">
                                        &lt; 2 <span className="text-[10px] text-slate-500 font-normal">hours</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative circular accents — top-right ring and bottom-left arc */}
                <svg className="hidden lg:block absolute -top-6 -right-6 w-28 h-28 z-40 pointer-events-none" viewBox="0 0 120 120" fill="none" aria-hidden>
                    <defs>
                        <linearGradient id="tr-grad" x1="0" x2="1">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.12" />
                        </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="44" stroke="url(#tr-grad)" strokeWidth="2.5" opacity="0.8" />
                    <circle cx="60" cy="60" r="30" stroke="#0b1320" strokeWidth="2" opacity="0.25" />
                </svg>

                <svg className="absolute -bottom-8 -left-8 w-40 h-40 z-30 pointer-events-none" viewBox="0 0 200 200" fill="none" aria-hidden>
                    <defs>
                        <linearGradient id="bl-grad" x1="0" x2="1">
                            <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.06" />
                        </linearGradient>
                    </defs>
                    <path d="M10 160 A90 90 0 0 1 160 10" stroke="url(#bl-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                    <circle cx="36" cy="164" r="28" stroke="#0b1320" strokeWidth="2" opacity="0.12" />
                </svg>
            </div>
        </div>
    );
};

const Contact = () => {
    const location = useLocation();
    const [showMapFallback, setShowMapFallback] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });

    const handleTalkToUsClick = () => {
        requestAnimationFrame(() => {
            document.getElementById('contact-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    useEffect(() => {
        if (location.hash !== '#contact-card') return;
        requestAnimationFrame(() => {
            document.getElementById('contact-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }, [location.hash]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        await new Promise((resolve) => setTimeout(resolve, 900));

        setSubmitStatus('success');
        setFormData({ name: '', email: '', contact: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <>
            <Helmet>
                <title>Contact Katalyx Solutions – Get a Free Consultation | India AI Software Company</title>
                <meta name="description" content="Contact Katalyx Solutions for a free project consultation. Reach us by email at info@katalyxsolutions.com. We build AI software, ERPs and SaaS platforms." />
                <meta name="keywords" content="contact Katalyx Solutions, hire AI software company India, ERP development consultation, software development inquiry India" />
                <link rel="canonical" href="https://katalyxsolutions.com/contact" />
                <meta property="og:title" content="Contact Katalyx Solutions – Free Consultation" />
                <meta property="og:description" content="Reach out for a project consultation. We build AI ERPs, SaaS platforms and cloud solutions for businesses." />
                <meta property="og:url" content="https://katalyxsolutions.com/contact" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta name="twitter:title" content="Contact Katalyx Solutions – AI Software Company" />
                <meta name="twitter:description" content="Get in touch with the Katalyx team for your next AI or ERP project." />
                <script type="application/ld+json">{JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ContactPage',
                    name: 'Contact Katalyx Solutions',
                    url: 'https://katalyxsolutions.com/contact',
                    description: 'Contact Katalyx Solutions for AI software, ERP and SaaS development consultations.',
                    breadcrumb: {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://katalyxsolutions.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://katalyxsolutions.com/contact' },
                        ],
                    },
                })}</script>
            </Helmet>

            <section className="pt-36 pb-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0b1220] to-[#0d1525]" />
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/5 to-indigo-500/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-10 lg:gap-14 items-start">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700/50 mb-6"
                            >
                                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>Let's Connect</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 }}
                                className="text-3xl md:text-4xl font-bold leading-tight"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                <span className="text-white">One Conversation Away From Your </span>
                                <span className="text-sky-300">Next Breakthrough.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.16 }}
                                className="mt-4 text-white/80 text-sm leading-relaxed max-w-md"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                Whether you're exploring ERP transformation, AI integration, or building a scalable digital platform - we're ready to architect it with you.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.22 }}
                                className="mt-3 text-slate-300 text-base font-medium"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                Let's turn your vision into execution.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.28 }}
                                className="mt-8"
                            >
                                <button
                                    type="button"
                                    onClick={handleTalkToUsClick}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-full shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all group text-sm font-medium"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    <span>TALK TO US</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.34 }}
                                className="mt-8"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400">
                                        <Mail size={14} />
                                    </div>
                                    <div style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <p className="text-xs text-slate-500">Email us at</p>
                                        <p className="text-sm font-semibold text-slate-200">info@katalyxsolutions.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.form
                                id="contact-card"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.38 }}
                                className="relative overflow-hidden mt-[13.5rem] w-full sm:w-[138%] lg:w-[156%] max-w-[1060px] min-h-[460px] sm:relative sm:left-1/2 sm:-translate-x-1/2 text-left rounded-3xl border border-slate-700/80 bg-gradient-to-br from-[#0f1628]/95 via-[#101a2c]/95 to-[#0b1220]/95 p-6 sm:p-8 shadow-[0_24px_65px_rgba(2,6,23,0.52)]"
                            >
                                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-20 -left-16 w-52 h-52 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-100" style={{ fontFamily: 'Inter, sans-serif' }}>Let's Build Something Great</h3>
                                            <p className="mt-1 text-xs text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>Share your details and we will connect with you shortly.</p>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-[11px] font-medium text-sky-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            <CheckCircle2 size={12} />
                                            Fast response
                                        </span>
                                    </div>

                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <label className="block">
                                            <span className="mb-1.5 block text-[11px] font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>Your Name</span>
                                            <div className="relative">
                                                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Enter your name"
                                                    className="w-full rounded-xl bg-[#0d1524]/95 border border-slate-600/70 pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-sky-400/80 focus:ring-2 focus:ring-sky-400/20"
                                                />
                                            </div>
                                        </label>

                                        <label className="block">
                                            <span className="mb-1.5 block text-[11px] font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>Email Address</span>
                                            <div className="relative">
                                                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="you@company.com"
                                                    className="w-full rounded-xl bg-[#0d1524]/95 border border-slate-600/70 pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-sky-400/80 focus:ring-2 focus:ring-sky-400/20"
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    <label className="mt-4 block">
                                        <span className="mb-1.5 block text-[11px] font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>Contact Number</span>
                                        <div className="relative">
                                            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                            <input
                                                type="text"
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full rounded-xl bg-[#0d1524]/95 border border-slate-600/70 pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-sky-400/80 focus:ring-2 focus:ring-sky-400/20"
                                            />
                                        </div>
                                    </label>

                                    <label className="mt-4 block">
                                        <span className="mb-1.5 block text-[11px] font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>Project Message</span>
                                        <div className="relative">
                                            <MessageCircle size={14} className="absolute left-3 top-3 text-slate-500" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                placeholder="Tell us about your project goals and requirements..."
                                                className="w-full rounded-xl bg-[#0d1524]/95 border border-slate-600/70 pl-9 pr-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-sky-400/80 focus:ring-2 focus:ring-sky-400/20 resize-none"
                                            />
                                        </div>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-[0_10px_24px_rgba(14,116,144,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(59,130,246,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send size={14} />
                                    </button>

                                    {submitStatus === 'success' && (
                                        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-200 bg-emerald-500/15 border border-emerald-400/30 rounded-lg px-3 py-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            <CheckCircle2 size={13} />
                                            Thanks! Your message has been sent.
                                        </p>
                                    )}
                                </div>
                            </motion.form>
                        </div>

                        <div id="contact-mockup" className="relative w-full mt-4 lg:mt-0">
                            <ContactFormMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* Locate us / Contact us section */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="relative grid lg:grid-cols-2 gap-8 items-start">
                        <div
                            className="hidden lg:block absolute top-24 bottom-12 left-[46%] -translate-x-1/2 border-l-2 border-dotted border-sky-400/35 pointer-events-none"
                            aria-hidden="true"
                        />
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">We'd love to hear from <span className="text-sky-500">you!</span></h2>

                            <div className="w-full max-w-md mt-3 overflow-hidden">
                                {showMapFallback ? (
                                    <svg viewBox="0 0 600 800" className="w-full h-auto opacity-55" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="India map">
                                        <defs>
                                            <pattern id="indiaDotPatternFallback" width="8" height="8" patternUnits="userSpaceOnUse">
                                                <circle cx="2" cy="2" r="1.2" fill="#f8fafc" />
                                            </pattern>
                                        </defs>
                                        <path
                                            d="M120 60 C160 20 230 10 270 40 C300 70 340 120 330 160 C320 200 300 230 280 270 C260 310 240 330 210 360 C190 385 165 410 150 440 C135 470 130 500 150 540 C170 580 200 590 220 600 C240 610 260 625 270 640 C280 660 300 670 320 660 C340 650 360 640 380 620 C400 600 420 580 430 560 C440 540 450 510 445 490 C440 470 420 450 410 430 C400 410 390 380 370 360 C350 340 340 320 330 300 C320 280 310 260 300 240 C290 220 280 200 270 180 C260 160 240 140 220 120 C200 100 160 80 120 60 Z"
                                            fill="url(#indiaDotPatternFallback)"
                                            stroke="#f1f5f9"
                                            strokeWidth="1"
                                        />
                                        <circle cx="268" cy="378" r="12" fill="#e5e7eb" />
                                    </svg>
                                ) : (
                                    <img
                                        src="/india-map.svg"
                                        alt=""
                                        className="w-full h-auto opacity-[0.05]"
                                        loading="lazy"
                                        onError={() => setShowMapFallback(true)}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-[106px] lg:-ml-14 pl-0 lg:pl-2 self-start">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 min-h-[160px] h-full border rounded-xl shadow-sm flex items-start">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 mt-0.5 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                                            <Mail size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0 text-left space-y-1.5">
                                            <div className="min-h-[20px] text-sm font-semibold leading-5 text-slate-900">Email Us</div>
                                            <div className="text-xs md:text-sm leading-5 text-sky-500 break-words">vedanth.padigelwar@aarogyaid.com</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 min-h-[160px] h-full border rounded-xl shadow-sm flex items-start">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 mt-0.5 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                                            <MessageCircle size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0 text-left space-y-1.5">
                                            <div className="min-h-[20px] text-sm font-semibold leading-5 text-slate-900">Chat to support</div>
                                            <div className="text-xs md:text-sm leading-5 text-slate-500">
                                                <span className="block">We're here to help</span>
                                                <span className="block text-sky-500 break-words">vedanth.padigelwar@aarogyaid.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 min-h-[160px] h-full border rounded-xl shadow-sm flex items-start">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 mt-0.5 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                                            <Headphones size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0 text-left space-y-1.5">
                                            <div className="min-h-[20px] text-sm font-semibold leading-5 text-slate-900">Visit us</div>
                                            <div className="text-xs md:text-sm leading-5 text-slate-500">Vittal Rao Nagar, Madhapur,<br/>Hyderabad, Telangana 500081</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 min-h-[160px] h-full border rounded-xl shadow-sm flex items-start">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 mt-0.5 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                                            <Phone size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0 text-left space-y-1.5">
                                            <div className="min-h-[20px] text-sm font-semibold leading-5 text-slate-900">Call us</div>
                                            <div className="text-xs md:text-sm leading-5 text-slate-500">Mon-Fri from 8am-5pm<br/><span className="text-sky-500">+91 (990) 876-0036</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Contact;

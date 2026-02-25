import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const services = ['AI & ML', 'Cloud', 'Cybersecurity', 'Web & SaaS', 'Mobile', 'Consulting'];

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            service: services[0],
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            subject: Yup.string().max(120, 'Too long').required('Required'),
            service: Yup.string().required('Required'),
            message: Yup.string().required('Required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setSubmitting(true);
            try {
                await api.post('/contact', values);
                setSubmitted(true);
                resetForm();
                setTimeout(() => setSubmitted(false), 6000);
            } catch (err) {
                alert('Failed to send message.');
            } finally {
                setSubmitting(false);
            }
        },
    });

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
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Katalyx Solutions",
                    "url": "https://katalyxsolutions.com/contact",
                    "description": "Contact Katalyx Solutions for AI software, ERP and SaaS development consultations.",
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://katalyxsolutions.com/contact" }] }
                })}</script>
            </Helmet>


            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0b1220] to-[#0d1525]" />
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/5 to-indigo-500/5 rounded-full blur-3xl" />
                </div>
                
                <div className="container mx-auto px-6 relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700/50 mb-6"
                    >
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-slate-300">Let's Connect</span>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="max-w-xl">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span className="text-white">One Conversation Away From Your </span>
                                <span className="text-sky-300">Next Breakthrough.</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-white/80 text-sm leading-relaxed max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Whether you're exploring ERP transformation, AI integration, or building a scalable digital platform — we're ready to architect it with you.
                            </motion.p>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-3 text-slate-300 text-base font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Let's turn your vision into execution.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-5">
                                <Link to="#contact-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-full shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all group text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    <span>TALK TO US</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <div className="flex -space-x-1.5">
                                        <div className="w-7 h-7 rounded-full bg-slate-600 border-2 border-[#0b0e14]" />
                                        <div className="w-7 h-7 rounded-full bg-slate-500 border-2 border-[#0b0e14]" />
                                        <div className="w-7 h-7 rounded-full bg-slate-400 border-2 border-[#0b0e14]" />
                                    </div>
                                    <span className="text-xs font-medium">Join 500+ growth-focused teams building smarter systems.</span>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400">
                                        <Mail size={14} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Email us at</p>
                                        <p className="text-sm font-semibold text-slate-200">info@katalyxsolutions.com</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div id="contact-form">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#0d1525] rounded-2xl p-5 md:p-8 border border-slate-800/50"
                            >
                                <div className="space-y-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 flex-shrink-0">
                                            <Mail size={18} className="text-sky-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Send us a message</h3>
                                            <p className="text-xs text-slate-500">We'll get back within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <AnimatePresence mode="wait">
                                            {submitted ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-500/10 border border-green-500/20 rounded-2xl"
                                                >
                                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4">
                                                        <Send size={28} />
                                                    </div>
                                                    <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Message Sent!</h2>
                                                    <p className="text-sm text-slate-400">Thank you for reaching out. We'll get back to you shortly.</p>
                                                    <button
                                                        onClick={() => setSubmitted(false)}
                                                        className="mt-4 text-sky-400 hover:text-sky-300 font-medium text-sm"
                                                    >
                                                        Send another message
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <motion.form
                                                    key="form"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    onSubmit={formik.handleSubmit}
                                                    className="space-y-4"
                                                >
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        <div>
                                                            <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Full Name</label>
                                                            <input
                                                                id="name"
                                                                type="text"
                                                                {...formik.getFieldProps('name')}
                                                                className="w-full px-3 py-2.5 rounded-lg bg-[#0a0f1a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm"
                                                                placeholder="John Doe"
                                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                                            />
                                                            {formik.touched.name && formik.errors.name ? (
                                                                <div className="text-red-400 text-xs mt-1">{formik.errors.name}</div>
                                                            ) : null}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Email Address</label>
                                                            <input
                                                                id="email"
                                                                type="email"
                                                                {...formik.getFieldProps('email')}
                                                                className="w-full px-3 py-2.5 rounded-lg bg-[#0a0f1a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm"
                                                                placeholder="john@example.com"
                                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                                            />
                                                            {formik.touched.email && formik.errors.email ? (
                                                                <div className="text-red-400 text-xs mt-1">{formik.errors.email}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        <div>
                                                            <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Subject</label>
                                                            <input
                                                                id="subject"
                                                                type="text"
                                                                {...formik.getFieldProps('subject')}
                                                                className="w-full px-3 py-2.5 rounded-lg bg-[#0a0f1a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm"
                                                                placeholder="Project inquiry, pricing, etc."
                                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                                            />
                                                            {formik.touched.subject && formik.errors.subject ? (
                                                                <div className="text-red-400 text-xs mt-1">{formik.errors.subject}</div>
                                                            ) : null}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="service" className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Service</label>
                                                            <select
                                                                id="service"
                                                                {...formik.getFieldProps('service')}
                                                                className="w-full px-3 py-2.5 rounded-lg bg-[#0a0f1a] border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm"
                                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                                            >
                                                                {services.map((s) => (
                                                                    <option key={s} value={s} className="bg-[#0a0f1a]">{s}</option>
                                                                ))}
                                                            </select>
                                                            {formik.touched.service && formik.errors.service ? (
                                                                <div className="text-red-400 text-xs mt-1">{formik.errors.service}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Message</label>
                                                        <textarea
                                                            id="message"
                                                            rows="4"
                                                            {...formik.getFieldProps('message')}
                                                            className="w-full px-3 py-2.5 rounded-lg bg-[#0a0f1a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm"
                                                            placeholder="Tell us about your project or requirements..."
                                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                                        />
                                                        {formik.touched.message && formik.errors.message ? (
                                                            <div className="text-red-400 text-xs mt-1">{formik.errors.message}</div>
                                                        ) : null}
                                                    </div>

                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.99 }}
                                                        disabled={submitting}
                                                        type="submit"
                                                        className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2.5 rounded-xl font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 disabled:opacity-50 text-sm"
                                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                                    >
                                                        {submitting ? (
                                                            <>
                                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            <>
                                                                Send Message <Send size={14} />
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </motion.form>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

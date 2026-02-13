import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import api from '../utils/api';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setSubmitting(true);
            try {
                await api.post('/contact', values);
                setSubmitted(true);
                resetForm();
                setTimeout(() => setSubmitted(false), 5000);
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
                <title>Contact Us - Katalyx Solutions</title>
            </Helmet>

            <section className="py-24 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] min-h-screen flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="grid md:grid-cols-2 gap-16 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-700">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl font-bold text-white mb-6"
                            >
                                Get in <span className="text-blue-500">Touch</span>
                            </motion.h1>
                            <p className="text-gray-300 mb-12">
                                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/20">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Email Us</h3>
                                        <p className="text-gray-400">info@katalyx.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 flex-shrink-0 border border-purple-500/20">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Call Us</h3>
                                        <p className="text-gray-400">+91 63986 92585</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 flex-shrink-0 border border-cyan-500/20">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Visit Us</h3>
                                        <p className="text-gray-400">Innovation Hub, Dehradun, Uttarakhand, India</p>
                                    </div>
                                </div>
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
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                            <Send size={40} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">Message Sent!</h2>
                                        <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 text-blue-400 hover:text-blue-300 font-semibold"
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
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                {...formik.getFieldProps('name')}
                                                className="w-full px-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                            />
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="text-red-400 text-sm mt-1">{formik.errors.name}</div>
                                            ) : null}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                {...formik.getFieldProps('email')}
                                                className="w-full px-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-400 text-sm mt-1">{formik.errors.email}</div>
                                            ) : null}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                            <textarea
                                                id="message"
                                                rows="5"
                                                {...formik.getFieldProps('message')}
                                                className="w-full px-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Tell us about your project or requirements..."
                                            />
                                            {formik.touched.message && formik.errors.message ? (
                                                <div className="text-red-400 text-sm mt-1">{formik.errors.message}</div>
                                            ) : null}
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            disabled={submitting}
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 disabled:opacity-50"
                                        >
                                            {submitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <Send size={18} />
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

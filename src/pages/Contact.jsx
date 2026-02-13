import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import api from '../utils/api';

const Contact = () => {
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
            try {
                await api.post('/contact', values);
                alert('Message sent successfully!');
                resetForm();
            } catch (err) {
                alert('Failed to send message.');
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
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/30">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Email Us</h3>
                                        <p className="text-gray-400">contact@katalyx.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/30">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Call Us</h3>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/30">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Visit Us</h3>
                                        <p className="text-gray-400">123 Innovation Dr, Tech City, TC 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    {...formik.getFieldProps('name')}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-400 text-sm mt-1">{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...formik.getFieldProps('email')}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-400 text-sm mt-1">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    {...formik.getFieldProps('message')}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Tell us about your project..."
                                />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="text-red-400 text-sm mt-1">{formik.errors.message}</div>
                                ) : null}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

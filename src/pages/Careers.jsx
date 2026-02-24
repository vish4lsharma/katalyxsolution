import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Clock, Upload, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import TechBackground from '../components/3d/TechBackground';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', resumeLink: '' });
    const [submitting, setSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await api.get('/jobs');
            setJobs(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApplyClick = (job) => {
        setSelectedJob(job);
    };

    const [submitted, setSubmitted] = useState(false);

    const handleApply = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await api.post('/applications', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                jobId: selectedJob._id,
                resumeLink: formData.resumeLink
            });
            setSubmitted(true);
            setTimeout(() => {
                setSelectedJob(null);
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', resumeLink: '' });
            }, 3000);
        } catch (err) {
            alert('Failed to submit application. Please try again.');
        }
        setSubmitting(false);
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
            <section className="bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-white py-32 text-center relative overflow-hidden">
                <TechBackground />
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="relative z-10 container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Join the <span className="text-blue-400">Revolution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                    >
                        Build the future with us. We're looking for passionate thinkers and doers from around the globe.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link to="/candidate/login" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                            Candidate Portal
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Job List */}
            <section className="py-24 bg-[#0f0f1a] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#0f0f1a]" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold mb-12 text-white">Open Positions</h2>
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-gray-900/50 rounded-3xl border border-gray-800 backdrop-blur-sm">
                            <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-4" />
                            <p className="text-blue-400 font-medium animate-pulse">Loading positions...</p>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-20 bg-gray-900/50 rounded-3xl border border-gray-800 backdrop-blur-sm">
                            <Briefcase size={48} className="mx-auto text-gray-700 mb-4" />
                            <p className="text-xl text-gray-400">No open positions currently. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job._id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row justify-between items-center hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                                >
                                    <div className="mb-6 md:mb-0 w-full md:w-2/3 pr-6">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                            <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700"><Briefcase size={14} className="text-blue-500" /> {job.department}</span>
                                            <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700"><MapPin size={14} className="text-purple-500" /> {job.location}</span>
                                            <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700"><Clock size={14} className="text-green-500" /> {job.type}</span>
                                        </div>
                                        <p className="text-gray-300 mb-4 text-base leading-relaxed line-clamp-3 md:line-clamp-none">{job.description}</p>
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Requirements</h4>
                                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                                {job.requirements && job.requirements.map((req, i) => (
                                                    <li key={i}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-4 w-full md:w-auto mt-6 md:mt-0">
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 w-full md:w-auto text-center"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4 py-10 overflow-y-auto">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#1a1a2e] border border-gray-700 rounded-3xl w-full max-w-lg p-8 md:p-10 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-gray-800/50 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {submitted ? (
                                <div className="py-12 text-center">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/30">
                                        <Clock size={40} className="animate-pulse" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Application Received!</h2>
                                    <p className="text-gray-400">Our team will review your profile and get back to you soon.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-white mb-2">Apply Now</h2>
                                        <p className="text-blue-400 font-medium">{selectedJob.title} <span className="text-gray-500 mx-2">•</span> {selectedJob.location}</p>
                                    </div>

                                    <form onSubmit={handleApply} className="space-y-6">
                                        <div className="grid grid-cols-1 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                                <input required type="text" className="w-full bg-gray-900/50 border border-gray-700 p-3.5 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all"
                                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                                <input required type="email" className="w-full bg-gray-900/50 border border-gray-700 p-3.5 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all"
                                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                                <input required type="tel" className="w-full bg-gray-900/50 border border-gray-700 p-3.5 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all"
                                                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Resume Link (Google Drive/Dropbox)</label>
                                                <div className="relative">
                                                    <input
                                                        required
                                                        type="url"
                                                        placeholder="https://..."
                                                        className="w-full bg-gray-900/50 border border-gray-700 p-3.5 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all pl-12"
                                                        value={formData.resumeLink || ''}
                                                        onChange={e => setFormData({ ...formData, resumeLink: e.target.value })}
                                                    />
                                                    <Upload className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            disabled={submitting}
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 mt-4 shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            {submitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    Processing...
                                                </>
                                            ) : 'Submit Application'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Careers;

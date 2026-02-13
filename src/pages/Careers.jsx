import { motion } from 'framer-motion';
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
        }
    };

    const handleApplyClick = (job) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (!token || user.role !== 'candidate') {
            // Not logged in or not a candidate, redirect to login
            alert('Please login as a candidate to apply for jobs');
            navigate('/candidate/login');
            return;
        }

        // User is logged in, show application modal
        setSelectedJob(job);
    };

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
            alert('Application submitted successfully!');
            setSelectedJob(null);
            setFormData({ name: '', email: '', phone: '', resumeLink: '' });
        } catch (err) {
            alert('Failed to submit application. Please try again.');
        }
        setSubmitting(false);
    };

    return (
        <>
            <Helmet><title>Careers - Join Katalyx</title></Helmet>

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
                            Candidate Login
                        </Link>
                        <Link to="/candidate/login" className="bg-transparent border border-blue-400 text-blue-300 px-8 py-3 rounded-full font-bold hover:bg-blue-900/30 transition-colors">
                            Register Now
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Job List */}
            <section className="py-24 bg-[#0f0f1a] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#0f0f1a]" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold mb-12 text-white">Open Positions</h2>
                    {jobs.length === 0 ? (
                        <p className="text-center text-gray-400">No open positions currently. Check back soon!</p>
                    ) : (
                        <div className="grid gap-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job._id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col md:flex-row justify-between items-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                        <div className="flex gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-1"><Briefcase size={14} className="text-blue-500" /> {job.department}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} className="text-purple-500" /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Clock size={14} className="text-green-500" /> {job.type}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleApplyClick(job)}
                                        className="text-blue-400 font-semibold hover:bg-blue-500/10 px-6 py-2 rounded-lg transition-colors border border-blue-500/30 hover:border-blue-400"
                                    >
                                        Apply Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Application Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl"
                    >
                        <button
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold mb-1">Apply for {selectedJob.title}</h2>
                        <p className="text-gray-500 text-sm mb-6">{selectedJob.location} • {selectedJob.type}</p>

                        <form onSubmit={handleApply} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input required type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input required type="email" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input required type="tel" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Resume Google Drive Link</label>
                                <input
                                    required
                                    type="url"
                                    placeholder="https://drive.google.com/file/d/..."
                                    className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.resumeLink || ''}
                                    onChange={e => setFormData({ ...formData, resumeLink: e.target.value })}
                                />
                                {/* <p className="text-xs text-gray-500 mt-1">
                                    Upload your resume to Google Drive and share the link here.
                                    <a
                                        href="https://drive.google.com/drive/folders/1meKIlmlg6UofT0xn5xkwXjHiu2Ziscdh?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline ml-1"
                                    >
                                        Upload to shared folder
                                    </a>
                                </p> */}
                            </div>
                            <button
                                disabled={submitting}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 mt-4"
                            >
                                {submitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Careers;

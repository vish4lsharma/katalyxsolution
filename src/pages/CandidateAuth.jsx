import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, ArrowRight, Loader2 } from 'lucide-react';
import api from '../utils/api';

const CandidateAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', phone: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const endpoint = isLogin ? '/candidate/login' : '/candidate/register';
            const res = await api.post(endpoint, formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user)); // Store user info including role
            navigate('/candidate/dashboard');
        } catch (err) {
            alert(err.response?.data?.msg || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet><title>{isLogin ? 'Candidate Login' : 'Register'} - Katalyx</title></Helmet>
            <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#1a1a2e] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-700 relative z-10"
                >
                    <div className="p-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center border-b border-gray-700">
                        <h1 className="text-2xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Join Our Talent Network'}</h1>
                        <p className="text-blue-200">{isLogin ? 'Login to manage your applications' : 'Create an account to apply for jobs'}</p>
                    </div>

                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {!isLogin && (
                                <>
                                    <div className="relative">
                                        <User className="absolute top-3 left-3 text-gray-500" size={20} />
                                        <input
                                            name="name" type="text" placeholder="Full Name" required
                                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute top-3 left-3 text-gray-500" size={20} />
                                        <input
                                            name="phone" type="tel" placeholder="Phone Number" required
                                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="relative">
                                <Mail className="absolute top-3 left-3 text-gray-500" size={20} />
                                <input
                                    name="email" type="email" placeholder="Email Address" required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute top-3 left-3 text-gray-500" size={20} />
                                <input
                                    name="password" type="password" placeholder="Password" required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden shadow-lg shadow-blue-900/50"
                            >
                                {loading && (
                                    <div className="absolute inset-0 bg-blue-700">
                                        <div className="h-full bg-blue-500 animate-progress" style={{ animation: 'progress 1s ease-in-out' }}></div>
                                    </div>
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={18} />
                                            {isLogin ? 'Logging in...' : 'Creating Account...'}
                                        </>
                                    ) : (
                                        <>
                                            {isLogin ? 'Login' : 'Create Account'} <ArrowRight size={18} />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>

                        <div className="mt-6 text-center text-gray-400">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-400 font-bold hover:text-blue-300 hover:underline transition-colors"
                            >
                                {isLogin ? 'Register' : 'Login'}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default CandidateAuth;

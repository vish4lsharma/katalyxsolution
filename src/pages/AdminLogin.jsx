import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';
import api from '../utils/api';
import Logo from '../components/layout/Logo';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet><title>Admin Login - Katalyx</title></Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="max-w-md w-full bg-[#1a1a2e] rounded-2xl shadow-2xl p-8 border border-gray-700 relative z-10">
                    <div className="flex justify-center mb-8">
                        <Logo className="h-16 w-auto" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-white mb-8">Admin Portal</h2>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-[#0f0f1a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-[#0f0f1a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden flex items-center justify-center gap-2"
                        >
                            {loading && (
                                <div className="absolute inset-0 bg-blue-700">
                                    <div className="h-full bg-blue-500 animate-progress"></div>
                                </div>
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;

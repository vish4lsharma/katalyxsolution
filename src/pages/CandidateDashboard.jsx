import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../utils/api';
import { Briefcase, User, Calendar, LogOut } from 'lucide-react';

const CandidateDashboard = () => {
    const [profile, setProfile] = useState(null);
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (!token || user?.role !== 'candidate') {
            navigate('/candidate/login');
            return;
        }

        const fetchDashboard = async () => {
            try {
                const res = await api.get('/candidate/dashboard');
                setProfile(res.data.candidate);
                setApplications(res.data.applications);
            } catch (err) {
                console.error(err);
                if (err.response?.status === 401) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/candidate/login');
                }
            }
        };

        fetchDashboard();
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/candidate/login');
    };

    if (!profile) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <>
            <Helmet><title>My Dashboard - Katalyx</title></Helmet>
            <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Welcome, <span className="text-blue-400">{profile.name}</span></h1>
                            <p className="text-gray-400">Manage your job applications and profile</p>
                        </div>
                        <button onClick={logout} className="flex items-center gap-2 text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-colors border border-red-500/20">
                            <LogOut size={18} /> Logout
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Profile Summary */}
                        <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg border border-gray-700 h-fit">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/30">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">My Profile</h3>
                                    <p className="text-sm text-gray-400">Candidate</p>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-500">Email:</span>
                                    <span className="font-medium text-gray-300">{profile.email}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-500">Phone:</span>
                                    <span className="font-medium text-gray-300">{profile.phone || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Member Since:</span>
                                    <span className="font-medium text-gray-300">{new Date(profile.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Applications List */}
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Briefcase size={20} className="text-blue-500" /> My Applications
                            </h2>

                            <div className="space-y-4">
                                {applications.length === 0 ? (
                                    <div className="bg-[#1a1a2e] p-8 rounded-xl border border-gray-700 text-center">
                                        <p className="text-gray-400 mb-4">You haven't applied to any jobs yet.</p>
                                        <button onClick={() => navigate('/careers')} className="text-blue-400 font-bold hover:text-blue-300 hover:underline transition-colors">Browse Openings</button>
                                    </div>
                                ) : (
                                    applications.map(app => (
                                        <div key={app._id} className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg border border-gray-700 flex justify-between items-center group hover:border-blue-500/30 transition-all">
                                            <div>
                                                <h3 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">{app.jobId?.title || 'Job Application'}</h3>
                                                <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                                    <span className="flex items-center gap-1"><Calendar size={14} /> Applied: {new Date(app.appliedAt).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${app.status === 'Hired' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                    app.status === 'Rejected' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                        app.status === 'Interviewing' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                            'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                                                    }`}
                                                >
                                                    {app.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CandidateDashboard;

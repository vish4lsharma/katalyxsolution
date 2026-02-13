import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../utils/api';
import { Plus, Trash2, FileText, CheckCircle, XCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('jobs');
    const [jobs, setJobs] = useState([]);
    const [applications, setApplications] = useState([]);
    const [inquiries, setInquiries] = useState([]);
    const [showJobModal, setShowJobModal] = useState(false);
    const navigate = useNavigate();

    // Job Form State
    const [jobForm, setJobForm] = useState({
        title: '', department: '', location: '', type: 'Full-time', description: '', requirements: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/admin/login');
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        try {
            const [jobsRes, appsRes, inquiriesRes] = await Promise.all([
                api.get('/jobs'),
                api.get('/applications'),
                api.get('/contact')
            ]);
            setJobs(jobsRes.data);
            setApplications(appsRes.data);
            setInquiries(inquiriesRes.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleJobSubmit = async (e) => {
        e.preventDefault();
        try {
            const requirements = jobForm.requirements.split('\n').filter(r => r.trim());
            await api.post('/jobs', { ...jobForm, requirements });
            setShowJobModal(false);
            setJobForm({ title: '', department: '', location: '', type: 'Full-time', description: '', requirements: '' });
            fetchData();
        } catch (err) {
            console.error(err);
            alert('Failed to post job');
        }
    };

    const handleDeleteJob = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/jobs/${id}`);
                fetchData();
            } catch (err) { console.error(err); }
        }
    };

    const handleStatusChange = async (id, status) => {
        try {
            await api.patch(`/applications/${id}/status`, { status });
            fetchData();
        } catch (err) { console.error(err); }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    return (
        <>
            <Helmet><title>Admin Dashboard - Katalyx</title></Helmet>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                    <div className="px-8 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Katalyx Admin</h1>
                                <p className="text-xs text-gray-500">Management Dashboard</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                <div className="flex">
                    {/* Sidebar */}
                    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] sticky top-[73px]">
                        <nav className="p-4 space-y-1">
                            <button
                                onClick={() => setActiveTab('jobs')}
                                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 ${activeTab === 'jobs'
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <FileText size={18} />
                                Job Postings
                                {jobs.length > 0 && (
                                    <span className={`ml-auto text-xs px-2 py-1 rounded-full ${activeTab === 'jobs' ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {jobs.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('applications')}
                                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 ${activeTab === 'applications'
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <CheckCircle size={18} />
                                Applications
                                {applications.length > 0 && (
                                    <span className={`ml-auto text-xs px-2 py-1 rounded-full ${activeTab === 'applications' ? 'bg-white/20' : 'bg-green-100 text-green-600'
                                        }`}>
                                        {applications.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('inquiries')}
                                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 ${activeTab === 'inquiries'
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Clock size={18} />
                                Inquiries
                                {inquiries.length > 0 && (
                                    <span className={`ml-auto text-xs px-2 py-1 rounded-full ${activeTab === 'inquiries' ? 'bg-white/20' : 'bg-purple-100 text-purple-600'
                                        }`}>
                                        {inquiries.length}
                                    </span>
                                )}
                            </button>
                        </nav>
                    </aside>


                    {/* Main Content */}
                    <main className="flex-1 p-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-1">{jobs.length}</h3>
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <FileText className="text-blue-600" size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Applications</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-1">{applications.length}</h3>
                                    </div>
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <CheckCircle className="text-green-600" size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Inquiries</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-1">{inquiries.length}</h3>
                                    </div>
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <Clock className="text-purple-600" size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {activeTab === 'jobs' && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
                                    <button
                                        onClick={() => setShowJobModal(true)}
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-blue-600/30 transition-all font-medium"
                                    >
                                        <Plus size={18} /> Post New Job
                                    </button>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Department</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {jobs.length === 0 ? (
                                                <tr>
                                                    <td colSpan="5" className="px-6 py-12 text-center text-gray-600 font-medium">
                                                        No jobs posted yet. Click "Post New Job" to get started.
                                                    </td>
                                                </tr>
                                            ) : (
                                                jobs.map((job) => (
                                                    <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">{job.title}</td>
                                                        <td className="px-6 py-4 text-gray-600">{job.department}</td>
                                                        <td className="px-6 py-4 text-gray-600">{job.location}</td>
                                                        <td className="px-6 py-4">
                                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                                {job.type}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <button
                                                                onClick={() => handleDeleteJob(job._id)}
                                                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'applications' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Candidate Applications</h2>
                                <div className="space-y-4">
                                    {applications.map((app) => (
                                        <div key={app._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{app.name}</h3>
                                                    <p className="text-sm text-gray-500 mb-2">Applied for: <span className="font-semibold text-blue-600">{app.jobId?.title || 'Unknown Role'}</span></p>
                                                    <div className="flex gap-4 text-sm text-gray-600">
                                                        <p>{app.email}</p>
                                                        <p>{app.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <select
                                                        value={app.status}
                                                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
                                                        className={`px-3 py-1 rounded-full text-sm font-medium border border-gray-200 outline-none
                            ${app.status === 'Pending' ? 'bg-yellow-50 text-yellow-700' :
                                                                app.status === 'Hired' ? 'bg-green-50 text-green-700' :
                                                                    app.status === 'Rejected' ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-700'}`}
                                                    >
                                                        {['Pending', 'Reviewed', 'Interviewing', 'Rejected', 'Hired'].map(s => (
                                                            <option key={s} value={s}>{s}</option>
                                                        ))}
                                                    </select>
                                                    <a
                                                        href={app.resumeAccesor}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
                                                    >
                                                        <FileText size={14} /> View Resume on Drive
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'inquiries' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Inquiries</h2>
                                <div className="space-y-4">
                                    {inquiries.length === 0 ? <p className="text-gray-500">No inquiries yet.</p> : inquiries.map((msg) => (
                                        <div key={msg._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{msg.name}</h3>
                                                    <p className="text-sm text-gray-500">{msg.email}</p>
                                                </div>
                                                <span className="text-xs text-gray-400">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{msg.message}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>

                    {/* Post Job Modal */}
                    {showJobModal && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">Post New Opportunity</h2>
                                <form onSubmit={handleJobSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Job Title</label>
                                            <input required className="w-full border p-2 rounded-lg text-gray-900" value={jobForm.title} onChange={e => setJobForm({ ...jobForm, title: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Department</label>
                                            <input required className="w-full border p-2 rounded-lg text-gray-900" value={jobForm.department} onChange={e => setJobForm({ ...jobForm, department: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Location</label>
                                            <input required className="w-full border p-2 rounded-lg text-gray-900" value={jobForm.location} onChange={e => setJobForm({ ...jobForm, location: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-gray-700">Type</label>
                                            <select className="w-full border p-2 rounded-lg text-gray-900" value={jobForm.type} onChange={e => setJobForm({ ...jobForm, type: e.target.value })}>
                                                <option>Full-time</option><option>Part-time</option><option>Remote</option><option>Contract</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
                                        <textarea required rows="4" className="w-full border p-2 rounded-lg text-gray-900" value={jobForm.description} onChange={e => setJobForm({ ...jobForm, description: e.target.value })}></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Requirements (one per line)</label>
                                        <textarea required rows="4" className="w-full border p-2 rounded-lg text-gray-900" value={jobForm.requirements} onChange={e => setJobForm({ ...jobForm, requirements: e.target.value })}></textarea>
                                    </div>
                                    <div className="flex justify-end gap-3 mt-6">
                                        <button type="button" onClick={() => setShowJobModal(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Post Job</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;

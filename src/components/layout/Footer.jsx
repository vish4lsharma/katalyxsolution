import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, Mail, MapPin } from 'lucide-react';
import api from '../../utils/api';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846] text-white py-16 relative overflow-hidden">
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <Logo className="h-14 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pioneering the future of digital transformation with AI-driven analytics, cloud solutions, and strategic consulting.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/katalyx-solutions/about/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-colors"
                                aria-label="Katalyx Solutions on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <div className="space-y-2 pt-2">
                            <a href="mailto:info@katalyxsolutions.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-colors text-sm">
                                <Mail size={15} /> info@katalyxsolutions.com
                            </a>
                            <p className="flex items-center gap-2 text-gray-500 text-sm">
                                <MapPin size={15} /> India
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Our Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-gray-200">Services</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/services" className="hover:text-white transition-colors">AI Analytics</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Digital Consulting</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Product Suite</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-200">Stay Updated</h4>
                        <form className="flex flex-col gap-3" onSubmit={async (e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            try {
                                await api.post('/subscribe', { email });
                                alert('Subscribed successfully!');
                                e.target.reset();
                            } catch (err) {
                                alert(err.response?.data?.msg || 'Subscription failed');
                            }
                        }}>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="btn-gradient-navy rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                Subscribe <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p>© {new Date().getFullYear()} <span className="font-semibold uppercase text-sky-400">KATALYX</span>. All rights reserved.</p>
                        <p className="text-gray-600">KATALYX — LLP registration in process, India.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link to="/admin/login" className="hover:text-gray-300">Admin</Link>
                        <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

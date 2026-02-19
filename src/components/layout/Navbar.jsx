import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Services', to: '/services' },
        { name: 'Products', to: '/products' },
        { name: 'Careers', to: '/careers' },
        { name: 'Blog', to: '/blog' },
        { name: 'Contact', to: '/contact' },
    ];

    const location = useLocation();

    // Check if current page has a dark hero section
    const isDarkHero =
        location.pathname === '/' ||
        location.pathname === '/services' ||
        location.pathname === '/careers' ||
        location.pathname.startsWith('/products') ||
        location.pathname.startsWith('/projects') ||
        location.pathname === '/about' ||
        location.pathname === '/contact' ||
        location.pathname === '/blog' ||
        location.pathname === '/terms' ||
        location.pathname === '/privacy' ||
        location.pathname === '/candidate/login' ||
        location.pathname === '/candidate/register' ||
        location.pathname === '/admin/login' ||
        location.pathname === '/get-started';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-white/10 py-4 shadow-2xl'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="z-50 group">
                    <Logo className="h-12 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors duration-300 ${isActive
                                    ? 'text-blue-400 font-semibold'
                                    : (scrolled || isDarkHero) ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/get-started"
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${scrolled || isDarkHero
                            ? 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-white/20'
                            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30'
                            }`}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 z-50 transition-colors ${scrolled || isDarkHero ? 'text-white' : 'text-gray-900'}`}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-[#0f0f1a] z-40 flex flex-col justify-center items-center gap-8 md:hidden"
                        >
                            {links.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-2xl font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link
                                to="/get-started"
                                onClick={() => setIsOpen(false)}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg shadow-blue-600/30"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;

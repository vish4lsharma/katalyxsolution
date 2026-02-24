import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navTheme, setNavTheme] = useState('dark');

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

    useEffect(() => {
        const updateNavbarTheme = () => {
            const themedSections = Array.from(document.querySelectorAll('[data-navbar-theme]'));
            if (themedSections.length === 0) {
                setNavTheme(isDarkHero ? 'dark' : 'light');
                return;
            }

            const probeY = 92;
            let activeSection = themedSections.find((section) => {
                const rect = section.getBoundingClientRect();
                return rect.top <= probeY && rect.bottom > probeY;
            });

            if (!activeSection) {
                const firstBelowProbe = themedSections.find((section) => section.getBoundingClientRect().top > probeY);
                activeSection = firstBelowProbe || themedSections[themedSections.length - 1];
            }

            const nextTheme = activeSection?.getAttribute('data-navbar-theme') === 'light' ? 'light' : 'dark';
            setNavTheme(nextTheme);
        };

        updateNavbarTheme();
        window.addEventListener('scroll', updateNavbarTheme, { passive: true });
        window.addEventListener('resize', updateNavbarTheme);

        return () => {
            window.removeEventListener('scroll', updateNavbarTheme);
            window.removeEventListener('resize', updateNavbarTheme);
        };
    }, [location.pathname, isDarkHero]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${navTheme === 'light'
                ? (scrolled
                    ? 'bg-white/88 backdrop-blur-lg py-3 border-b border-slate-200/80 shadow-[0_8px_24px_rgba(15,23,42,0.08)]'
                    : 'bg-white/72 backdrop-blur-md py-4 border-b border-slate-200/70')
                : (scrolled
                    ? 'bg-[#081321]/74 backdrop-blur-lg py-3 border-b border-white/10 shadow-md'
                    : 'bg-[#081321]/42 backdrop-blur-md py-4 border-b border-white/10')
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="absolute inset-x-4 top-2 bottom-2 rounded-3xl pointer-events-none" />
                <Link to="/" className="z-50 group">
                    <Logo className="h-14 w-auto" />
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
                                    : navTheme === 'light' ? 'text-slate-600 hover:text-sky-700' : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/get-started"
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_10px_24px_rgba(8,20,38,0.24)] ${navTheme === 'light'
                            ? 'bg-[#0b2342] text-white border border-[#0b2342] hover:bg-[#081c36]'
                            : 'bg-white text-[#0b2342] border border-white/95 hover:bg-[#f3f8ff]'
                            }`}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 z-50 transition-colors ${navTheme === 'light' ? 'text-slate-900' : 'text-white'}`}
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
                                className="px-8 py-3 rounded-full text-lg font-bold bg-white text-[#0b2342] border border-white/95 hover:bg-[#f3f8ff] transition-colors duration-200"
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

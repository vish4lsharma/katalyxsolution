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
        location.pathname.startsWith('/projects') ||
        location.pathname === '/about' ||
        location.pathname === '/contact' ||
        location.pathname === '/terms' ||
        location.pathname === '/privacy' ||
        location.pathname === '/candidate/login' ||
        location.pathname === '/candidate/register' ||
        location.pathname === '/admin/login';

    useEffect(() => {
        const updateNavbarTheme = () => {
            const themedSections = Array.from(document.querySelectorAll('[data-navbar-theme]'));
            if (themedSections.length === 0) {
                setNavTheme(isDarkHero ? 'dark' : 'light');
                return;
            }

            const probeLine = 92;
            let activeSection = null;
            themedSections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= probeLine && rect.bottom > probeLine) {
                    activeSection = section;
                }
            });

            let nextTheme;
            if (!activeSection) {
                const firstRect = themedSections[0].getBoundingClientRect();
                nextTheme = firstRect.top > probeLine
                    ? (isDarkHero ? 'dark' : 'light')
                    : (themedSections[themedSections.length - 1]?.getAttribute('data-navbar-theme') === 'light' ? 'light' : 'dark');
            } else {
                nextTheme = activeSection.getAttribute('data-navbar-theme') === 'light' ? 'light' : 'dark';
            }

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

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-[200] transition-all duration-300 max-md:bg-[#081321]/92 max-md:backdrop-blur-lg max-md:py-[clamp(0.6rem,2.6vw,0.9rem)] max-md:border-b max-md:border-white/10 ${navTheme === 'light'
                ? (scrolled
                    ? 'bg-white/88 backdrop-blur-lg py-3 border-b border-slate-200/80 shadow-[0_8px_24px_rgba(15,23,42,0.08)]'
                    : 'bg-white/72 backdrop-blur-md py-4 border-b border-slate-200/70')
                : (scrolled
                    ? 'bg-[#081321]/74 backdrop-blur-lg py-3 border-b border-white/10 shadow-md'
                    : 'bg-[#081321]/42 backdrop-blur-md py-4 border-b border-white/10')
                }`}
        >
            <div className="container mx-auto px-3 sm:px-6 flex justify-between items-center gap-3">
                <div className="absolute inset-x-4 top-2 bottom-2 rounded-3xl pointer-events-none" />
                <Link to="/" className="z-50 group">
                    <Logo className="h-[clamp(2.35rem,7.3vw,3.1rem)] w-auto" theme={navTheme} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors duration-300 ${isActive
                                    ? (navTheme === 'light' ? 'text-slate-900 font-semibold' : 'text-blue-400 font-semibold')
                                    : navTheme === 'light' ? 'text-slate-700 hover:text-slate-900' : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <a
                        href="https://katalyxhrerp.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_10px_24px_rgba(8,20,38,0.24)] ${navTheme === 'light'
                            ? 'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700'
                            : 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                            }`}
                    >
                        Employee Login
                    </a>

                    <Link
                        to="/get-started"
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_10px_24px_rgba(8,20,38,0.24)] ${navTheme === 'light'
                            ? 'bg-slate-900 text-white border border-slate-900 hover:bg-slate-800'
                            : 'bg-white text-[#0b2342] border border-white/95 hover:bg-[#f3f8ff]'
                            }`}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2.5 z-[220] rounded-xl border transition-colors ${navTheme === 'light' ? 'text-slate-900 border-slate-300/80 bg-white/70' : 'text-white border-white/20 bg-white/5'}`}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'calc(100vh - 76px)' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="absolute left-0 right-0 top-full bg-[#0b1422] z-[210] md:hidden overflow-y-auto border-t border-white/10"
                        >
                            <div className="min-h-full w-full flex flex-col items-center pt-4 pb-[max(2rem,env(safe-area-inset-bottom))] px-4">
                                <div className="w-full max-w-sm space-y-2">
                                    {links.map((link) => (
                                        <NavLink
                                            key={link.name}
                                            to={link.to}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `w-full flex items-center justify-between rounded-xl border px-4 py-3 text-[clamp(0.95rem,3.8vw,1.05rem)] font-semibold transition-colors ${isActive ? 'text-sky-300 border-sky-400/50 bg-sky-500/15' : 'text-white border-white/20 bg-white/10 hover:bg-white/15'}`
                                            }
                                        >
                                            <span>{link.name}</span>
                                            <ChevronRight size={16} />
                                        </NavLink>
                                    ))}
                                </div>

                                <a
                                    href="https://katalyxhrerp.online"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-6 w-full max-w-sm px-8 py-3 rounded-xl text-[clamp(0.95rem,3.8vw,1.05rem)] font-bold text-center bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Employee Login
                                </a>

                                <Link
                                    to="/get-started"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-3 w-full max-w-sm px-8 py-3 rounded-xl text-[clamp(0.95rem,3.8vw,1.05rem)] font-bold text-center bg-white text-[#0b2342] border border-white/95 hover:bg-[#f3f8ff] transition-colors duration-200"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;

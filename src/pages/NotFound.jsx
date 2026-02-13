import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found</title>
            </Helmet>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10">
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-9xl font-bold text-gray-800/50"
                    >
                        404
                    </motion.h1>
                    <h2 className="text-3xl font-bold text-white mt-4 mb-6">Page Not Found</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        to="/"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 inline-block"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;

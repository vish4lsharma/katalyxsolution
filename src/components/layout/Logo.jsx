import React from 'react';

const Logo = ({ className = "w-10 h-10", textClassName = "text-xl" }) => {
    return (
        <div className="flex items-center gap-3 group">
            <div className={`relative ${className} flex items-center justify-center`}>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-lg group-hover:bg-blue-600/40 transition-all duration-500" />

                {/* Main Logo Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#9333ea] rounded-xl flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    {/* Abstract Spark/Catalyst SVG */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2/3 h-2/3 text-white"
                    >
                        <path
                            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinejoin="round"
                        />
                        {/* Decorative accents */}
                        <circle cx="18" cy="5" r="1.5" fill="white" className="animate-pulse" />
                        <circle cx="6" cy="19" r="1" fill="white" className="animate-pulse delay-700" />
                    </svg>

                    {/* Internal Shine Effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </div>

            <div className="flex flex-col">
                <span className={`${textClassName} font-extrabold tracking-tight text-white leading-none italic`}>
                    KATALYX
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                    Solutions
                </span>
            </div>
        </div>
    );
};

export default Logo;

import React from 'react';
// Use logo from public directory

const Logo = ({ className = "w-32 h-32", textClassName = "text-xl", showText = false }) => {
    return (
        <div className="flex items-center gap-3 group">
            <div className={`relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-white/60 rounded-xl blur-xl group-hover:bg-navyblue/80 transition-all duration-500" />
                {/* Extra white glow for logo */}
                <div className="absolute inset-0 bg-white opacity-30 rounded-xl blur-2xl pointer-events-none" />
                {/* Logo Image */}
                <img
                    src="/KATALYX_LOGO.png"
                    alt="Katalyx Solutions Logo"
                    className={`${className} object-contain relative drop-shadow-[0_0_30px_white]`}
                />
            </div>

            {showText && (
                <div className="flex flex-col">
                    <span className={`${textClassName} font-extrabold tracking-tight text-white leading-none italic`}>
                        KATALYX
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                        Solutions
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;

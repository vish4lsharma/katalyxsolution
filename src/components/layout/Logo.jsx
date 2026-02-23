import React from 'react';
// Use logo from public directory

const Logo = ({ className = "w-32 h-32", textClassName = "text-xl", showText = false }) => {
    return (
        <div className="flex items-center gap-3 group">
            <div className={`relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute -inset-1 rounded-xl bg-cyan-300/20 blur-xl transition-all duration-500 group-hover:bg-cyan-300/30" />
                <div className="absolute -inset-2 rounded-xl bg-teal-300/10 blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-teal-300/20" />
                {/* Logo Image */}
                <img
                    src="/KATALYX_LOGO.png"
                    alt="Katalyx Solutions Logo"
                    className={`${className} object-contain relative scale-[1.06] drop-shadow-[0_0_16px_rgba(34,211,238,0.38)]`}
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

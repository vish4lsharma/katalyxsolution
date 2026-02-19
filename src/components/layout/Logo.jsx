import React from 'react';
import katalyxLogo from '../../assets/images/katalyx-logo.png';

const Logo = ({ className = "w-10 h-10", textClassName = "text-xl", showText = false }) => {
    return (
        <div className="flex items-center gap-3 group">
            <div className={`relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-lg group-hover:bg-blue-600/25 transition-all duration-500" />
                {/* Logo Image */}
                <img
                    src={katalyxLogo}
                    alt="Katalyx Solutions Logo"
                    className={`${className} object-contain relative drop-shadow-lg`}
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

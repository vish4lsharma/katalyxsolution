import React from 'react';

const Logo = ({ className = 'w-32 h-32', textClassName = 'text-xl', showText = false, theme = 'dark' }) => {
    const isLight = theme === 'light';

    return (
        <div className="flex items-center gap-3 group">
            <div className={`relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className={`absolute -inset-1 rounded-xl blur-xl transition-all duration-500 ${isLight ? 'bg-slate-200/70 group-hover:bg-slate-300/80' : 'bg-white/28 group-hover:bg-white/38'}`} />
                <div className={`absolute -inset-2 rounded-xl blur-2xl pointer-events-none transition-all duration-500 ${isLight ? 'bg-slate-200/45 group-hover:bg-slate-300/60' : 'bg-white/18 group-hover:bg-white/26'}`} />
                <div className={`absolute -inset-3 rounded-2xl blur-3xl pointer-events-none transition-all duration-500 ${isLight ? 'bg-slate-200/30 group-hover:bg-slate-300/45' : 'bg-white/10 group-hover:bg-white/16'}`} />
                {/* Logo Image */}
                <img
                    src="/KATALYX_LOGO.png"
                    alt="Katalyx Solutions Logo"
                    className={`${className} object-contain relative scale-[1.06] ${isLight ? 'drop-shadow-[0_0_8px_rgba(51,65,85,0.20)]' : 'drop-shadow-[0_0_16px_rgba(34,211,238,0.38)]'}`}
                />
            </div>

            {showText && (
                <div className="flex flex-col">
                    <span className={`${textClassName} font-extrabold tracking-tight leading-none italic ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        KATALYX
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isLight ? 'text-sky-700' : 'text-blue-400'}`}>
                        Solutions
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;

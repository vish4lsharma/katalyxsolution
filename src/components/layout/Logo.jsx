import { Hexagon } from 'lucide-react';

const Logo = ({ className = "w-8 h-8" }) => {
    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <Hexagon className={`text-blue-600 ${className}`} strokeWidth={2.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">K</span>
                </div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Katalyx
            </span>
        </div>
    );
};

export default Logo;

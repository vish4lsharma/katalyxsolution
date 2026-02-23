import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon: Icon, className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 justify-center";
    const variants = {
        primary: "btn-gradient-primary",
        secondary: "btn-gradient-secondary",
        outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {Icon && <Icon size={18} />}
        </motion.button>
    );
};

export default Button;

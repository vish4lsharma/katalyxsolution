import { motion } from 'framer-motion';
import './EnergyButton.css';

const EnergyButton = ({ children, onClick, className = '', variant = 'primary' }) => {
    return (
        <motion.button
            className={`energy-button energy-button-${variant} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <span className="button-content">{children}</span>
            <span className="button-glow"></span>
            <span className="button-ripple"></span>
        </motion.button>
    );
};

export default EnergyButton;

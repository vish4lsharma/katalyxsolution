import { motion } from 'framer-motion';
import './AnimatedText.css';

const AnimatedText = ({ children, className = '' }) => {
    const words = children.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.h1
            className={`animated-heading ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="word-wrapper"
                >
                    {word}
                    {index !== words.length - 1 && '\u00A0'}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default AnimatedText;

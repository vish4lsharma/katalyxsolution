import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, className = '', speed = 50, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed, started]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayedText}
            <span className="animate-pulse text-blue-500 ml-1 font-light inline-block transform translate-y-1">|</span>
        </motion.span>
    );
};

export default Typewriter;

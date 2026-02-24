import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({
    text,
    className = '',
    speed = 50,
    deleteSpeed = 36,
    delay = 0,
    loop = true,
    restartDelay = 1200,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState('typing');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        setCurrentIndex(0);
        setPhase('typing');
    }, [text]);

    useEffect(() => {
        if (!started) return undefined;

        if (phase === 'typing') {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setCurrentIndex((prev) => prev + 1);
                }, speed);

                return () => clearTimeout(timeout);
            }

            if (!loop) return undefined;

            const pauseTimeout = setTimeout(() => {
                setPhase('deleting');
            }, restartDelay);

            return () => clearTimeout(pauseTimeout);
        }

        if (currentIndex > 0) {
            const timeout = setTimeout(() => {
                setCurrentIndex((prev) => prev - 1);
            }, deleteSpeed);

            return () => clearTimeout(timeout);
        }

        const restartTimeout = setTimeout(() => {
            setCurrentIndex(0);
            setPhase('typing');
        }, 180);

        return () => clearTimeout(restartTimeout);
    }, [currentIndex, text.length, speed, deleteSpeed, started, loop, restartDelay, phase]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {text.slice(0, currentIndex)}
            <span className="animate-pulse text-current ml-1 font-light inline-block transform translate-y-1">|</span>
        </motion.span>
    );
};

export default Typewriter;

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ value, duration = 2, className = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Parse value strings like "3+", "100%", "99.9%"
    const parseValue = (val) => {
        const num = parseFloat(val.replace(/[^0-9.]/g, ''));
        const suffix = val.replace(/[0-9.]/g, '');
        return { num, suffix };
    };

    const { num: target, suffix } = parseValue(value.toString());

    useEffect(() => {
        if (isInView && !isNaN(target)) {
            let start = 0;
            const end = target;
            const totalDuration = duration * 1000;
            const incrementTime = 16; // 60fps
            const steps = totalDuration / incrementTime;
            const increment = end / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, target, duration]);

    return (
        <span ref={ref} className={className}>
            {isNaN(target) ? value : (
                <>
                    {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
                    {suffix}
                </>
            )}
        </span>
    );
};

export default Counter;

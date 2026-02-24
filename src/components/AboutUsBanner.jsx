import React, { useEffect, useRef, useState, useCallback } from 'react';

const AboutUsBanner = () => {
    const sectionRef = useRef(null);
    const [fillProgress, setFillProgress] = useState(0);

    const missionText =
        'At Katalyx, we believe digital transformation should be seamless and secure - powered by intelligent, real-time AI, not inefficiency, complexity or manual bottlenecks.';

    const chars = missionText.split('');

    const handleScroll = useCallback(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        const scrollableDistance = sectionHeight - windowHeight;
        const scrolledInto = -rect.top;

        if (scrolledInto <= 0) {
            setFillProgress(0);
        } else if (scrolledInto >= scrollableDistance) {
            setFillProgress(1);
        } else {
            setFillProgress(scrolledInto / scrollableDistance);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const filledChars = Math.floor(fillProgress * chars.length);
    const partialFill = (fillProgress * chars.length) % 1;

    return (
        <section
            ref={sectionRef}
            id="about-banner-section"
            data-navbar-theme="dark"
            className="relative w-full overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0b1b2f] to-[#102846]"
            style={{ height: '120vh' }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_55%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] bg-sky-300/10 rounded-full blur-[130px]" />
            <div className="absolute -top-24 right-[-140px] w-[320px] h-[320px] bg-cyan-300/15 rounded-full blur-[110px]" />

            <div className="sticky top-16 h-screen flex items-center justify-center overflow-visible py-8 md:py-12 relative z-10">
                <div className="mx-auto w-full max-w-screen-2xl px-6">
                    <div className="relative mx-auto flex max-w-[1300px] items-center justify-center rounded-[16px] sm:rounded-[24px] md:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0b1b2f] via-[#102846] to-[#0b1b2f] px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                        <p
                            className="max-w-[950px] text-center text-[22px] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[60px] font-semibold leading-[1.1] tracking-tight"
                            style={{ fontSize: 'clamp(1.375rem, 3vw + 0.5rem, 3.75rem)' }}
                        >
                            {chars.map((char, i) => {
                                let color;
                                if (i < filledChars) {
                                    color = 'rgba(255,255,255,1)';
                                } else if (i === filledChars) {
                                    const r = Math.round(56 + (255 - 56) * partialFill);
                                    const g = Math.round(189 + (255 - 189) * partialFill);
                                    const b = Math.round(248 + (255 - 248) * partialFill);
                                    color = `rgb(${r},${g},${b})`;
                                } else {
                                    color = 'rgba(56,189,248,0.42)';
                                }

                                return (
                                    <span key={i} style={{ color, transition: 'color 0.05s' }}>
                                        {char}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsBanner;

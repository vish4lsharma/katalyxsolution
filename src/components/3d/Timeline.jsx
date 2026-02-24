import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  { date: "January, 2025", title: "Katalyx Solutions Founded", position: "below" },
  { date: "March, 2025", title: "Core Team & Product Vision Finalized", position: "above" },
  { date: "June, 2025", title: "Camu ERP Architecture Designed", position: "below" },
  { date: "September, 2025", title: "HealthcareX24 Platform Launched", position: "above" },
  { date: "December, 2025", title: "First Enterprise Client Secured", position: "below" },
  { date: "March, 2026", title: "AI-Powered Automation Layer Deployed", position: "above" },
  { date: "June, 2026", title: "Strategic Global Partnerships Established", position: "below" },
  { date: "December, 2026", title: "Multi-Industry Digital Expansion Achieved", position: "above" },
];

const timelineDateEffects = [
  { initial: { opacity: 0, y: -10 }, animate: { opacity: [0, 1, 0.9, 1], y: 0 } },
  { initial: { opacity: 0, x: -14 }, animate: { opacity: [0, 1, 0.9, 1], x: 0 } },
  { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: [0, 1, 0.94, 1], scale: 1 } },
  { initial: { opacity: 0, rotate: -3, y: 8 }, animate: { opacity: [0, 1, 0.9, 1], rotate: 0, y: 0 } },
  { initial: { opacity: 0, filter: "blur(6px)", y: 6 }, animate: { opacity: [0, 1, 0.9, 1], filter: "blur(0px)", y: 0 } },
  { initial: { opacity: 0, letterSpacing: "0.16em" }, animate: { opacity: [0, 1, 0.9, 1], letterSpacing: "0em" } },
  { initial: { opacity: 0, y: 12, x: -8 }, animate: { opacity: [0, 1, 0.9, 1], y: 0, x: 0 } },
  { initial: { opacity: 0, x: 14, scale: 0.96 }, animate: { opacity: [0, 1, 0.9, 1], x: 0, scale: 1 } },
];

const timelineTitleEffects = [
  { initial: { opacity: 0, y: 12 }, animate: { opacity: [0, 1, 0.88, 1], y: 0 } },
  { initial: { opacity: 0, x: 18 }, animate: { opacity: [0, 1, 0.9, 1], x: 0 } },
  { initial: { opacity: 0, y: -12, scale: 0.95 }, animate: { opacity: [0, 1, 0.9, 1], y: 0, scale: 1 } },
  { initial: { opacity: 0, rotate: 3, y: -6 }, animate: { opacity: [0, 1, 0.9, 1], rotate: 0, y: 0 } },
  { initial: { opacity: 0, filter: "blur(8px)", x: 10 }, animate: { opacity: [0, 1, 0.92, 1], filter: "blur(0px)", x: 0 } },
  { initial: { opacity: 0, letterSpacing: "0.14em", y: 6 }, animate: { opacity: [0, 1, 0.9, 1], letterSpacing: "0em", y: 0 } },
  { initial: { opacity: 0, x: -16, rotate: -2 }, animate: { opacity: [0, 1, 0.9, 1], x: 0, rotate: 0 } },
  { initial: { opacity: 0, y: 10, x: 10 }, animate: { opacity: [0, 1, 0.9, 1], y: 0, x: 0 } },
];

const getTextMotion = (effect, delay) => ({
  initial: effect.initial,
  animate: effect.animate,
  transition: {
    duration: 0.68,
    delay,
    ease: "easeOut",
  },
});

const Timeline = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.32, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme="light"
      className="relative bg-white overflow-hidden -mt-6 md:-mt-8 pt-6 md:pt-8 z-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-[-70px] w-72 h-72 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="absolute -bottom-20 left-[-90px] w-80 h-80 rounded-full bg-cyan-100/45 blur-3xl" />
      </div>

      <div
        className="relative z-10 forDoctors_main_padding mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.8s cubic-bezier(.25,.46,.45,.94)",
        }}
      >
        <div className="text-center mb-20 md:mb-24">
          <motion.h2
            className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-light text-gray-900 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: [0, 1, 0.88, 1], y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            Our {" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-2 text-sky-400">Evolution</span>
              <span
                className="absolute inset-0 border border-dashed border-sky-500/60 rounded-md bg-sky-50/70"
                style={{ top: "2px", bottom: "2px", left: "-2px", right: "-2px" }}
              />
              <span className="absolute -top-[3px] -left-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
              <span className="absolute -top-[3px] -right-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
              <span className="absolute -bottom-[3px] -left-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
              <span className="absolute -bottom-[3px] -right-[5px] w-[6px] h-[6px] bg-sky-500 rounded-full" />
            </span>
          </motion.h2>
          <motion.p
            className="mt-5 text-[14px] md:text-[16px] text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: [0, 1, 0.92, 1], y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          >
            The milestones that shaped our journey from a focused startup to a trusted digital transformation partner.
          </motion.p>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]">
            <div className="absolute inset-0 bg-slate-300/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200/10 via-sky-300/35 to-cyan-200/10" />
            <div className="absolute inset-x-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-sky-300/20 to-transparent blur-sm" />
          </div>

          <div className="relative flex items-center justify-around" style={{ height: "220px" }}>
            {milestones.map((m, i) => {
              const delay = 150 + i * 80;
              const hasGlowPatch = i % 2 === 1;
              const isSpecialMilestone = i === 7;
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : `translateY(${m.position === "above" ? "-12px" : "12px"})`,
                    transition: `all 0.6s cubic-bezier(.25,.46,.45,.94) ${delay}ms`,
                  }}
                >
                  {isSpecialMilestone && (
                    <>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-sky-300/12 blur-3xl pointer-events-none" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-sky-300/16 blur-2xl pointer-events-none" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-sky-300/20 blur-xl pointer-events-none" />
                    </>
                  )}

                  {hasGlowPatch && !isSpecialMilestone && (
                    <>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-cyan-300/8 blur-2xl pointer-events-none" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-cyan-300/12 blur-xl pointer-events-none" />
                    </>
                  )}

                  {m.position === "above" && (
                    <div className="absolute bottom-[calc(50%+18px)] flex flex-col items-center text-center whitespace-nowrap">
                      <div className="w-[1px] h-6 bg-gradient-to-b from-slate-200/50 to-sky-300/70 mb-0" />
                      <motion.p
                        className="text-gray-500 text-[11px] lg:text-[12px] mb-0.5 order-first"
                        initial={timelineDateEffects[i].initial}
                        animate={visible ? timelineDateEffects[i].animate : timelineDateEffects[i].initial}
                        transition={getTextMotion(timelineDateEffects[i], 0.18 + i * 0.08).transition}
                      >
                        {m.date}
                      </motion.p>
                      <motion.p
                        className="text-gray-900 font-semibold text-[12px] lg:text-[14px] tracking-tight order-first"
                        initial={timelineTitleEffects[i].initial}
                        animate={visible ? timelineTitleEffects[i].animate : timelineTitleEffects[i].initial}
                        transition={getTextMotion(timelineTitleEffects[i], 0.24 + i * 0.08).transition}
                      >
                        {m.title}
                      </motion.p>
                    </div>
                  )}

                  <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="absolute w-5 h-5 rounded-full bg-sky-300/30 blur-md" />
                    <div className="relative w-[8px] h-[8px] rounded-full bg-sky-500 shadow-[0_0_6px_1px_rgba(14,165,233,0.45)]" />
                  </div>

                  {m.position === "below" && (
                    <div className="absolute top-[calc(50%+18px)] flex flex-col items-center text-center whitespace-nowrap">
                      <div className="w-[1px] h-6 bg-gradient-to-t from-slate-200/50 to-sky-300/70 mb-1" />
                      <motion.p
                        className="text-gray-500 text-[11px] lg:text-[12px] mb-0.5"
                        initial={timelineDateEffects[i].initial}
                        animate={visible ? timelineDateEffects[i].animate : timelineDateEffects[i].initial}
                        transition={getTextMotion(timelineDateEffects[i], 0.18 + i * 0.08).transition}
                      >
                        {m.date}
                      </motion.p>
                      <motion.p
                        className="text-gray-900 font-semibold text-[12px] lg:text-[14px] tracking-tight"
                        initial={timelineTitleEffects[i].initial}
                        animate={visible ? timelineTitleEffects[i].animate : timelineTitleEffects[i].initial}
                        transition={getTextMotion(timelineTitleEffects[i], 0.24 + i * 0.08).transition}
                      >
                        {m.title}
                      </motion.p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-[2px]">
            <div className="absolute inset-0 bg-slate-300/90" />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200/10 via-sky-300/35 to-cyan-200/10" />
            <div className="absolute -left-1 -right-1 inset-y-0 bg-gradient-to-b from-transparent via-sky-300/20 to-transparent blur-sm" />
          </div>

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => {
              const delay = 100 + i * 60;
              const hasGlowPatch = i % 2 === 1;
              const isSpecialMilestone = i === 7;
              return (
                <div
                  key={i}
                  className="relative"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-12px)",
                    transition: `all 0.5s cubic-bezier(.25,.46,.45,.94) ${delay}ms`,
                  }}
                >
                  {isSpecialMilestone && (
                    <>
                      <div className="absolute -left-8 top-0 w-32 h-32 rounded-full bg-sky-300/12 blur-3xl pointer-events-none" />
                      <div className="absolute -left-8 top-0 w-24 h-24 rounded-full bg-sky-300/16 blur-2xl pointer-events-none" />
                      <div className="absolute -left-8 top-0 w-16 h-16 rounded-full bg-sky-300/20 blur-xl pointer-events-none" />
                    </>
                  )}

                  {hasGlowPatch && !isSpecialMilestone && (
                    <>
                      <div className="absolute -left-8 top-0 w-24 h-24 rounded-full bg-cyan-300/8 blur-2xl pointer-events-none" />
                      <div className="absolute -left-8 top-0 w-16 h-16 rounded-full bg-cyan-300/12 blur-xl pointer-events-none" />
                    </>
                  )}

                  <div className="absolute -left-8 top-1 flex items-center justify-center">
                    <div className="absolute w-5 h-5 rounded-full bg-sky-300/30 blur-md" />
                    <div className="relative w-[8px] h-[8px] rounded-full bg-sky-500 shadow-[0_0_6px_1px_rgba(14,165,233,0.45)]" />
                  </div>

                  <motion.p
                    className="text-gray-500 text-[11px] mb-0.5"
                    initial={timelineDateEffects[i].initial}
                    animate={visible ? timelineDateEffects[i].animate : timelineDateEffects[i].initial}
                    transition={getTextMotion(timelineDateEffects[i], 0.16 + i * 0.07).transition}
                  >
                    {m.date}
                  </motion.p>
                  <motion.p
                    className="text-gray-900 font-semibold text-[14px] tracking-tight"
                    initial={timelineTitleEffects[i].initial}
                    animate={visible ? timelineTitleEffects[i].animate : timelineTitleEffects[i].initial}
                    transition={getTextMotion(timelineTitleEffects[i], 0.22 + i * 0.07).transition}
                  >
                    {m.title}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

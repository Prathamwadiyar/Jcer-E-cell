import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  { year: '2020', title: 'E-Cell Founded', desc: 'JCER E-Cell established with a passionate group of student entrepreneurs and a bold vision to transform the campus.' },
  { year: '2021', title: 'First Startup Workshop', desc: 'Organized our inaugural Entrepreneurship Awareness Program, igniting the startup spirit across campus.' },
  { year: '2022', title: 'First Hackathon', desc: 'Launched our flagship 24-hour Hackathon attracting 150+ participants from colleges across Karnataka.' },
  { year: '2023', title: 'Idea Pitch Competition', desc: 'Hosted our first Idea Pitch event with industry mentors and investors evaluating student startup ideas.' },
  { year: '2024', title: 'Founder Talks Series', desc: 'Launched the Founder Talk Series bringing successful entrepreneurs to share their journeys directly with students.' },
  { year: '2025', title: 'Growing Impact', desc: 'E-Cell JCER continues to grow — empowering more students every year to innovate, collaborate, and lead.' },
];

/* ── Individual stair step ─────────────────────────────────── */
const StairStep = ({ index, total, active, isLeft }) => {
  const width = 55 + index * 5; // each step wider than the one above
  const height = 22;
  const perspective = 1000;
  const rotateX = 38;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${width}%`,
        height: `${height + 14}px`,
        marginLeft: isLeft ? '0' : 'auto',
        marginRight: isLeft ? 'auto' : '0',
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* The 3D step slab */}
      <div
        className="w-full transition-all duration-700"
        style={{
          height: `${height}px`,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${isLeft ? -6 : 6}deg)`,
          position: 'relative',
        }}
      >
        {/* Top face */}
        <div
          className="absolute inset-0 rounded-sm transition-all duration-700"
          style={{
            background: active
              ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)'
              : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            boxShadow: active
              ? '0 0 40px 12px rgba(96,165,250,0.55), 0 0 80px 24px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'
              : '0 2px 8px rgba(0,0,0,0.4)',
            border: active ? '1px solid rgba(147,197,253,0.6)' : '1px solid rgba(255,255,255,0.05)',
          }}
        />
        {/* Front face (3D depth illusion) */}
        <div
          className="absolute left-0 right-0 rounded-b-sm"
          style={{
            top: '100%',
            height: '8px',
            background: active
              ? 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)'
              : 'linear-gradient(180deg, #0d1526 0%, #060d1a 100%)',
            border: active ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(255,255,255,0.03)',
            borderTop: 'none',
          }}
        />
      </div>
    </div>
  );
};

/* ── Content card ─────────────────────────────────────────── */
const ContentCard = ({ milestone, isLeft, active }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
    animate={active ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    <div
      className="p-6 rounded-xl backdrop-blur-xl"
      style={{
        background: 'rgba(10, 15, 31, 0.85)',
        border: '1px solid rgba(96, 165, 250, 0.25)',
        boxShadow: active
          ? '0 0 32px rgba(59,130,246,0.15), 0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 4px 24px rgba(0,0,0,0.3)',
        minWidth: '220px',
        maxWidth: '280px',
      }}
    >
      {/* Blue accent bar */}
      <div
        className="w-10 h-0.5 mb-3 rounded-full"
        style={{ background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }}
      />
      <p className="text-[#60a5fa] font-sora font-bold text-xs tracking-widest uppercase mb-2">
        {milestone.year}
      </p>
      <h4 className="font-sora font-bold text-white text-base mb-2 leading-tight">
        {milestone.title}
      </h4>
      <p className="text-[#8b98b8] text-xs leading-relaxed">
        {milestone.desc}
      </p>
    </div>
  </motion.div>
);

/* ── Main Timeline ────────────────────────────────────────── */
const Timeline = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const step = Math.floor(v * (milestones.length + 1)) - 1;
      setActiveStep(Math.min(Math.max(step, -1), milestones.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Title opacity — fades in then out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ minHeight: `${milestones.length * 120 + 300}px` }}
    >
      {/* Atmospheric orbs */}
      <div className="orb orb-blue absolute left-1/4 top-1/3 w-[600px] h-[600px] opacity-10 pointer-events-none" />
      <div className="orb orb-cyan absolute right-1/4 bottom-1/3 w-[400px] h-[400px] opacity-08 pointer-events-none" />

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Section title */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="text-center pt-20 pb-6 flex-shrink-0"
        >
          <p className="text-[#3b82f6] font-sora text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Our Journey
          </p>
          <h2 className="font-sora font-black text-5xl md:text-7xl text-white/10 tracking-widest uppercase select-none pointer-events-none absolute left-0 right-0">
            ROADMAP
          </h2>
          <h2 className="font-sora font-bold text-4xl md:text-5xl relative z-10"
            style={{ background: 'linear-gradient(135deg, #fff 0%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            A Journey of Impact
          </h2>
        </motion.div>

        {/* Main staircase layout */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex gap-8 lg:gap-16 items-center">

              {/* LEFT — staircase */}
              <div className="flex-1 flex flex-col items-end gap-1.5 py-4">
                {milestones.map((_, i) => {
                  const isActive = i === activeStep;
                  const isPast = i < activeStep;
                  const stepIndex = milestones.length - 1 - i; // bottom step is widest
                  return (
                    <div key={i} className="w-full flex justify-end">
                      <StairStep
                        index={stepIndex}
                        total={milestones.length}
                        active={isActive || isPast}
                        isLeft={true}
                      />
                    </div>
                  );
                })}
              </div>

              {/* RIGHT — content cards */}
              <div className="flex-1 flex flex-col gap-1.5 py-4 min-h-[400px] relative">
                {milestones.map((m, i) => (
                  <div key={i} className="flex items-center" style={{ height: '64px' }}>
                    <ContentCard
                      milestone={m}
                      isLeft={false}
                      active={i === activeStep}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;

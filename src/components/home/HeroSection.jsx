import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionBadge from '../ui/SectionBadge';
import GlowButton from '../ui/GlowButton';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Futuristic orbital illustration ───────────────────────────── */
const HeroIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center select-none">
    {/* Glow behind rings */}
    <div className="absolute w-64 h-64 rounded-full bg-ecell-blue/10 blur-3xl" />

    {/* Outer ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      className="absolute w-[340px] h-[340px] rounded-full border border-white/[0.06]"
    />
    {/* Middle ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      className="absolute w-[240px] h-[240px] rounded-full border border-ecell-blue/20"
      style={{ boxShadow: 'inset 0 0 30px rgba(59,130,246,0.04)' }}
    />
    {/* Inner ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      className="absolute w-[148px] h-[148px] rounded-full border border-ecell-glow/25"
    />

    {/* Orbiting dots on middle ring */}
    {[0, 72, 144, 216, 288].map((deg, i) => (
      <motion.div
        key={i}
        className="absolute"
        animate={{ rotate: [deg, deg + 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ width: '240px', height: '240px' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: i % 2 === 0 ? '7px' : '4px',
            height: i % 2 === 0 ? '7px' : '4px',
            background: i % 2 === 0 ? '#3B82F6' : '#60A5FA',
            boxShadow: `0 0 ${i % 2 === 0 ? 10 : 6}px ${i % 2 === 0 ? '#3B82F6' : '#60A5FA'}`,
          }}
        />
      </motion.div>
    ))}

    {/* Orbiting dots on outer ring */}
    {[0, 120, 240].map((deg, i) => (
      <motion.div
        key={`outer-${i}`}
        className="absolute"
        animate={{ rotate: [deg, deg - 360] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        style={{ width: '340px', height: '340px' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: '5px', height: '5px', background: '#93C5FD', boxShadow: '0 0 8px #93C5FD', opacity: 0.7 }}
        />
      </motion.div>
    ))}

    {/* Center glowing icon */}
    <motion.div
      animate={{
        scale: [1, 1.06, 1],
        boxShadow: [
          '0 0 24px rgba(59,130,246,0.35)',
          '0 0 48px rgba(59,130,246,0.65)',
          '0 0 24px rgba(59,130,246,0.35)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-10 w-20 h-20 rounded-full bg-black border-2 border-ecell-blue/50 flex items-center justify-center"
    >
      <Sparkles className="w-9 h-9 text-ecell-glow" />
    </motion.div>

    {/* Floating badge pills */}
    {[
      { icon: Rocket,    label: 'Launch',   style: { top: '8%',  right: '2%' },  delay: 0.9 },
      { icon: Sparkles,  label: 'Innovate', style: { top: '48%', right: '-4%' }, delay: 1.1 },
      { icon: Users,     label: 'Connect',  style: { bottom: '12%', left: '0%' },delay: 1.3 },
    ].map(({ icon: Icon, label, style, delay }) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, type: 'spring', stiffness: 180 }}
        className="animate-float absolute"
        style={{ animationDelay: `${delay * 0.7}s`, ...style }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/[0.09] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
          <Icon className="w-3.5 h-3.5 text-ecell-glow" />
          <span className="text-white text-xs font-inter font-medium">{label}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Very subtle blue orb glow — not dots, just atmosphere */}
      <div className="orb orb-blue absolute -top-32 -left-32 w-[500px] h-[500px] opacity-50 pointer-events-none" />
      <div className="orb orb-cyan absolute top-1/2 right-0 w-[360px] h-[360px] opacity-30 pointer-events-none" />

      {/* Left Dot Matrix Pattern */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-6 lg:left-14 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none z-0"
      >
        <svg width="140" height="280" viewBox="0 0 140 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-matrix-left" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#3B82F6" opacity="0.8" />
          </pattern>
          <rect width="140" height="280" fill="url(#dot-matrix-left)" />
        </svg>
      </motion.div>

      {/* Right Dot Matrix Pattern */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        className="absolute right-6 lg:right-14 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none z-0"
      >
        <svg width="140" height="280" viewBox="0 0 140 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-matrix-right" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#60A5FA" opacity="0.8" />
          </pattern>
          <rect width="140" height="280" fill="url(#dot-matrix-right)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 w-full flex items-center justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6 w-full max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora font-bold text-5xl md:text-[64px] lg:text-[72px] text-white leading-[1.06] tracking-tight"
          >
            Ideas Into <span className="gradient-text">Impact</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 my-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="font-sora font-semibold text-xl md:text-2xl gradient-text"
            >
              Empowering Innovation. Inspiring Entrepreneurs.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} className="text-ecell-gray/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
            <p className="font-semibold text-white/90">
              Welcome to the Entrepreneurship Cell (E-Cell), JCER Belagavi.
            </p>
            <p>
              The Entrepreneurship Cell (E-Cell) at JCER is a student-led initiative dedicated to fostering innovation, creativity, and entrepreneurship. We provide a platform where students can learn, collaborate, and transform ideas into impactful ventures through workshops, events, mentorship, and networking opportunities.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <Link to="/contact">
              <GlowButton variant="primary" size="lg" className="rounded-xl">
                Join Community
                <ArrowRight className="w-4 h-4" />
              </GlowButton>
            </Link>
            <Link to="/gallery">
              <GlowButton variant="outline" size="lg" className="rounded-xl">
                Explore Events
              </GlowButton>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';

const AboutHero = () => {
  return (
    <section className="relative min-h-[44vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Subtle atmospheric orbs only — no dots */}
      <div className="orb orb-blue absolute top-0 left-1/3 w-[500px] h-[400px] opacity-25 pointer-events-none" />
      <div className="orb orb-cyan absolute bottom-0 right-1/3 w-[400px] h-[300px] opacity-15 pointer-events-none" />

      <div className="relative z-10 text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <SectionBadge>Who We Are</SectionBadge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-sora font-bold text-5xl md:text-7xl text-white leading-tight mb-5"
        >
          About <span className="gradient-text">E-Cell</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-ecell-gray/70 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Fostering a culture of innovation and entrepreneurship since our founding, E-Cell is the beating heart of startup activity at our college.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 mx-auto w-28 h-0.5 bg-gradient-to-r from-ecell-blue to-ecell-glow rounded-full"
          style={{ boxShadow: '0 0 8px rgba(59,130,246,0.5)' }}
        />
      </div>
    </section>
  );
};

export default AboutHero;

import { motion } from 'framer-motion';
import { Rocket, Handshake, Lightbulb, Trophy } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import GlassCard from '../ui/GlassCard';

const MissionVision = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="orb orb-blue absolute left-0 top-1/2 w-96 h-96 opacity-20 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionBadge className="mb-4">About E-Cell JCER</SectionBadge>
            <h2 className="section-heading text-4xl md:text-5xl mb-6">
              Empowering Student Innovators
            </h2>
            <p className="text-ecell-gray leading-relaxed text-base mb-6">
              The Entrepreneurship Cell at JCER Belagavi is a student-led initiative dedicated to fostering innovation, creativity, and entrepreneurship. We provide a platform where students can learn, collaborate, and transform ideas into impactful ventures.
            </p>
            <p className="text-ecell-gray/70 leading-relaxed text-sm">
              Through workshops, hackathons, guest lectures, and networking events, we bridge the gap between academic learning and real-world startup ecosystems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Rocket, title: 'Launch Programs', desc: 'From idea to MVP in 90 days' },
                { icon: Handshake, title: 'Mentorship', desc: '50+ industry mentors on board' },
                { icon: Lightbulb, title: 'Innovation Labs', desc: 'State-of-the-art facilities' },
                { icon: Trophy, title: 'Competitions', desc: 'Win prizes & investor attention' },
              ].map(({ icon: IconComponent, title, desc }, i) => (
                <GlassCard key={title} delay={i * 0.1} className="p-5 group hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-sora font-semibold text-white text-sm mb-1">{title}</h4>
                  <p className="text-ecell-gray text-xs leading-relaxed">{desc}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Section — Inspired by reference */}
        <div className="relative pt-4">
          <div className="text-center mb-16">
            <SectionBadge className="mb-4">Our Core Foundation</SectionBadge>
            <h2 className="section-heading text-4xl md:text-5xl mb-3">
              Vision & Mission
            </h2>
            <p className="text-ecell-gray/60 max-w-md mx-auto text-sm">
              The driving force behind every initiative at JCER E-Cell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* VISION BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl group transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Top Accent Pointer Node */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_14px_#3b82f6] group-hover:scale-125 transition-transform duration-300" />
                <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent opacity-80" />
              </div>

              {/* Bold Title */}
              <h3 className="font-sora font-extrabold text-4xl md:text-5xl text-white tracking-widest uppercase mb-4 group-hover:text-blue-400 transition-colors">
                VISION
              </h3>

              {/* Content */}
              <p className="text-ecell-gray/90 font-inter text-base md:text-lg leading-relaxed max-w-md">
                To build a campus where innovation, entrepreneurship, and leadership thrive.
              </p>
            </motion.div>

            {/* MISSION BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl group transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Top Accent Pointer Node */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] group-hover:scale-125 transition-transform duration-300" />
                <div className="h-[1px] w-24 bg-gradient-to-r from-cyan-400 to-transparent opacity-80" />
              </div>

              {/* Bold Title */}
              <h3 className="font-sora font-extrabold text-4xl md:text-5xl text-white tracking-widest uppercase mb-4 group-hover:text-cyan-400 transition-colors">
                MISSION
              </h3>

              {/* Content */}
              <p className="text-ecell-gray/90 font-inter text-base md:text-lg leading-relaxed max-w-md">
                To empower students through opportunities, collaboration, and real-world entrepreneurial experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


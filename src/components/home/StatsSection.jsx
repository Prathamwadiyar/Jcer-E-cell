import { motion } from 'framer-motion';
import { Users, Lightbulb, BookOpen, Handshake, Rocket } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';

const iconMap = { Users, Lightbulb, BookOpen, Handshake, Rocket };

const pillarsData = [
  { label: 'Community', icon: 'Users', desc: 'Connecting like-minded students, engineers, and creators.' },
  { label: 'Ideation', icon: 'Lightbulb', desc: 'Validating raw concepts and turning them into real-world business models.' },
  { label: 'Workshops', icon: 'BookOpen', desc: 'Direct learning through hands-on bootcamps, speaker sessions, and tech masterclasses.' },
  { label: 'Mentorship', icon: 'Handshake', desc: 'Access to regional founders, alumni, and incubation managers.' },
  { label: 'Incubation', icon: 'Rocket', desc: 'A clear path to building minimum viable products (MVPs) in cooperation with campus infrastructure.' },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Background */}
      <div className="orb orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <SectionBadge className="mb-4">Our Pillars</SectionBadge>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">
            Foundation of E-Cell JCER
          </h2>
          <p className="text-ecell-gray max-w-xl mx-auto text-base">
            Showcasing what the Entrepreneurship Cell is building and offering to students today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillarsData.map(({ label, icon, desc }, i) => {
            const Icon = iconMap[icon];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, border: '1px solid rgba(59,130,246,0.4)' }}
                className="glass glow-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-default group"
              >
                <div className="w-14 h-14 rounded-2xl bg-ecell-blue/10 border border-ecell-blue/20 flex items-center justify-center text-blue-400 group-hover:bg-ecell-blue/20 group-hover:text-blue-300 group-hover:shadow-glow-sm transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-lg text-white mb-2">{label}</h3>
                  <p className="text-ecell-gray/70 font-inter text-xs leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

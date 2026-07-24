import { motion } from 'framer-motion';
import { Users, Calendar, Rocket, BookOpen, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionBadge from '../ui/SectionBadge';

const iconMap = { Users, Calendar, Rocket, BookOpen, TrendingUp };

const statsData = [
  { value: 1200, suffix: '+', label: 'Members', icon: 'Users', desc: 'Active student innovators' },
  { value: 85, suffix: '+', label: 'Events', icon: 'Calendar', desc: 'Workshops, talks & hackathons' },
  { value: 42, suffix: '+', label: 'Startups', icon: 'Rocket', desc: 'Student ventures launched' },
  { value: 60, suffix: '+', label: 'Workshops', icon: 'BookOpen', desc: 'Skill-building sessions' },
  { prefix: '₹', value: 5, suffix: 'Cr+', label: 'Funding', icon: 'TrendingUp', desc: 'Raised by our startups' },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="orb orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <SectionBadge className="mb-4">Our Impact</SectionBadge>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">
            Numbers That Speak
          </h2>
          <p className="text-ecell-gray max-w-xl mx-auto text-base">
            A decade of driving innovation, nurturing talent, and building the next generation of entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {statsData.map(({ value, suffix, prefix, label, icon, desc }, i) => {
            const Icon = iconMap[icon];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 0 30px rgba(59,130,246,0.2)' }}
                className="glass glow-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-ecell-blue/10 border border-ecell-blue/20 flex items-center justify-center group-hover:bg-ecell-blue/20 group-hover:shadow-glow-sm transition-all duration-300">
                  <Icon className="w-6 h-6 text-ecell-glow" />
                </div>
                <p className="font-sora font-bold text-3xl text-white text-glow">
                  <AnimatedCounter
                    target={value}
                    prefix={prefix || ''}
                    suffix={suffix || ''}
                    duration={2200}
                  />
                </p>
                <div>
                  <p className="text-white font-inter font-semibold text-sm">{label}</p>
                  <p className="text-ecell-gray/70 font-inter text-xs mt-0.5">{desc}</p>
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

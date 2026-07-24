import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import GlassCard from '../ui/GlassCard';

const MissionVision = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="orb orb-blue absolute left-0 top-1/2 w-96 h-96 opacity-20 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionBadge className="mb-5">Our Story</SectionBadge>
            <h2 className="section-heading text-4xl md:text-5xl mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-ecell-gray leading-relaxed">
              <p>
                E-Cell is the official Entrepreneurship Cell of our college — a dynamic community where curious minds transform bold ideas into real-world ventures. Founded with the belief that every student has the potential to be a change-maker.
              </p>
              <p>
                We create a fertile ecosystem for innovation by connecting students with mentors, investors, industry leaders, and fellow entrepreneurs. From ideation to launch, we support every step of the entrepreneurial journey.
              </p>
              <p>
                Our events, workshops, hackathons, and startup bootcamps have catalyzed over 42 student-led startups and raised significant funding from leading venture firms.
              </p>
            </div>
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
                { icon: '🚀', title: 'Launch Programs', desc: 'From idea to MVP in 90 days' },
                { icon: '🤝', title: 'Mentorship', desc: '50+ industry mentors on board' },
                { icon: '💡', title: 'Innovation Labs', desc: 'State-of-the-art facilities' },
                { icon: '🏆', title: 'Competitions', desc: 'Win prizes & investor attention' },
              ].map(({ icon, title, desc }, i) => (
                <GlassCard key={title} delay={i * 0.1} className="p-5">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h4 className="font-sora font-semibold text-white text-sm mb-1">{title}</h4>
                  <p className="text-ecell-gray text-xs leading-relaxed">{desc}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center mb-12">
          <SectionBadge className="mb-5">Our Purpose</SectionBadge>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">Mission & Vision</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glow-border rounded-2xl p-8 group hover:shadow-glow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-ecell-blue/10 border border-ecell-blue/20 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-all duration-300">
              <Target className="w-7 h-7 text-ecell-glow" />
            </div>
            <h3 className="font-sora font-bold text-2xl text-white mb-4">Our Mission</h3>
            <p className="text-ecell-gray leading-relaxed">
              To cultivate an entrepreneurial mindset among students by providing the resources, mentorship, and platform needed to transform innovative ideas into successful ventures — bridging the gap between academia and industry.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glow-border rounded-2xl p-8 group hover:shadow-glow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-ecell-blue/10 border border-ecell-blue/20 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-all duration-300">
              <Eye className="w-7 h-7 text-ecell-glow" />
            </div>
            <h3 className="font-sora font-bold text-2xl text-white mb-4">Our Vision</h3>
            <p className="text-ecell-gray leading-relaxed">
              To be India's most impactful college entrepreneurship cell — a breeding ground for startups that solve real-world problems, create jobs, and drive economic and social progress through technology and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

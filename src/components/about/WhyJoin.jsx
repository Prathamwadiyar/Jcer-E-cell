import { motion } from 'framer-motion';
import { Network, Award, Users, Lightbulb, Briefcase, Globe } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import GlowButton from '../ui/GlowButton';
import { Link } from 'react-router-dom';

const reasons = [
  { icon: Network, title: 'Build Networks', desc: 'Build professional networks with industry experts and peers.' },
  { icon: Award, title: 'Participate & Compete', desc: 'Participate in workshops, competitions, and startup events.' },
  { icon: Users, title: 'Collaborate', desc: 'Work on innovative ideas with like-minded students.' },
  { icon: Lightbulb, title: 'Learn from Leaders', desc: 'Learn from successful entrepreneurs and mentors.' },
  { icon: Briefcase, title: 'Real-world Experience', desc: 'Gain real-world entrepreneurial experience.' },
  { icon: Globe, title: 'Personal Growth', desc: 'Develop leadership, communication skills, and enhance professional growth.' },
];

const WhyJoin = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="orb orb-blue absolute bottom-0 right-0 w-80 h-80 opacity-20" />
      <div className="orb orb-cyan absolute top-0 left-0 w-60 h-60 opacity-15" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionBadge className="mb-5">Be Part of It</SectionBadge>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">Why Join E-Cell?</h2>
          <p className="text-ecell-gray max-w-xl mx-auto">
            Joining E-Cell helps you develop your skills and grow your professional network.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass glow-border rounded-2xl p-6 group transition-all duration-300 hover:shadow-glow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-ecell-blue/10 border border-ecell-blue/20 flex items-center justify-center mb-5 group-hover:bg-ecell-blue/20 group-hover:shadow-glow-sm transition-all duration-300">
                <Icon className="w-6 h-6 text-ecell-glow" />
              </div>
              <h3 className="font-sora font-semibold text-white text-base mb-2">{title}</h3>
              <p className="text-ecell-gray text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glow-border rounded-2xl p-10 text-center"
        >
          <h3 className="font-sora font-bold text-3xl text-white mb-3">
            Join Us
          </h3>
          <p className="text-ecell-gray mb-8 max-w-lg mx-auto">
            Become a part of JCER E-Cell and start your entrepreneurial journey. Learn. Collaborate. Innovate. Lead.
          </p>
          <Link to="/contact">
            <GlowButton variant="primary" size="lg">
              Apply Now →
            </GlowButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoin;

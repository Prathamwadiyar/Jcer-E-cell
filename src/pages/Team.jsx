import { motion } from 'framer-motion';
import { teamData } from '../data/teamData';
import TeamCard from '../components/team/TeamCard';
import SectionBadge from '../components/ui/SectionBadge';

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      {/* Hero */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="orb orb-blue absolute top-0 right-1/3 w-96 h-72 opacity-20 pointer-events-none" />
        <div className="orb orb-cyan absolute bottom-0 left-1/4 w-72 h-64 opacity-12 pointer-events-none" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <SectionBadge>The Minds Behind E-Cell</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-bold text-5xl md:text-7xl text-white mb-4"
          >
            Our <span className="gradient-text">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ecell-gray/70 text-lg max-w-xl mx-auto"
          >
            Passionate students, driven by a shared dream of building the next generation of innovators.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-x-6 gap-y-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {teamData.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;

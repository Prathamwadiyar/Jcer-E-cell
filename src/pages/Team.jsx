import { motion } from 'framer-motion';
import { teamData, teamCategories } from '../data/teamData';
import TeamCard from '../components/team/TeamCard';
import SectionBadge from '../components/ui/SectionBadge';

const Team = () => {
  const categorizedTeam = teamCategories.map((cat) => ({
    category: cat,
    members: teamData.filter((m) => m.category === cat),
  })).filter((g) => g.members.length > 0);

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
            <SectionBadge>The People Behind E-Cell</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-bold text-5xl md:text-7xl text-white mb-4"
          >
            Meet Our <span className="gradient-text">Team</span>
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

      {/* Team Sections */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
          {categorizedTeam.map(({ category, members }) => (
            <div key={category}>
              {/* Category Heading */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mb-8 flex items-center gap-4"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-ecell-blue/25" />
                <h2 className="font-sora font-semibold text-lg text-white whitespace-nowrap px-2">{category}</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-ecell-blue/25" />
              </motion.div>

              {/* Team Cards */}
              <div
                className={`grid gap-5 ${
                  members.length === 1
                    ? 'grid-cols-1 max-w-[200px] mx-auto'
                    : members.length === 2
                    ? 'grid-cols-2 max-w-sm mx-auto'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {members.map((member, i) => (
                  <TeamCard key={member.id} member={member} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Team;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamData } from '../data/teamData';
import TeamCard from '../components/team/TeamCard';

const CATEGORIES = [
  'Overall Coordinators',
  'Managers',
  'Web & Tech',
  'Content & Research',
  'Events & PR',
  'Design & Media',
  'Corporate & Marketing',
];

const CATEGORY_DESCRIPTIONS = {
  'Overall Coordinators': 'Executive leadership guiding the vision and strategy of E-Cell.',
  'Managers': 'Driving operations, planning, and inter-departmental synergy.',
  'Web & Tech': 'Building the digital backbone, platforms, and web experiences.',
  'Content & Research': 'Crafting stories, researching trends, and delivering insights.',
  'Events & PR': 'Orchestrating impactful events and building public relations.',
  'Design & Media': 'Creating visual identity, media assets, and creative design.',
  'Corporate & Marketing': 'Fostering corporate partnerships, sponsorships, and outreach.',
};

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter categories to display
  const displayedCategories =
    selectedCategory === 'All'
      ? CATEGORIES
      : CATEGORIES.filter((cat) => cat === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent text-white"
    >
      {/* Hero Header */}
      <section className="relative py-28 md:py-32 bg-transparent overflow-hidden border-b border-white/5">
        <div className="orb orb-blue absolute top-0 right-1/3 w-96 h-72 opacity-20 pointer-events-none" />
        <div className="orb orb-cyan absolute bottom-0 left-1/4 w-72 h-64 opacity-15 pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-4 tracking-tight"
          >
            Meet Our <span className="gradient-text">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ecell-gray/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Passionate leaders, innovators, and creators pushing the boundaries of student entrepreneurship.
          </motion.p>

          {/* Filter Section: Tabs & Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 max-w-5xl mx-auto"
          >
            {/* Mobile Dropdown Menu */}
            <div className="block lg:hidden max-w-xs mx-auto mb-6">
              <label htmlFor="category-select" className="sr-only">Choose Category</label>
              <div className="relative">
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/10 text-white font-inter text-sm rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer shadow-lg"
                >
                  <option value="All" className="bg-slate-900 text-white">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-slate-900 text-white">
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Tabs Filter */}
            <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Wise Team Sections */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto space-y-20">
        <AnimatePresence mode="wait">
          {displayedCategories.map((category) => {
            const categoryMembers = teamData.filter(
              (m) => m.category === category
            );

            if (categoryMembers.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-24"
                id={category.toLowerCase().replace(/\s+/g, '-')}
              >
                {/* Category Header Badge */}
                <div className="mb-8 border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-sora">
                      Domain
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-sora text-white mt-1">
                      {category}
                    </h2>
                    {CATEGORY_DESCRIPTIONS[category] && (
                      <p className="text-ecell-gray/60 text-xs md:text-sm mt-1">
                        {CATEGORY_DESCRIPTIONS[category]}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-inter px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                    {categoryMembers.length} {categoryMembers.length === 1 ? 'Member' : 'Members'}
                  </span>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {categoryMembers.map((member, i) => (
                    <TeamCard key={member.id} member={member} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
    </motion.div>
  );
};

export default Team;


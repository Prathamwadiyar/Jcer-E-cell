import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';

const milestones = [
  { year: '2015', title: 'E-Cell Founded', desc: 'Established with 30 founding members and a vision to build the next generation of entrepreneurs.' },
  { year: '2016', title: 'First Hackathon', desc: 'Launched HackFusion — our flagship 48-hour hackathon, attracting 200+ participants from 15 colleges.' },
  { year: '2018', title: 'First Startup Funded', desc: 'Our first E-Cell startup secured ₹50 Lakh seed funding from a Bangalore-based VC firm.' },
  { year: '2019', title: 'Startup Expo', desc: 'Organized InnovateFest — a 3-day startup expo that hosted 30 startups and 500+ visitors.' },
  { year: '2021', title: 'Online Pivot', desc: 'Successfully pivoted all operations online, reaching 10x more students across India during the pandemic.' },
  { year: '2023', title: '1000+ Members', desc: 'Crossed the milestone of 1,000 active members with 35 startups in our portfolio.' },
  { year: '2024', title: '₹5 Crore Funding', desc: 'E-Cell startups cumulatively raised over ₹5 Crore in funding, validating our ecosystem.' },
  { year: '2025', title: 'National Recognition', desc: 'Ranked among the Top 5 College E-Cells in India by a leading entrepreneurship magazine.' },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle orb */}
      <div className="orb orb-blue absolute right-0 top-1/3 w-72 h-72 opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-5">Our Journey</SectionBadge>
          <h2 className="section-heading text-4xl md:text-5xl mb-4">A Decade of Impact</h2>
          <p className="text-ecell-gray/60 max-w-lg mx-auto text-sm leading-relaxed">
            From a small group of dreamers to one of India's most vibrant entrepreneurship cells.
          </p>
        </div>

        {/* Timeline grid — fixed layout so years align perfectly */}
        <div className="relative">

          {/* Vertical center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #3B82F6 0%, #60A5FA 60%, transparent 100%)' }}
          />

          <div className="flex flex-col gap-0">
            {milestones.map(({ year, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={year + title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  /* Each row: left-col | center | right-col */
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-0"
                  style={{ minHeight: '110px' }}
                >
                  {/* LEFT column */}
                  <div className={`pr-8 ${isLeft ? '' : ''}`}>
                    {isLeft ? (
                      /* Card on the left */
                      <div className="ml-auto max-w-[280px] glass rounded-xl p-4 glow-border hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300">
                        <p className="gradient-text font-sora font-bold text-xs mb-1 tracking-wider">{year}</p>
                        <h4 className="font-sora font-semibold text-white text-sm mb-1.5">{title}</h4>
                        <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                      </div>
                    ) : (
                      /* Large year stamp on the left */
                      <p className="text-right font-sora font-bold text-5xl md:text-6xl text-ecell-blue/12 select-none">{year}</p>
                    )}
                  </div>

                  {/* CENTER — dot */}
                  <div className="flex flex-col items-center" style={{ width: '24px' }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 + 0.15, type: 'spring' }}
                      className="w-3.5 h-3.5 rounded-full bg-ecell-blue border-2 border-ecell-glow z-10 flex-shrink-0"
                      style={{ boxShadow: '0 0 10px rgba(59,130,246,0.7)' }}
                    />
                  </div>

                  {/* RIGHT column */}
                  <div className="pl-8">
                    {!isLeft ? (
                      /* Card on the right */
                      <div className="mr-auto max-w-[280px] glass rounded-xl p-4 glow-border hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300">
                        <p className="gradient-text font-sora font-bold text-xs mb-1 tracking-wider">{year}</p>
                        <h4 className="font-sora font-semibold text-white text-sm mb-1.5">{title}</h4>
                        <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                      </div>
                    ) : (
                      /* Large year stamp on the right */
                      <p className="font-sora font-bold text-5xl md:text-6xl text-ecell-blue/12 select-none">{year}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

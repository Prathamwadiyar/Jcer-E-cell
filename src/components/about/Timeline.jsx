import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';

const milestones = [
  { month: 'Jan 2020', year: '2020', title: 'E-Cell Founded', desc: 'JCER E-Cell established with a passionate group of student entrepreneurs and a bold vision to transform the campus into an innovation hub.' },
  { month: 'Aug 2021', year: '2021', title: 'First Workshop', desc: 'Organized our inaugural Entrepreneurship Awareness Program, igniting the startup spirit across campus and welcoming our first 100 members.' },
  { month: 'Mar 2022', year: '2022', title: 'First Hackathon', desc: 'Launched our flagship 24-hour Hackathon attracting 150+ participants from colleges across Karnataka, sparking solutions to real problems.' },
  { month: 'Nov 2023', year: '2023', title: 'Idea Pitch Competition', desc: 'Hosted our first Idea Pitch event with industry mentors and investors evaluating student startup ideas, with winners receiving mentorship.' },
  { month: 'Feb 2024', year: '2024', title: 'Founder Talk Series', desc: 'Launched the Founder Talk Series bringing successful entrepreneurs to share their journeys directly with students, inspiring hundreds.' },
  { month: 'Sep 2025', year: '2025', title: 'Growing Impact', desc: 'E-Cell JCER continues to grow — empowering more students every year to innovate, collaborate, and lead through expanded programs and partnerships.' },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle orb */}
      <div className="orb orb-blue absolute right-0 top-1/3 w-72 h-72 opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Ghost watermark — visible behind heading */}
          <span
            className="absolute left-0 right-0 top-1/2 -translate-y-[55%] font-sora font-black tracking-[0.15em] uppercase select-none pointer-events-none"
            style={{
              fontSize: 'clamp(52px,10vw,130px)',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(96,165,250,0.18)',
              letterSpacing: '0.12em',
            }}
          >
            ROADMAP
          </span>
          <p className="relative z-10 text-[#3b82f6] font-sora text-[11px] font-bold tracking-[0.28em] uppercase mb-8">
            Our Journey
          </p>
          <h2
            className="relative z-10 font-sora font-bold text-4xl md:text-5xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 60%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            A Journey of Impact
          </h2>
          <p className="relative z-10 text-ecell-gray/60 max-w-lg mx-auto text-sm leading-relaxed mt-6">
            From a small group of dreamers to one of Karnataka's most vibrant entrepreneurship cells.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="relative">

          {/* Vertical center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #3B82F6 0%, #60A5FA 60%, transparent 100%)' }}
          />

          <div className="flex flex-col gap-0">
            {milestones.map(({ month, year, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={year + title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  {/* ── MOBILE: left-line single-column card ── */}
                  <div className="md:hidden flex gap-4 items-start py-4 pl-2">
                    {/* Left line + dot */}
                    <div className="flex flex-col items-center flex-shrink-0 mt-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.06 + 0.15, type: 'spring' }}
                        className="w-3 h-3 rounded-full bg-ecell-blue border-2 border-ecell-glow z-10"
                        style={{ boxShadow: '0 0 8px rgba(59,130,246,0.7)' }}
                      />
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 mt-1" style={{ minHeight: '60px', background: 'linear-gradient(180deg, #3B82F6, rgba(96,165,250,0.15))' }} />
                      )}
                    </div>
                    {/* Card */}
                    <div className="flex-1 glass rounded-xl p-4 glow-border mb-2">
                      <p className="text-[#60a5fa] font-sora font-bold text-[10px] tracking-widest uppercase mb-0.5">{month}</p>
                      <h4 className="font-sora font-semibold text-white text-sm mb-1">{title}</h4>
                      <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* ── DESKTOP: alternating left/right grid ── */}
                  <div
                    className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-x-0"
                    style={{ minHeight: '110px' }}
                  >
                    {/* LEFT column */}
                    <div className="pr-8">
                      {isLeft ? (
                        <div className="ml-auto max-w-[280px] glass rounded-xl p-4 glow-border hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300">
                          <p className="gradient-text font-sora font-bold text-xs mb-1 tracking-wider">{year}</p>
                          <h4 className="font-sora font-semibold text-white text-sm mb-1.5">{title}</h4>
                          <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                        </div>
                      ) : (
                        <div className="text-right">
                          <p className="font-sora font-bold text-3xl md:text-4xl text-ecell-blue/25 select-none leading-none">{month.split(' ')[0]}</p>
                          <p className="font-sora font-bold text-lg text-ecell-blue/15 select-none">{month.split(' ')[1]}</p>
                        </div>
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
                        <div className="mr-auto max-w-[280px] glass rounded-xl p-4 glow-border hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300">
                          <p className="gradient-text font-sora font-bold text-xs mb-1 tracking-wider">{year}</p>
                          <h4 className="font-sora font-semibold text-white text-sm mb-1.5">{title}</h4>
                          <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-sora font-bold text-3xl md:text-4xl text-ecell-blue/25 select-none leading-none">{month.split(' ')[0]}</p>
                          <p className="font-sora font-bold text-lg text-ecell-blue/15 select-none">{month.split(' ')[1]}</p>
                        </div>
                      )}
                    </div>
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

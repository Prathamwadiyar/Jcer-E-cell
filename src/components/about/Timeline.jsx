import { motion } from 'framer-motion';

const milestones = [
  {
    date: '14 JULY 2026',
    day: '14',
    monthYear: 'JUL 2026',
    title: 'The Initiative Begins',
    desc: 'The journey of JCER E-Cell officially began with the creation of the E-Cell community. This marked the first step towards building a student-driven platform where individuals could collaborate, share ideas, and contribute towards innovation and entrepreneurship within the college.',
  },
  {
    date: '16 JULY 2026',
    day: '16',
    monthYear: 'JUL 2026',
    title: 'Formation of the E-Cell Council',
    desc: 'Following the launch of the community, the first E-Cell Council was formed by bringing together enthusiastic and dedicated students from different domains. This was a significant milestone that laid the foundation for building a strong and active student-led organization.',
  },
  {
    date: '17 JULY 2026',
    day: '17',
    monthYear: 'JUL 2026',
    title: 'Roles & Responsibilities Assigned',
    desc: 'To ensure smooth functioning and effective coordination, responsibilities were distributed among members based on their interests and expertise. Dedicated teams such as Web & Tech, Design & Media, Content & Research, Events & PR, Corporate Relations & Marketing were formed, allowing every member to contribute meaningfully toward the growth of the E-Cell.',
  },
  {
    date: '17 JULY 2026',
    day: '17',
    monthYear: 'JUL 2026',
    title: 'Formation of Working Groups',
    desc: 'To improve communication and task execution, members were divided into smaller working groups under designated managers. This structure promoted better coordination, teamwork, and accountability while ensuring that tasks were completed efficiently.',
  },
  {
    date: '19 JULY 2026',
    day: '19',
    monthYear: 'JUL 2026',
    title: 'Logo & Tagline Activity',
    desc: 'One of the first collaborative initiatives involved designing the official JCER E-Cell logo and creating a meaningful tagline that reflected the organization\'s vision and values. Members worked together in teams, encouraging creativity, innovation, and collaboration while shaping the identity of the E-Cell.',
  },
  {
    date: '23 JULY 2026',
    day: '23',
    monthYear: 'JUL 2026',
    title: 'First Council Meeting',
    desc: 'The first official Google Meet served as an important milestone in the journey of the E-Cell. Members were introduced to the vision, objectives, upcoming activities, and opportunities within the organization. Responsibilities were discussed, expectations were clarified, and the importance of collaboration was emphasized.',
  },
  {
    date: '23 JULY 2026',
    day: '23',
    monthYear: 'JUL 2026',
    title: 'Offline Collaboration',
    desc: 'Council members later met at the college to work together on pending tasks, brainstorm ideas, and strengthen team coordination. The session provided an opportunity for members to interact, exchange ideas, and complete activities within the given deadlines.',
  },
  {
    date: '23 JULY 2026',
    day: '23',
    monthYear: 'JUL 2026',
    title: 'Building Our Digital Presence',
    desc: 'As the organization continued to grow, efforts were made to establish a professional digital identity. The official LinkedIn page was launched, and planning for the development of the JCER E-Cell website began. These initiatives aimed to showcase the E-Cell\'s activities, achievements, and future opportunities to a wider audience.',
  },
  {
    date: 'UPCOMING',
    day: 'NEXT',
    monthYear: '2026+',
    title: 'Planning Future Initiatives',
    desc: 'With the foundation successfully established, the council started planning workshops, startup awareness programs, networking events, competitions, guest lectures, and innovation-driven activities. These initiatives are intended to provide students with practical learning experiences while promoting entrepreneurial thinking and leadership.',
  },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="orb orb-blue absolute right-0 top-1/3 w-72 h-72 opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Ghost watermark */}
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
            JCER E-Cell Roadmap
          </p>
          <h2
            className="relative z-10 font-sora font-bold text-4xl md:text-5xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 60%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Journey of Impact
          </h2>
          <p className="relative z-10 text-ecell-gray/60 max-w-lg mx-auto text-sm leading-relaxed mt-6">
            Key milestones, active progress, and future roadmap of JCER Entrepreneurship Cell.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="relative">
          {/* Vertical center line (hidden on mobile) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #3B82F6 0%, #60A5FA 60%, transparent 100%)' }}
          />

          <div className="flex flex-col gap-4 md:gap-0">
            {milestones.map(({ date, day, monthYear, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={title + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {/* MOBILE Card */}
                  <div className="md:hidden w-full py-2">
                    <div className="glass rounded-xl p-5 glow-border w-full shadow-lg border border-white/10">
                      <p className="text-[#60a5fa] font-sora font-bold text-[11px] tracking-widest uppercase mb-1">{date}</p>
                      <h4 className="font-sora font-semibold text-white text-[15px] mb-2">{title}</h4>
                      <p className="text-ecell-gray/70 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* DESKTOP Alternating Grid */}
                  <div
                    className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-x-0"
                    style={{ minHeight: '120px' }}
                  >
                    {/* LEFT column */}
                    <div className="pr-8">
                      {isLeft ? (
                        <div className="ml-auto max-w-[320px] glass rounded-xl p-5 glow-border hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10">
                          <p className="gradient-text font-sora font-bold text-xs mb-1 tracking-wider uppercase">{date}</p>
                          <h4 className="font-sora font-semibold text-white text-base mb-1.5">{title}</h4>
                          <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                        </div>
                      ) : (
                        <div className="text-right pr-2">
                          <p className="font-sora font-bold text-3xl md:text-4xl text-ecell-blue/30 select-none leading-none">{day}</p>
                          <p className="font-sora font-bold text-xs tracking-wider text-ecell-blue/20 select-none uppercase mt-1">{monthYear}</p>
                        </div>
                      )}
                    </div>

                    {/* CENTER — dot */}
                    <div className="flex flex-col items-center" style={{ width: '24px' }}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 + 0.1, type: 'spring' }}
                        className="w-3.5 h-3.5 rounded-full bg-ecell-blue border-2 border-ecell-glow z-10 flex-shrink-0"
                        style={{ boxShadow: '0 0 10px rgba(59,130,246,0.8)' }}
                      />
                    </div>

                    {/* RIGHT column */}
                    <div className="pl-8">
                      {!isLeft ? (
                        <div className="mr-auto max-w-[320px] glass rounded-xl p-5 glow-border hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10">
                          <p className="gradient-text font-sora font-bold text-xs mb-1 tracking-wider uppercase">{date}</p>
                          <h4 className="font-sora font-semibold text-white text-base mb-1.5">{title}</h4>
                          <p className="text-ecell-gray/60 text-xs leading-relaxed">{desc}</p>
                        </div>
                      ) : (
                        <div className="pl-2">
                          <p className="font-sora font-bold text-3xl md:text-4xl text-ecell-blue/30 select-none leading-none">{day}</p>
                          <p className="font-sora font-bold text-xs tracking-wider text-ecell-blue/20 select-none uppercase mt-1">{monthYear}</p>
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


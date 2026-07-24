import { motion } from 'framer-motion';

// Deterministic color for avatar based on name (fallback)
const avatarColors = [
  'from-blue-600 to-indigo-700',
  'from-violet-600 to-purple-700',
  'from-cyan-600 to-blue-700',
  'from-indigo-600 to-blue-700',
  'from-blue-500 to-cyan-700',
  'from-purple-600 to-indigo-700',
];

const TeamCard = ({ member, index = 0 }) => {
  const gradient = avatarColors[index % avatarColors.length];
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="flex flex-col items-center text-center group cursor-pointer"
    >
      {/* Avatar Container */}
      <div className="relative mb-4">
        <div
          className={`w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105 shadow-xl`}
        >
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="font-sora font-bold text-3xl md:text-4xl text-white">{initials}</span>
          )}
        </div>

        {/* Social Icons floating on bottom right */}
        <div className="absolute -bottom-2 -right-2 flex gap-1 bg-black/60 backdrop-blur-md rounded-full p-1.5 border border-white/10 shadow-lg">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-transparent hover:bg-[#0A66C2] transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a
            href={member.email}
            aria-label={`Email ${member.name}`}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-transparent hover:bg-ecell-blue transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-sora font-bold text-white text-lg md:text-xl mt-2 tracking-wide transition-colors group-hover:text-ecell-blue">
        {member.name}
      </h3>
      <p className="text-[#3b82f6] text-sm font-inter mt-1">
        {member.role}
      </p>
    </motion.div>
  );
};

export default TeamCard;

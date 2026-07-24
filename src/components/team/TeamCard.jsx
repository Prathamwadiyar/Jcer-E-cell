import { motion } from 'framer-motion';
import { Globe, Share2 } from 'lucide-react';

// Deterministic color for avatar based on name
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
      className="team-card glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-glow-md group"
    >
      {/* Avatar */}
      <div className="relative">
        <div
          className={`team-img-ring w-20 h-20 rounded-full border-2 border-ecell-blue/40 flex items-center justify-center bg-gradient-to-br ${gradient} transition-all duration-400`}
        >
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="font-sora font-bold text-xl text-white">{initials}</span>
          )}
        </div>
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-ecell-glow border-2 border-ecell-bg shadow-glow-sm" />
      </div>

      {/* Info */}
      <div>
        <h3 className="font-sora font-semibold text-white text-base">{member.name}</h3>
        <p className="text-ecell-gray text-xs font-inter mt-1 px-3 py-1 rounded-full bg-ecell-blue/10 border border-ecell-blue/20 inline-block">
          {member.role}
        </p>
      </div>

      {/* Social links */}
      <div className="flex gap-3">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-ecell-gray hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-200"
        >
          <Globe className="w-3.5 h-3.5" />
        </a>
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} Instagram`}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-ecell-gray hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-all duration-200"
        >
          <Share2 className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default TeamCard;

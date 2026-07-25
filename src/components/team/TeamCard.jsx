import { motion } from 'framer-motion';

const TeamCard = ({ member, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      whileHover={{ y: -6 }}
      className="flex flex-col group cursor-pointer p-3 sm:p-3.5 rounded-[20px] bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Full-Width Photo Header (55-60% height ratio) */}
      <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-slate-900/40 border border-white/[0.04] mb-3.5 relative">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-white/[0.03] to-white/[0.01]" />
        )}
      </div>

      {/* Member Details */}
      <div className="px-1 pb-1">
        <h3 className="font-sora font-semibold text-white text-base md:text-lg tracking-tight transition-colors group-hover:text-blue-400">
          {member.name}
        </h3>
        <p className="text-blue-400/90 text-xs md:text-sm font-inter font-medium mt-1 uppercase tracking-wider text-[11px] md:text-xs">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamCard;



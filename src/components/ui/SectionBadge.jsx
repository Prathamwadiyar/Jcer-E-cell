import { motion } from 'framer-motion';

const SectionBadge = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
        bg-ecell-blue/10 border border-ecell-blue/30 
        text-ecell-light text-xs font-inter font-medium tracking-widest uppercase
        shadow-glow-sm ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-ecell-glow animate-pulse-glow" />
      {children}
    </motion.div>
  );
};

export default SectionBadge;

import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  delay = 0,
  animate = true,
}) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      onClick={onClick}
      className={`
        glass rounded-2xl transition-all duration-300
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${glow ? 'glow-border' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

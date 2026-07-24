import { motion } from 'framer-motion';

const GlowButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variantClasses = {
    primary: `
      relative overflow-hidden
      bg-gradient-to-b from-[#347af0] to-[#1342a8] text-white border-none
      shadow-[inset_0_3px_6px_#ffffff80,inset_0_-3px_6px_#00000066,0_10px_25px_#000000b3]
      before:absolute before:inset-0 before:-translate-x-full before:w-1/2
      before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
      before:skew-x-[-20deg] hover:before:animate-[shimmer_1s_ease-in-out_infinite]
    `,
    outline: `
      bg-transparent text-white border border-white/20
      hover:bg-gradient-to-b hover:from-[#347af0] hover:to-[#1342a8]
      hover:shadow-[inset_0_3px_6px_#ffffff80,inset_0_-3px_6px_#00000066,0_10px_25px_#000000b3]
      hover:border-transparent
    `,
    ghost: `
      bg-transparent text-ecell-light border border-ecell-blue/30
      hover:bg-ecell-blue/10 hover:border-ecell-blue hover:shadow-glow-sm
    `,
    pill: `
      bg-transparent text-white border border-white/30 rounded-full
      hover:bg-ecell-blue hover:border-ecell-blue hover:shadow-glow-md
    `,
  };

  const baseClasses = `
    inline-flex items-center gap-2 font-inter font-medium
    rounded-xl transition-all duration-300 cursor-pointer
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}
  `;

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={baseClasses}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default GlowButton;

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaThreads, FaYoutube, FaFacebookF } from 'react-icons/fa6';

const socials = [
  { icon: FaLinkedinIn,  label: 'LinkedIn',  href: '#', hoverColor: '#0A66C2' },
  { icon: FaInstagram,   label: 'Instagram', href: '#', hoverColor: '#E1306C' },
  { icon: FaXTwitter,    label: 'X',         href: '#', hoverColor: '#ffffff' },
  { icon: FaThreads,     label: 'Threads',   href: '#', hoverColor: '#60A5FA' },
  { icon: FaYoutube,     label: 'YouTube',   href: '#', hoverColor: '#FF0000' },
  { icon: FaFacebookF,   label: 'Facebook',  href: '#', hoverColor: '#1877F2' },
];

const SocialBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex"
    >
      <div
        className="animate-float-slow flex flex-col gap-2.5 px-2.5 py-3 rounded-2xl
          bg-black/70 backdrop-blur-xl border border-white/[0.07]
          shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
      >
        {socials.map(({ icon: Icon, label, href, hoverColor }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.07 }}
            whileHover={{ scale: 1.22, x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group w-8 h-8 flex items-center justify-center rounded-xl
              border border-white/[0.07] text-white/50
              hover:border-white/20 hover:text-white
              hover:bg-white/[0.06] hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]
              transition-all duration-200"
          >
            <Icon className="w-3.5 h-3.5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialBar;

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

const socials = [
  { icon: FaLinkedinIn,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/jcer-e-cell/posts/?feedView=all', hoverColor: '#0A66C2' },
  { icon: FaInstagram,   label: 'Instagram', href: 'https://www.instagram.com/jcer_ecell', hoverColor: '#E1306C' },
  { icon: FaXTwitter,    label: 'X',         href: '#', hoverColor: '#ffffff' },
  { icon: FaWhatsapp,    label: 'WhatsApp',  href: 'https://wa.me/919483937558', hoverColor: '#25D366' },
];

const SocialBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex"
    >
      <div
        className="flex flex-col gap-4 px-3 py-5 rounded-l-2xl
          bg-[#050A15]/90 backdrop-blur-xl border-y border-l border-white/[0.07]
          shadow-[-4px_0_24px_rgba(0,0,0,0.5)]"
      >
        {socials.map(({ icon: Icon, label, href }, i) => (
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
            whileHover={{ scale: 1.15, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center
              text-[#5892f7] hover:text-[#7aaaf9]
              transition-colors duration-200"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialBar;

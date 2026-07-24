import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaThreads, FaYoutube, FaFacebookF } from 'react-icons/fa6';
import logoImg from '../../assets/logo.jpg';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

const resources = [
  { label: 'Events', to: '/gallery' },
  { label: 'Blogs', to: '#' },
  { label: 'FAQs', to: '#' },
  { label: 'Privacy Policy', to: '#' },
];

const socials = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram,  href: '#', label: 'Instagram' },
  { icon: FaXTwitter,   href: '#', label: 'X' },
  { icon: FaThreads,    href: '#', label: 'Threads' },
  { icon: FaYoutube,    href: '#', label: 'YouTube' },
  { icon: FaFacebookF,  href: '#', label: 'Facebook' },
];

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Blue top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ecell-blue to-transparent opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-24 bg-ecell-blue/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Column 1 — Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-5">
              <img src={logoImg} alt="E-Cell Logo" className="h-9 object-contain" />
            </Link>
            <p className="text-ecell-gray/70 text-sm leading-relaxed mb-5">
              Empowering student innovators and future entrepreneurs at the intersection of technology, creativity, and ambition.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-xl
                    border border-white/[0.08] text-white/40
                    hover:text-white hover:border-white/20 hover:bg-white/[0.05]
                    transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-sora font-semibold text-white text-sm mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-ecell-gray/60 text-sm hover:text-ecell-light transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ecell-blue/30 group-hover:bg-ecell-glow transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-sora font-semibold text-white text-sm mb-5 tracking-wide">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-ecell-gray/60 text-sm hover:text-ecell-light transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ecell-blue/30 group-hover:bg-ecell-glow transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-sora font-semibold text-white text-sm mb-5 tracking-wide">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-ecell-glow mt-0.5 flex-shrink-0" />
                <p className="text-ecell-gray/70 text-sm">ecell@college.edu.in</p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-ecell-glow mt-0.5 flex-shrink-0" />
                <p className="text-ecell-gray/70 text-sm">+91 98765 43210</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ecell-glow mt-0.5 flex-shrink-0" />
                <p className="text-ecell-gray/70 text-sm leading-relaxed">SAC Block D, College Campus, City – 400001</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="glow-divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-inter">
            © {new Date().getFullYear()} E-Cell. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-inter flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by E-Cell Technical Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

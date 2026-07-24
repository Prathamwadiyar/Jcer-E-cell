import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Meet Our Team' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      {/* ── HEADER WRAPPER ─────────────────────────────────────────── */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-0'}`}>

        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className={`transition-all duration-500 ${
            scrolled
              ? /* Scrolled: compact pill-style bar */
                'w-auto mx-auto px-6 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
              : /* Top: full-width transparent */
                'w-full px-6 lg:px-10 py-2 bg-transparent border-b border-transparent'
          }`}
          style={{ maxWidth: scrolled ? '1020px' : '100%' }}
        >
          <div className={`flex items-center justify-between transition-all duration-500 w-full ${scrolled ? 'h-13 px-5' : 'h-16 px-0'}`}>

            {/* Left: Logo */}
            <Link to="/" className="flex-shrink-0 z-10">
              <img
                src={logoImg}
                alt="E-Cell Logo"
                className={`object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
              />
            </Link>

            {/* Center: Desktop Nav */}
            <nav className={`hidden md:flex flex-1 items-center justify-center transition-all duration-500 ${scrolled ? 'gap-5 lg:gap-8' : 'gap-8'}`}>
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link text-xs font-medium tracking-wide whitespace-nowrap ${scrolled ? 'text-[13px]' : ''} ${isActive ? 'active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Vertical separator for scrolled state */}
              {scrolled && (
                <span className="w-px h-4 bg-white/10 block flex-shrink-0" />
              )}

              {/* EVENTS button */}
              <motion.a
                href="/events"
                whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(59,130,246,0.45)' }}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center font-inter font-medium rounded-full border border-white/25 text-white whitespace-nowrap
                  hover:bg-ecell-blue hover:border-ecell-blue transition-all duration-250 flex-shrink-0
                  ${scrolled ? 'px-4 py-1.5 text-[12px]' : 'px-6 py-2 text-[13px]'}`}
              >
                EVENTS
              </motion.a>
            </nav>

            {/* Right: Balance spacer + JOIN US only shows outside nav on non-scrolled */}
            <div className="hidden md:block flex-shrink-0" style={{ minWidth: '90px' }}></div>
            
            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-white border border-white/10 hover:border-ecell-blue/50 hover:bg-ecell-blue/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/[0.08] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 rounded-xl text-sm font-inter transition-all duration-200
                      ${isActive
                        ? 'text-ecell-glow bg-ecell-blue/10 border border-ecell-blue/20'
                        : 'text-ecell-gray hover:text-white hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href="/events"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="mt-2 block text-center py-2.5 rounded-full border border-white/25 text-white text-sm font-inter hover:bg-ecell-blue hover:border-ecell-blue transition-all duration-250"
              >
                EVENTS
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

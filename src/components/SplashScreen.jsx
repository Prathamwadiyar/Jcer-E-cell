import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// The 3 splash slides: matching the reference images exactly
const SLIDES = [
  { word: 'Innovate.', bg: '#0d1b2e', color: '#ffffff' },
  { word: 'Create.',   bg: '#000000', color: '#ffffff' },
  { word: 'Inspire.',  bg: '#e84b1a', color: '#ffffff' },
];

const SLIDE_DURATION = 1000; // ms each slide is visible
const FADE_DURATION  = 0.35; // seconds for fade transition

const SplashScreen = ({ onDone }) => {
  const [idx, setIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (idx < SLIDES.length) {
      const t = setTimeout(() => {
        if (idx === SLIDES.length - 1) {
          // Last slide: fade whole splash out then call onDone
          setExiting(true);
          setTimeout(onDone, FADE_DURATION * 1000 + 100);
        } else {
          setIdx(i => i + 1);
        }
      }, SLIDE_DURATION);
      return () => clearTimeout(t);
    }
  }, [idx, onDone]);

  return (
    <motion.div
      key="splash"
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: FADE_DURATION }}
      style={{ background: SLIDES[idx]?.bg }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          style={{
            color: SLIDES[idx]?.color,
            fontFamily: "'Sora', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '-0.01em',
          }}
        >
          {SLIDES[idx]?.word}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
};

export default SplashScreen;

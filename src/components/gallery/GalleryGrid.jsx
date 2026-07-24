import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ── Replace src with real photo paths when you have them ──────
const slides = [
  { id: 1, src: null, caption: 'E-Cell JCER Founding Team', gradient: 'from-[#0f1f3d] via-[#1a3560] to-[#0a1428]' },
  { id: 2, src: null, caption: 'Entrepreneurship Awareness Program 2021', gradient: 'from-[#0d1f35] via-[#153050] to-[#091520]' },
  { id: 3, src: null, caption: 'First Hackathon — 150+ Participants', gradient: 'from-[#12203a] via-[#1e3a5f] to-[#0c1828]' },
  { id: 4, src: null, caption: 'Idea Pitch Competition 2023', gradient: 'from-[#0e1d35] via-[#182d50] to-[#0a1525]' },
  { id: 5, src: null, caption: 'Founder Talk Series — Guest Session', gradient: 'from-[#0f2040] via-[#1b3560] to-[#0b1830]' },
  { id: 6, src: null, caption: 'Team E-Cell JCER 2025', gradient: 'from-[#10213d] via-[#1c3860] to-[#0c1930]' },
];

const SIDE_SCALE   = 0.72;
const SIDE_OPACITY = 0.45;
const SIDE_BLUR    = 'blur(2px)';

const GalleryGrid = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = slides.length;

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  const getSlide = (offset) => slides[(current + offset + total) % total];

  return (
    <div className="w-full py-4">
      {/* ── Carousel ─────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(320px, 50vw, 520px)' }}
      >
        {/* LEFT side card */}
        <div
          className="absolute top-0 bottom-0 flex items-center cursor-pointer"
          style={{ left: 0, width: '28%', zIndex: 1 }}
          onClick={prev}
        >
          <div
            className="w-full h-[82%] rounded-2xl overflow-hidden"
            style={{
              transform: `scale(${SIDE_SCALE})`,
              opacity: SIDE_OPACITY,
              filter: SIDE_BLUR,
              transformOrigin: 'center right',
            }}
          >
            <SlideCard slide={getSlide(-1)} />
          </div>
        </div>

        {/* CENTER main card */}
        <div
          className="absolute top-0 bottom-0 flex items-center"
          style={{ left: '22%', right: '22%', zIndex: 2 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.95 }),
                center: { opacity: 1, x: 0, scale: 1 },
                exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.95 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <div
                className="w-full h-full rounded-2xl overflow-hidden relative"
                style={{
                  boxShadow: '0 0 60px rgba(59,130,246,0.25), 0 20px 60px rgba(0,0,0,0.7)',
                  border: '1px solid rgba(96,165,250,0.25)',
                }}
              >
                <SlideCard slide={slides[current]} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT side card */}
        <div
          className="absolute top-0 bottom-0 flex items-center cursor-pointer"
          style={{ right: 0, width: '28%', zIndex: 1 }}
          onClick={next}
        >
          <div
            className="w-full h-[82%] rounded-2xl overflow-hidden"
            style={{
              transform: `scale(${SIDE_SCALE})`,
              opacity: SIDE_OPACITY,
              filter: SIDE_BLUR,
              transformOrigin: 'center left',
            }}
          >
            <SlideCard slide={getSlide(1)} />
          </div>
        </div>
      </div>

      {/* ── Caption + Controls ───────────────────────────── */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:border-ecell-blue/50 hover:bg-ecell-blue/10 transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-white/70 font-inter text-sm tracking-wide text-center min-w-[200px]"
          >
            {slides[current].caption}
          </motion.p>
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:border-ecell-blue/50 hover:bg-ecell-blue/10 transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── Dot indicators ───────────────────────────────── */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? '24px' : '7px',
              height: '7px',
              background: i === current
                ? 'linear-gradient(90deg, #3b82f6, #60a5fa)'
                : 'rgba(255,255,255,0.18)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Slide card (image or gradient placeholder) ──────────── */
const SlideCard = ({ slide }) => (
  <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} relative`}>
    {slide.src ? (
      <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" />
    ) : (
      /* Placeholder until real photos are added */
      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-white/25 text-xs font-inter text-center px-4">{slide.caption}</p>
      </div>
    )}
  </div>
);

export default GalleryGrid;

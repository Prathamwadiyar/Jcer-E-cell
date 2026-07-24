import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData, galleryGradients } from '../../data/galleryData';

// Emojis for fallback gradient cards
const iconEmojiMap = {
  Hackathons: '💻',
  Workshops: '🛠️',
  Events: '🎉',
  'Startup Expo': '🚀',
  Bootcamp: '⚡',
  Competitions: '🏆',
  All: '✨',
};

const GalleryGrid = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryData.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  return (
    <div className="w-full bg-black flex flex-col items-center overflow-hidden">
      
      {/* ── Curved Carousel Container ── */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] bg-black overflow-hidden">
        
        {/* Top Curve Mask */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[130%] h-[40px] md:h-[60px] lg:h-[80px] bg-black z-20 pointer-events-none"
          style={{ borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%' }}
        />

        {/* Track - Each slide is positioned independently relative to the center */}
        <div className="absolute inset-0">
          {galleryData.map((slide, i) => {
            const offset = i - current;
            const isActive = i === current;
            
            // Render only items that are somewhat close to the viewport to save DOM elements
            if (Math.abs(offset) > 3) return null;

            return (
              <motion.div 
                key={slide.id}
                className="absolute top-0 bottom-0 left-1/2 w-[85vw] md:w-[50vw] lg:w-[40vw] cursor-pointer"
                initial={false}
                animate={{ x: `calc(-50% + ${offset * 100}%)` }}
                transition={{ type: 'tween', ease: [0.25, 1, 0.36, 1], duration: 0.6 }}
                onClick={() => setCurrent(i)}
                style={{ zIndex: isActive ? 10 : 5 }}
              >
                {slide.src ? (
                  <img 
                    src={slide.src} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${galleryGradients[i % galleryGradients.length]}`}>
                    <div className="text-5xl md:text-6xl mb-4">{iconEmojiMap[slide.category]}</div>
                    <p className="text-white font-sora font-semibold text-lg md:text-xl text-center px-4">{slide.title}</p>
                    <p className="text-white/60 font-inter text-sm mt-2">{slide.category}</p>
                  </div>
                )}
                
                {/* Dark overlay for inactive slides */}
                <motion.div
                  className="absolute inset-0 bg-black pointer-events-none"
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 0.65 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Curve Mask */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[130%] h-[40px] md:h-[60px] lg:h-[80px] bg-black z-20 pointer-events-none"
          style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }}
        />
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-8 mb-16 px-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <p className="text-white font-inter text-sm md:text-base tracking-wide min-w-[200px] md:min-w-[300px] text-center">
          {galleryData[current].title}
        </p>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};

export default GalleryGrid;

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

const GalleryGrid = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  
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

        {/* Track */}
        <div className="absolute inset-0">
          {galleryData.map((slide, i) => {
            // Calculate circular offset so there is no empty space
            let offset = (i - current) % total;
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const isActive = offset === 0;

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
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                
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

      {/* ── Carousel Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-8 mb-8 px-4">
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

      {/* ── All Images Grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              onClick={() => setLightbox(item.src)}
              className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] glass border border-white/5"
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div>
                  <p className="text-white font-sora font-semibold text-lg">{item.title}</p>
                  <p className="text-ecell-blue text-sm font-inter">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={lightbox}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryGrid;

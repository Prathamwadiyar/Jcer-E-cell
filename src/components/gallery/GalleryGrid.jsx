import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Tag } from 'lucide-react';
import { galleryCategories, galleryData, galleryGradients } from '../../data/galleryData';
import SectionBadge from '../ui/SectionBadge';

const iconEmojiMap = {
  Hackathons: '💻',
  Workshops: '🛠️',
  Events: '🎉',
  'Startup Expo': '🚀',
  Bootcamp: '⚡',
  Competitions: '🏆',
  All: '✨',
};

const heightMap = {
  tall: 'h-64',
  medium: 'h-48',
  short: 'h-36',
};

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {galleryCategories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-inter font-medium transition-all duration-300 flex items-center gap-2
              ${activeFilter === cat
                ? 'bg-ecell-blue text-white border border-ecell-blue shadow-glow-sm'
                : 'glass border border-white/10 text-ecell-gray hover:border-ecell-blue/40 hover:text-ecell-light'
              }`}
          >
            <span>{iconEmojiMap[cat]}</span>
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className="masonry-grid">
        <AnimatePresence>
          {filtered.map((item, i) => {
            const gradient = galleryGradients[i % galleryGradients.length];
            const height = heightMap[item.height];
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="masonry-item relative group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setLightbox(item)}
              >
                {/* Image / Gradient placeholder */}
                <div
                  className={`w-full ${height} bg-gradient-to-br ${gradient} relative overflow-hidden`}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{iconEmojiMap[item.category]}</div>
                        <p className="text-white/30 text-xs font-inter">{item.category}</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ecell-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
                  <div className="absolute inset-0 bg-ecell-blue/10 opacity-0 group-hover:opacity-100 transition-all duration-400" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-8 h-8 text-white mb-2" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-sora font-semibold text-sm">{item.title}</p>
                    <span className="text-ecell-light text-xs font-inter flex items-center gap-1 mt-1">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass glow-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl glass border border-white/20 flex items-center justify-center text-white hover:text-ecell-glow hover:border-ecell-blue/50 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <div className={`w-full h-80 bg-gradient-to-br ${galleryGradients[lightbox.id % galleryGradients.length]} flex items-center justify-center`}>
                {lightbox.src ? (
                  <img src={lightbox.src} alt={lightbox.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <div className="text-7xl mb-4">{iconEmojiMap[lightbox.category]}</div>
                    <p className="text-white/40 text-sm font-inter">{lightbox.category}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-sora font-bold text-xl text-white mb-1">{lightbox.title}</h3>
                <span className="text-ecell-light text-sm font-inter px-3 py-1 rounded-full bg-ecell-blue/10 border border-ecell-blue/20">
                  {lightbox.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;

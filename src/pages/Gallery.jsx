import { motion } from 'framer-motion';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="bg-transparent min-h-screen pt-32"
    >
      {/* Header */}
      <div className="text-center px-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sora font-bold text-5xl md:text-7xl text-white mb-4"
        >
          Our <span className="gradient-text">Gallery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ecell-blue text-lg font-inter max-w-xl mx-auto"
        >
          An archive of our work and achievements
        </motion.p>
      </div>

      {/* Carousel */}
      <GalleryGrid />
    </motion.div>
  );
};

export default Gallery;

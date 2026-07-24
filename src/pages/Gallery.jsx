import { motion } from 'framer-motion';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen pt-32"
    >
      {/* Header */}
      <div className="text-center px-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sora font-bold text-5xl md:text-6xl text-white mb-4"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#3b82f6] text-lg font-inter"
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

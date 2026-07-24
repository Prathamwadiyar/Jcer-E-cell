import { motion } from 'framer-motion';
import SectionBadge from '../components/ui/SectionBadge';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      {/* Hero */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="orb orb-blue absolute top-0 left-1/4 w-96 h-72 opacity-20 pointer-events-none" />
        <div className="orb orb-cyan absolute bottom-0 right-1/4 w-80 h-64 opacity-15 pointer-events-none" />

        <div className="relative z-10 text-center px-6">


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
            className="text-ecell-gray/70 text-lg max-w-xl mx-auto"
          >
            A visual journey through our hackathons, workshops, startup expos, and unforgettable moments.
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <GalleryGrid />
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;

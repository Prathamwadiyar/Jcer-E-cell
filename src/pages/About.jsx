import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import Timeline from '../components/about/Timeline';
import WhyJoin from '../components/about/WhyJoin';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <AboutHero />
      <MissionVision />
      <div className="glow-divider" />
      <Timeline />
      <div className="glow-divider" />
      <WhyJoin />
    </motion.div>
  );
};

export default About;

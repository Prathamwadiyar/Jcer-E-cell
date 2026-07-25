import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      {/* Hero */}
      <section className="relative py-32 bg-transparent overflow-hidden">
        <div className="orb orb-blue absolute top-0 left-1/4 w-96 h-72 opacity-22 pointer-events-none" />
        <div className="orb orb-cyan absolute bottom-0 right-1/3 w-80 h-64 opacity-15 pointer-events-none" />

        <div className="relative z-10 text-center px-6">
          {/* Badge removed */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-bold text-5xl md:text-7xl text-white mb-4"
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ecell-gray/70 text-lg max-w-xl mx-auto"
          >
            Have a question, idea, or partnership proposal? Drop us a message and we'll connect.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;

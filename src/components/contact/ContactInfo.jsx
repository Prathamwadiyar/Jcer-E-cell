import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'ecell@college.edu.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:ecell@college.edu.in',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 10AM–6PM',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Student Activity Center, Block D',
    sub: 'College Campus, City – 400001',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Mon–Fri: 10AM – 6PM',
    sub: 'Sat: 10AM – 2PM',
    href: null,
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h3 className="font-sora font-bold text-3xl text-white mb-2">Get In Touch</h3>
        <p className="text-ecell-gray leading-relaxed">
          Have a question, idea, or want to collaborate? We're always excited to connect with fellow innovators.
        </p>
      </div>

      <div className="space-y-4">
        {contactItems.map(({ icon: Icon, title, value, sub, href }, i) => {
          const Wrapper = href ? 'a' : 'div';
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Wrapper
                href={href || undefined}
                target={href?.startsWith('http') ? '_blank' : undefined}
                className={`glass rounded-xl p-4 flex items-start gap-4 transition-all duration-300
                  ${href ? 'hover:border-ecell-blue/30 hover:shadow-glow-sm cursor-pointer' : ''}
                  border border-white/[0.08]`}
              >
                <div className="w-10 h-10 rounded-xl bg-ecell-blue/10 border border-ecell-blue/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-ecell-glow" />
                </div>
                <div>
                  <p className="text-ecell-gray text-xs font-inter font-medium tracking-wide mb-0.5">{title}</p>
                  <p className="text-white font-inter font-semibold text-sm">{value}</p>
                  <p className="text-ecell-gray/70 text-xs mt-0.5">{sub}</p>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>

      {/* Map placeholder */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.08] h-52 relative">
        <div className="w-full h-full bg-gradient-to-br from-ecell-bg2 to-ecell-bg flex items-center justify-center relative">
          {/* Fake map grid */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          <div className="relative text-center">
            <div className="w-10 h-10 rounded-full bg-ecell-blue shadow-glow-md flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <p className="text-ecell-gray text-xs font-inter">College Campus</p>
            <p className="text-ecell-gray/50 text-xs mt-1">City – 400001</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=JGI+-+Jain+College+Of+Engineering+And+Research,+682%2F2,+683%2F2A,+Udyambag,+Angol,+Belagavi,+Karnataka+590008';

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
    value: 'Jain College Of Engineering & Research',
    sub: 'JGI - 682/2, 683/2A, Udyambag, Angol, Belagavi, Karnataka 590008',
    href: MAPS_URL,
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
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
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

      {/* Embedded Google Maps */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.08] h-64 relative">
        <iframe
          title="Jain College Of Engineering & Research Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2282349185!2d74.49396887587!3d15.847661884889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf668f2e1e7e7f%3A0x4b9c6a1b2e3d4e5f!2sJGI%20-%20Jain%20College%20Of%20Engineering%20And%20Research!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  );
};

export default ContactInfo;

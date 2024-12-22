import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ContactForm } from './ContactForm';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@techcrm.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'San Francisco, CA',
  },
];

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="bg-black/95 py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.details}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="p-8">
          <ContactForm />
        </Card>
      </motion.div>
    </section>
  );
}
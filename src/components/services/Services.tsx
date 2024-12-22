import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Smartphone, Search, BarChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { staggerContainer } from '@/lib/animations';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic to your website.',
  },
  {
    icon: BarChart,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business.',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="services" className="bg-black/95 py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of digital services to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
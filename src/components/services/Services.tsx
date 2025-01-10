import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Globe, Smartphone, Search, BarChart } from 'lucide-react';
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
    description: 'Native and cross-platform mobile applications for both iOS and Android.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive more organic traffic to your website.',
  },
  {
    icon: BarChart,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business faster.',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="services" className="bg-gradient-to-r from-bg-darkBlue to-bg-dark py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-primary-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-primary to-secondary-teal rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <service.icon className="w-12 h-12 text-accent mb-2" />
                <h3 className="text-xl font-semibold text-neutral-light">
                  {service.title}
                </h3>
                <p className="text-text-muted">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Services Button with Hover Ripple Effect */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1.6, delay: 1.9 }}
          >
            <Link
              to="/services"
              className="ripple-button px-6 py-3 bg-primary hover:bg-white text-neutral-light hover:text-black font-semibold rounded-lg shadow-md transition-colors"
            >
              See All Services
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

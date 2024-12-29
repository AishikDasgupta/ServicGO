// src/pages/ServicesPage.tsx
import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, BarChart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: `
      Build modern, responsive websites tailored to your business needs. 
      Our web development services focus on creating visually stunning 
      and highly functional websites that provide an exceptional user experience. 
      We ensure scalability, speed, and security so your site is future-proof.
    `,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: `
      Transform your ideas into high-performing mobile applications. 
      Whether native or cross-platform, our apps are crafted with precision 
      to deliver outstanding user experiences, robust performance, 
      and seamless integrations. Ideal for startups and enterprises alike.
    `,
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: `
      Drive organic traffic with our advanced SEO services. 
      From keyword research to technical audits, we optimize every 
      aspect of your website to improve search engine rankings, 
      enhance visibility, and attract the right audience for sustained growth.
    `,
  },
  {
    icon: BarChart,
    title: 'Digital Marketing',
    description: `
      Elevate your brand's online presence with tailored digital marketing strategies. 
      From social media campaigns to paid ads, we help you connect with your audience, 
      boost engagement, and maximize ROI with data-driven solutions.
    `,
  },
];

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className=" w-screen h-full bg-gradient-to-r from-bg-darkBlue to-bg-dark py-24">
      <motion.div
        ref={ref}
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          className="text-4xl font-bold text-center text-primary-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-primary to-primary-teal rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <service.icon className="w-16 h-16 text-accent" />
                <h2 className="text-2xl font-semibold text-neutral-light">
                  {service.title}
                </h2>
                <p className="text-white text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

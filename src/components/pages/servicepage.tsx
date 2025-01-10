// src/pages/ServicesPage.tsx
import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, BarChart, Share2, Calendar, ClipboardList, LayoutDashboard, Barcode, Book , Briefcase } from 'lucide-react';
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
  {
    icon: Share2,
    title: 'Social Marketing',
    description: `
      Leverage the power of social media to grow your brand. 
      From strategy to execution, our social marketing services help 
      you engage with your audience, create shareable content, and 
      drive meaningful conversations that lead to conversions.
    `,
  },
  {
    icon: Barcode,
    title: 'Barcode Generator',
    description: `
      Simplify inventory management and product tracking with our 
      advanced barcode generator solutions. Ideal for businesses of 
      all sizes, we provide scalable and customizable barcode systems.
    `,
  },
  {
    icon: Calendar,
    title: 'Calendar & Appointments',
    description: `
      Streamline your scheduling with our calendar and appointment solutions. 
      Perfect for service-based businesses, these tools help manage bookings, 
      send reminders, and improve customer satisfaction.
    `,
  },
  {
    icon: ClipboardList,
    title: 'Reporting Services',
    description: `
      Make data-driven decisions with our robust reporting services. 
      Get detailed insights, generate custom reports, and track key metrics 
      to understand your business performance better.
    `,
  },
  {
    icon: LayoutDashboard,
    title: 'Centralized Dashboards',
    description: `
      Manage your operations seamlessly with our centralized dashboard solutions. 
      Bring all your critical data and tools into one place for easy access, 
      efficient monitoring, and better decision-making.
    `,
  },
  {
    icon: Book,
    title: 'Management Systems',
    description: `
      Build and manage online learning platforms with ease. 
      Our LMS solutions cater to educational institutions, 
      corporate training, and individual educators. 
      Features include course creation, user management, 
      and analytics for tracking learning outcomes.
    `,
  },
  {
    icon: Briefcase,
    title: 'Business Consultation',
    description: `
      Unlock growth with tailored business strategies. 
      We provide market analysis, financial planning, 
      and operational efficiency improvements. 
      Perfect for startups or established businesses 
      aiming to scale and stay competitive.
    `,
  },

];


export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <motion.h1
          className="text-4xl font-extrabold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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

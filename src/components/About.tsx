import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, ShieldCheck, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Clients" },
  { icon: ShieldCheck, value: "99%", label: "Satisfaction" },
  { icon: Globe, value: "50+", label: "Countries" },
];

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-16 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl text-white md:text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <stat.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-5xl font-extrabold text-gray-900 mb-3">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

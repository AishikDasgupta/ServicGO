import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Target, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
    { icon: Trophy, label: "Awards Won", value: "25+" },
  ];

  return (
    <section id="about" className="bg-black/95 py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl text-white font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate developers and marketers dedicated to
            helping businesses grow in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

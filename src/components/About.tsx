import { motion } from "framer-motion";
import { Users, ShieldCheck, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Clients" },
  { icon: ShieldCheck, value: "99%", label: "Satisfaction" },
  { icon: Globe, value: "50+", label: "Countries" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-bg-darkBlue to-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left Column - Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Your Business with Modern Solutions
          </motion.h1>
          <p className="text-lg text-text-muted mt-4">
            We deliver tailored IT services that help you grow, innovate, and
            achieve your business goals worldwide.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-r from-primary to-primary-teal shadow-xl rounded-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-6">
                  <stat.icon className="w-16 h-16 text-accent mx-auto" />
                </div>
                <h3 className="text-4xl text-neutral-light font-semibold">
                  {stat.value}
                </h3>
                <p className="text-lg text-neutral-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 lg:ml-12">
          <motion.img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Business team working"
            className="w-full h-full object-cover rounded-lg shadow-xl border border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}

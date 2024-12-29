// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

export function Hero() {
  return (
    <section
      id="home"
      className="w-screen min-h-screen bg-black flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-6"
          >
            Transform Your Business with
            <span className="bg-gradient-to-r from-white/80 to-white/10 bg-clip-text text-transparent">
              {' '}
              Modern Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto lg:mx-0"
          >
            Elevate your business with our comprehensive CRM solutions. From web
            development to digital marketing, we provide the tools you need to
            succeed in the digital age.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              variant="gradient"
              size="lg"
              className="group flex items-center justify-center px-8 py-4"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group flex items-center justify-center px-8 py-4"
            >
              Explore Services
              <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

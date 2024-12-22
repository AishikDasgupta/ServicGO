import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PricingCard } from './PricingCard';
import { staggerContainer } from '@/lib/animations';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    description: 'Perfect for small businesses',
    features: [
      { text: 'Basic Web Development', included: true },
      { text: 'SEO Optimization', included: true },
      { text: 'Social Media Integration', included: true },
      { text: 'Custom App Development', included: false },
      { text: 'Advanced Analytics', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$199',
    description: 'Ideal for growing companies',
    features: [
      { text: 'Advanced Web Development', included: true },
      { text: 'SEO Optimization', included: true },
      { text: 'Social Media Integration', included: true },
      { text: 'Basic App Development', included: true },
      { text: 'Basic Analytics', included: true },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$399',
    description: 'For large organizations',
    features: [
      { text: 'Custom Web Development', included: true },
      { text: 'Advanced SEO Optimization', included: true },
      { text: 'Full Social Media Management', included: true },
      { text: 'Custom App Development', included: true },
      { text: 'Advanced Analytics & Reports', included: true },
    ],
  },
];

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-24 bg-black/95">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
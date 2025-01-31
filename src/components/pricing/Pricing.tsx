import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PricingCard } from './PricingCard';
import { staggerContainer } from '@/lib/animations';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for small businesses',
    features: [
      { text: 'Digital Marketing audit', included: true },
      { text: 'Social Media Analysis', included: true },
      { text: 'Content strategy consultation', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Competitor Analysis', included: true },
      { text: 'Email Marketing template', included: true },
      { text: 'Google Analytics setup', included: true },
      { text: 'Short-from content creation', included: true },
      { text: 'Basic landing page', included: true },
      { text: 'AI prompt engineering services', included: true },
    ],
  },
  {
    name: 'Pro',
    price: '₹15K / $175',
    description: 'Ideal for growing companies',
    features: [
      { text: 'Basic Web Development', included: true },
      { text: 'SEO Optimization', included: true },
      { text: 'Social Media Integration', included: true },
      { text: 'Basic App Development', included: true },
      { text: 'AI Integration', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Content Marketing Strategy', included: true },
      { text: 'Digital Marketing Strategy', included: true },
      { text: 'Report Generation', included: true },
      { text: 'Basic Data Analysis', included: true },
    ],
    popular: true,
  },
  {
    name: 'Flex',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      { text: 'Custom Web Development', included: true },
      { text: 'Advanced SEO Optimization', included: true },
      { text: 'Full Social Media Management', included: true },
      { text: 'Custom App Development', included: true },
      { text: 'Advanced Analytics & Reports', included: true },
      { text: 'Management System softwares', included: true },
      { text: 'Custom Dashboards', included: true },
      { text: 'Custom Data Analysis', included: true },
      { text: 'Advanced reporting services', included: true },
      { text: 'Calender and appointment services', included: true },
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
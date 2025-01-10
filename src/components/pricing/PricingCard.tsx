import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

export function PricingCard({ name, price, description, features, popular }: PricingCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
        popular ? 'border-black shadow-lg scale-105' : ''
      }`}>
        {popular && (
          <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1.5 text-sm text-primary-foreground">
            Popular
          </div>
        )}
        <CardHeader className="text-center">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            {/* <span className="text-muted-foreground">/month</span> */}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check className={`h-5 w-5 ${
                feature.included ? 'text-primary' : 'text-muted-foreground/50'
              }`} />
              <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.text}</span>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full group" 
            variant={popular ? "gradient" : "outline"}
            size="lg"
          >
            Get Started
            {popular ? (
              <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
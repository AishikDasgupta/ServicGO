import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardHeader>
          <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 w-fit group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="mb-2 group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Button variant="ghost" className="group bg-black text-white hover:text-black mt-4 p-0 hover:bg-transparent">
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
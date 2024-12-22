import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeInUp } from '@/lib/animations';

export function ContactForm() {
  return (
    <motion.form variants={fadeInUp} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Input placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <Input type="email" placeholder="Email Address" />
        </div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Subject" />
      </div>
      <div className="space-y-2">
        <Textarea placeholder="Your Message" className="min-h-[150px]" />
      </div>
      <Button className="w-full md:w-auto">
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );
}
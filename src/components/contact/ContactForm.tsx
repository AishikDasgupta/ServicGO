import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeInUp } from '@/lib/animations';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_la857b9', // EmailJS service ID
          'template_8afbrjt', // EmailJS template ID
          formRef.current,
          'jRJP7iEGNn3M91vZ8' // EmailJS public key
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again later.');
          }
        );

      // Reset the form after submission
      const form = e.target as HTMLFormElement; // Assert type explicitly
      form.reset();
    } else {
      console.error('Form reference is null.');
      alert('Failed to send message. Please refresh the page and try again.');
    }
  };

  return (
    <motion.form
      ref={formRef}
      variants={fadeInUp}
      className="space-y-6"
      onSubmit={sendEmail}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <Input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="space-y-2">
          <Input type="tel" name="phone" placeholder="Phone Number" required />
        </div>
      </div>
      <div className="space-y-2">
        <Input type="text" name="subject" placeholder="Subject" required />
      </div>
      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your Message"
          className="min-h-[150px]"
          required
        />
      </div>
      <Button type="submit" className="w-full md:w-auto">
        Book a Demo
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );
}

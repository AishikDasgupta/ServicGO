import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/services/Services';
import { Pricing } from '@/components/pricing/Pricing';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
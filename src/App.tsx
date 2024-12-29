import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/services/Services';
import { Pricing } from '@/components/pricing/Pricing';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';
import ServicesPage from '@/components/pages/servicepage'; // Import the ServicesPage component

function Home() {
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Services Page Route */}
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

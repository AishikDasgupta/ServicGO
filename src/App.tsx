import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/services/Services';
import { Pricing } from '@/components/pricing/Pricing';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';
import ServicesPage from '@/components/pages/servicepage'; // Import the ServicesPage component
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { StatsSection } from './components/StatsSection';


function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <StatsSection />
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
      <FloatingWhatsApp
        phoneNumber= "+919062878517"
        accountName= "ServiceGO"
        notificationSound= {true}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        darkMode={true}
      />
    </Router>
  );
}

export default App;

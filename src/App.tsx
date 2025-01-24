import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/services/Services";
import { Pricing } from "@/components/pricing/Pricing";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/Footer";
import ServicesPage from "@/components/pages/servicepage"; // Import the ServicesPage component
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { StatsSection } from "./components/StatsSection";
import MissionPage from "./components/pages/OurMission";
import VisionPage from "./components/pages/OurVision";

function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
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
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Services Page Route */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-mission" element={<MissionPage />} />
        <Route path="/our-vision" element={<VisionPage />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="+61425178253"
        accountName="GrowwInfinity"
        notificationSound={true}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        darkMode={true}
      />
    </Router>
  );
}

export default App;

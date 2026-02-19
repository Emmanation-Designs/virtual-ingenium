import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Aim from './components/Aim';
import Process from './components/Process';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PolicyModal from './components/PolicyModal';
import CookieBanner from './components/CookieBanner';
import { Service } from './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) setIsCookieAccepted(true);
  }, []);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsCookieAccepted(true);
  };

  const openPolicy = (type: 'privacy' | 'terms') => {
    setActivePolicy(type);
  };

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-brand selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="relative">
          <div className="section-light-beam"></div>
          <About />
        </div>
        
        <Aim />
        
        <div className="relative">
          <div className="section-light-beam" style={{ opacity: 0.5 }}></div>
          <Process />
        </div>
        
        <Achievements />
        
        <div className="relative">
          <div className="section-light-beam"></div>
          <Services onServiceClick={handleOpenModal} />
        </div>
        
        <Testimonials />
      </main>

      <Footer onPolicyClick={openPolicy} onCookieSettingsClick={() => setIsCookieAccepted(false)} />

      {isModalOpen && selectedService && (
        <Modal 
          service={selectedService} 
          onClose={handleCloseModal} 
        />
      )}

      {activePolicy && (
        <PolicyModal 
          type={activePolicy} 
          onClose={() => setActivePolicy(null)} 
        />
      )}

      {!isCookieAccepted && (
        <CookieBanner onAccept={handleAcceptCookies} />
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/447526596522" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        <i className="fa-brands fa-whatsapp text-3xl relative z-10"></i>
      </a>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ValuesSection from '@/components/ValuesSection';
import TargetMarketSection from '@/components/TargetMarketSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const [highlightedService, setHighlightedService] = useState<string>();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Quad Maintenance";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Providing expert maintenance services with over 20 years of experience for residential, commercial, and industrial properties.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header 
        setActiveSection={setActiveSection} 
        setShowContactForm={setShowContactForm} 
        activeSection={activeSection}
      />
      <main>
        {activeSection === 'home' && (
          <>
            <HeroSection setActiveSection={setActiveSection} setShowContactForm={setShowContactForm} />
            <AboutSection />
          </>
        )}
        {activeSection === 'about' && (
          <div className="pt-[60px] bg-[#e6f0ff]">
            <WhyChooseUs />
            <ValuesSection />
            <TargetMarketSection />
          </div>
        )}
        {activeSection === 'services' && (
          <div className="pt-[75px] bg-[#E3F2FD]">
            <ServicesSection highlightedService={highlightedService} />
          </div>
        )}
        {activeSection === 'contact' && (
          <ContactSection showContactForm={showContactForm} />
        )}
      </main>
      <Footer 
        setActiveSection={setActiveSection} 
        setShowContactForm={setShowContactForm} 
        setHighlightedService={setHighlightedService}
      />
    </div>
  );
};

export default Index;

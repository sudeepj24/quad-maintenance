import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

interface HeroSectionProps {
  setActiveSection?: React.Dispatch<React.SetStateAction<string>>;
  setShowContactForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection, setShowContactForm }) => {
  const scrollToContact = () => {
    if (setActiveSection && setShowContactForm) {
      setActiveSection('contact');
      setShowContactForm(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    if (setActiveSection) {
      setActiveSection('services');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-24 pt-40"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1970')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
        <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#1a5ff2] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md shadow-md hover:bg-[#4e92f9] transition-all duration-300 cursor-pointer">
            Excellence  |  Reliability  |  Trust
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 leading-tight mb-4 drop-shadow-lg">
            Quad Maintenance
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white/95 mb-6">
            Property Maintenance Experts
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto hover:text-white transition-colors duration-300 leading-relaxed">
          ㅤ
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="sm:min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-[#1a5ff2] text-white hover:bg-[#4e92f9] font-bold py-3 px-6 rounded-lg"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1a5ff2] font-bold py-3 px-6 rounded-lg sm:min-w-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Button>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto translate-y-[50px]">
          <path fill="#E6F0FF" fillOpacity="1" d="M0,244L60,249.3C120,255,240,265,360,244C480,223,600,169,720,158.7C840,148,960,180,1080,185.3C1200,191,1320,169,1380,158.7L1440,148L1440,340L1380,340C1320,340,1200,340,1080,340C960,340,840,340,720,340C600,340,480,340,360,340C240,340,120,340,60,340L0,340Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Button from './Button';

interface HeaderProps {
  setActiveSection: (section: string) => void;
  setShowContactForm: (show: boolean) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection, setShowContactForm, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    // Only scroll for home section
    if (id === 'home') {
      const element = document.getElementById(id);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element?.getBoundingClientRect().top ?? 0;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Update active section based on the ID
    if (id === 'about') {
      setActiveSection('about');
      setShowContactForm(false);
      
      // Scroll to top for about section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (id === 'services') {
      setActiveSection('services');
      setShowContactForm(false);
      
      // Scroll to top for services section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (id === 'contact') {
      setActiveSection('contact');
      setShowContactForm(false);
      
      // Scroll to top for contact section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (id === 'home') {
      setActiveSection('home');
      setShowContactForm(false);
    }

    setIsMobileMenuOpen(false);
  };

  const handleGetQuoteClick = () => {
    setActiveSection('contact');
    setShowContactForm(true);
    
    // Scroll to top for contact section
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#ebf8fa] py-4 shadow-lg font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center flex-shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center"
              >
                <img src="/logo.webp" alt="Quad Maintenance Logo" className="h-10 w-auto mr-3" />
                <span className="text-xl font-bold text-quad-blue transition-colors duration-300 hover:text-[#195FF2] cursor-pointer">
                  Quad Maintenance Ltd
                </span>
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex flex-grow justify-center space-x-8 items-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[18px] text-[#235CE5] hover:text-[#195FF2] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-[#195FF2] after:transition-all hover:after:w-full ${
                  activeSection === 'services' ? 'text-[#195FF2] after:w-full' : ''
                }`}
              >
                Services
              </a>
              <span className="text-[18px] text-[#235CE5]/50">|</span>
              <a
                href="#"
                className="text-[18px] text-[#235CE5] hover:text-[#195FF2] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-[#195FF2] after:transition-all hover:after:w-full"
              >
                Portfolio
              </a>
              <span className="text-[18px] text-[#235CE5]/50">|</span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[18px] text-[#235CE5] hover:text-[#195FF2] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-[#195FF2] after:transition-all hover:after:w-full ${
                  activeSection === 'about' ? 'text-[#195FF2] after:w-full' : ''
                }`}
              >
                About
              </a>
              <span className="text-[18px] text-[#235CE5]/50">|</span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                  setShowContactForm(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[18px] text-[#235CE5] hover:text-[#195FF2] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-[#195FF2] after:transition-all hover:after:w-full ${
                  activeSection === 'contact' ? 'text-[#195FF2] after:w-full' : ''
                }`}
              >
                Contact
              </a>
            </nav>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/447770365242"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#195FF2] focus:outline-none transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden absolute w-full ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Mobile Menu Items */}
        <div className="bg-white shadow-lg border-t rounded-b-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              {/* Menu Items */}
              <div className="p-4 space-y-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('services');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                    activeSection === 'services' 
                      ? 'bg-[#235CE5] text-white' 
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  Services
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-300"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('about');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                    activeSection === 'about' 
                      ? 'bg-[#235CE5] text-white' 
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  About
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('contact');
                    setShowContactForm(false);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                    activeSection === 'contact' 
                      ? 'bg-[#235CE5] text-white' 
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  Contact
                </a>
              </div>

              {/* Menu Footer */}
              <div className="p-4 border-t rounded-b-2xl">
                <a
                  href="https://wa.me/447770365242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-lg text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

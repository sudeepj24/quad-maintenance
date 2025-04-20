import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  setActiveSection?: (section: string) => void;
  setShowContactForm?: (show: boolean) => void;
  setHighlightedService?: (service: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection, setShowContactForm, setHighlightedService }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Logo */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.webp" alt="Quad Maintenance Logo" className="h-12 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">Quad Maintenance Ltd</h3>
            <p className="text-[16px] text-white/80 leading-relaxed">
              Providing expert maintenance services.
            </p>
            <p className="text-[16px] text-white/80 mt-6">
              Company Registration Number: 16273299 (Registered in England & Wales)
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection) {
                      setActiveSection('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection) {
                      setActiveSection('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection) {
                      setActiveSection('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setShowContactForm) {
                      setActiveSection('contact');
                      setShowContactForm(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Get a Free Quote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setShowContactForm) {
                      setActiveSection('contact');
                      setShowContactForm(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Plumbing');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Plumbing</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Electrics');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Electrics</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Carpentry');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Carpentry</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Painting & Decorating');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Painting & Decorating</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Damp and Leaks');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Damp and Leaks</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Flooring and Roofing');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Flooring and Roofing</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Drainage Services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Drainage Services</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Handyman');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Handyman</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActiveSection && setHighlightedService) {
                      setActiveSection('services');
                      setHighlightedService('Property Management');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-[16px] text-white/80 hover:text-white transition-colors cursor-pointer"
                >Property Management</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div className="text-[16px] text-white/80">
                  <a href="tel:+447391484807" className="hover:text-white transition-colors">07391484807</a>
                  <br />
                  <a href="tel:+447770365242" className="hover:text-white transition-colors">07770365242</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <a href="mailto:admin@quadmaintenance.com" className="text-[16px] text-white/80 hover:text-white transition-colors">admin@quadmaintenance.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-[16px] text-white/80">Grove Road, Romford, Essex, RM6 4XB</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div className="text-[16px] text-white/80">
                  <p>Mon - Sun: 8:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex justify-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Quad Maintenance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

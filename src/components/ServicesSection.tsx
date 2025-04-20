import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Droplet, Zap, Hammer, PaintBucket, Droplets, Home, WashingMachine, Wrench, Building2, CircleDot } from 'lucide-react';

const services = [
  {
    title: "Plumbing",
    description: "Expert plumbing solutions for residential and commercial properties. From routine maintenance to emergency repairs.",
    icon: (
      <div className="relative">
        <Wrench className="h-12 w-12 text-white rotate-45" strokeWidth={1.5} />
        <Droplet className="h-5 w-5 text-white absolute -bottom-1 -right-1" strokeWidth={1.5} />
      </div>
    )
  },
  {
    title: "Electrics",
    description: "Professional electrical installations, maintenance, and repairs for residential and commercial properties.",
    icon: (
      <Zap className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Carpentry",
    description: "Expert carpentry services including installations, repairs, and custom woodwork solutions.",
    icon: (
      <Hammer className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Painting & Decorating",
    description: "Professional interior and exterior painting services with attention to detail and quality finishes.",
    icon: (
      <PaintBucket className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Damp and Leaks",
    description: "Comprehensive solutions for identifying and resolving damp issues and water leaks in properties.",
    icon: (
      <Droplets className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Flooring and Roofing",
    description: "Expert installation and repair services for all types of flooring and roofing materials.",
    icon: (
      <Home className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Drainage Services",
    description: "Comprehensive drainage solutions including cleaning, repairs, and emergency blockage clearance.",
    icon: (
      <WashingMachine className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Handyman",
    description: "General maintenance and repair services for a wide range of household and property issues.",
    icon: (
      <Wrench className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  },
  {
    title: "Property Management",
    description: "Comprehensive property management services including maintenance coordination and facility oversight.",
    icon: (
      <Building2 className="h-12 w-12 text-white" strokeWidth={1.5} />
    )
  }
];

interface ServicesSectionProps {
  highlightedService?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ highlightedService }) => {
  React.useEffect(() => {
    if (highlightedService) {
      const serviceElements = document.querySelectorAll('.service-card');
      serviceElements.forEach((element) => {
        const titleElement = element.querySelector('h3');
        if (titleElement && titleElement.textContent === highlightedService) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }, [highlightedService]);
  return (
    <section id="services" className="pt-[30px] md:pt-[30px] pb-[60px] md:pb-[90px] bg-[#E3F2FD] mt-[30px] md:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="section-title">
          <AnimatedSection>
            <span className="inline-block bg-yellow-400 text-quad-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
              OUR SERVICES
            </span>
            <h2 className="section-heading text-gray-900">Comprehensive Maintenance Solutions</h2>
            <p className="section-subheading text-gray-600">
              From preventative maintenance to emergency repairs, we provide a full spectrum of services to keep your property in optimal condition
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="slide-in-bottom" 
              delay={index * 100}
              className={`service-card rounded-lg p-6 shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-r ${highlightedService === service.title ? 'from-quad-yellow to-quad-yellow-medium' : 'from-[#4e92f9] to-[#1a5ff2] hover:from-quad-yellow hover:to-quad-yellow-medium'} h-full flex flex-col`}
            >
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white/30">
                {service.icon}
              </div>
              <h3 className={`text-2xl font-semibold mb-3 transition-colors duration-300 ${highlightedService === service.title ? 'text-quad-blue-darker' : 'text-white group-hover:text-quad-blue-darker'}`}>{service.title}</h3>
              <p className={`text-lg flex-grow transition-colors duration-300 ${highlightedService === service.title ? 'text-quad-blue-darker/90' : 'text-white/85 group-hover:text-quad-blue-darker/90'}`}>{service.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

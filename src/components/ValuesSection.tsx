
import React from 'react';
import AnimatedSection from './AnimatedSection';

const values = [
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all our interactions, building trust with our clients through consistent ethical practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description: "We maintain high standards in every service we offer, focusing on excellence in workmanship and attention to detail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description: "We adopt environmentally friendly practices and solutions that help reduce the ecological footprint of the properties we maintain.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "We aim to exceed expectations by putting our clients first and tailoring our services to meet their specific needs and preferences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  }
];

const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="pt-5 pb-20 bg-[#E3F2FD] relative">
      <div className="absolute inset-0 h-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-title">
          <AnimatedSection>
            <span className="inline-block bg-yellow-400 text-quad-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
              OUR VALUES
            </span>
            <h2 className="section-heading text-gray-900">Core Principles That Guide Us</h2>
            <p className="section-subheading text-gray-600">
              Our commitment to these values ensures we deliver exceptional service and build lasting relationships
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => (
            <AnimatedSection 
              key={index} 
              animation="slide-in-bottom" 
              delay={index * 150}
              className="relative overflow-hidden rounded-lg shadow-soft group"
            >
              <div className="bg-gradient-to-r from-[#1a5ff2] to-[#4e92f9] p-8 text-center h-full transform transition-all duration-500 group-hover:from-quad-yellow group-hover:to-quad-yellow-medium">
                <div className="bg-white/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-quad-blue-darker transition-colors duration-300">{value.title}</h3>
                <p className="text-lg text-white/90 group-hover:text-quad-blue-darker/90 transition-colors duration-300">{value.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 transform transition-all duration-300 group-hover:h-1 group-hover:bg-white/40"></div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import AnimatedSection from './AnimatedSection';

const markets = [
  {
    title: "Commercial Properties",
    description: "Offices, retail spaces, and commercial buildings requiring regular maintenance to ensure optimal operating conditions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1969"
  },
  {
    title: "Residential Housing",
    description: "Apartment complexes, condominiums, and residential communities requiring specialized maintenance services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1512821231209-3cd3e4df62f8"
  },
  {
    title: "Public Sector Buildings",
    description: "Schools, hospitals, government offices, and public institutions requiring reliable maintenance services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1976"
  },
  {
    title: "Property Management Companies",
    description: "Full-service maintenance solutions for property management companies handling multiple properties.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973"
  }
];

const TargetMarketSection: React.FC = () => {
  // State to track mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="target-market" className="py-[25px] bg-[#e6f0ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <AnimatedSection>
            
            <h2 className="section-heading text-[#1a365d]">Who We Serve</h2>
            <p className="section-subheading text-[#4a5568]">
              We provide specialized maintenance solutions for a diverse range of properties and industries
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {markets.map((market, index) => (
            <AnimatedSection
              key={index}
              animation={isMobile ? "fade-in" : index % 2 === 0 ? "fade-in-right" : "fade-in-left"} // Use fade-in for mobile
              delay={index * 100}
              className="bg-gradient-to-r from-[#1a5ff2] to-[#4e92f9] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                  <img
                    src={market.image}
                    alt={market.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center group-hover:bg-[#1a5ff2] transition-colors duration-300">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {market.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">{market.title}</h3>
                  <p className="text-lg text-white/90 group-hover:text-white transition-colors duration-300">{market.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetMarketSection;

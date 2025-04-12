import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
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
    <section id="about" className="pt-[25px] md:pt-[0px] pb-[25px] bg-[#e6f0ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <AnimatedSection>
            <span className="inline-block bg-yellow-400 text-[#1a3e72] px-4 py-1 rounded-full text-sm font-medium mb-3">
              ABOUT US
            </span>
            <h2 className="section-heading text-[#1a3e72]">Who We Are</h2>
            <p className="section-subheading text-[#334E68]">
            We are a team of experts with over 20 years of combined experience in property maintenance and facility management
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Left Side: Image with Animation */}
          <AnimatedSection animation={isMobile ? "fade-in" : "fade-in-right"} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-soft-lg">
              <img
                src="./quad.jpg"
                alt="Maintenance team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
          </AnimatedSection>

          {/* Right Side: Text Content with Animation */}
          <AnimatedSection animation={isMobile ? "fade-in" : "fade-in-left"} delay={200}>
            <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
              Excellence in Property Maintenance
            </h3>
            <p className="text-[#334E68] mb-6 leading-relaxed text-[18px]">
              Quad Maintenance Ltd is a trusted provider of comprehensive maintenance solutions for residential, commercial, and industrial properties. We provide services in the East London areas of Redbridge, Barking & Dagenham, Havering, Newham, and Waltham Forest.
            </p>
            <p className="text-[#334E68] mb-8 leading-relaxed text-[18px]">
              Our team of highly skilled professionals is dedicated to ensuring your property remains in optimal condition, addressing everything from routine maintenance to emergency repairs with the same level of dedication and expertise.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Expert Team', desc: 'Qualified professionals', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Fast Response', desc: 'Always One Click Away', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Efficiency', desc: 'Cost-effective solutions', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Quality Assured', desc: 'Guaranteed workmanship', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1a3e72]">{item.title}</h4>
                    <p className="text-sm text-[#334E68]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

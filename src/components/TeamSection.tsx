import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const TeamSection: React.FC = () => {
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
    <section id="team" className="py-20 bg-[#E3F2FD]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <AnimatedSection>
            <span className="inline-block bg-yellow-400 text-quad-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
              OUR TEAM
            </span>
            <h2 className="section-heading text-[#1a365d]">Meet Our Experts</h2>
            <p className="section-subheading text-[#4a5568]">
              Our team of skilled professionals is the foundation of our success
            </p>
          </AnimatedSection>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 mt-12">
          {/* Text Box (Left Side) */}
          <AnimatedSection animation="fade-in" className="lg:w-1/2">
            <div className="bg-gradient-to-r from-[#1a5ff2] to-[#4e92f9] backdrop-blur-md rounded-lg p-8 shadow-lg border border-blue-500/30 h-full">
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-lg mb-6 text-white/90">
                At Quad Maintenance Ltd, our team consists of highly qualified engineers, technicians, and support staff with extensive experience in all aspects of property maintenance.
              </p>
              <p className="text-lg mb-6 text-white/90">
                Our professionals are certified in their respective fields and regularly undergo training to stay updated with the latest industry standards and technologies.
              </p>
              <p className="text-lg mb-6 text-white/90">
                We take pride in our team's commitment to excellence, attention to detail, and customer-focused approach that ensures exceptional service delivery on every project.
              </p>
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="bg-yellow-400 text-[#1a365d]"
                  onClick={() => {
                    // Redirect to the contact section
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Join Our Team
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Image Component (Right Side) */}
          <AnimatedSection animation={isMobile ? "fade-in" : "fade-in-left"} delay={200} className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-full">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Maintenance Team"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a5ff2]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-xl font-bold text-white mb-2">Professional & Dedicated</h3>
                <p className="text-white/90">Our team brings experience, expertise and commitment to every project</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const reasons = [
  {
    title: "20+ Years of Experience",
    description: "With over two decades in the industry, we bring unmatched expertise to every maintenance project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Reliable & Prompt Service",
    description: "We understand that maintenance issues require immediate attention. Our team responds quickly accordingly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Customer-Focused Approach",
    description: "We tailor our services to meet your specific needs, ensuring complete satisfaction with every project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  },
  {
    title: "Competitive Pricing",
    description: "We deliver exceptional value with transparent pricing, complete clarity, and no hidden costs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Health & Safety Compliance",
    description: "All our work strictly adheres to the latest health and safety regulations and industry standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Technology-Driven Solutions",
    description: "We leverage the latest technologies to enhance efficiency and deliver superior results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Preventative Approach",
    description: "We emphasize proactive maintenance to identify and address issues before they become costly problems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  }
];

const WhyChooseUs: React.FC = () => {
  const isMobile = useIsMobile();
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section id="why-choose-us" className="pt-[30px] md:pt-[45px] pb-[60px] md:pb-[90px] bg-[#e6f0ff] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <AnimatedSection>
            <span className="inline-block bg-yellow-400 text-quad-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="section-heading text-quad-blue-dark">The Quad Maintenance Difference</h2>
            <p className="section-subheading text-quad-gray-dark">
              We go beyond providing maintenance services – we deliver peace of mind and exceptional value
            </p>
          </AnimatedSection>
        </div>

        {/* Swiper Container with Custom Navigation */}
        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={isMobile ? 1.2 : 3}
            initialSlide={0}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }}
            onSwiper={setSwiper}
            className="py-8"
          >
            {reasons.map((reason, index) => (
              <SwiperSlide key={index} className="h-full">
                <Card className="border-0 h-full group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-[#4e92f9] to-[#1a5ff2] group-hover:from-quad-yellow group-hover:to-quad-yellow-medium p-6 h-full flex flex-col">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white/30">
                      <div className="transition-all duration-300 group-hover:scale-110">
                        {reason.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-quad-blue-darker">{reason.title}</h3>
                    <p className="text-lg text-white/90 transition-colors duration-300 group-hover:text-quad-blue-darker/90 flex-grow">{reason.description}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Simplified without background and hidden on mobile */}
          <button 
            className="custom-prev-button absolute top-1/2 -left-2 md:-left-8 transform -translate-y-1/2 z-10 transition-all text-quad-blue hover:text-quad-blue-dark hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          
          <button 
            className="custom-next-button absolute top-1/2 -right-2 md:-right-8 transform -translate-y-1/2 z-10 transition-all text-quad-blue hover:text-quad-blue-dark hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Pagination Dots - Using custom styling */}
          <div className="swiper-pagination mt-8"></div>
          
          {/* Additional CSS for pagination dots */}
          <style dangerouslySetInnerHTML={{
            __html: `
              .swiper-pagination {
                position: static;
                margin-top: 20px;
                display: flex;
                justify-content: center;
                width: 100%;
              }
              .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: #ccc;
                opacity: 1;
                border-radius: 50%;
                margin: 0 5px;
                cursor: pointer;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: #1A5F7A;
                width: 12px;
                height: 12px;
              }
              .swiper-slide {
                height: auto;
              }
              .swiper-slide > div {
                height: 100%;
              }
            `
          }} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

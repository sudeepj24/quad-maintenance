import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';

interface ContactSectionProps {
  showContactForm: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ showContactForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/admin@quadmaintenance.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Contact Form Submission',
        })
      });

      const result = await response.json();
      console.log('FormSubmit Response:', result);

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        console.error('Form submission failed:', result);
        setSubmitError('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderContactForm = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-[#1a365d] mb-6">Send Us a Message</h3>

        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
            Thank you for your message! We'll get back to you shortly.
          </div>
        )}

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#4a5568] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5ff2] focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#4a5568] mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5ff2] focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#4a5568] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5ff2] focus:border-transparent transition-all"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#4a5568] mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5ff2] focus:border-transparent transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div>
              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full bg-[#1a5ff2] hover:bg-[#4e92f9] text-white"
              >
                Send Message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  const renderContactInfo = () => (
    <div className="bg-gradient-to-r from-[#1a5ff2] to-[#4e92f9] text-white rounded-lg overflow-hidden shadow-sm p-8 h-full">
      <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Address</h4>
            <p className="text-white/80 leading-relaxed">Grove Road, Romford, Essex, RM6 4XB</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Email</h4>
            <a href="mailto:sales@quadmaintenance.com" className="text-white/80 hover:text-white transition-colors">
              sales@quadmaintenance.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Phone</h4>
            <div className="flex flex-col space-y-1">
              <a href="tel:+447391484807" className="text-white/80 hover:text-white transition-colors">07391 484807</a>
              <a href="tel:+447770365242" className="text-white/80 hover:text-white transition-colors">07770 365242</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessHours = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm p-8 h-full">
      <h3 className="text-2xl font-semibold text-[#1a365d] mb-8">Business Hours</h3>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-[#1a5ff2]/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-[#1a5ff2]" />
          </div>
          <div>
            <h4 className="font-medium text-[#1a365d] mb-2">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[#4a5568]">
                <span className="font-medium">Monday - Sunday</span>
                <span className="ml-4">8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-[#1a5ff2] rounded-full"></div>
            <p className="text-[#4a5568]">Available for all your maintenance needs</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="pt-[105px] pb-[25px] bg-[#e6f0ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <AnimatedSection>
            <span className="inline-block bg-yellow-400 text-quad-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
              CONTACT US
            </span>
            <h2 className="section-heading text-[#1a365d]">Get In Touch</h2>
            <p className="section-subheading text-[#4a5568]">
              Have a question or need a quote? Reach out to us today.
            </p>
          </AnimatedSection>
        </div>

        {showContactForm ? (
          <div className="mt-12 max-w-2xl mx-auto">
            <AnimatedSection animation="fade-in">
              {renderContactForm()}
            </AnimatedSection>
          </div>
        ) : (
          <div className="mt-12 space-y-12">
            {/* Contact Information and Business Hours (Side by Side) */}
            <div className="grid lg:grid-cols-2 gap-8">
              <AnimatedSection animation={isMobile ? "fade-in" : "fade-in-right"}>
                {renderContactInfo()}
              </AnimatedSection>

              <AnimatedSection animation={isMobile ? "fade-in" : "fade-in-left"}>
                {renderBusinessHours()}
              </AnimatedSection>
            </div>

            {/* Map Section (Below) */}
            <AnimatedSection animation="fade-in">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.4967067971377!2d0.1223155!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNycyMC4zIkU!5e0!3m2!1sen!2suk!4v1645705422384!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

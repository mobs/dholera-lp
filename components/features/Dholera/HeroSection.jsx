'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUser, FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const HeroSection = ({ setOpenModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: null
  });

  const purposeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'mixed', label: 'Mixed Use' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="relative lg:h-screen overflow-hidden">
      {/* Full-screen Background - Desktop only */}
      <div className="absolute inset-0 hidden lg:block">
        <img src="/dholera/dholera.webp" alt="Dholera Smart City" className="w-full h-full object-cover" />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
      </div>

      {/* Mobile Image Section */}
      <div className="relative mt-12 lg:hidden w-full">
        <img src="/dholera/dholera.webp" alt="Dholera Smart City" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary/50" />
      </div>

      {/* Content Container */}
      <div className="relative lg:h-full flex items-center py-8 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase drop-shadow">Exclusive Opportunity</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                Invest in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dholera</span><br/>
                Smart City
              </h1>

              <p className="text-lg sm:text-xl text-white/90 drop-shadow font-medium max-w-xl">
                India's First Greenfield Smart City – A Once-in-a-Lifetime Investment Opportunity with High Growth Potential
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {[
                  'Government-Backed Smart City Project',
                  '100% Verified Plots with Clear Titles',
                  'Expert Guidance & Legal Support',
                  'High Appreciation Potential'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white text-base font-medium drop-shadow">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold drop-shadow">Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold drop-shadow">Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <span className="font-semibold drop-shadow">1000+ Investors</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Floating Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="relative">
                {/* Floating luxury glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl opacity-50 blur-xl"></div>
                
                {/* Form Card - Transparent Glass with Blur */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
                  {/* Form header */}
                  <div className="mb-5 text-center">
                    <h2 className="text-2xl font-bold text-secondary mb-1">
                      Get Expert Consultation
                    </h2>
                    <p className="text-sm text-gray-600">
                      Fill in your details and our team will reach out to you
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      icon={<FaUser className="text-secondary" />}
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-sm text-secondary placeholder-gray-400"
                    />

                    <Input
                      icon={<FaPhoneAlt className="text-secondary" />}
                      placeholder="Phone Number *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-sm text-secondary placeholder-gray-400"
                    />

                    <Input
                      icon={<FaEnvelope className="text-secondary" />}
                      placeholder="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-sm text-secondary placeholder-gray-400"
                    />

                    <Select
                      icon={<FaBuilding className="text-secondary" />}
                      placeholder="Investment Purpose *"
                      options={purposeOptions}
                      value={formData.purpose}
                      onChange={(option) => setFormData({ ...formData, purpose: option })}
                      className="text-sm text-secondary placeholder-gray-400"
                    />

                    <Button
                      variant="primary"
                      className="w-full py-3 text-sm font-bold rounded-xl shadow-2xl hover:shadow-3xl group mt-4"
                    >
                      <span className="flex items-center justify-center">
                        Get Best Plots Now
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-2">
                      By submitting, you agree to our Terms & Privacy Policy
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  
      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-white/80 uppercase tracking-[0.2em] font-semibold drop-shadow-lg">Explore More</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


'use client'
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlay, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Premium gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        
        {/* Elegant geometric pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M100 0L0 100L100 200L200 100L100 0ZM100 25L175 100L100 175L25 100L100 25Z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Animated gradient orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-primary/15 via-secondary/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-primary to-secondary"></span>
              </span>
              <span className="text-sm font-bold text-darkgray tracking-widest uppercase">CA & Legal Experts</span>
            </motion.div>

            {/* Main Heading - Ultra Luxury */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
            >
              <span className="block text-darkgray">
                Elevate Your
              </span>
              <span className="block mt-4 relative">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary blur-2xl opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </span>
              </span>
            </motion.h1>

            {/* Premium Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted leading-relaxed mb-10 font-light max-w-xl"
            >
              Where <span className="text-darkgray font-semibold">Chartered Accountant precision</span> meets 
              <span className="text-darkgray font-semibold"> legal excellence</span>. 
              Your trusted partner in premium real estate investments.
            </motion.p>

            {/* Elegant Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-12"
            >
              {[
                { value: '10+', label: 'Years' },
                { value: '₹500Cr+', label: 'Facilitated' },
                { value: '1000+', label: 'Investors' }
              ].map((stat, index) => (
                <div key={stat.label} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-darkgray">{stat.value}</div>
                    <div className="text-xs text-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Luxury CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                className="group rounded-full px-10 py-5 text-base font-semibold shadow-2xl hover:shadow-3xl"
              >
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group flex items-center justify-center space-x-3 px-10 py-5 bg-white border-2 border-darkgray text-darkgray font-semibold rounded-full hover:bg-darkgray hover:text-white transition-all duration-300 shadow-lg"
              >
                <span className="w-10 h-10 bg-darkgray group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <FaPlay className="text-white group-hover:text-darkgray text-sm ml-0.5" />
                </span>
                <span>Watch Story</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image Card with 3D effect */}
              <div className="relative group">
                {/* Decorative background layers */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-[2.5rem] rotate-3 transform group-hover:rotate-6 transition-transform duration-500"></div>
                
                {/* Main image container */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative h-[600px] lg:h-[700px]">
                    <Image
                      src="/image.webp"
                      alt="Luxury Investment Services"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Premium overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkgray/90 via-darkgray/40 to-transparent"></div>
                    
                    {/* Floating stats card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-2xl rounded-2xl p-6 border border-gray-200 shadow-2xl"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-darkgray">Investment Portfolio</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">+12.5%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">₹45L</div>
                          <div className="text-xs text-muted">Avg. Investment</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">98%</div>
                          <div className="text-xs text-muted">Success Rate</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-3xl shadow-2xl flex items-center justify-center"
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-xs">Rating</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted uppercase tracking-widest">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

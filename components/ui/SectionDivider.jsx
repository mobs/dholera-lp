'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'default', className = '' }) => {
  const variants = {
    default: (
      <div className={`relative py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Elegant center ornament */}
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="mx-8 flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
        </div>
      </div>
    ),
    
    gradient: (
      <div className={`relative py-20 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        </div>
      </div>
    ),
    
    wave: (
      <div className={`relative py-16 overflow-hidden ${className}`}>
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#093819" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#35DEA4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#093819" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>
        </div>
      </div>
    ),
    
    ornate: (
      <div className={`relative py-20 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            {/* Left ornament */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex items-center justify-end space-x-2"
            >
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-primary to-secondary"></div>
              </div>
              <div className="w-32 h-px bg-gradient-to-l from-gray-300 to-transparent" />
            </motion.div>
            
            {/* Center diamond */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-4 h-4 rotate-45 bg-gradient-to-br from-primary via-secondary to-primary border-2 border-white shadow-lg"></div>
              <div className="absolute inset-0 w-4 h-4 rotate-45 bg-gradient-to-br from-primary to-secondary blur-lg opacity-50"></div>
            </motion.div>
            
            {/* Right ornament */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex items-center justify-start space-x-2"
            >
              <div className="w-32 h-px bg-gradient-to-r from-gray-300 to-transparent" />
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-primary to-secondary"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    
    minimal: (
      <div className={`relative py-12 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-center"
          />
        </div>
      </div>
    )
  };

  return variants[variant] || variants.default;
};

export default SectionDivider;


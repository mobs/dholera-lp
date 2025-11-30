'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Separator = ({ className = '' }) => {
  return (
    <div className={`relative py-2 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant center ornament */}
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="mx-8 flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Separator;


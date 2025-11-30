'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  hover = true,
  ...props 
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5 border border-secondary/20'
  };

  const hoverEffect = hover ? {
    whileHover: { y: -5, scale: 1.02 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <motion.div
      {...hoverEffect}
      className={`rounded-xl p-6 transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;


'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhoneAlt, FaEnvelope, FaRupeeSign, FaBuilding, FaCheckCircle } from 'react-icons/fa';
import Input from './Input';
import Select from './Select';
import Button from './Button';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const purposeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'mixed', label: 'Mixed Use' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // Here you would typically send data to your API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSuccess(true);
      
      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          purpose: null
        });
        setIsSuccess(false);
        setIsSubmitting(false);
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Your inquiry has been submitted successfully. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 relative">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
        type="button"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Header */}
      <div className="text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-secondary mb-1">
            Get Expert Consultation
          </h2>
          <p className="text-sm text-gray-600">
            Fill in your details and our team will reach out to you
          </p>
        </motion.div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Input
            icon={<FaUser className="text-secondary" />}
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="text-secondary placeholder-gray-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Input
            icon={<FaPhoneAlt className="text-secondary" />}
            placeholder="Phone Number *"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="text-secondary placeholder-gray-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Input
            icon={<FaEnvelope className="text-secondary" />}
            placeholder="Email Address *"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="text-secondary placeholder-gray-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Select
            icon={<FaBuilding className="text-secondary" />}
            options={purposeOptions}
            value={formData.purpose}
            onChange={(selected) => setFormData({ ...formData, purpose: selected })}
            placeholder="Investment Purpose *"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="pt-2"
        >
          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Inquiry'
            )}
          </Button>
        </motion.div>

        <p className="text-xs text-center text-gray-500 mt-2">
          By submitting this form, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </form>
    </div>
  );
};

export default Form;


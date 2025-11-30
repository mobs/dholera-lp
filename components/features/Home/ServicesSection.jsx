'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaHome, 
  FaStore, 
  FaUniversity, 
  FaChartLine,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: FaHome,
      title: 'Buy Property',
      description: 'Discover premium properties with verified listings, virtual tours, and expert guidance at every step.',
      features: ['Verified Properties', 'Expert Guidance', 'Virtual Tours', 'Legal Support'],
      link: '/buy-properties',
      gradient: 'from-primary/5 via-primary/10 to-primary/5',
      iconGradient: 'from-primary to-primary/80'
    },
    {
      icon: FaStore,
      title: 'Sell Property',
      description: 'Maximize your property value with professional valuation, strategic marketing, and dedicated support.',
      features: ['Free Valuation', 'Marketing Support', 'Legal Assistance', 'Quick Sale'],
      link: '/sell-properties',
      gradient: 'from-secondary/5 via-secondary/10 to-secondary/5',
      iconGradient: 'from-secondary to-secondary/80'
    },
    {
      icon: FaUniversity,
      title: 'Home Loans',
      description: 'Access the best loan offers with competitive rates, quick approval, and personalized financial solutions.',
      features: ['Best Rates', 'Quick Approval', 'EMI Calculator', 'Flexible Terms'],
      link: '/home-loans',
      gradient: 'from-accent/5 via-accent/10 to-accent/5',
      iconGradient: 'from-accent to-accent/80'
    },
    {
      icon: FaChartLine,
      title: 'Working Capital',
      description: 'Fuel your business growth with flexible working capital loans designed for property owners and businesses.',
      features: ['Flexible Terms', 'Quick Disbursal', 'Minimal Docs', 'Competitive Rates'],
      link: '/working-capital-loans',
      gradient: 'from-success/5 via-success/10 to-success/5',
      iconGradient: 'from-success to-success/80'
    }
  ];

  return (
    <section className="md:py-12 py-6 bg-white relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-secondary/10 to-primary/10 border border-gray-200 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-6 leading-tight">
            Everything You Need
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              in One Place
            </span>
          </h2>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive financial solutions tailored to your investment goals
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative bg-gradient-to-br ${service.gradient} rounded-3xl p-10 border border-gray-200 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden`}
                >
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-shadow`}
                    >
                      <service.icon className="text-3xl text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-darkgray mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted text-base leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * idx }}
                          className="flex items-center text-darkgray"
                        >
                          <FaCheckCircle className="text-secondary mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Elegant divider */}
                    <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-6" />

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold group-hover:text-secondary transition-colors">
                        Learn More
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-primary group-hover:text-secondary transition-colors"
                      >
                        <FaArrowRight className="text-xl" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-12 border border-gray-200 shadow-xl text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-2xl" />
          
          <div className="relative">
            <p className="text-lg text-muted mb-4 font-light">Need help choosing the right service?</p>
            <h3 className="text-2xl md:text-3xl font-bold text-darkgray mb-6">
              Our Experts Are Here to Help
            </h3>
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Talk to Our Experts</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

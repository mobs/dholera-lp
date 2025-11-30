'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaUserTie, 
  FaCheckCircle, 
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import Button from '@/components/ui/Button';

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: FaAward,
      title: '10+ Years Financial Expertise',
      description: 'Backed by experienced CAs and finance professionals with a proven track record in real estate investment advisory.',
      color: 'primary',
      gradient: 'from-primary/10 to-primary/5'
    },
    {
      icon: FaUserTie,
      title: 'CA & Legal Background',
      description: 'Unique combination of chartered accountants and qualified legal experts guiding your investment decisions.',
      color: 'secondary',
      gradient: 'from-secondary/10 to-secondary/5'
    },
    {
      icon: FaCheckCircle,
      title: 'Verified Projects Only',
      description: 'Every property undergoes rigorous verification for legal clearance, authenticity, and investment potential.',
      color: 'success',
      gradient: 'from-success/10 to-success/5'
    },
    {
      icon: FaChartLine,
      title: 'Personalized Investment Planning',
      description: 'Customized strategies meticulously crafted based on your financial goals, risk appetite, and timeline.',
      color: 'accent',
      gradient: 'from-accent/10 to-accent/5'
    },
    {
      icon: FaHandshake,
      title: 'Zero Brokerage Options',
      description: 'Save significantly on brokerage fees with our exclusive zero-commission property listings and offers.',
      color: 'secondary',
      gradient: 'from-secondary/10 to-secondary/5'
    },
    {
      icon: FaShieldAlt,
      title: 'End-to-End Support',
      description: 'From initial search to final documentation, we handle everything for a completely seamless experience.',
      color: 'primary',
      gradient: 'from-primary/10 to-primary/5'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years of Excellence', sublabel: 'Industry Experience' },
    { value: '50K+', label: 'Properties Listed', sublabel: 'Verified Listings' },
    { value: '1000+', label: 'Happy Investors', sublabel: 'Satisfied Clients' },
    { value: '₹500Cr+', label: 'Investments Facilitated', sublabel: 'Total Value' }
  ];

  return (
    <section className="md:py-12 py-6 bg-gradient-to-b from-white via-gray-50/40 to-white relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

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
            <FaStar className="text-secondary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-6 leading-tight">
            Why Investors
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Trust 4SFS
            </span>
          </h2>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-light">
            We combine financial expertise with real estate knowledge to deliver 
            <span className="block mt-1">exceptional investment outcomes</span>
          </p>
        </motion.div>

        {/* Premium Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-darkgray mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wide">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Luxury Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${item.gradient} rounded-3xl p-8 border border-gray-200 hover:border-${item.color}/30 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <item.icon className="text-2xl text-white" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-darkgray mb-4 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted leading-relaxed text-sm font-light">
                  {item.description}
                </p>
                
                {/* Decorative line */}
                <div className={`mt-6 w-16 h-1 bg-gradient-to-r from-${item.color} to-transparent group-hover:w-24 transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-darkgray via-primary to-darkgray rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
            {/* Elegant pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '48px 48px'
              }} />
            </div>

            {/* Animated gradient orbs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl"
            />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
              >
                <FaCheckCircle className="text-3xl text-secondary" />
              </motion.div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Make Smart
                <span className="block mt-2 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                  Investments?
                </span>
              </h3>
              
              {/* Description */}
              <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Get personalized investment advice from our CA and legal experts.
                <span className="block mt-2">Book your complimentary consultation today.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <Button variant="secondary" className="rounded-full px-12 py-5 text-base font-semibold shadow-2xl hover:shadow-3xl">
                  <span className="flex items-center">
                    Book Free Consultation
                    <FaArrowRight className="ml-2" />
                  </span>
                </Button>
                
                <button className="group px-12 py-5 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                  <span className="flex items-center">
                    View Our Projects
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
                {['100% Verified Properties', 'Expert Financial Guidance', 'Complete Legal Support'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-white/90 text-sm"
                  >
                    <FaCheckCircle className="mr-2 text-secondary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

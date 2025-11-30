'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFileAlt, FaCheckCircle, FaMapMarkerAlt, FaDollarSign, FaHandshake, FaAward, FaStar } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const WhyChoose4SFSection = ({ setOpenModal }) => {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: '100% Verified Plots',
      description: 'Every property is thoroughly verified for authenticity and legal compliance'
    },
    {
      icon: <FaFileAlt />,
      title: 'Complete Legal Verification',
      description: 'Full legal verification assistance with experienced CA and legal experts'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Builder/Project Credibility Check',
      description: 'Thorough background checks on builders and project developers'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'On-Site Visits & Location Guidance',
      description: 'Expert-guided site visits to help you make informed decisions'
    },
    {
      icon: <FaDollarSign />,
      title: 'Custom Budget Options',
      description: 'Customized options based on your budget and investment goals'
    },
    {
      icon: <FaHandshake />,
      title: 'End-to-End Documentation Support',
      description: 'Complete assistance from initial paperwork to final registration'
    }
  ];

  const values = [
    {
      icon: <FaAward />,
      title: 'Trust',
      description: '10+ years of proven track record'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Transparency',
      description: 'Complete clarity at every step'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ground Experience',
      description: 'Real field visits & honest insights'
    }
  ];

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-bgGray to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
              Why Us?
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Why Choose <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4SureFunds for Dholera?
            </span>
          </h2>
          
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed mb-6">
            4SureFunds is built on <span className="text-secondary font-semibold">trust, transparency, and real ground experience</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              variant="primary" 
              onClick={() => setOpenModal(true)}
              className="rounded-full px-8 py-4 font-semibold shadow-lg"
            >
              Get Started with Expert Guidance
            </Button>
          </motion.div>
        </motion.div>

        {/* Core Values Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full md:w-[calc(33.333%-1rem)]"
              >
                <div className="h-full text-center hover:shadow-xl group bg-white/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 text-primary text-2xl"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{value.title}</h3>
                  <p className="text-muted">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-secondary mb-4">We Provide</h3>
            <p className="text-lg text-muted">Comprehensive services for your peace of mind</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="h-full bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl group rounded-xl p-6 border border-primary/10 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 text-primary text-xl self-start"
                    >
                      {service.icon}
                    </motion.div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-muted leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 pt-4 border-t border-primary/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card variant="elevated" className="bg-gradient-to-r from-secondary via-primary to-secondary p-12 text-white text-center overflow-hidden relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px'
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
              >
                <FaHandshake className="text-4xl" />
              </motion.div>
              <h3 className="text-4xl font-bold mb-6">Our Promise</h3>
              <p className="text-2xl font-semibold mb-8 max-w-3xl mx-auto">
                We ensure fully safe investment—no shortcuts, no false promises, only facts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['No Hidden Charges', 'Complete Transparency', '100% Legal', 'Expert Guidance'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  >
                    <span className="font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="flex flex-wrap justify-center items-stretch gap-8 text-center">
              <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center mb-4"
                >
                  <FaStar className="text-yellow-500 text-5xl" />
                </motion.div>
                <div className="text-4xl font-bold text-secondary mb-2">4.9/5</div>
                <p className="text-muted font-medium">Client Rating</p>
              </div>
              <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                  className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                >
                  1000+
                </motion.div>
                <p className="text-muted font-medium">Happy Investors</p>
              </div>
              <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                >
                  ₹500Cr+
                </motion.div>
                <p className="text-muted font-medium">Investments Facilitated</p>
              </div>
              <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                >
                  10+
                </motion.div>
                <p className="text-muted font-medium">Years Experience</p>
              </div>
            </div>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChoose4SFSection;


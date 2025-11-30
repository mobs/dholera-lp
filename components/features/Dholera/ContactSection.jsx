'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaArrowRight, FaClock, FaCheckCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const ContactSection = ({ setOpenModal }) => {
  const contactMethods = [
    {
      icon: <FaPhoneAlt />,
      title: 'Call Us',
      value: '+91-9958150128',
      action: 'tel:+919958150128',
      description: 'Speak directly with our experts'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+91-9958150128',
      action: 'https://wa.me/919958150128',
      description: 'Quick chat for instant responses'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'info@4surefunds.com',
      action: 'mailto:info@4surefunds.com',
      description: 'Send us detailed inquiries'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' }
  ];

  const benefits = [
    'Free Initial Consultation',
    'Expert Property Guidance',
    'Complete Legal Support',
    'Verified Plot Options',
    'On-Site Visit Assistance',
    'End-to-End Documentation'
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-white via-bgGray to-secondary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

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
            <span className="px-4 py-1.5 bg-white text-secondary rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Ready to Invest in <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dholera Smart City?
            </span>
          </h2>
          
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Get a call from our experts now and discover verified Dholera investment options
          </p>
        </motion.div>

        {/* Main Contact Flex Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block w-full lg:w-[calc(33.333%-16px)]"
            >
              <div className="h-full bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl group cursor-pointer text-center rounded-xl p-6 border border-primary/10 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 text-primary text-3xl"
                >
                  {method.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-muted mb-3">{method.description}</p>
                <p className="text-xl font-bold text-primary mb-4">
                  {method.value}
                </p>

                <div className="pt-4 border-t border-primary/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Office & Benefits Section */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 mb-16">
          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[calc(50%-1rem)]"
          >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                      <FaMapMarkerAlt />
                    </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Office Location</h3>
                  <p className="text-lg font-semibold text-primary mb-2">4SureFunds Advisors</p>
                  <p className="text-muted leading-relaxed">
                    Visit our office for personalized consultation and detailed property discussions
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <FaClock className="text-primary text-xl" />
                  <h4 className="text-lg font-bold text-secondary">Working Hours</h4>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 px-4 bg-bgGray rounded-lg">
                      <span className="text-secondary font-medium">{schedule.day}</span>
                      <span className="text-muted">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 h-full">
              <h3 className="text-2xl font-bold text-secondary mb-6">What You Get When You Contact Us</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FaCheckCircle className="text-primary text-sm" />
                    </div>
                    <span className="text-secondary font-semibold">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="bg-gradient-to-r from-secondary via-primary to-secondary text-white overflow-hidden relative">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px'
                }}
              />
            </div>

            <div className="relative z-10 text-center py-12 px-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              >
                <FaPhoneAlt className="text-4xl" />
              </motion.div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Want Verified Dholera Options?
              </h3>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get a call from our experts now and start your investment journey
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="white" 
                  onClick={() => setOpenModal(true)}
                  className="rounded-full px-10 py-5 text-lg font-semibold shadow-2xl group"
                >
                  <span className="flex items-center">
                    <FaPhoneAlt className="mr-3" />
                    Request a Callback
                    <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <a href="https://wa.me/919958150128">
                  <Button variant="white" className="rounded-full px-10 py-5 text-lg font-semibold shadow-2xl group">
                    <span className="flex items-center">
                      <FaWhatsapp className="mr-3" />
                      WhatsApp Now
                    </span>
                  </Button>
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                {['100% Verified Plots', 'No Hidden Charges', 'Expert Guidance', 'Complete Support'].map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaCheckCircle />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Final Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white text-lg font-medium">
            Trusted by 1000+ investors across India • 10+ Years of Excellence • ₹500Cr+ Investments Facilitated
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


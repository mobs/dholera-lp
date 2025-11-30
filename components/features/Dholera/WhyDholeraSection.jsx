'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaRoad, FaPlane, FaIndustry, FaBolt, FaCity, FaChartLine, FaLeaf } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const WhyDholeraSection = ({ setOpenModal }) => {
  const reasons = [
    {
      icon: <FaRoad className="text-3xl" />,
      title: 'Delhi–Mumbai Industrial Corridor (DMIC)',
      description: 'Strategically located in India\'s most ambitious industrial corridor'
    },
    {
      icon: <FaCity className="text-3xl" />,
      title: 'Government-Backed Infrastructure',
      description: 'Massive government focus with assured long-term development'
    },
    {
      icon: <FaPlane className="text-3xl" />,
      title: 'International Airport',
      description: 'Upcoming international airport connecting Dholera globally'
    },
    {
      icon: <FaRoad className="text-3xl" />,
      title: 'High-Speed Expressways',
      description: 'Multiple expressways & logistic corridors for seamless connectivity'
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: 'Plug-and-Play Industrial Zones',
      description: 'Ready-to-use industrial infrastructure for quick setup'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'High Appreciation Potential',
      description: 'Low initial entry cost with massive long-term growth potential'
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Smart Green Infrastructure',
      description: 'Underground cabling, ICT network, and green energy systems'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-quaternary/20 to-white">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      
      {/* Subtle luxury pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

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
            className="inline-block mb-3"
          >
            <span className="px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
              Why Invest?
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Why <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Dholera?</span>
          </h2>
          
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-8">
            Dholera is not just a smart city—it's <span className="text-secondary font-bold">India's first fully planned Smart Industrial + Residential Hub</span> designed to support future industries, global companies, and high-quality living.
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
              className="rounded-full px-6 py-3 text-sm font-semibold shadow-lg"
            >
              Get Expert Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Luxury Feature Grid */}
        <div className="relative">
          {/* Central luxury hero card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-primary/20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center border-2 border-primary/30">
                      <FaCity className="text-primary text-5xl" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-3xl font-bold text-secondary mb-4">Early Investor Advantage</h3>
                    <p className="text-lg text-muted leading-relaxed mb-6">
                      Join <span className="text-primary font-bold">1000+ investors</span> who secured their position in India's most ambitious smart city project. Early entry offers maximum appreciation potential.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                        <span className="text-secondary font-semibold text-sm">High ROI</span>
                      </div>
                      <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                        <span className="text-secondary font-semibold text-sm">Government Backed</span>
                      </div>
                      <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                        <span className="text-secondary font-semibold text-sm">Future Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium cards flex layout */}
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
              >
                <div className="relative h-full">
                  {/* Hover glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative h-full bg-white hover:bg-gradient-to-br hover:from-white hover:to-quaternary/30 transition-all duration-500 rounded-2xl p-8 border-2 border-gray-100 group-hover:border-primary/30 shadow-lg group-hover:shadow-2xl">
                    {/* Number badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                      <span className="text-primary font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20">
                        <div className="text-primary text-3xl">
                          {reason.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-primary/20 transition-colors">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDholeraSection;


'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaMap, FaCheckCircle, FaShieldAlt, FaChartLine, FaDownload, FaStar } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const TPZonesSection = ({ setOpenModal }) => {
  const tpZoneGroups = [
    {
      range: 'TP 1 to TP 6',
      status: 'Activation Area',
      priority: 'Highest',
      description: 'Highest development priority; closest to expressways, airport zone, and ABCD building',
      features: ['Prime Location', 'Airport Proximity', 'Expressway Access', 'ABCD Building']
    },
    {
      range: 'TP 7 to TP 12',
      status: 'Fast-Growing',
      priority: 'High',
      description: 'Fast-growing residential + commercial development with excellent connectivity',
      features: ['Residential Zones', 'Commercial Hubs', 'Good Connectivity', 'Rapid Growth']
    },
    {
      range: 'TP 13 onwards',
      status: 'Long-Term',
      priority: 'Medium',
      description: 'Best for early-stage investors seeking long-term appreciation and value growth',
      features: ['Low Entry Cost', 'High ROI Potential', 'Future Development', 'Value Growth']
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Legally Strong & Verified',
      description: 'Official government-approved land with clear documentation'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Clear Land Titles',
      description: 'Transparent planning with verified ownership records'
    },
    {
      icon: <FaMap />,
      title: 'Well-Developed Infrastructure',
      description: 'Organized road networks and planned utility systems'
    },
    {
      icon: <FaChartLine />,
      title: 'Higher Appreciation',
      description: 'Structured planning ensures better long-term returns'
    }
  ];

  const recommendationFactors = [
    'Investment Budget',
    'Investment Purpose (Residential / Industrial / Commercial)',
    'Expected ROI Timeline',
    'Connectivity & Development Priority'
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-bgGray to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

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
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              Town Planning Zones
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TP Zones</span> of Dholera SIR
          </h2>
          
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed mb-6">
            Understanding <span className="text-secondary font-semibold">TP (Town Planning) Zones</span> is crucial for selecting the right investment in Dholera SIR. These zones define how each area will grow and what appreciation potential an investor can expect.
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
              Get TP Zone Guidance
            </Button>
          </motion.div>
        </motion.div>

        {/* What Are TP Zones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card variant="elevated" className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6">
                <FaMap className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-4">What Are TP Zones?</h3>
              <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
                TP Zones are <span className="text-secondary font-semibold">officially planned land development schemes</span> created by the Dholera Authority. Every TP scheme includes organised land usage — residential, commercial, industrial, green zones, and public utility areas.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Why TP Zones Are Important */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            Why TP Zones Are Important for Investors
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="h-full text-center hover:shadow-xl group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 transition-all"
                  >
                    <div className="text-primary text-2xl">
                      {benefit.icon}
                    </div>
                  </motion.div>
                  <h4 className="text-lg font-bold text-secondary mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main TP Zones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            Main TP Zones in Dholera SIR
          </h3>

          <div className="space-y-8">
            {tpZoneGroups.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
              <div className="bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl overflow-hidden rounded-xl border border-primary/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Zone info */}
                  <div className="lg:w-1/3 p-8 bg-primary/5 flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-bold mb-4 self-start">
                      <FaStar />
                      <span>{zone.priority} Priority</span>
                    </div>
                    <h4 className="text-3xl font-bold text-secondary mb-2">{zone.range}</h4>
                    <p className="text-lg font-semibold text-primary mb-4">{zone.status}</p>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:w-2/3 p-8">
                    <p className="text-muted leading-relaxed mb-6">{zone.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      {zone.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 px-3 py-1.5 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-secondary font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - (index * 20)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TP Zone Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card variant="elevated" className="text-white overflow-hidden">
            <div className="relative aspect-video flex flex-col items-center justify-center p-8 text-center">
              {/* Blurred background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url("/dholera/map.webp")`,
                  filter: 'blur(8px)',
                  transform: 'scale(1.1)'
                }}
              />
              
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-primary/80" />
              
              {/* Content */}
              <div className="relative z-10">
                <FaMap className="text-6xl mb-6 drop-shadow-lg" />
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md">Dholera SIR TP Zones – Complete Master Plan Map</h3>
                <p className="text-lg mb-6 drop-shadow-md">High-quality interactive TP zone map coming soon</p>
                <Button 
                  variant="white" 
                  onClick={() => setOpenModal(true)}
                  className="rounded-full px-8 py-4 font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="flex items-center">
                    <FaDownload className="mr-2" />
                    Request TP Zone Information
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Which TP Zone Is Best */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-secondary mb-6">Which TP Zone Is Best for You?</h3>
              <p className="text-lg text-muted mb-8">4SureFunds guides you based on:</p>
              
              <div className="flex flex-wrap justify-center items-stretch gap-4 mb-8">
                {recommendationFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-secondary font-semibold text-sm text-left">{factor}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                <p className="text-2xl font-bold mb-4">Our Recommendation</p>
                <p className="text-lg">Investing in TP-approved plots offers maximum safety + long-term value</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TPZonesSection;


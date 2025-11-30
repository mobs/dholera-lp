'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaIndustry, FaHome, FaRocket, FaTruck, FaPlug, FaBolt } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const FutureReadySection = ({ setOpenModal }) => {
  const features = [
    {
      category: 'Smart & Connected Infrastructure',
      icon: <FaNetworkWired className="text-4xl" />,
      items: [
        { icon: <FaRocket />, text: '10-lane expressway connectivity' },
        { icon: <FaTruck />, text: 'Metro & freight corridor integration' },
        { icon: <FaTruck />, text: 'Dedicated logistic hubs' }
      ]
    },
    {
      category: 'Industrial Ecosystem for Next-Gen Businesses',
      icon: <FaIndustry className="text-4xl" />,
      items: [
        { icon: <FaBolt />, text: 'EV, renewable energy, electronics, and defence-ready zones' },
        { icon: <FaPlug />, text: 'Plug-and-play industrial infrastructure' },
        { icon: <FaIndustry />, text: 'Large-scale industrial parks & manufacturing clusters' }
      ]
    },
    {
      category: 'Residential & Commercial Zones for Future Living',
      icon: <FaHome className="text-4xl" />,
      items: [
        { icon: <FaHome />, text: 'Planned residential townships' },
        { icon: <FaNetworkWired />, text: 'Commercial hubs for retail & office setups' },
        { icon: <FaRocket />, text: 'Lifestyle amenities planned for future populations' }
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-bgGray via-white to-quaternary/20 overflow-hidden">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />

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
            <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
              Infrastructure Pillars
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            What Makes Dholera <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Future-Ready?
            </span>
          </h2>
          
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-8">
            Core infrastructure pillars positioning Dholera as a <span className="text-secondary font-bold">next-decade investment hotspot</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              variant="secondary" 
              onClick={() => setOpenModal(true)}
              className="rounded-full px-6 py-3 text-sm font-semibold shadow-lg"
            >
              Get Expert Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">
                {/* Hover glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                
                {/* Card */}
                <div className="relative bg-white hover:bg-gradient-to-br hover:from-white hover:to-tertiary/20 overflow-hidden rounded-2xl p-8 border-2 border-gray-100 group-hover:border-primary/30 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Icon Section with number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Large number */}
                        <div className="absolute -top-4 -left-4 text-8xl font-bold text-primary/5">{index + 1}</div>
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/30"
                        >
                          <div className="text-primary text-4xl">
                            {feature.icon}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors">
                        {feature.category}
                      </h3>

                      <div className="flex flex-wrap justify-center items-stretch gap-4">
                        {feature.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                            className="flex items-start space-x-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl hover:from-primary/10 hover:to-accent/10 transition-colors border border-primary/10 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary text-lg shadow-sm">
                              {item.icon}
                            </div>
                            <p className="text-secondary font-semibold text-sm leading-snug pt-2">
                              {item.text}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative gradient line */}
                  <div className="mt-8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-1.5 bg-gradient-to-r from-primary via-accent to-transparent rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
            <div className="flex flex-wrap justify-center items-stretch gap-6 text-center">
              <div className="w-full md:w-[calc(33.333%-1rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                >
                  920 km²
                </motion.div>
                <p className="text-muted text-sm font-medium">Total Development Area</p>
              </div>
              <div className="w-full md:w-[calc(33.333%-1rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                >
                  22 TP
                </motion.div>
                <p className="text-muted text-sm font-medium">Town Planning Schemes</p>
              </div>
              <div className="w-full md:w-[calc(33.333%-1rem)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                >
                  2 Million
                </motion.div>
                <p className="text-muted text-sm font-medium">Expected Population by 2040</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureReadySection;


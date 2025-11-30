'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaIndustry, FaStore, FaMapMarkedAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const InvestmentOptionsSection = ({ setOpenModal }) => {
  const options = [
    {
      icon: <FaHome />,
      title: 'Residential Plots',
      description: 'Ideal for long-term investors aiming for high appreciation',
      features: [
        'TP-approved land',
        'Clear titles & documentation',
        'Planned township zones',
        'High long-term appreciation',
        'Family living potential'
      ],
      idealFor: 'Long-term wealth building & future housing',
      timeline: '5-10 years ROI',
      badge: 'Most Popular'
    },
    {
      icon: <FaIndustry />,
      title: 'Industrial Plots',
      description: 'High demand from manufacturing units and logistic operations',
      features: [
        'Plug-and-play infrastructure',
        'Industrial zone proximity',
        'Logistic corridor access',
        'Government incentives',
        'Ready utilities'
      ],
      idealFor: 'Business setup & manufacturing',
      timeline: '3-7 years ROI',
      badge: 'High Demand'
    },
    {
      icon: <FaStore />,
      title: 'Commercial Land',
      description: 'Suitable for retail, offices, warehouses, and hospitality setups',
      features: [
        'High-traffic locations',
        'Mixed-use zones',
        'Retail & office potential',
        'Hospitality opportunities',
        'Strong rental yield'
      ],
      idealFor: 'Business ventures & rental income',
      timeline: '4-8 years ROI',
      badge: 'Premium'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Budget-Friendly Outskirt Land',
      description: 'Great option for entry-level investors planning 5–10 year wealth growth',
      features: [
        'Low entry cost',
        'Future development zones',
        'Maximum appreciation potential',
        'Flexible payment plans',
        'Early-stage advantage'
      ],
      idealFor: 'Entry-level & long-term investors',
      timeline: '7-15 years ROI',
      badge: 'Best Value'
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-bgGray overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%23000000'/%3E%3C/svg%3E")`
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
              Investment Opportunities
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Investment Options in <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dholera
            </span>
          </h2>
          
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed mb-6">
            Curated by <span className="text-secondary font-semibold">4SureFunds</span> – Choose the perfect investment option based on your goals and budget
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
              Get Investment Options
            </Button>
          </motion.div>
        </motion.div>

        {/* Investment Options Flex Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full lg:w-[calc(50%-12px)]"
            >
              <div className="h-full bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl group overflow-hidden rounded-xl p-6 border border-primary/10 transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                    {option.badge}
                  </span>
                </div>

                {/* Header with icon */}
                <div className="relative mb-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl"
                    >
                      {option.icon}
                    </motion.div>
                    <div className="flex-grow pt-2">
                      <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-primary text-xs" />
                      </div>
                      <span className="text-secondary font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Info boxes */}
                <div className="flex flex-wrap justify-center items-stretch gap-4 mb-6">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 w-full sm:w-[calc(50%-0.5rem)]">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Ideal For</p>
                    <p className="text-sm font-bold text-secondary">{option.idealFor}</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 w-full sm:w-[calc(50%-0.5rem)]">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Expected Timeline</p>
                    <p className="text-sm font-bold text-secondary">{option.timeline}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  onClick={() => setOpenModal(true)}
                  className="w-full py-3 rounded-xl group/btn border-2"
                >
                  <span className="flex items-center justify-center text-secondary font-semibold">
                    Explore This Option
                    <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>

                {/* Decorative gradient line */}
                <div className="mt-6">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Not Sure Which Option Is Right for You?
              </h3>
              <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
                Our expert advisors will analyze your budget, goals, and timeline to recommend the perfect investment strategy in Dholera
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  onClick={() => setOpenModal(true)}
                  className="rounded-full px-8 py-4 font-semibold shadow-lg"
                >
                  Get Personalized Recommendations
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => setOpenModal(true)}
                  className="rounded-full px-8 py-4 font-semibold shadow-lg"
                >
                  Compare All Options
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-muted">
            <FaCheckCircle className="text-green-500 text-xl" />
            <p className="text-lg font-semibold">
              All investments verified and curated by 4SureFunds expert team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;


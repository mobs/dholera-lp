'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaCalculator, FaShieldAlt, FaHandshake, FaAward, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection = () => {
  const highlights = [
    {
      icon: FaCalculator,
      title: 'Financial Expertise',
      subtitle: '10+ Years of CA Background',
      description: 'Strategic investment analysis'
    },
    {
      icon: FaBalanceScale,
      title: 'Legal Excellence',
      subtitle: 'Qualified Legal Team',
      description: 'Complete compliance assurance'
    },
    {
      icon: FaAward,
      title: 'Proven Track Record',
      subtitle: 'Trusted Advisors',
      description: '1000+ successful investments'
    },
    {
      icon: FaChartLine,
      title: 'Strategic Approach',
      subtitle: 'Data-Driven Decisions',
      description: 'Maximized ROI for clients'
    }
  ];

  return (
    <section className="md:py-12 py-6 bg-white relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3" />
              
              {/* Image */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/image.webp"
                  alt="4SFS - Professional Financial Services"
                  fill
                  className="object-cover"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkgray/90 via-transparent to-transparent" />
                
                {/* Floating Achievement Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                          10+
                        </div>
                        <div className="text-xs text-muted uppercase tracking-wider">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                          1000+
                        </div>
                        <div className="text-xs text-muted uppercase tracking-wider">Satisfied Clients</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-secondary to-primary rounded-3xl opacity-20 blur-2xl" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About 4SFS</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-6 leading-[1.1]">
              Investment Advisors,
              <span className="block mt-3 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Not Just Agents
              </span>
            </h2>
            
            {/* Elegant divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mb-8" />
            
            {/* Content */}
            <div className="space-y-6 text-muted text-lg leading-relaxed mb-10">
              <p className="font-light">
                At 4SFS, we are more than just real estate agents—we are <span className="text-darkgray font-semibold">investment advisors</span> who understand the financial side of real estate. With a team of experienced investment consultants who have practiced as <span className="text-darkgray font-semibold">Chartered Accountants (CAs)</span> and have over 10 years of finance expertise, we bring a strategic approach to property investment and home loan solutions.
              </p>
              
              <p className="font-light">
                Our founder, a <span className="text-darkgray font-semibold">qualified lawyer</span>, transitioned from legal practice to focus on helping investors navigate the real estate market with confidence and financial security. This unique blend of legal, financial, and real estate expertise makes us different from traditional real estate agents.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-5 rounded-2xl border border-gray-200 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-primary text-xl" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-darkgray mb-1 text-base">{item.title}</h3>
                      <p className="text-sm text-primary font-medium mb-1">{item.subtitle}</p>
                      <p className="text-xs text-muted">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

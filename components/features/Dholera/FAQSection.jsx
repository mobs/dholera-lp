'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import Card from '@/components/ui/Card';

const FAQSection = ({ setOpenModal }) => {
  const faqs = [
    {
      title: 'Is Dholera a safe place to invest?',
      content: 'Yes. Dholera is a government-focused development region with structured zoning and long-term planning. It\'s being developed under the Delhi–Mumbai Industrial Corridor (DMIC) project with massive government backing, making it one of the safest long-term investment destinations in India.'
    },
    {
      title: 'Which zone should I invest in?',
      content: 'The ideal zone depends on your investment goal. For residential investments, TP zones 7-12 are excellent. For industrial purposes, TP zones 1-6 offer the best connectivity and infrastructure. For long-term appreciation with lower entry costs, TP zones 13 onwards are ideal. Our team at 4SureFunds analyzes your specific requirements and suggests the best locality accordingly.'
    },
    {
      title: 'How much should I invest initially?',
      content: 'Investments in Dholera start from budget-friendly entry options to premium township areas. Entry-level plots in outskirt zones can start as low as a few lakhs, while premium TP-approved plots in activation areas may require higher investment. We offer customized options based on your budget and goals.'
    },
    {
      title: 'What is the expected appreciation?',
      content: 'Early-stage developments in planned smart cities historically show strong long-term potential over 5–10 years. While exact appreciation depends on multiple factors like infrastructure completion, zone location, and market conditions, TP-approved plots in activation areas (TP 1-6) typically show faster appreciation due to higher development priority.'
    },
    {
      title: 'What documents are required to buy land in Dholera?',
      content: 'Basic requirements include: KYC documents (Aadhar, PAN), Agreement to Sale, Plot documents (7/12 extract, property card), Sale deed, and Registry paperwork. Our team at 4SureFunds handles all verification processes and ensures complete documentation support from start to finish.'
    },
    {
      title: 'Is TP-approved land safer than non-TP plots?',
      content: 'Absolutely yes. TP-approved land has clear planning approval from the Dholera Development Authority, legal verification, organized infrastructure development, and transparent zoning. This results in higher appreciation potential and zero risk of illegal or unapproved plotting. We strongly recommend investing only in TP-approved plots.'
    },
    {
      title: 'Can NRIs invest in Dholera?',
      content: 'Yes, NRIs can invest easily in Dholera through proper documentation and NRE/NRO accounts. We provide complete guidance for NRI investors including documentation support, remote verification processes, and legal compliance assistance. The investment process is straightforward with the right guidance.'
    },
    {
      title: 'What is the minimum budget required?',
      content: 'Entry-level plots start at flexible price points depending on zone and purpose. Budget-friendly outskirt land offers low entry costs (starting from ₹5-10 lakhs), while premium TP-approved plots in activation zones may range from ₹20 lakhs to several crores. We customize options to match your budget. Early-stage developments historically show strong potential over 5–10 years.'
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-bgGray to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Common Questions
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FAQs</span> – Dholera Investment <br className="hidden sm:block" /> Explained
          </h2>
          
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common questions about investing in Dholera Smart City
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card variant="elevated" className="bg-white p-8">
            <Accordion items={faqs} allowMultiple={false} />
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6">
              <FaQuestionCircle className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
              Our expert advisors are ready to answer all your queries about Dholera investment opportunities
            </p>
            <Button 
              variant="primary" 
              onClick={() => setOpenModal(true)}
              className="rounded-full px-8 py-4 font-semibold shadow-lg"
            >
              Ask Your Question
            </Button>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center items-stretch gap-6 text-center">
            <div className="w-full md:w-[calc(33.333%-1rem)] p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
              >
                500+
              </motion.div>
              <p className="text-muted font-medium">Questions Answered</p>
            </div>
            <div className="p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
              >
                24/7
              </motion.div>
              <p className="text-muted font-medium">Expert Support</p>
            </div>
            <div className="p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
              >
                100%
              </motion.div>
              <p className="text-muted font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;


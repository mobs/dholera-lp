'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaRoad, FaBolt, FaBuilding, FaCheckCircle, FaBell } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const LatestUpdatesSection = ({ setOpenModal }) => {
  const updates = [
    {
      icon: <FaPlane />,
      title: 'International Airport Development',
      description: 'Major progress in airport infrastructure with land allocation and initial construction phases underway',
      status: 'In Progress'
    },
    {
      icon: <FaRoad />,
      title: 'Expressway & Road Development',
      description: 'Ongoing development of 10-lane expressways and internal road networks connecting key zones',
      status: 'Active'
    },
    {
      icon: <FaBolt />,
      title: 'EV & Solar Companies Interest',
      description: 'Increasing industrial interest from electric vehicle manufacturers and renewable energy companies',
      status: 'Growing'
    },
    {
      icon: <FaBuilding />,
      title: 'Residential & Commercial Projects',
      description: 'New residential townships and commercial development activity in surrounding villages and TP zones',
      status: 'Expanding'
    }
  ];

  const groundPhotos = [
    {
      title: 'ABCD Building Complex',
      description: 'Administrative hub of Dholera SIR',
      image: '/dholera/abcd-building.webp'
    },
    {
      title: 'Expressway Construction',
      description: 'Multi-lane highway development',
      image: '/dholera/expressway.webp'
    },
    {
      title: 'Township Development',
      description: 'Planned residential zones',
      image: '/dholera/township.webp'
    },
    {
      title: 'Airport Site',
      description: 'International airport location',
      image: '/dholera/airport.webp'
    }
  ];

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />

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
            <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2">
              <FaBell className="animate-pulse" />
              <span>Live Updates</span>
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Latest <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dholera Updates</span>
          </h2>
          
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed">
            <span className="text-secondary font-semibold">4SureFunds advisors</span> conduct regular field visits, study official development updates, and track infrastructure progress
          </p>
        </motion.div>

        {/* Latest Developments Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)]"
            >
              <div className="h-full bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl group rounded-xl p-6 border border-primary/10 transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Icon and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl"
                    >
                      {update.icon}
                    </motion.div>
                    <span className="px-4 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                      {update.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-muted leading-relaxed flex-grow">
                    {update.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <div className="flex items-center space-x-2 text-sm text-muted">
                      <FaCheckCircle className="text-primary" />
                      <span>Verified by 4SureFunds Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Ground Photos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Real Ground Photos from 4SureFunds Site Visits
            </h3>
            <p className="text-lg text-muted">
              Authentic on-ground documentation from our expert team
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {groundPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="overflow-hidden group cursor-pointer hover:shadow-xl rounded-xl border border-primary/10 transition-all duration-300">
                  {/* Photo Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-secondary/80 to-accent/60 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
                      {/* <div className="text-white text-center p-4">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="font-semibold">{photo.title}</p>
                      </div> */}
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Description */}
                  <div className="p-4 bg-white/90 backdrop-blur-sm">
                    <p className="text-sm text-muted text-center">{photo.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Update Timeline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="bg-gradient-to-r from-primary via-secondary to-primary p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
              >
                <FaBell className="text-3xl" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Stay Updated with Real-Time Progress</h3>
              <p className="text-lg mb-6 opacity-90">
                Join our community to receive monthly updates, ground reports, and investment insights directly from Dholera
              </p>
              <Button 
                variant="white" 
                onClick={() => setOpenModal(true)}
                className="rounded-full px-8 py-4 font-semibold shadow-lg"
              >
                Get Expert Consultation
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            <div className="text-center w-full md:w-[calc(33.333%-1.34rem)]">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
                <FaCheckCircle className="text-primary text-3xl" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-4xl font-bold text-secondary mb-2"
              >
                50+
              </motion.div>
              <p className="text-muted font-medium">Site Visits Conducted</p>
            </div>
            <div className="text-center w-full md:w-[calc(33.333%-1.34rem)]">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
                <FaBuilding className="text-primary text-3xl" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                className="text-4xl font-bold text-secondary mb-2"
              >
                100+
              </motion.div>
              <p className="text-muted font-medium">Active Projects Tracked</p>
            </div>
            <div className="text-center w-full md:w-[calc(33.333%-1.34rem)]">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
                <FaRoad className="text-primary text-3xl" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-4xl font-bold text-secondary mb-2"
              >
                15km+
              </motion.div>
              <p className="text-muted font-medium">Roads Under Construction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;


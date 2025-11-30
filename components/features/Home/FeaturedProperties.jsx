'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight, FaRulerCombined, FaStar } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Apartments',
      subtitle: 'South Mumbai Residences',
      type: 'Residential',
      location: 'South Mumbai, Maharashtra',
      price: '₹2.5 Cr - 4.5 Cr',
      area: '1200 - 2000',
      unit: 'sq.ft',
      image: '/image.webp',
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Premium Office Spaces',
      subtitle: 'Business District',
      type: 'Commercial',
      location: 'BKC, Mumbai',
      price: '₹3.2 Cr - 5.8 Cr',
      area: '1500 - 2500',
      unit: 'sq.ft',
      image: '/image.webp',
      featured: false,
      rating: 4.8
    },
    {
      id: 3,
      title: 'Modern Villas',
      subtitle: 'Garden Estate',
      type: 'Residential',
      location: 'Pune, Maharashtra',
      price: '₹1.8 Cr - 3.2 Cr',
      area: '2500 - 3500',
      unit: 'sq.ft',
      image: '/image.webp',
      featured: true,
      rating: 5.0
    }
  ];

  return (
    <section className="md:py-12 py-6 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <FaStar className="text-secondary text-sm" />
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Featured Projects</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-6 leading-tight">
            Top Investment
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-light">
            Discover the most promising residential and commercial projects, 
            <span className="block mt-1">meticulously curated by our expert advisors</span>
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/properties/${property.id}`}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkgray via-darkgray/50 to-transparent opacity-60" />
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-lg">
                        {property.type}
                      </span>
                      {property.featured && (
                        <span className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center space-x-1">
                          <FaStar className="text-xs" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute bottom-6 left-6 flex items-center space-x-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="text-sm font-bold text-darkgray">{property.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Subtitle */}
                    <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-2">
                      {property.subtitle}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-darkgray mb-4 group-hover:text-primary transition-colors leading-tight">
                      {property.title}
                    </h3>
                    
                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-muted group-hover:text-darkgray transition-colors">
                        <FaMapMarkerAlt className="mr-3 text-secondary flex-shrink-0" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      
                      <div className="flex items-center text-muted group-hover:text-darkgray transition-colors">
                        <FaRulerCombined className="mr-3 text-secondary flex-shrink-0" />
                        <span className="text-sm">{property.area} {property.unit}</span>
                      </div>
                    </div>
                    
                    {/* Elegant divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted mb-1 uppercase tracking-wide">Starting from</div>
                        <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {property.price}
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -45 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow"
                      >
                        <FaArrowRight className="text-lg" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Elegant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="primary" className="rounded-full px-12 py-5 text-base font-semibold shadow-xl hover:shadow-2xl group">
            <span className="flex items-center">
              View All Projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
          </Button>
          
          {/* Subtext */}
          <p className="mt-6 text-sm text-muted">
            Explore over <span className="text-primary font-semibold">50,000+</span> verified properties across India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

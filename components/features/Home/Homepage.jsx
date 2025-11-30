'use client'
import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import FeaturedProperties from './FeaturedProperties'
import ServicesSection from './ServicesSection'
import WhyChooseUs from './WhyChooseUs'
import Separator from '@/components/ui/Separator'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <AboutSection />
      
      <Separator />
      
      <FeaturedProperties />
      
      <Separator />
      
      <ServicesSection />
      
      <Separator />
      
      <WhyChooseUs />
    </div>
  )
}

export default Homepage
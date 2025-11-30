'use client'
import React from 'react'
import HeroSection from './HeroSection'
import WhyDholeraSection from './WhyDholeraSection'
import FutureReadySection from './FutureReadySection'
import TPZonesSection from './TPZonesSection'
import LatestUpdatesSection from './LatestUpdatesSection'
import InvestmentOptionsSection from './InvestmentOptionsSection'
import WhyChoose4SFSection from './WhyChoose4SFSection'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import Separator from '@/components/ui/Separator'
import ModalComponent from '@/components/ui/Modal'

const DholeraPage = ({ openModal, setOpenModal }) => {
  return (
    <div className="min-h-screen bg-white">
      <section id="hero">
        <HeroSection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />
      
      <section id="why-dholera">
        <WhyDholeraSection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />
      
      <section id="future-ready">
        <FutureReadySection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />

      <section id="latest-updates">
        <LatestUpdatesSection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />
      
      <section id="tp-zones">
        <TPZonesSection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />
      
      <section id="investment-options">
        <InvestmentOptionsSection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />
      
      <section id="why-choose-us">
        <WhyChoose4SFSection setOpenModal={setOpenModal} />
      </section>
      
      <Separator />
      
      <section id="faqs">
        <FAQSection setOpenModal={setOpenModal} />
      </section>
      
      <section id="contact">
        <ContactSection setOpenModal={setOpenModal} />
      </section>

      {/* Modal Component */}
      <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default DholeraPage


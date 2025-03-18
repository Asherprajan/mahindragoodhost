"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import OverviewSection from "@/components/overview-section"
import PricingSection from "@/components/pricing-section"
import MasterPlanSection from "@/components/master-plan-section"
import FloorPlanSection from "@/components/floor-plan-section"
import AmenitiesSection from "@/components/amenities-section"
import GallerySection from "@/components/gallery-section"
import LocationSection from "@/components/location-section"
import VirtualTourSection from "@/components/virtual-tour-section"
import DeveloperSection from "@/components/developer-section"
import Footer from "@/components/footer"
import { ContactModal } from "@/components/ContactModal"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled) {
        setHasScrolled(true)
        setIsContactModalOpen(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const handleContactSubmit = (data: { name: string; phone: string }) => {
    console.log("Contact form submitted:", data)
    setIsContactModalOpen(false)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OverviewSection />
      <PricingSection />
      <MasterPlanSection />
      <FloorPlanSection />
      <AmenitiesSection />
      {/* <GallerySection /> */}
      <LocationSection />
      {/* <VirtualTourSection /> */}
      <DeveloperSection />
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
    </main>
  )
}

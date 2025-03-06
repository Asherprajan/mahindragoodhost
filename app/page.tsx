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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OverviewSection />
      <PricingSection />
      <MasterPlanSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <VirtualTourSection />
      <DeveloperSection />
      <Footer />
    </main>
  )
}


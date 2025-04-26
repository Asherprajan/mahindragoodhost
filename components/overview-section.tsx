"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/ContactModal"
import { useUnlock } from "@/context/UnlockContext"

export default function OverviewSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { isUnlocked, unlockContent } = useUnlock()

  const handleDownloadClick = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      downloadBrochure()
    }
  }

  const downloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "/goodhost.pdf"
    link.download = "goodhost.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="overview" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Mahindra Good Haven</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Located in Singasandra near the Basapura Lake, this thriving residential neighbourhood offers top-rated education, healthcare and great connectivity to all the city's hotspots. Flats at Mahindra Good Haven come with the promise of enriching the lives of its people by delivering a lifestyle in harmony with the natural ecosystem.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Residential units in Mahindra Good Haven promises a sustainable lifestyle with eco-friendly Flats that complement the life of its residents. With Net-Zero Energy Flats, we guarantee the perfect amalgamation of comfort, security, and luxury, so you can cozy up in your personal paradise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Land Area</h3>
              <p>2.16 Acres</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">No. of Units</h3>
              <p>120</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">No. of Towers</h3>
              <p>1</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Structure</h3>
              <p>G+24 Floors</p>
            </div>
          </div>

          <Button 
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 mt-12"
            onClick={handleDownloadClick}
          >
            <Download className="mr-2 h-4 w-4" /> Download Brochure
          </Button>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={(data) => {
          console.log(data)
          unlockContent()
          setIsContactModalOpen(false)
          downloadBrochure()
        }}
      />
    </section>
  )
}


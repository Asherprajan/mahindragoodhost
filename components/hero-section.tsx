"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ContactModal } from "./ContactModal"
import Link from "next/link"
import { useUnlock } from "@/context/UnlockContext"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { isUnlocked, unlockContent } = useUnlock()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! We'll contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const downloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "/goodhost.pdf"
    link.download = "goodhost.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleBrochureClick = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      downloadBrochure()
    }
  }

  const handleContactSubmit = (data: { name: string; phone: string }) => {
    console.log("Contact form submitted:", data)
    unlockContent()
    setIsContactModalOpen(false)
    downloadBrochure()
  }

  const handleBookSiteVisit = () => {
    setIsContactModalOpen(true)
  }

  return (
    <>
      <section id="home" className="pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="relative w-full h-[500px] md:h-[600px]">
          {/* Background Image */}
          <Image
            src="/banner.png"
            alt="Luxury Real Estate"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          {/* Animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-pulse absolute top-20 right-20 w-20 h-20 rounded-full bg-red-500/20"></div>
            <div className="animate-pulse delay-300 absolute bottom-40 right-40 w-32 h-32 rounded-full bg-yellow-500/20"></div>
            <div className="animate-pulse delay-700 absolute top-40 left-[30%] w-16 h-16 rounded-full bg-blue-500/20"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex flex-col md:flex-row h-full items-center">
              <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
                <div className="relative">
                  <span className="inline-block text-sm font-bold bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full mb-3 shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                    <span className="relative flex items-center z-10">
                      <span className="absolute -left-2 w-2 h-2 bg-white rounded-full animate-ping"></span>
                      NEW LAUNCH
                    </span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Mahindra Good Haven
                  <span className="block text-red-400">Luxury Redefined</span>
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-gray-200">Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra</p>
                <div className="flex flex-wrap gap-4 text-lg">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-red-500 transform hover:scale-105 transition-transform">
                    <span className="block font-semibold">Starting Price</span>
                    <span className="text-red-400 font-bold">₹2.30 Cr*</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-red-500 transform hover:scale-105 transition-transform">
                    <span className="block font-semibold">Size Range</span>
                    <span className="text-red-400 font-bold">1950 - 2400 Sq.Ft</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button 
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-6 hover:to-red-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-red-500/30"
                    onClick={handleBookSiteVisit}
                  >
                    Book Site Visit
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 transform hover:scale-105 transition-all"
                    onClick={handleBrochureClick}
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-8">
                {/* <Card className="w-full max-w-md mx-auto shadow-xl bg-white/95 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Register Your Interest</h2>
                    <p className="text-gray-600 mb-6">Be among the first to experience luxury living at Mahindra Good Host</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full"
                          rows={3}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all shadow-lg"
                      >
                        Register Now
                      </Button>
                    </form>
                  </CardContent>
                </Card> */}
              </div>
            </div>          
          </div>
        </div>
      </section>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
    </>
  )
}

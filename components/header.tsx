"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { FaWhatsapp,FaPhoneAlt } from "react-icons/fa";  
import { useUnlock } from "@/context/UnlockContext"
import { ContactModal } from "@/components/ContactModal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { isUnlocked, unlockContent } = useUnlock()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const downloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "/goodhost.pdf"
    link.download = "goodhost.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownload = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      downloadBrochure()
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/640px-Mahindra-Lifespaces.png?height=40&width=150"
                alt="Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-800 hover:text-gray-600 font-medium">
                Home
              </Link>
              <Link href="#pricing" className="text-gray-800 hover:text-gray-600 font-medium">
                Price
              </Link>
              <Link href="#master-plan" className="text-gray-800 hover:text-gray-600 font-medium">
                Site Plan
              </Link>
              <Link href="#amenities" className="text-gray-800 hover:text-gray-600 font-medium">
                Amenities
              </Link>
              <Link href="#location" className="text-gray-800 hover:text-gray-600 font-medium">
                Location
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Brochure
              </Button>
              <Button 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                onClick={() => window.open('https://wa.me/916363692124', '_blank')}
              >
                <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
              <Button 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                onClick={() => window.location.href = 'tel:6363692124'}
              >
                <FaPhoneAlt className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#pricing"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Price
              </Link>
              <Link
                href="#master-plan"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Site Plan
              </Link>
              <Link
                href="#amenities"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="#location"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Location
              </Link>
              <div className="flex flex-col space-y-3 pt-2">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 w-full" onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" /> Brochure
                </Button>
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 w-full">
                  WhatsApp
                </Button>
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

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
    </>
  )
}


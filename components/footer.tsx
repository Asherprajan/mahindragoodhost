import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/640px-Mahindra-Lifespaces.png"
                alt="Mahindra Good Host Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Ultra-Luxury 3, 3.5 & 4 BHK Apartments at Singasandra. Experience sustainable luxury living with Net-Zero Energy Flats.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/mahindralifespaces" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/MLifespaces" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/mahindralifespaces" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/mahindra-lifespaces" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#overview" className="text-gray-400 hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#master-plan" className="text-gray-400 hover:text-white transition-colors">
                  Master Plan
                </Link>
              </li>
              <li>
                <Link href="#floor-plan" className="text-gray-400 hover:text-white transition-colors">
                  Floor Plan
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-gray-400 hover:text-white transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-gray-400 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Singasandra, near Basapura Lake
                  <br />
                  Bangalore, Karnataka 560068
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <Link href="tel:+916363692124" className="text-gray-400 hover:text-white">
                  +91 6363 692 124
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <Link href="mailto:sales@mahindragoodhost.co.in" className="text-gray-400 hover:text-white">
                  sales@mahindragoodhost.co.in
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">RERA Details</h3>
            <p className="text-gray-400 mb-4">
              RERA Registration No: <span className="text-red-500 font-medium">PRM/KA/RERA/1251/310/PR/160425/007668</span>
              <br /><br />
              For more details visit the official RERA website
              <Link href="https://rera.karnataka.gov.in" className="text-red-500 hover:text-red-400 ml-1" target="_blank">
                rera.karnataka.gov.in
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mahindra Good Haven. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

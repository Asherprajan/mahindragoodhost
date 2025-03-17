"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/ContactModal"
import { useUnlock } from "@/context/UnlockContext"

export default function PricingSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { isUnlocked, unlockContent } = useUnlock()

  const pricingData = [
    { type: "3 BHK", area: "1950 Sq.Ft", size: "1950 Sq.Ft (Carpet Area)", price: "₹2.30 Cr*" },
    { type: "3.5 BHK", area: "2150 Sq.Ft", size: "2150 Sq.Ft (Carpet Area)", price: "₹2.60 Cr*" },
    { type: "4 BHK", area: "2450 Sq.Ft", size: "2450 Sq.Ft (Carpet Area)", price: "₹2.85 Cr*" },
  ]

  const downloadCostSheet = () => {
    const link = document.createElement("a")
    link.href = "/cost-sheet.pdf"
    link.download = "cost-sheet.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadClick = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      downloadCostSheet()
    }
  }

  const handleViewCostSheet = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      // Add logic to view cost sheet
      console.log("View cost sheet")
    }
  }

  return (
    <>
      <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-red-50 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-50 opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-red-500 font-semibold mb-2">INVESTMENT</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Premium Pricing</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">Discover exceptional value for your investment in luxury living</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
                <Table className="border-collapse">
                  <TableHeader className="bg-gradient-to-r from-red-500 to-red-600">
                    <TableRow>
                      <TableHead className="font-bold text-white">Type</TableHead>
                      <TableHead className="font-bold text-white">Size</TableHead>
                      <TableHead className="font-bold text-white">Carpet Area</TableHead>
                      <TableHead className="font-bold text-white">Price</TableHead>
                      <TableHead className="font-bold text-white"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingData.map((item, index) => (
                      <TableRow 
                        key={index} 
                        className="hover:bg-red-50 transition-colors group"
                      >
                        <TableCell className="font-medium">{item.type}</TableCell>
                        <TableCell>{item.area}</TableCell>
                        <TableCell>{item.size}</TableCell>
                        <TableCell className="font-bold text-red-500">{item.price}</TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transform group-hover:scale-105 transition-all"
                            onClick={handleViewCostSheet}
                          >
                            View Cost Sheet
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <Card className="shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-t-4 border-red-500">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Cost Details" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 bg-opacity-90 flex items-center justify-center p-6">
                    <h3 className="text-white text-xl font-bold text-center">Complete Costing Details</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">
                    Get detailed information about pricing, payment plans, and additional costs. Download our comprehensive cost sheet.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-300/30 transition-all"
                    onClick={handleDownloadClick}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Cost Sheet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={(data) => {
          console.log(data)
          unlockContent()
          setIsContactModalOpen(false)
          downloadCostSheet()
        }}
      />
    </>
  )
}


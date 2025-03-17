"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Download } from "lucide-react"
import { ContactModal } from "@/components/ContactModal"
import { useUnlock } from "@/context/UnlockContext"

export default function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState("3bhk")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [showFloorPlanDialog, setShowFloorPlanDialog] = useState(false)
  const { isUnlocked, unlockContent } = useUnlock()

  const downloadFloorPlan = () => {
    const link = document.createElement("a")
    link.href = "/floor-plan.pdf"
    link.download = "floor-plan.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewClick = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      setShowFloorPlanDialog(true)
    }
  }

  const handleDownloadClick = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      downloadFloorPlan()
    }
  }

  return (
    <>
      <section id="floor-plan" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Floor Plans</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
              <TabsTrigger value="3.5bhk">3.5 BHK</TabsTrigger>
              <TabsTrigger value="4bhk">4 BHK</TabsTrigger>
            </TabsList>

            <TabsContent value="3bhk">
              <FloorPlanCard
                title="3 BHK Premium"
                area="1950 Sq.Ft"
                bedrooms="3"
                bathrooms="3"
                description="Spacious 3 bedroom apartment with modern amenities, large living area, and lake view balcony. Perfect for families looking for comfort and luxury."
                onViewClick={handleViewClick}
                onDownloadClick={handleDownloadClick}
                isUnlocked={isUnlocked}
                showFloorPlanDialog={showFloorPlanDialog}
                setShowFloorPlanDialog={setShowFloorPlanDialog}
                imageSrc="/3bhk.png?height=400&width=500"
                floorPlanSrc="/3bhk.png?height=600&width=800"
              />
            </TabsContent>

            <TabsContent value="3.5bhk">
              <FloorPlanCard
                title="3 BHK + Study"
                area="2150 Sq.Ft"
                bedrooms="3"
                bathrooms="3"
                description="Luxurious 3 BHK with an additional study room, featuring large living and dining areas, modern kitchen, and multiple balconies with panoramic views."
                onViewClick={handleViewClick}
                onDownloadClick={handleDownloadClick}
                isUnlocked={isUnlocked}
                showFloorPlanDialog={showFloorPlanDialog}
                setShowFloorPlanDialog={setShowFloorPlanDialog}
                imageSrc="/3.5bhk.png?height=400&width=500"
                floorPlanSrc="/3.5bhk.png?height=600&width=800"
              />
            </TabsContent>

            <TabsContent value="4bhk">
              <FloorPlanCard
                title="4 BHK Luxury"
                area="2450 Sq.Ft"
                bedrooms="4"
                bathrooms="4"
                description="Premium 4 bedroom apartment with spacious rooms, modern kitchen, large balconies offering lake views, and high-end finishes throughout."
                onViewClick={handleViewClick}
                onDownloadClick={handleDownloadClick}
                isUnlocked={isUnlocked}
                showFloorPlanDialog={showFloorPlanDialog}
                setShowFloorPlanDialog={setShowFloorPlanDialog}
                imageSrc="/4bhk.png?height=400&width=500"
                floorPlanSrc="/4bhk.png?height=600&width=800"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={(data) => {
          console.log(data)
          unlockContent()
          setIsContactModalOpen(false)
          setShowFloorPlanDialog(true)
        }}
      />
    </>
  )
}

interface FloorPlanCardProps {
  title: string
  area: string
  bedrooms: string
  bathrooms: string
  description: string
  onViewClick: () => void
  onDownloadClick: () => void
  isUnlocked: boolean
  showFloorPlanDialog: boolean
  setShowFloorPlanDialog: (show: boolean) => void
  imageSrc: string
  floorPlanSrc: string
}

function FloorPlanCard({ 
  title, 
  area, 
  bedrooms, 
  bathrooms, 
  description, 
  onViewClick,
  onDownloadClick,
  isUnlocked,
  showFloorPlanDialog,
  setShowFloorPlanDialog,
  imageSrc,
  floorPlanSrc
}: FloorPlanCardProps) {
  return (
    <Card className="shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[300px] md:h-auto">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className={`object-cover ${!isUnlocked ? 'blur-sm' : ''}`} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <Dialog open={showFloorPlanDialog} onOpenChange={setShowFloorPlanDialog}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  onClick={onViewClick}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Floor Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative h-[600px] w-full">
                  <Image
                    src={floorPlanSrc}
                    alt={`${title} Floor Plan`}
                    fill
                    className={`object-contain ${!isUnlocked ? 'blur-sm' : ''}`}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-r pr-4">
              <p className="text-gray-500 text-sm">Area</p>
              <p className="font-semibold">{area}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Bedrooms</p>
              <p className="font-semibold">{bedrooms}</p>
            </div>
            <div className="border-r pr-4">
              <p className="text-gray-500 text-sm">Bathrooms</p>
              <p className="font-semibold">{bathrooms}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Balconies</p>
              <p className="font-semibold">2</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{description}</p>

          <div className="flex space-x-4">
            <Button 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              onClick={onDownloadClick}
            >
              <Download className="mr-2 h-4 w-4" /> Download Plan
            </Button>
            <Button variant="outline">Request Details</Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

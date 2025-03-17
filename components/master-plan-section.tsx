"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import { ContactModal } from "@/components/ContactModal"
import { useUnlock } from "@/context/UnlockContext"

export default function MasterPlanSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { isUnlocked } = useUnlock()

  const handleImageClick = () => {
    if (!isUnlocked) {
      setIsContactModalOpen(true)
    } else {
      setIsDialogOpen(true)
    }
  }

  return (
    <section id="master-plan" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Master Plan</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-12">
            <div className="relative h-[400px] w-full" onClick={handleImageClick}>
              <Image
                src="/master.png?height=400&width=800"
                alt="Master Plan"
                fill
                className={`object-cover ${!isUnlocked ? 'blur-sm' : ''}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-4">Project Master Plan</h3>
                <Button 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  onClick={handleImageClick}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Master Plan
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="site-plan" className="w-full">
            <TabsList className="grid w-full grid-cols-1 mb-8">
              <TabsTrigger value="site-plan">Site Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="site-plan" className="border rounded-lg p-6 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Total land area: 2.16 Acres</li>
                    <li>• Single tower with G + 24 Floors</li>
                    <li>• Total units: 120</li>
                    <li>• Lake view balconies</li>
                    <li>• World-class amenities</li>
                    <li>• Possession: 2027</li>
                    <li>• Located near Basapura Lake</li>
                    <li>• Close to Electronic City</li>
                  </ul>
                </div>
                <div 
                  className="relative h-[250px] rounded-lg overflow-hidden cursor-pointer" 
                  onClick={handleImageClick}
                >
                  <Image 
                    src="/master.png?height=250&width=400" 
                    alt="Site Plan" 
                    fill 
                    className={`object-cover ${!isUnlocked ? 'blur-sm' : ''}`} 
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-4xl">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/master.png?height=600&width=1000"
                  alt="Master Plan Full View"
                  fill
                  className="object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>

          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
            onSubmit={(data) => {
              console.log(data);
              setIsContactModalOpen(false);
            }}
          />
        </div>
      </div>
    </section>
  )
}

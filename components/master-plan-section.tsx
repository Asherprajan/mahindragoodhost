"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye } from "lucide-react"

export default function MasterPlanSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section id="master-plan" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Master Plan</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-12">
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Master Plan"
                fill
                className="object-cover filter blur-sm"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-4">Project Master Plan</h3>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                      <Eye className="mr-2 h-4 w-4" /> View Master Plan
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative h-[600px] w-full">
                      <Image
                        src="/placeholder.svg?height=600&width=1000"
                        alt="Master Plan Full View"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <Tabs defaultValue="site-plan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="site-plan">Site Plan</TabsTrigger>
              <TabsTrigger value="layout-plan">Layout Plan</TabsTrigger>
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
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=250&width=400" alt="Site Plan" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="layout-plan" className="border rounded-lg p-6 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=250&width=400" alt="Layout Plan" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Layout Details</h3>
                  <h3 className="text-xl font-bold mb-4">Layout Plan Details</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Tower A: 20 floors</li>
                    <li>• Tower B: 22 floors</li>
                    <li>• Tower C: 20 floors</li>
                    <li>• Tower D: 18 floors</li>
                    <li>• Tower E: 24 floors</li>
                    <li>• 4 units per floor</li>
                    <li>• 2 high-speed elevators per tower</li>
                    <li>• Basement parking: 2 levels</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function VirtualTourSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section id="virtual-tour" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Virtual Tour</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>

        <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden">
          <div className="relative h-[300px] md:h-[500px]">
            <Image src="/placeholder.svg?height=500&width=900" alt="Virtual Tour" fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                    <Play className="h-8 w-8" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <div className="relative h-[600px] w-full">
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <p className="text-white">Video player would be embedded here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4">Experience the Luxury</h3>
            <p className="text-gray-700">
              Take a virtual tour of our premium residences and experience the luxury firsthand. Explore the spacious
              interiors, premium finishes, and breathtaking views from the comfort of your home.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


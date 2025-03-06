"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Exterior View",
      category: "exterior",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Living Room",
      category: "interior",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Swimming Pool",
      category: "amenities",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Building Facade",
      category: "exterior",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Master Bedroom",
      category: "interior",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Fitness Center",
      category: "amenities",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Kitchen",
      category: "interior",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Garden Area",
      category: "amenities",
    },
  ]

  const filteredImages = activeTab === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeTab)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Gallery</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="exterior">Exterior</TabsTrigger>
            <TabsTrigger value="interior">Interior</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <Dialog
                  key={index}
                  onOpenChange={(open) => {
                    if (open) setSelectedImage(image.src)
                    else setSelectedImage(null)
                  }}
                >
                  <DialogTrigger asChild>
                    <div className="relative h-64 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="outline" className="opacity-0 hover:opacity-100 bg-white text-gray-800">
                          View
                        </Button>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    {selectedImage && (
                      <div className="relative h-[600px] w-full">
                        <Image
                          src={selectedImage || "/placeholder.svg"}
                          alt="Gallery Image"
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Building, Clock, Users, Leaf } from "lucide-react"

export default function DeveloperSection() {
  const credentials = [
    {
      icon: <Building className="h-8 w-8 text-red-500" />,
      title: "7+ Decades",
      description: "Legacy of Mahindra Group",
    },
    {
      icon: <Leaf className="h-8 w-8 text-red-500" />,
      title: "Green Buildings",
      description: "IGBC & GRIHA certified",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Since 1994",
      description: "Creating thoughtful spaces",
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Sustainable",
      description: "Eco-friendly developments",
    },
  ]

  return (
    <section id="developer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About the Developer</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                <Image src="/placeholder.svg?height=200&width=200" alt="Mahindra Lifespaces Logo" fill className="object-cover" />
              </div>
            </div>

            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Mahindra Lifespaces</h3>
              <p className="text-gray-700 mb-6">
                Mahindra Lifespaces is the real estate and infrastructure development arm of the Mahindra Group, one of India's leading and most respected business conglomerates with a legacy spanning over seven decades. Established in 1994, Mahindra Lifespaces has been at the forefront of creating thoughtfully designed, sustainable, and innovative living spaces that redefine urban lifestyles.
              </p>
              <p className="text-gray-700">
                With a strong focus on sustainability and eco-friendly developments, Mahindra Lifespaces has pioneered the concept of green buildings in India. The company has consistently integrated environment-friendly practices into its projects, earning IGBC (Indian Green Building Council) and GRIHA (Green Rating for Integrated Habitat Assessment) certifications. Its developments emphasize energy efficiency, water conservation, and waste management, setting new benchmarks in sustainable urbanization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{credential.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{credential.title}</h4>
                  <p className="text-gray-600">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


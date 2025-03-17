import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, School, ShoppingBag, Hospital, Train, Plane } from "lucide-react"

export default function LocationSection() {
  const nearbyFacilities = [
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      name: "Hosur Main Road",
      distance: "700 mt",
    },
    {
      icon: <Train className="h-5 w-5 text-red-500" />,
      name: "Nearest Metro",
      distance: "1.1 Km",
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      name: "HSR Layout",
      distance: "6 km",
    },
    {
      icon: <Plane className="h-5 w-5 text-red-500" />,
      name: "Airport",
      distance: "47 Km",
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      name: "Koramangala",
      distance: "8.5 Km",
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      name: "Electronic City",
      distance: "4.5 Km",
    },
  ]

  return (
    <section id="location" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-20 left-0 w-40 h-40 rounded-full bg-red-50 opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-50 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-red-500 font-semibold mb-2">CONNECTIVITY</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Strategic Location</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">Perfectly positioned for convenience and accessibility</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <Image src="/map.png?height=400&width=600" alt="Location Map" fill className="object-cover" />
            <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md animate-pulse">
              <MapPin className="h-6 w-6 text-red-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="font-bold text-lg">Mahindra Good Host</h3>
              <p>Singasandra, Off Hosur Road, South Bangalore</p>
            </div>
          </div>

          <Card className="shadow-xl border-t-4 border-red-500 transform hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Prime Connectivity</h3>
              <p className="text-gray-700 mb-6">
                Located in Singasandra near the Basapura Lake, this thriving residential neighbourhood offers excellent connectivity to key areas of Bangalore. With easy access to Hosur Road and Electronic City, residents enjoy seamless connectivity while maintaining a serene living environment.
              </p>

              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <span className="w-6 h-1 bg-red-500 mr-2"></span>
                Key Distances
              </h4>
              <ul className="space-y-4">
                {nearbyFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <div className="mr-3 p-2 bg-red-100 rounded-full">{facility.icon}</div>
                    <div className="flex-1">
                      <span className="font-medium">{facility.name}</span>
                    </div>
                    <div className="text-red-500 font-bold">{facility.distance}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  Address
                </h4>
                <p className="text-gray-700">
                  Mahindra Good Host<br />
                  Singasandra, Off Hosur Road<br />
                  South Bangalore
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


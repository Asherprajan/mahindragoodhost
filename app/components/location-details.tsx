import { FC } from 'react'
import { MapPin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface Landmark {
  name: string
  distance: string
  category: string
}

const landmarks: Landmark[] = [
  // Hospitals
  { name: "Fortis Hospital", distance: "7 km", category: "Hospitals" },
  { name: "Apollo Hospital", distance: "7.5 km", category: "Hospitals" },
  { name: "St. John's Hospital", distance: "8.5 km", category: "Hospitals" },
  { name: "Manipal Hospital", distance: "9 km", category: "Hospitals" },
  { name: "Jayadeva Hospital", distance: "10.8 km", category: "Hospitals" },
  
  // Malls
  { name: "Royal Meenakshi Mall", distance: "6 km", category: "Malls" },
  { name: "Vega City Mall", distance: "8.5 km", category: "Malls" },
  { name: "Nexus Mall", distance: "9 km", category: "Malls" },
  
  // Landmarks
  { name: "Begur Lake", distance: "2.5 km", category: "Landmarks" },
  { name: "ISKCON Temple", distance: "15 km", category: "Landmarks" },
  { name: "Bannerghatta National Park", distance: "20 km", category: "Landmarks" },
  { name: "Art of Living", distance: "24.5 km", category: "Landmarks" },
  
  // Educational Institutions
  { name: "PES University", distance: "17 km", category: "Educational Institutions" },
  { name: "BGS National Public School", distance: "6.5 km", category: "Educational Institutions" },
  { name: "Christ University", distance: "7.5 km", category: "Educational Institutions" },
  { name: "Delhi Public School", distance: "7 km", category: "Educational Institutions" },
  { name: "IIM Bangalore", distance: "10 km", category: "Educational Institutions" },
  { name: "Loyola College", distance: "9 km", category: "Educational Institutions" },
  
  // Metro Stations
  { name: "Hosa Road Metro Station", distance: "1.5 km", category: "Upcoming Metro Stations" },
  { name: "Singasandra Metro Station", distance: "2 km", category: "Upcoming Metro Stations" },
]

const LocationDetails: FC = () => {
  const categories = Array.from(new Set(landmarks.map(l => l.category)))

  return (
    <section id="nearby-landmarks" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nearby Landmarks</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Mahindra Good Haven is strategically located with convenient access to essential amenities, 
            educational institutions, healthcare facilities, and entertainment options.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {landmarks
                      .filter(l => l.category === category)
                      .map((landmark, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium">{landmark.name}</span>
                          <span className="text-gray-600 bg-gray-50 px-2 py-1 rounded-full text-sm">{landmark.distance}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationDetails
import { CircleDot as Basketball, Activity as Run, Gamepad, Waves as Pool, Dumbbell, CircleDot as Tennis, ShieldCheck, Car, Trees, Utensils, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <Basketball className="h-10 w-10 text-red-500" />,
      title: "Basketball Court",
      description: "Professional basketball court for sports enthusiasts",
    },
    {
      icon: <Run className="h-10 w-10 text-red-500" />,
      title: "Jogging Track",
      description: "Well-designed track for your daily fitness routine",
    },
    {
      icon: <Gamepad className="h-10 w-10 text-red-500" />,
      title: "Billiards Table",
      description: "Indoor gaming area with professional billiards setup",
    },
    {
      icon: <Pool className="h-10 w-10 text-red-500" />,
      title: "Swimming Pools",
      description: "Temperature controlled pool with kids' pool area",
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-red-500" />,
      title: "Gymnasium",
      description: "State-of-the-art gym with modern equipment",
    },
    {
      icon: <Tennis className="h-10 w-10 text-red-500" />,
      title: "Tennis Court",
      description: "Professional tennis court for sports lovers",
    },
    {
      icon: <Trees className="h-10 w-10 text-red-500" />,
      title: "Landscaped Gardens",
      description: "Beautiful green spaces for relaxation",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance",
    },
    {
      icon: <Car className="h-10 w-10 text-red-500" />,
      title: "Parking",
      description: "Ample parking space with visitor parking",
    },
    {
      icon: <Utensils className="h-10 w-10 text-red-500" />,
      title: "Clubhouse",
      description: "Modern clubhouse with multiple facilities",
    },
  ]

  return (
    <section id="amenities" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-red-100"></div>
        <div className="absolute top-1/4 right-0 w-60 h-60 rounded-full bg-yellow-50"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 font-semibold mb-2">LIFESTYLE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">World-Class Amenities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Experience a lifestyle beyond compare with our premium amenities designed for your comfort and enjoyment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card 
              key={index} 
              className="shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-red-200 overflow-hidden group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300 transform group-hover:scale-110">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


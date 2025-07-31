import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const roomTypes = [
  {
    type: "Premium Single",
    description: "Experience luxury and privacy in our premium single rooms. These rooms are more spacious and offer upgraded amenities.",
    furnishings: ["King Size Bed & Mattress", "Large Wardrobe", "Ergonomic Study Table & Chair", "Silent Air Conditioning", "Mini Fridge"],
    image: {
      src: "/premium-single.jpg",
      hint: "luxury student room"
    },
    availability: "available",
  },
  {
    type: "Single Occupancy",
    description: "Enjoy complete privacy and personal space in our cozy single rooms. Perfect for students who need quiet focus.",
    furnishings: ["Bed & Mattress", "Wardrobe", "Study Table & Chair", "Air Conditioning"],
    image: {
      src: "/single-occupancy.jpg",
      hint: "student room private"
    },
    availability: "limited",
  },
  {
    type: "Double Occupancy",
    description: "Share a spacious room with a fellow student. A great way to make new friends and collaborate.",
    furnishings: ["2 Beds & Mattresses", "2 Wardrobes", "2 Study Tables & Chairs", "Air Conditioning"],
    image: {
      src: "/double-occupancy.jpg",
      hint: "modern dorm room"
    },
    availability: "available",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-4xl font-bold text-center sm:text-5xl text-gray-800">
          Find Your Perfect Space
        </h2>
        <p className="mt-6 text-center text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a variety of room types to suit your needs and budget. Each room is designed for comfort and equipped with modern furnishings.
        </p>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomTypes.map((room) => (
            <Card key={room.type} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg flex flex-col bg-white">
              <CardHeader className="p-0">
                <Image
                  src={room.image.src}
                  alt={`A ${room.type} room at Asilo Girls PG`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={room.image.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl text-gray-800">{room.type}</CardTitle>
                  <Badge 
                    className={`whitespace-nowrap ${room.availability === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                  >
                    {room.availability === 'available' ? 'Available' : 'Limited Seats'}
                  </Badge>
                </div>
                <p className="mt-3 text-gray-600 flex-grow">{room.description}</p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-gray-700">Included Furnishings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.furnishings.map((item) => (
                      <Badge key={item} variant="outline" className="text-gray-600 border-gray-300">{item}</Badge>
                    ))}
                  </div>
                </div>
                <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all duration-300">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

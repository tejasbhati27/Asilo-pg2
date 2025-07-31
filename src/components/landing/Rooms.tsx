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
      src: "/premium-single.jpeg",
      hint: "luxury student room"
    },
    availability: "available",
  },
  {
    type: "Single Occupancy",
    description: "Enjoy complete privacy and personal space in our cozy single rooms. Perfect for students who need quiet focus.",
    furnishings: ["Bed & Mattress", "Wardrobe", "Study Table & Chair", "Air Conditioning"],
    image: {
      src: "/single-occupancy.jpeg",
      hint: "student room private"
    },
    availability: "limited",
  },
  {
    type: "Double Occupancy",
    description: "Share a spacious room with a fellow student. A great way to make new friends and collaborate.",
    furnishings: ["2 Beds & Mattresses", "2 Wardrobes", "2 Study Tables & Chairs", "Air Conditioning"],
    image: {
      src: "/double-occupancy.jpeg",
      hint: "modern dorm room"
    },
    availability: "available",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center text-gray-800">
          Find Your Perfect Space
        </h2>
        <p className="mt-4 text-center text-lg font-body text-gray-600 max-w-2xl mx-auto">
          We offer a variety of room types to suit your needs and budget. Each room is designed for comfort and equipped with modern furnishings.
        </p>
        <div className="mt-12 grid gap-8">
          {roomTypes.map((room) => (
            <Card key={room.type} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col bg-white">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={room.image.src}
                    alt={`A ${room.type} room at Asilo Girls PG`}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                    data-ai-hint={room.image.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-xl text-gray-800">{room.type}</CardTitle>
                  <Badge 
                    className={`whitespace-nowrap ${room.availability === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                  >
                    {room.availability === 'available' ? 'Available' : 'Limited Seats'}
                  </Badge>
                </div>
                <p className="mt-2 text-gray-600 font-body flex-grow">{room.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-gray-700 font-body">Included Furnishings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.furnishings.map((item) => (
                      <Badge key={item} variant="outline" className="text-gray-600 border-gray-300">{item}</Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="mt-6 w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-md transition-all duration-300">
                  <a href="#contact-info">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
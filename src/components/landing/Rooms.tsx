import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const roomTypes = [
  {
    type: "Single Occupancy",
    description: "Enjoy complete privacy and personal space in our cozy single rooms. Perfect for students who need quiet focus.",
    furnishings: ["Bed & Mattress", "Wardrobe", "Study Table & Chair", "Air Conditioning"],
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "student room private"
    }
  },
  {
    type: "Double Occupancy",
    description: "Share a spacious room with a fellow student. A great way to make new friends and collaborate.",
    furnishings: ["2 Beds & Mattresses", "2 Wardrobes", "2 Study Tables & Chairs", "Air Conditioning"],
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "student room shared"
    }
  },
  {
    type: "Triple Occupancy",
    description: "Our most budget-friendly option, perfect for those who enjoy a lively and communal atmosphere.",
    furnishings: ["3 Beds & Mattresses", "3 Wardrobes", "Shared Study Space", "Air Conditioning"],
     image: {
      src: "https://placehold.co/600x400.png",
      hint: "student room group"
    }
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          Find Your Perfect Space
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          We offer a variety of room types to suit your needs and budget. Each room is designed for comfort and equipped with essential furnishings.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <Card key={room.type} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={room.image.src}
                  alt={`A ${room.type} room at Asilo Girls PG`}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                  data-ai-hint={room.image.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{room.type}</CardTitle>
                <p className="mt-2 text-muted-foreground">{room.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Included Furnishings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.furnishings.map((item) => (
                      <Badge key={item} variant="outline">{item}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BedDouble, School, ShieldCheck, UtensilsCrossed, WashingMachine, Wifi, AirVent, Snowflake, Wind, Droplets, Tv, Refrigerator, CookingPot } from "lucide-react";

const amenities = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "24/7 CCTV Security",
    description: "Your safety is our priority. We provide round-the-clock surveillance."
  },
  {
    icon: <BedDouble className="w-8 h-8 text-primary" />,
    title: "Fully Furnished Rooms",
    description: "Comfortable and ready-to-live-in rooms with all essential furniture."
  },
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: "High-Speed Wi-Fi",
    description: "Stay connected with our reliable and fast internet service."
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    title: "Homely Hygienic Food",
    description: "Delicious and healthy meals, just like home."
  },
  {
    icon: <WashingMachine className="w-8 h-8 text-primary" />,
    title: "Washing Machine",
    description: "Convenient laundry facilities available on-site."
  },
  {
    icon: <School className="w-8 h-8 text-primary" />,
    title: "Proximity to Colleges",
     description: "Located near major educational institutions for an easy commute."
  },
  {
    icon: <AirVent className="w-8 h-8 text-primary" />,
    title: "AC/Non-AC Rooms",
    description: "Choose between air-conditioned and non-air-conditioned rooms."
  },
  {
    icon: <Wind className="w-8 h-8 text-primary" />,
    title: "Maid Service",
    description: "Regular cleaning of floors and washrooms for a tidy living space."
  },
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "RO Water",
    description: "Access to purified drinking water at all times."
  },
  {
    icon: <Refrigerator className="w-8 h-8 text-primary" />,
    title: "Fridge",
    description: "Shared refrigerators available for storing your food and beverages."
  },
  {
    icon: <CookingPot className="w-8 h-8 text-primary" />,
    title: "Equipped Kitchen",
    description: "A kitchen space with basic equipment for your cooking needs."
  }
];


export default function Amenities() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl text-gray-800">
            Comfort & Convenience Guaranteed
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need for a seamless and comfortable student life, so you can focus on what truly matters.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => (
             <Card key={amenity.title} className="text-left flex items-start p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 mr-4">
                {amenity.icon}
              </div>
              <div className="flex-grow">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {amenity.title}
                </CardTitle>
                <CardContent className="p-0 mt-1">
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

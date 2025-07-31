import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, School, ShieldCheck, UtensilsCrossed, WashingMachine, Wifi } from "lucide-react";

const amenities = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "24/7 Security",
  },
  {
    icon: <BedDouble className="w-8 h-8 text-primary" />,
    title: "Fully Furnished Rooms",
  },
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: "High-Speed Wi-Fi",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    title: "Homely Meals",
  },
  {
    icon: <WashingMachine className="w-8 h-8 text-primary" />,
    title: "Laundry Service",
  },
  {
    icon: <School className="w-8 h-8 text-primary" />,
    title: "Proximity to Colleges",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          Comfort & Convenience Guaranteed
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide everything you need for a seamless and comfortable student life, so you can focus on what truly matters.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity) => (
            <Card key={amenity.title} className="text-center flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                {amenity.icon}
              </CardHeader>
              <CardTitle className="mt-4 text-base font-medium">
                {amenity.title}
              </CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

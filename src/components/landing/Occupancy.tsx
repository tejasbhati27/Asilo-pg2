"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const occupancyTypes = [
    {
        image: "/single-occupancy.jpeg",
        title: "Single Occupancy",
        amenities: [
            "Private Room",
            "Attached Bathroom",
            "Air Conditioner",
        ],
    },
    {
        image: "/double-occupancy.jpeg",
        title: "Double Occupancy",
        amenities: [
          "Shared Room",
          "Attached Bathroom",
          "Air Conditioner",
          "Shared Balcony",
        ],
    },
    {
        image: "/premium-single.jpeg",
        title: "Premium Single Occupancy",
        amenities: [
          "Private Room",
          "Attached Bathroom",
          "Air Conditioner",
          "Personal Balcony",
        ],
    },
];

export default function Occupancy() {
  return (
    <section id="occupancy" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-gray-800">
            Our Rooms
          </h2>
          <p className="mt-4 text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of comfortable and well-equipped rooms to suit your needs.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {occupancyTypes.map((occupancy, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-1 h-full"
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  viewport={{}}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="relative h-64 w-full">
                        <Image
                          src={occupancy.image}
                          alt={occupancy.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold font-headline text-gray-800 mb-2">
                          {occupancy.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 font-body mb-4 flex-grow">
                            {occupancy.amenities.map((amenity, i) => (
                                <li key={i}>{amenity}</li>
                            ))}
                        </ul>
                        <Button className="w-full bg-accent hover:bg-accent/90 mt-auto">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] sm:left-[-40px] top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all" />
          <CarouselNext className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all" />
        </Carousel>
      </div>
    </section>
  );
}

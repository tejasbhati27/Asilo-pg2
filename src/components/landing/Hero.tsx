import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A serene and modern living space at Asilo"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Your Stylish Sanctuary in Greater Noida
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-3xl mx-auto">
            Experience the perfect blend of comfort, community, and convenience. Asilo is more than a PG—it's your home away from home, designed for the modern student.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" asChild className="bg-white text-gray-900 font-bold shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              <a href="#rooms">
                Explore Rooms
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="#location">
                <MapPin className="mr-2 h-5 w-5" />
                View on Map
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="#contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

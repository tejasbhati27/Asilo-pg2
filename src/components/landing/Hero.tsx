import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Exterior of Asilo Girls PG"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="student housing exterior"
        priority
      />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Home Away From Home in Greater Noida
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Discover a safe, comfortable, and welcoming environment designed for female students to thrive. Asilo Girls PG is more than just a place to stay—it's a community.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <a href="#contact">Book a Visit</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

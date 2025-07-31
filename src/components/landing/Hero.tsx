import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <Image
        src="https://lh5.googleusercontent.com/p/AF1QipN9s-Bx-x1L6G9Y_4Q2E_jDFg_rI8-M2J_i_k-Z=w1080-h607-p-k-no"
        alt="Exterior of Asilo Girls PG"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-4xl px-4 text-white">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Your Home Away From Home in Greater Noida
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-2xl mx-auto">
            Discover a safe, comfortable, and welcoming environment designed for female students to thrive. Asilo Girls PG is more than just a place to stay—it's a community.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-accent text-white font-bold">
              <a href="#contact">
                Book a Visit
                <MoveRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white font-bold">
              <a href="https://wa.me/918766360226" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Connect
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight, MapPin } from "lucide-react";

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M16.75 13.96c.25.13.43.2.5.28.07.08.1.18.1.28.02.1-.04.28-.05.38-.07.1-.33.24-.65.42-.4.22-.85.33-1.35.33-.55 0-1.03-.08-1.46-.23-.42-.15-.82-.38-1.2-.68-.38-.3-.72-.65-1.02-1.05-.3-.4-.52-.82-.68-1.25-.15-.43-.23-.9-.23-1.4s.08-1 .23-1.4c.15-.42.38-.82.68-1.2.3-.38.65-.72 1.05-1.02.4-.3.82-.52 1.25-.68.43-.15.9-.23 1.4-.23.55 0 1.03.08 1.45.23.42.15.82.38 1.2.68.38.3.72.65 1.02 1.05.3.4.52.82.68 1.25.15.43.23.9.23 1.4s-.08.98-.23 1.4m-10.7-2.4c-.28 0-.54.04-.78.13-.24.08-.47.2-.68.35-.2.15-.38.33-.52.53s-.25.42-.32.65c-.07.23-.1.48-.1.72s.03.5.1.72c.07.23.18.44.32.65s.32.4.52.53c.2.15.44.27.68.35.24.09.5.13.78.13.42 0 .82-.08 1.2-.23.38-.15.72-.38 1.02-.68.3-.3.52-.65.68-1.05.15-.4.23-.85.23-1.35s-.08-.95-.23-1.4c-.15-.42-.38-.82-.68-1.2-.3-.38-.62-.72-1.02-1.02s-.8-.53-1.2-.68c-.38-.15-.78-.23-1.2-.23m8.6 6.95c.5-.22.9-.53 1.25-.92.35-.4.6-.85.78-1.35.18-.5.28-1.02.28-1.55 0-.58-.1-1.13-.3-1.65-.2-.52-.5-1-.9-1.42-.4-.42-.88-.75-1.4-.98-.55-.23-1.12-.35-1.72-.35-.6 0-1.18.12-1.72.35-.55.23-1.02.56-1.4.98-.4.42-.7.9-.9 1.42-.2.52-.3 1.07-.3 1.65 0 .53.1 1.05.28 1.55.18.5.42.95.78 1.35.35.4.75.72 1.25.92.5.2.1.33.1.55.33s1.1.25 1.65.25c.55 0 1.12-.08 1.65-.25m-3.1-13.8q.4 0 .78.05.38.05.72.15.7.22 1.3.58.58.35 1.05.82.48.48.82 1.05.35.6.58 1.3.1.35.15.72.05.38.05.78 0 .4-.05.78-.05.38-.15.72-.22.7-.58 1.3-.35.58-.82 1.05-.48.48-1.05.82-.6.35-1.3.58-.35.1-.72-.15-.38.05-.78.05-.4 0-.78-.05-.38-.05-.72-.15-.7-.22-1.3-.58-.58-.35-1.05-.82-.48-.48-.82-1.05-.35-.6-.58-1.3-.1-.35-.15-.72-.05-.38-.05-.78s.05-.78.05-.78.05-.38.15-.72.22-.7.58-1.3c.35-.58.82-1.05 1.05-.82.48-.48 1.05-.82 1.3-.58.35-.1.72-.15.78-.05.38-.05.78-.05M12 2a10 10 0 0 0-10 10c0 1.77.46 3.42 1.25 4.85L2 22l5.25-1.4c1.4.73 3 1.15 4.75 1.15a10 10 0 1 0 0-20"/></svg>
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
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/20">
              <a href="#location">
                <MapPin className="mr-2 h-5 w-5" />
                View on Map
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

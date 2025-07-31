import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              More Than Just a PG, It's a Community
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                <strong>Our Story:</strong> Asilo Girls PG was born from a simple vision: to create a safe, supportive, and empowering space for young women pursuing their dreams. We understand the challenges of moving to a new city, and we're here to make that transition as smooth as possible.
              </p>
              <p>
                <strong>Our Mission:</strong> We are committed to providing a secure, comfortable, and studious atmosphere where every resident feels at home. Our goal is to foster a community of friendship and mutual respect.
              </p>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="sm:col-span-1">
                    <Image
                      src="https://placehold.co/400x400.png"
                      alt="Warden of Asilo Girls PG"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint="friendly warden"
                    />
                  </div>
                  <div className="sm:col-span-2 p-6 flex flex-col justify-center">
                    <h3 className="font-headline text-2xl font-semibold">
                      Meet Your Warden
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Our friendly and experienced warden is always available to assist you, ensuring your safety and well-being around the clock. She is not just a manager, but a mentor and a friend to all our residents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

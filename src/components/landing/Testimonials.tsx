import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Living at Asilo felt like being part of a family. The warden is super helpful and the facilities are top-notch. Highly recommend!",
    name: "Priya Sharma",
    college: "Galgotias University",
  },
  {
    quote: "The best part about Asilo is the security and the homely food. I never had to worry about anything. It was truly my home away from home.",
    name: "Anjali Verma",
    college: "IIMT College",
  },
  {
    quote: "I made some of my best friends here. The common room was our favorite hangout spot. The Wi-Fi was also excellent for my studies.",
    name: "Sneha Reddy",
    college: "Sharda University",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          What Our Residents Say
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from students who have experienced the comfort and community at Asilo.
        </p>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <blockquote className="text-lg italic text-gray-700">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="mt-6 flex items-center">
                          <Avatar>
                            <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.name.charAt(0)}`} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

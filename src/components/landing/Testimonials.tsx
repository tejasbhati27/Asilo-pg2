import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Living at Asilo felt like being part of a family. The environment is so supportive and the facilities are top-notch. Highly recommend!",
    name: "Priya Sharma",
    college: "Galgotias University",
    rating: 5,
  },
  {
    quote: "The best part about Asilo is the security and the homely food. I never had to worry about anything. It was truly my home away from home.",
    name: "Anjali Verma",
    college: "IIMT College",
    rating: 5,
  },
  {
    quote: "I made some of my best friends here. The common room was our favorite hangout spot. The Wi-Fi was also excellent for my studies.",
    name: "Sneha Reddy",
    college: "Sharda University",
    rating: 4,
  },
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
  ));
}

export default function Testimonials() {
  const googleMapsReviewUrl = "https://search.google.com/local/writereview/mobile?placeid=ChIJiZvNa17rDDkRGFnDK8Qxr5w";
  
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
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="h-full shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                        <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                        </div>
                        <blockquote className="text-base sm:text-lg italic text-gray-700 flex-grow">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="mt-6 flex items-center">
                          <Avatar>
                            <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.name.charAt(0)}`} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.college}</p>
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
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <a href={googleMapsReviewUrl} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2 h-5 w-5" />
              Rate your ASILO experience
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

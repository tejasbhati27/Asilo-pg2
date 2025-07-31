import Image from "next/image";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "PG Building Exterior", hint: "student housing building" },
  { src: "https://placehold.co/600x400.png", alt: "Dining Hall", hint: "dormitory dining hall" },
  { src: "https://placehold.co/600x400.png", alt: "Recreation Room", hint: "student common room" },
  { src: "https://placehold.co/600x400.png", alt: "Fully furnished single room", hint: "student room single" },
  { src: "https://placehold.co/600x400.png", alt: "Clean and hygienic kitchen", hint: "commercial kitchen" },
  { src: "https://placehold.co/600x400.png", alt: "Spacious shared room", hint: "student room shared" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          A Glimpse Inside Asilo
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our facilities and see for yourself why Asilo is the perfect place to call home.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover aspect-video"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

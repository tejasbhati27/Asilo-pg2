import Image from "next/image";

const galleryImages = [
  { src: "/premium-single.jpeg", alt: "PG Building Exterior", hint: "student housing building" },
  { src: "/photo_2025-07-31_19-15-41.jpeg", alt: "Dining Hall", hint: "dormitory dining hall" },
  { src: "/photo_2025-07-31_19-15-47.jpeg", alt: "Recreation Room", hint: "student common room" },
  { src: "/single-occupancy.jpeg", alt: "Fully furnished single room", hint: "student room single" },
  { src: "/download.jpeg", alt: "Clean and hygienic kitchen", hint: "commercial kitchen" },
  { src: "/double-occupancy.jpeg", alt: "Spacious shared room", hint: "student room shared" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center">
          A Glimpse Inside Asilo
        </h2>
        <p className="mt-4 text-center text-lg font-body text-muted-foreground max-w-2xl mx-auto">
          Explore our facilities and see for yourself why Asilo is the perfect place to call home.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover aspect-video transition-transform duration-500 hover:scale-105"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
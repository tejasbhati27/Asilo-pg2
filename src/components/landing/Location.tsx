import { MapPin, Map, MoveRight } from 'lucide-react';
import { Button } from "../ui/button";

const nearbyPlaces = [
    { name: 'Beta Plaza', distance: 'In front of' },
    { name: 'Beta 1 Metro Station', distance: '5 min drive' },
    { 'name': 'Grand Venice Mall', 'distance': '10 min drive' },
    { name: 'Pari Chowk', distance: '7 min drive' },
    { name: 'Local Market & ATMs', distance: 'Walking distance' },
    { name: 'Kailash Hospital', distance: '10 min drive' },
];

export default function Location() {
  const googleMapsUrl = "https://www.google.com/maps/place/Asilo+Girls+PG/@28.4784904,77.5058117,19z/data=!4m15!1m8!3m7!1s0x390cea6513624ebd:0xc472b07f2822a6df!2sBeta+I,+Greater+Noida,+Uttar+Pradesh!3b1!8m2!3d28.4797984!4d77.5060438!16s%2Fg%2F1tdd_qy6!3m5!1s0x390ceb5e6bcd9b89:0x9caf31c42bc35918!8m2!3d28.4781292!4d77.5061669!16s%2Fg%2F11xrfzs4zf?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="location" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold">
              Prime Location, Ultimate Convenience
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold text-lg font-body">Our Address</h3>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <p>Asilo Girls PG, Beta 1, Greater Noida, Uttar Pradesh</p>
                    </a>
                    <Button asChild className="mt-4 inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/80 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-around-glow">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Map className="w-5 h-5" />
                            Open in Google Maps
                            <MoveRight className="w-5 h-5 ml-2" />
                        </a>
                    </Button>
                </div>
              </div>
              <div>
                  <h3 className="font-semibold text-lg mt-4 font-body">Nearby Places:</h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground font-body">
                      {nearbyPlaces.map(place => (
                          <li key={place.name}>
                              {place.name === 'Beta Plaza' ? <span><strong>In front of Beta Plaza</strong></span> : <span><strong>{place.name}:</strong> {place.distance}</span>}
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.7587681064739!2d77.5058117!3d28.4784904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb5e6bcd9b89%3A0x9caf31c42bc35918!2sAsilo%20Girls%20PG!5e0!3m2!1sen!2sin!4v1753976259721!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asilo Girls PG Location in Beta 1, Greater Noida"
                ></iframe>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
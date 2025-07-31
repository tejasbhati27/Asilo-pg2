import { MapPin } from 'lucide-react';

const nearbyPlaces = [
    { name: 'IIMT College of Engineering', distance: '5 min drive' },
    { name: 'Galgotias University', distance: '10 min drive' },
    { name: 'Knowledge Park II Metro Station', distance: '7 min drive' },
    { name: 'Local Market & ATMs', distance: 'Walking distance' },
    { name: 'Yatharth Super Speciality Hospital', distance: '10 min drive' },
]

export default function Location() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              Prime Location, Ultimate Convenience
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold text-lg">Our Address</h3>
                    <p className="text-muted-foreground">
                        Asilo Girls PG, Knowledge Park III, Greater Noida, Uttar Pradesh 201308
                    </p>
                </div>
              </div>
              <div>
                  <h3 className="font-semibold text-lg mt-4">Nearby Places:</h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                      {nearbyPlaces.map(place => (
                          <li key={place.name}>
                              <strong>{place.name}:</strong> {place.distance}
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.73295435948!2d77.50359197549603!3d28.487192975739814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb5e6bcd9b89%3A0x9caf31c42bc35918!2sAsilo%20Girls%20PG!5e0!3m2!1sen!2sin!4v1683893456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Asilo Girls PG Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

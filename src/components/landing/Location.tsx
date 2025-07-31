import { MapPin } from 'lucide-react';

const nearbyPlaces = [
    { name: 'Beta Plaza', distance: 'In front of' },
    { name: 'Beta 1 Metro Station', distance: '5 min drive' },
    { name: 'Grand Venice Mall', distance: '10 min drive' },
    { name: 'Pari Chowk', distance: '7 min drive' },
    { name: 'Local Market & ATMs', distance: 'Walking distance' },
    { name: 'Kailash Hospital', distance: '10 min drive' },
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
                        Asilo Girls PG, Beta 1, Greater Noida, Uttar Pradesh
                    </p>
                </div>
              </div>
              <div>
                  <h3 className="font-semibold text-lg mt-4">Nearby Places:</h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                      {nearbyPlaces.map(place => (
                          <li key={place.name}>
                              {place.name === 'Beta Plaza' ? <span>{place.distance} Beta Plaza</span> : <span><strong>{place.name}:</strong> {place.distance}</span>}
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <a href="https://www.google.com/maps/place/Asilo+Girls+PG/@28.4784904,77.5058117,19z/data=!4m15!1m8!3m7!1s0x390cea6513624ebd:0xc472b07f2822a6df!2sBeta+I,+Greater+Noida,+Uttar+Pradesh!3b1!8m2!3d28.4797984!4d77.5060438!16s%2Fg%2F1tdd_qy6!3m5!1s0x390ceb5e6bcd9b89:0x9caf31c42bc35918!8m2!3d28.4781292!4d77.5061669!16s%2Fg%2F11xrfzs4zf?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.912662886474!2d77.50361367610115!3d28.57235557571618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb5e6bcd9b89%3A0x9caf31c42bc35918!2sAsilo%20Girls%20PG!5e0!3m2!1sen!2sin!4v1722452323388!5m2!1sen!2sin"
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

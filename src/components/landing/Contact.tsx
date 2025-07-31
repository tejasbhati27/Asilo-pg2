"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const googleMapsUrl = "https://www.google.com/maps/place/Asilo+Girls+PG/@28.4784904,77.5058117,19z/data=!4m15!1m8!3m7!1s0x390cea6513624ebd:0xc472b07f2822a6df!2sBeta+I,+Greater+Noida,+Uttar+Pradesh!3b1!8m2!3d28.4797984!4d77.5060438!16s%2Fg%2F1tdd_qy6!3m5!1s0x390ceb5e6bcd9b89:0x9caf31c42bc35918!8m2!3d28.4781292!4d77.5061669!16s%2Fg%2F11xrfzs4zf?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-10 items-start">
          <div id="contact-info" className="space-y-6">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-gray-800 mb-3">Our Information</h3>
              <p className="text-base font-body text-gray-600">You can also reach us through the following channels:</p>
            </div>
            <div className="space-y-4 text-base">
                <a href="tel:+918766360226" className="flex items-center gap-3 group transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 group-hover:text-primary font-medium font-body">+91 87663 60226</span>
                </a>
                 <a href="tel:+919717512704" className="flex items-center gap-3 group transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 group-hover:text-primary font-medium font-body">+91 9717512704</span>
                </a>
                <a href="mailto:asilohostel@gmail.com" className="flex items-center gap-3 group transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 group-hover:text-primary font-medium font-body">asilohostel@gmail.com</span>
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 group-hover:text-primary font-medium font-body">
                        Asilo Girls PG, Beta 1, Greater Noida, Uttar Pradesh
                    </p>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

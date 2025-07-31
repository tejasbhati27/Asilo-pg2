"use client";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const googleMapsReviewUrl = "https://www.google.com/maps/place/Asilo+Girls+PG/@28.4784904,77.5058117,19z/data=!4m17!1m8!3m7!1s0x390cea6513624ebd:0xc472b07f2822a6df!2sBeta+I,+Greater+Noida,+Uttar+Pradesh!3b1!8m2!3d28.4797984!4d77.5060438!16s%2Fg%2F1tdd_qy6!3m7!1s0x390ceb5e6bcd9b89:0x9caf31c42bc35918!8m2!3d28.4781292!4d77.5061669!9m1!1b1!16s%2Fg%2F11xrfzs4zf?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Asilo Student Living</h3>
            <p className="text-gray-400">
              Your home away from home. We provide a safe, comfortable, and modern living experience for students in Greater Noida.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-blue-400 transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-blue-400 transition-colors">Amenities</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Rate your ASILO</h3>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <a href={googleMapsReviewUrl} target="_blank" rel="noopener noreferrer">
                Rate your ASILO experience
              </a>
            </Button>
            <h3 className="text-xl font-bold mb-4 mt-8">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md text-gray-800" />
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-r-md">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm text-gray-400">
            © {new Date().getFullYear()} Asilo Student Living. All Rights Reserved.
          </p>
          <Button variant="ghost" size="icon" onClick={scrollToTop} className="mt-4 md:mt-0">
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

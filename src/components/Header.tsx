"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone, BedDouble, Star, ImageIcon, Map, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#amenities', label: 'Amenities', icon: Star },
  { href: '#rooms', label: 'Rooms', icon: BedDouble },
  { href: '#gallery', label: 'Gallery', icon: ImageIcon },
  { href: '#location', label: 'Location', icon: Map },
  { href: '#contact', label: 'Contact', icon: MessageCircle },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClasses = `
    sticky top-0 z-50 w-full transition-all duration-300
    ${hasScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg' : 'bg-transparent'}
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Building2 className="h-8 w-8 text-blue-600" />
          <span className="font-headline text-2xl font-bold text-gray-800">Asilo</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-md font-medium text-gray-700">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative py-2 transition-colors hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-lg transition-transform hover:scale-105">
              <a href="#contact">
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </a>
            </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-7 w-7" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-white">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-6">
                  <a href="#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <span className="font-headline text-2xl font-bold">Asilo</span>
                  </a>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-7 w-7" />
                      <span className="sr-only">Close Menu</span>
                  </Button>
              </div>
              <nav className="flex-1 mt-8">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center gap-4 text-xl font-medium p-4 rounded-lg transition-colors hover:bg-gray-100 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <link.icon className="h-6 w-6" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto border-t pt-6">
                <Button size="lg" asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-lg">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Book a Visit
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

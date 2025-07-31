"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone, BedDouble, Star, ImageIcon, Map, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > window.innerHeight) {
        if (isVisible) {
          timeoutId = setTimeout(() => {
            setIsVisible(false);
          }, 400);
        }
      } else {
        clearTimeout(timeoutId);
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY, isVisible]);

  const headerClasses = `
    sticky top-0 z-50 w-full transition-all duration-500 ease-in-out
    ${hasScrolled ? 'border-b border-white/20 bg-white/10 backdrop-blur-2xl shadow-lg' : 'bg-transparent'}
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-gray-800">Asilo</span>
        </a>

        <nav className="hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative py-2 transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden">
            <Button asChild className="bg-accent text-white hover:bg-accent/90 rounded-full shadow-lg transition-transform hover:scale-105">
              <a href="#contact-info">
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </a>
            </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-7 w-7" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background">
            <SheetHeader>
                <VisuallyHidden>
                    <SheetTitle>Mobile Menu</SheetTitle>
                    <SheetDescription>
                        A list of navigation links to browse the website.
                    </SheetDescription>
                </VisuallyHidden>
            </SheetHeader>
            <div className="flex flex-col h-full">
              <div className="flex items-center border-b pb-6">
                  <a href="#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Building2 className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">Asilo</span>
                  </a>
              </div>
              <nav className="flex-1 mt-8">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center gap-4 text-xl font-medium p-4 rounded-lg transition-colors hover:bg-gray-100 hover:text-primary"
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
                <Button size="lg" asChild className="w-full bg-accent text-white hover:bg-accent/90 rounded-lg shadow-lg">
                  <a href="#contact-info" onClick={() => setIsOpen(false)}>
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
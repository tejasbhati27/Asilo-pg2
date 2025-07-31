"use client";

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppConnect() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        asChild
        className="flex-1 bg-green-500 text-white hover:bg-green-600 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <a
          href="https://wa.me/918766360226"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="mr-2 h-5 w-5" />
          WhatsApp
        </a>
      </Button>
    </div>
  );
}

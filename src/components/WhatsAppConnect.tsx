"use client";

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppConnect() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/918766360226"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            aria-label="Connect on WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}
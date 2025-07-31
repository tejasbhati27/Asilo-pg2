"use client";

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppConnect() {
    const phoneNumber = "918766360226";
    const message = "Hello! I'm interested in Asilo and would like to know more.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Connect on WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}

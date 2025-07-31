import type { Metadata } from "next";
import { Playfair_Display, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppConnect from "@/components/WhatsAppConnect";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "Asilo: Your Home Away From Home",
  description: "Asilo is a premium student living space in Greater Noida, offering a perfect blend of comfort, community, and convenience. Designed for the modern student, it's more than a PG—it's your stylish sanctuary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`font-body bg-background text-foreground ${playfairDisplay.variable} ${ptSans.variable}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <WhatsAppConnect />
      </body>
    </html>
  );
}
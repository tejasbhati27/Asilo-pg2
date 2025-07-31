import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Amenities from '@/components/landing/Amenities';
import Rooms from '@/components/landing/Rooms';
import Gallery from '@/components/landing/Gallery';
import Location from '@/components/landing/Location';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Amenities />
        <Rooms />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

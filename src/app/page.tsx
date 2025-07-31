import Hero from '@/components/landing/Hero';
import Amenities from '@/components/landing/Amenities';
import Rooms from '@/components/landing/Rooms';
import Gallery from '@/components/landing/Gallery';
import Location from '@/components/landing/Location';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main className="flex-1">
        <Hero />
        <Rooms />
        <Amenities />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
    </div>
  );
}

import Hero from '@/components/landing/Hero';
import Amenities from '@/components/landing/Amenities';
import Occupancy from '@/components/landing/Occupancy';
import Gallery from '@/components/landing/Gallery';
import Location from '@/components/landing/Location';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main className="flex-1">
        <Hero />
        <Occupancy />
        <Amenities />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
    </div>
  );
}

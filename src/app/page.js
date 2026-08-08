import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChoseUs';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Stats/>
      <Services/>
      <WhyChooseUs/>
      <TechStack/>
      <Testimonials/>
      <CTA/>
    </main>
  );
}
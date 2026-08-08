import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Stats/>
      <Services/>
    </main>
  );
}
'use client';

import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <Hero />
      <About />
    </main>
  );
}

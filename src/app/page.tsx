'use client';

import { ShootingStars } from '@/components/home/ShootingStars';
import { StarsBackground } from '@/components/home/StarsBackground';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div className='relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md'>
        <h2 className='relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-2 bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:flex-row md:gap-8 md:text-7xl md:leading-tight'>
          <span>HEO TAE HWAN</span>
        </h2>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

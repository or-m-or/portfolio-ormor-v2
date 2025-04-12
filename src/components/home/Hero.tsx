'use client';

import { ShootingStars } from './ShootingStars';
import { StarsBackground } from './StarsBackground';
import { UrlTag } from './UrlTag';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { FaBlogger } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';
import { ScrollDownIndicator } from './ScrollDownIndicator';

export const Hero = () => {
  return (
    <div className='relative flex h-[45rem] w-full flex-col items-center rounded-md pt-16 md:justify-center'>
      <h2 className='relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-2 bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:flex-row md:gap-8 md:text-8xl md:leading-tight'>
        <span>HEO TAE HWAN</span>
      </h2>
      <div className='relative z-10 flex flex-wrap justify-center gap-4 text-lg text-white/80'>
        <span>Server Developer</span>
        <span>•</span>
        <span>Software Developer</span>
        <span>•</span>
        <span>AI Developer</span>
      </div>
      <div className='relative z-10 mt-4 flex flex-wrap justify-center gap-4'>
        <UrlTag
          name='Github'
          url='https://github.com/or-m-or'
          icon={FaGithub}
          bgColor='rgba(110, 84, 148, 0.2)'
        />
        {/* <UrlTag name='Blog' url='https://ormor.dev' icon={FaBlogger} /> */}
        <UrlTag
          name='Hugging Face'
          url='https://huggingface.co/ormor'
          icon={SiHuggingface}
          bgColor='rgba(255, 210, 31, 0.2)'
        />
        <UrlTag
          name='LinkedIn'
          url='https://linkedin.com/in/ormor'
          icon={FaLinkedin}
          bgColor='rgba(0, 119, 181, 0.2)'
        />
      </div>
      <div className='relative z-10 mt-16 md:mt-32'>
        <ScrollDownIndicator />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const overviewItems = [
  {
    title: 'Projects',
    description: '지금까지 진행한 프로젝트들을 살펴보세요.',
    href: '/projects',
  },
  {
    title: 'Skill',
    description: '개발 과정에서의 경험과 지식을 공유합니다.',
    href: '/skills',
  },
  {
    title: 'Contact',
    description: '함께 일하고 싶으시다면 연락주세요.',
    href: '/contact',
  },
];

export const Overview = () => {
  return (
    <section id='overview' className='relative w-full py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-center text-4xl font-bold text-white md:text-5xl'>
          Overview
        </h2>
        <p className='mb-16 text-center text-lg text-white/60'>
          포트폴리오의 각 섹션을 둘러보세요.
        </p>
        <div className='grid gap-8 md:grid-cols-3'>
          {overviewItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='group relative flex h-48 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-white/20 hover:bg-white/10'
              >
                <h3 className='mb-2 text-2xl font-bold text-white'>{item.title}</h3>
                <p className='text-white/60'>{item.description}</p>
                <div className='absolute right-4 bottom-4 text-white/40 transition-all group-hover:text-white/80'>
                  →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

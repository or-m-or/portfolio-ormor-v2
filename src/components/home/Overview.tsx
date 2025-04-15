'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const overviewItems = [
  {
    title: 'Projects',
    description: (
      <>
        지금까지 진행했던
        <br />
        프로젝트를 소개합니다 🔥
      </>
    ),
    href: '/projects',
  },
  {
    title: 'Skill',
    description: (
      <>
        제가 경험해 보았고, 활용할 수 있는
        <br />
        기술 스택을 소개합니다 🛠️
      </>
    ),
    href: '/skills',
  },
  {
    title: 'Contact',
    description: (
      <>
        저에게 관심이 있으시다면,
        <br />
        언제든지 편하게 연락주세요 😺
      </>
    ),
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
        <div className='mb-16 flex flex-col gap-4 text-center text-lg text-white/60'>
          <p>
            아래 버튼을 클릭하면 Projects, Skill, Contact 페이지로 이동할 수 있습니다.
          </p>
          <p>
            Projects 에서는 제가 경험해본 개인 및 팀 프로젝트를 확인할 수 있습니다.
            <br />이 페이지에서는 각 프로젝트 진행 과정에서 고민했던 점, 해결 방법, 구현한
            기능 등을 통해 저의 문제 해결 능력을 확인할 수 있습니다.
          </p>
          <p>Skill 에서는 제가 경험해본 기술 스택을 확인할 수 있습니다.</p>
        </div>
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

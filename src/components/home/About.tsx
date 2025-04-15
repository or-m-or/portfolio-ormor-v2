'use client';

import Image from 'next/image';

export const About = () => {
  return (
    <section id='about' className='relative w-full py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-16 text-center text-4xl font-bold text-white md:text-5xl'>
          About Me.
        </h2>
        <div className='flex flex-col items-center gap-12 md:flex-row md:items-start'>
          {/* 프로필 이미지 */}
          <div className='relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-white/20 md:h-80 md:w-80'>
            <Image
              src='/images/profile.jpg'
              alt='HEO TAE HWAN'
              fill
              className='object-cover'
              priority
            />
          </div>
          {/* 소개 텍스트 */}
          <div className='flex flex-col gap-6 text-white/80'>
            <p className='text-lg leading-relaxed'>안녕하세요, 허태환입니다.</p>
            <p className='text-lg leading-relaxed'>
              저는 개발을 <span className='text-yellow-400'>비즈니스</span>와{' '}
              <span className='text-yellow-400'>기술</span>, 두 영역{' '}
              <span className='text-yellow-400'>모두를 이해하는 일</span>이라고
              생각합니다. 변화가 빠른 환경 속에서도{' '}
              <span className='text-yellow-400'>기술의 본질</span>을 파악하고, 상황에 맞게
              활용하며 <span className='text-yellow-400'>문제를 해결</span>해 나가는
              과정에 의미를 두고 있습니다.
            </p>

            <p className='text-lg leading-relaxed'>
              <span className='text-yellow-400'>경청은 커뮤니케이션의 핵심</span>이라고
              믿으며, 팀원의 말에 귀 기울이는 태도를 저의 강점이라 생각합니다. 새로운
              기술에 대한 호기심을 바탕으로{' '}
              <span className='text-yellow-400'>꾸준히 배우고 성장</span>하기 위해
              노력하고 있습니다.
            </p>

            <p className='text-lg leading-relaxed'>
              대학 시절, <span className='text-rose-300'>RAG</span>(Retrieval-Augmented
              Generation) 기술 관련 인턴십에 참여해{' '}
              <span className='text-rose-300'>
                뉴스 요약 시스템의 처리 속도를 약 37.5% 개선
              </span>
              한 경험이 있습니다.
            </p>
            <p className='text-lg leading-relaxed'>
              컴퓨터공학을 전공하며 외주, 해커톤, 경진대회 등을 통해 다양한 환경에서 개발
              경험을 쌓았고, 여러 언어와 프레임워크에 익숙해지며 실용적인 감각을
              키워왔습니다.
            </p>
            <p className='text-lg leading-relaxed'>
              현재는 <span className='text-blue-400'>AI 시스템 기반 기술</span>과{' '}
              <span className='text-blue-400'>고성능 서버 개발</span>에 많은 관심을 가지고
              있으며, 이 분야에서 더 성장하기 위해 꾸준히 도전하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

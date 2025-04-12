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
              저는 효과적인 협업과 적극적인 경청을 통해 최고의 결과를 만들어내는 것을
              중요하게 생각합니다. 팀원들의 의견을 존중하고, 다양한 관점을 수용하며, 함께
              성장하는 것을 추구합니다.
            </p>
            <p className='text-lg leading-relaxed'>
              지금까지 여러 프로젝트에서 서버 개발과 AI 모델 구축을 담당하며, 사용자
              경험을 개선하고 비즈니스 가치를 창출하는 데 기여해왔습니다. 특히 대규모
              트래픽 처리와 실시간 데이터 분석에 강점을 가지고 있습니다.
            </p>
            <p className='text-lg leading-relaxed'>
              앞으로도 기술적 성과와 팀워크를 모두 중요시하며, 지속 가능한 성장을 추구하는
              개발자가 되고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

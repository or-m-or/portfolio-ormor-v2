import React from 'react';
import { Skill, TechStack } from '@/types/skill';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazon,
  SiPython,
  SiDjango,
  SiFlask,
  SiSpring,
  SiKotlin,
  SiSwift,
  SiIos,
  SiAndroid,
  SiCss3,
  SiGraphql,
} from 'react-icons/si';

type SkillCardProps = Omit<Skill, 'id'>;

// 기술 스택별 아이콘 매핑
const techIcons: Record<TechStack, React.ReactNode> = {
  React: <SiReact className='text-7xl text-[#61DAFB]' />,
  'React Native': <SiReact className='text-7xl text-[#61DAFB]' />,
  'Next.js': <SiNextdotjs className='text-7xl text-white' />,
  TypeScript: <SiTypescript className='text-7xl text-[#3178C6]' />,
  JavaScript: <SiJavascript className='text-7xl text-[#F7DF1E]' />,
  'Node.js': <SiNodedotjs className='text-7xl text-[#339933]' />,
  Express: <SiExpress className='text-7xl text-white' />,
  MongoDB: <SiMongodb className='text-7xl text-[#47A248]' />,
  PostgreSQL: <SiPostgresql className='text-7xl text-[#4169E1]' />,
  TailwindCSS: <SiTailwindcss className='text-7xl text-[#06B6D4]' />,
  Git: <SiGit className='text-7xl text-[#F05032]' />,
  GitHub: <SiGithub className='text-7xl text-white' />,
  Docker: <SiDocker className='text-7xl text-[#2496ED]' />,
  AWS: <SiAmazon className='text-7xl text-[#FF9900]' />,
  Python: <SiPython className='text-7xl text-[#3776AB]' />,
  Django: <SiDjango className='text-7xl text-[#092E20]' />,
  Flask: <SiFlask className='text-7xl text-white' />,
  Java: <SiSpring className='text-7xl text-[#007396]' />,
  Spring: <SiSpring className='text-7xl text-[#6DB33F]' />,
  Kotlin: <SiKotlin className='text-7xl text-[#7F52FF]' />,
  Swift: <SiSwift className='text-7xl text-[#F05138]' />,
  iOS: <SiIos className='text-7xl text-white' />,
  Android: <SiAndroid className='text-7xl text-[#3DDC84]' />,
  'CSS/SCSS': <SiCss3 className='text-7xl text-[#1572B6]' />,
  GraphQL: <SiGraphql className='text-7xl text-[#E10098]' />,
};

export default function SkillCard({ icon, name, experiences }: SkillCardProps) {
  return (
    <div className='mb-4 flex w-full flex-col rounded-lg bg-transparent p-6 shadow-md hover:bg-zinc-900 md:flex-row'>
      {/* 왼쪽 섹션 - 아이콘과 기술명 */}
      <div className='mb-4 flex flex-col items-center md:mr-8 md:mb-0 md:w-1/4'>
        <div className='mb-2 flex h-24 w-24 items-center justify-center'>
          {icon ? (
            // 외부 이미지가 제공되면 해당 이미지 사용
            <img src={icon} alt={`${name} icon`} className='max-h-full max-w-full' />
          ) : techIcons[name] ? (
            // react-icons에서 해당 기술 아이콘을 찾을 수 있으면 사용
            <div className='flex h-full w-full items-center justify-center'>
              {techIcons[name]}
            </div>
          ) : (
            // 이미지도 없고 아이콘도 없으면 첫 글자로 대체
            <div className='flex h-full w-full items-center justify-center rounded-full bg-gray-700'>
              <span className='text-xl text-gray-300'>{name.charAt(0)}</span>
            </div>
          )}
        </div>
        <h3 className='text-center text-lg font-bold text-zinc-300'>{name}</h3>
      </div>

      {/* 오른쪽 섹션 - 관련 경험 표시 */}
      <div className='flex-1'>
        <div>
          <ul className='list-disc space-y-1 pl-5'>
            {experiences.map((experience, index) => (
              <li key={index} className='text-zinc-300'>
                {experience}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

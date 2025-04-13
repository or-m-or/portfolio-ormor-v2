import { TechStack } from '@/types/project';
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
} from 'react-icons/si';

interface TechStackTagProps {
  tech: TechStack;
}

const techIcons: Record<TechStack, React.ReactNode> = {
  React: <SiReact className='text-[#61DAFB]' />,
  'React Native': <SiReact className='text-[#61DAFB]' />,
  'Next.js': <SiNextdotjs className='text-white' />,
  TypeScript: <SiTypescript className='text-[#3178C6]' />,
  JavaScript: <SiJavascript className='text-[#F7DF1E]' />,
  'Node.js': <SiNodedotjs className='text-[#339933]' />,
  Express: <SiExpress className='text-white' />,
  MongoDB: <SiMongodb className='text-[#47A248]' />,
  PostgreSQL: <SiPostgresql className='text-[#4169E1]' />,
  TailwindCSS: <SiTailwindcss className='text-[#06B6D4]' />,
  Git: <SiGit className='text-[#F05032]' />,
  GitHub: <SiGithub className='text-white' />,
  Docker: <SiDocker className='text-[#2496ED]' />,
  AWS: <SiAmazon className='text-[#FF9900]' />,
  Python: <SiPython className='text-[#3776AB]' />,
  Django: <SiDjango className='text-[#092E20]' />,
  Flask: <SiFlask className='text-white' />,
  Java: <SiSpring className='text-[#007396]' />,
  Spring: <SiSpring className='text-[#6DB33F]' />,
  Kotlin: <SiKotlin className='text-[#7F52FF]' />,
  Swift: <SiSwift className='text-[#F05138]' />,
  iOS: <SiIos className='text-white' />,
  Android: <SiAndroid className='text-[#3DDC84]' />,
};

export const TechStackTag = ({ tech }: TechStackTagProps) => {
  return (
    <div className='flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-sm text-white/80'>
      {techIcons[tech]}
      <span>{tech}</span>
    </div>
  );
};

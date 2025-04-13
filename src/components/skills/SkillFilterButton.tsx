// components/skills/SkillFilterButton.tsx
import { SkillCategory } from '@/types/skill';

interface SkillFilterButtonProps {
  category: SkillCategory | 'ALL';
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const tagStyles: Record<SkillCategory | 'ALL', string> = {
  ALL: 'bg-white/10 text-white/80',
  Client: 'bg-blue-500/10 text-blue-400',
  Server: 'bg-green-500/10 text-green-400',
  Web: 'bg-purple-500/10 text-purple-400',
  'UI Styling': 'bg-pink-500/10 text-pink-400',
  Language: 'bg-yellow-500/10 text-yellow-400',
  DevOps: 'bg-orange-500/10 text-orange-400',
  Tool: 'bg-indigo-500/10 text-indigo-400',
  Collaboration: 'bg-teal-500/10 text-teal-400',
  Framework: 'bg-red-500/10 text-red-400',
  Library: 'bg-cyan-500/10 text-cyan-400',
  Infra: 'bg-lime-500/10 text-lime-400',
  DB: 'bg-emerald-500/10 text-emerald-400',
};

export const SkillFilterButton = ({
  category,
  count,
  isActive,
  onClick,
}: SkillFilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:opacity-80 ${
        tagStyles[category]
      } ${isActive ? 'ring-2 ring-white/20' : ''}`}
    >
      <span className='text-sm font-medium'>{category}</span>
      <span className='rounded-full bg-white/10 px-2 py-0.5 text-xs'>{count}</span>
    </button>
  );
};

import { FilterTag } from '@/types/project';

interface ProjectFilterButtonProps {
  tag: FilterTag;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const tagStyles: Record<FilterTag, string> = {
  ALL: 'bg-white/10 text-white/80',
  Personal: 'bg-blue-500/10 text-blue-400',
  Team: 'bg-green-500/10 text-green-400',
};

export const ProjectFilterButton = ({
  tag,
  count,
  isActive,
  onClick,
}: ProjectFilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:opacity-80 ${
        tagStyles[tag]
      } ${isActive ? 'ring-2 ring-white/20' : ''}`}
    >
      <span className='text-sm font-medium'>{tag}</span>
      <span className='rounded-full bg-white/10 px-2 py-0.5 text-xs'>{count}</span>
    </button>
  );
};

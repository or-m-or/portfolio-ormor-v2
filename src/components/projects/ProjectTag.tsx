import { ProjectTag as ProjectTagType } from '@/types/project';

interface ProjectTagProps {
  tag: ProjectTagType;
}

const tagStyles = {
  ALL: 'bg-purple-500/20 text-purple-400',
  Personal: 'bg-blue-500/20 text-blue-400',
  Team: 'bg-green-500/20 text-green-400',
};

export const ProjectTag = ({ tag }: ProjectTagProps) => {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${tagStyles[tag]}`}>
      {tag}
    </span>
  );
};

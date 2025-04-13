import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Project } from '@/types/project';
import { ProjectTag } from '@/components/projects/ProjectTag';
import { TechStackTag } from '@/components/projects/TechStackTag';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  if (!project) {
    return null;
  }

  const { title, imageUrl, projectTag, date, summary, techStacks, id } = project;

  return (
    <div
      onClick={() => router.push(`/projects/${id}`)}
      className='group relative flex cursor-pointer flex-col overflow-hidden rounded-lg transition-all hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-gray-900/50'
    >
      <div className='relative mb-4 aspect-video overflow-hidden rounded-lg'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-1 flex-col px-4'>
        <div className='mb-2 flex items-start justify-between'>
          <h3 className='text-xl font-bold text-white'>{title}</h3>
          <ProjectTag tag={projectTag} />
        </div>
        <p className='mb-4 text-sm text-gray-400'>{date}</p>
        <p className='mb-6 flex-1 text-gray-300'>{summary}</p>
        <div className='mb-4 flex flex-wrap gap-2'>
          {techStacks.map((tech) => (
            <TechStackTag key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

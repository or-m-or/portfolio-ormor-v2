'use client';

import { useParams } from 'next/navigation';
import { PROJECTS_DATA } from '@/constants/projects';
import { ProjectDetail } from '@/components/projects/ProjectDetail';

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  const projectId = Number(params.id);
  if (!projectId) return <div className='text-red-500'>잘못된 요청입니다.</div>;

  const project = PROJECTS_DATA.find((item) => item.id === projectId);
  if (!project) return null;

  return <ProjectDetail project={project} />;
}

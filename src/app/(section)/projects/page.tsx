'use client';

import { useState } from 'react';
import { PageTitle } from '@/components/common/PageTitle';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilterButton } from '@/components/projects/ProjectFilterButton';
import { projects } from '@/constants/projects';
import { FilterTag } from '@/types/project';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('ALL');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.projectTag === activeFilter;
  });

  const getProjectCount = (tag: FilterTag) => {
    if (tag === 'ALL') return projects.length;
    return projects.filter((project) => project.projectTag === tag).length;
  };

  return (
    <div className='container mx-auto px-4 py-20'>
      <PageTitle
        title='MY PROJECT'
        description={
          <>
            <p>제가 경험했던 프로젝트들을 소개합니다.</p>
            <p>
              아래 ALL, Personal, Team 버튼을 클릭하여 개인, 팀 그리고 전체 프로젝트
              목록을 확인할 수 있습니다.
            </p>
          </>
        }
        align='center'
      />
      <div className='mb-8 flex justify-center gap-4'>
        {(['ALL', 'Personal', 'Team'] as FilterTag[]).map((tag) => (
          <ProjectFilterButton
            key={tag}
            tag={tag}
            count={getProjectCount(tag)}
            isActive={activeFilter === tag}
            onClick={() => setActiveFilter(tag)}
          />
        ))}
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

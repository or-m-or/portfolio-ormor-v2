import { PageTitle } from '@/components/common/PageTitle';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/constants/projects';

export default function ProjectsPage() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <PageTitle
        title='MY PROJECT'
        description={
          <>
            <p>제가 경험했던 프로젝트들을 소개합니다.</p>
            <p>
              아래 검색창에 프로젝트명을 검색하면 해당 프로젝트에 대한 상세 내용을 확인할
              수 있습니다.
            </p>
          </>
        }
        align='center'
      />
      <div className='grid gap-8 md:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

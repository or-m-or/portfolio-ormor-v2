import { PageTitle } from '@/components/common/PageTitle';

export default function ProjectsPage() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <PageTitle
        title='MY PROJECT'
        description='프로젝트를 클릭하면 해당 프로젝트의 상세 내용을 확인할 수 있습니다.'
        align='center'
      />
      <div>
        <h1>Projects Page</h1>
      </div>
    </div>
  );
}

import { PageTitle } from '@/components/common/PageTitle';

export default function SkillsPage() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <PageTitle
        title='SKILL'
        description={
          <>
            <p>제가 경험해본 기술 스택을 소개합니다.</p>
            <p>
              아래 검색창에 기술명을 검색하면, 해당 기술에 대한 저의 경험을 확인할 수
              있습니다.
            </p>
          </>
        }
        align='center'
      />
      <div>
        <h1>Skills Page</h1>
      </div>
    </div>
  );
}

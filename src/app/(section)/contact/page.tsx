import { PageTitle } from '@/components/common/PageTitle';

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <PageTitle
        title='CONTACT'
        description={
          <>
            <p>함께 일하고 싶으시다면 아래 연락처로 연락주시거나</p>
            <p>메일을 보내주세요. 언제든 준비되어 있습니다!</p>
          </>
        }
        align='center'
      />
      <div>
        <h1>Contact Page</h1>
      </div>
    </div>
  );
}

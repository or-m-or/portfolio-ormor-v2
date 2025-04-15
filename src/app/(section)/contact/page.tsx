import { PageTitle } from '@/components/common/PageTitle';
import { FiPhone, FiMail } from 'react-icons/fi';
import { ContactForm } from '@/components/contact/ContactForm';
import { ShootingStars } from '@/components/common/ShootingStars';
import { StarsBackground } from '@/components/common/StarsBackground';

export default function ContactPage() {
  return (
    <div className='relative'>
      {/* 별 배경 */}
      <StarsBackground />
      <ShootingStars />

      <div className='relative z-10 container mx-auto px-4 py-20'>
        <PageTitle
          title='CONTACT'
          description={
            <>
              <p>
                저에게 관심이 있으시다면, 아래 연락처로 언제든지 편하게 연락 부탁드립니다.
              </p>
              <p>또는 아래 폼을 통해 바로 메일을 보내실 수 있습니다.</p>
            </>
          }
          align='center'
        />
        <div className='my-8 flex flex-col items-center gap-4 text-zinc-100'>
          <div className='flex items-center gap-2'>
            <FiPhone />
            <span>010-4844-7192</span>
          </div>
          <div className='flex items-center gap-2'>
            <FiMail />
            <span>hth815@naver.com</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

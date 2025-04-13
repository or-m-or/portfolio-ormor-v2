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
              <p>함께 일하고 싶으시다면 아래 연락처로 연락주시거나</p>
              <p>메일을 보내주세요. 언제든 준비되어 있습니다!</p>
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

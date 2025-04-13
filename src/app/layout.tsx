import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const moneygraphy = localFont({
  src: './fonts/Moneygraphy-Rounded.woff2',
  display: 'swap',
  variable: '--font-moneygraphy',
});

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const dunggeunmo = localFont({
  src: './fonts/DungGeunMo.woff2',
  display: 'swap',
  variable: '--font-dunggeunmo',
});

export const metadata: Metadata = {
  title: '허태환 | 포트폴리오',
  description: '안녕하세요. 허태환 포트폴리오 사이트에 방문해주셔서 감사합니다.',
  keywords: [
    '허태환',
    '포트폴리오',
    'Frontend',
    'Backend',
    '개발자',
    'Server',
    'Next.js',
  ],
  authors: [{ name: '허태환', url: 'https://your-portfolio-url.com' }],
  creator: '허태환',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/asterisk.png',
  },
  openGraph: {
    title: '허태환 | 포트폴리오',
    description: '안녕하세요. 개발자 허태환의 포트폴리오입니다.',
    url: 'https://your-portfolio-url.com',
    siteName: '허태환 포트폴리오',
    images: [
      {
        url: '/images/profile.jpg', // SNS 공유 시 보여줄 대표 이미지
        width: 1200,
        height: 630,
        alt: '허태환 포트폴리오 썸네일',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  metadataBase: new URL('https://your-portfolio-url.com'),
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      lang='ko'
      className={`${moneygraphy.variable} ${pretendard.variable} ${dunggeunmo.variable}`}
    >
      <body>
        <Navbar />
        <main className='min-h-screen pt-16'>{children}</main>
        {modal}
        <Footer />
        <div id='modal-root'></div>
      </body>
    </html>
  );
}

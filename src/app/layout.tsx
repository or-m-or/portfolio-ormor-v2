import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const suit = localFont({
  src: './fonts/SUIT-Variable.woff2',
  display: 'swap',
  variable: '--font-suit',
});

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
      className={`${moneygraphy.variable} ${pretendard.variable} ${suit.variable} ${dunggeunmo.variable}`}
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

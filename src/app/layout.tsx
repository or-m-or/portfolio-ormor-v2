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

const yclover = localFont({
  src: './fonts/YClover-Bold.woff2',
  display: 'swap',
  variable: '--font-yclover',
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

export const metadata: Metadata = {
  title: 'Ormor Portfolio',
  description: 'Ormor Portfolio',
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
      className={`${moneygraphy.variable} ${pretendard.variable} ${suit.variable} ${yclover.variable}`}
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

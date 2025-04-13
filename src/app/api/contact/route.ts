import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from, subject, message } = body;
    console.log('body', body);

    console.log('email', from);
    console.log('subject', subject);
    console.log('message', message);
    if (!from || !subject || !message) {
      return NextResponse.json({ message: '모든 필드를 입력해주세요.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Vercel 환경에서 인증서 문제 방지
      },
    });

    // 이메일 옵션
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // 본인에게 보냄
      subject: `[Portfolio Inquiry] ${subject}`,
      html: `
          <h2>새 포트폴리오 문의가 도착했습니다!</h2>
          <p><strong>보낸 사람:</strong> ${from}</p>
          <p><strong>제목:</strong> ${subject}</p>
          <p><strong>메시지:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
    };

    // 프로미스 방식으로 처리 (Vercel 호환)
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) reject(err);
        else resolve(info);
      });
    });

    return NextResponse.json(
      { message: '메일이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[메일 전송 오류]', error);
    return NextResponse.json(
      { message: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

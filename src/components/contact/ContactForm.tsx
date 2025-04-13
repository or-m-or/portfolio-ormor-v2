'use client';

import { useState } from 'react';
import { Alert } from '@/components/common/Alert';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: formData.email,
          subject: `${formData.name}님의 메시지`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: '메일을 성공적으로 보냈습니다!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: `메일 전송 실패: ${result.message}` });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: '예기치 못한 오류가 발생했습니다.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto mt-8 w-full max-w-2xl space-y-6'>
      <input
        type='email'
        name='email'
        placeholder='Enter Your Email'
        className='w-full rounded-md border border-zinc-700 bg-zinc-800 p-3 text-white'
        onChange={handleChange}
        value={formData.email}
        required
      />
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='w-full rounded-md border border-zinc-700 bg-zinc-800 p-3 text-white'
        onChange={handleChange}
        value={formData.name}
        required
      />

      <textarea
        name='message'
        placeholder='Your Message'
        className='h-40 w-full resize-none rounded-md border border-zinc-700 bg-zinc-800 p-3 text-white'
        onChange={handleChange}
        value={formData.message}
        required
      />
      <button type='submit' className='group relative w-full p-[3px]'>
        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur-sm transition duration-300 group-hover:opacity-100' />
        <div className='relative z-10 w-full rounded-[6px] bg-black px-8 py-2 text-center text-white transition duration-200 group-hover:bg-transparent'>
          SUBMIT
        </div>
      </button>
      {status && <Alert type={status.type} message={status.message} />}
    </form>
  );
};

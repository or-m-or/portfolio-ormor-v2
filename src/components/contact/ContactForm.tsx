'use client';

import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 이메일 전송 로직 연동 예정
    console.log('📨 전송 내용:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto mt-8 w-full max-w-2xl space-y-6'>
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='w-full rounded-md border border-zinc-700 bg-zinc-800 p-3 text-white'
        onChange={handleChange}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Enter Your Email'
        className='w-full rounded-md border border-zinc-700 bg-zinc-800 p-3 text-white'
        onChange={handleChange}
        required
      />
      <textarea
        name='message'
        placeholder='Your Message'
        className='h-40 w-full resize-none rounded-md border border-zinc-700 bg-zinc-800 p-3 text-white'
        onChange={handleChange}
        required
      />
      <button type='submit' className='group relative w-full p-[3px]'>
        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur-sm transition duration-300 group-hover:opacity-100' />
        <div className='relative z-10 w-full rounded-[6px] bg-black px-8 py-2 text-center text-white transition duration-200 group-hover:bg-transparent'>
          SUBMIT
        </div>
      </button>
    </form>
  );
};

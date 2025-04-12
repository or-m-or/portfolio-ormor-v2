'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';

interface UrlTagProps {
  name: string;
  url: string;
  icon?: IconType;
  bgColor?: string;
}

export const UrlTag = ({
  name,
  url,
  icon: Icon,
  bgColor = 'rgba(255, 255, 255, 0.1)',
}: UrlTagProps) => {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center rounded-full px-4 py-2 text-sm text-white transition-all hover:scale-105'
      style={{ backgroundColor: bgColor }}
    >
      {Icon && <Icon className='mr-2 text-lg' />}
      {name}
    </Link>
  );
};

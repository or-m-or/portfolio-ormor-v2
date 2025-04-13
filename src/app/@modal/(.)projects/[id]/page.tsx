'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS_DATA } from '@/constants/projects';
import { IoClose, IoExpand } from 'react-icons/io5';
import { ProjectDetail } from '@/components/projects/ProjectDetail';

export default function ModalProjectPage() {
  const params = useParams();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const project = PROJECTS_DATA.find((item) => item.id === Number(params.id));

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === 'DIALOG') {
          router.back();
        }
      }}
      className='fixed top-1/2 left-1/2 w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-lg border-none bg-zinc-900/95 p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm'
    >
      <div className='relative min-h-[80vh] w-full p-8'>
        <div className='mb-8 flex items-center justify-between'>
          <button
            onClick={() => window.location.reload()}
            className='rounded-full bg-white/10 p-2 text-white/80 transition-all hover:bg-white/20'
          >
            <IoExpand size={20} />
          </button>
          <button
            onClick={() => router.back()}
            className='rounded-full bg-white/10 p-2 text-white/80 transition-all hover:bg-white/20'
          >
            <IoClose size={20} />
          </button>
        </div>

        <ProjectDetail project={project} />
      </div>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
}

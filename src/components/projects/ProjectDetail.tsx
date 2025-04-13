'use client';

import { Project } from '@/types/project';
import { TechStackTag } from './TechStackTag';
import { IoLink } from 'react-icons/io5';
import { Carousel, Card } from './ImageCardCarousel';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface Props {
  project: Project;
}

export function ProjectDetail({ project }: Props) {
  const searchParams = useSearchParams();
  const previewIndex = searchParams.get('preview');
  const initialIndex = previewIndex ? Number(previewIndex) : undefined;

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* 프로젝트 제목 */}
      <h1 className='mb-8 text-center text-3xl font-bold text-white'>{project.title}</h1>

      {/* 기술 스택과 진행 기간 */}
      <div className='mb-8 flex items-center justify-between'>
        <div className='flex flex-wrap gap-2'>
          {project.techStacks.map((tech) => (
            <TechStackTag key={tech} tech={tech} />
          ))}
        </div>
        <p className='text-white/60'>{project.date}</p>
      </div>

      {/* 프로젝트 요약 */}
      <p className='mb-8 text-white/80'>{project.summary}</p>

      {/* 관련 링크 */}
      {project.links && project.links.length > 0 && (
        <div className='mb-8 flex gap-4'>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 transition-all hover:bg-white/20'
            >
              <IoLink size={16} />
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* 구분선 */}
      <div className='mb-8 h-px bg-white/10' />

      {/* 프로젝트 상세 내용 */}
      <div className='space-y-8'>
        {/* 프로젝트 이미지 캐러셀 (스크린샷) */}
        {project.carouselImages && project.carouselImages.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>프로젝트 스크린샷</h2>
            <Carousel
              items={project.carouselImages.map((src, index) => (
                <Card
                  key={src}
                  card={{
                    src,
                    content: (
                      <div className='p-4'>
                        <Image
                          src={src}
                          alt={`스크린샷 ${index + 1}`}
                          width={800}
                          height={500}
                          className='mx-auto rounded-xl'
                        />
                      </div>
                    ),
                  }}
                  cardSize={{
                    height: 'h-52',
                    mdHeight: 'md:h-[22rem]',
                    width: 'w-48',
                    mdWidth: 'md:w-[24rem]',
                  }}
                  index={index}
                  openByDefault={initialIndex === index}
                  projectId={project.id}
                />
              ))}
            />
          </div>
        )}

        {/* 주요 기능 리스트 */}
        {project.features && project.features.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>주요 기능 및 특징</h2>
            <ul className='list-inside list-disc space-y-2 text-white/80'>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 프로젝트 목적 설명 */}
        {project.purpose && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>프로젝트 목적</h2>
            <p className='text-white/80'>{project.purpose}</p>
          </div>
        )}

        {/* 프로젝트 결과 및 성과 목록 */}
        {project.results && project.results.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>프로젝트 결과 및 성과</h2>
            <ul className='list-inside list-disc space-y-2 text-white/80'>
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 역할 분담 내용 */}
        {project.roles && project.roles.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>역할 분배</h2>
            <ul className='list-inside list-disc space-y-2 text-white/80'>
              {project.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 개인 기여 파트 */}
        {project.contributions && project.contributions.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>기여 부분</h2>
            <ul className='list-inside list-disc space-y-2 text-white/80'>
              {project.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 프로젝트 진행 단계 요약 */}
        {project.process && project.process.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>프로젝트 진행 과정</h2>
            <ul className='list-inside list-disc space-y-2 text-white/80'>
              {project.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 문제 해결 (트러블슈팅) 정리 */}
        {project.troubleshooting && project.troubleshooting.length > 0 && (
          <div>
            <h2 className='mb-4 text-xl font-bold text-white'>트러블 슈팅</h2>
            <ul className='list-inside list-disc space-y-2 text-white/80'>
              {project.troubleshooting.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

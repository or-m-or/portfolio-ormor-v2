'use client';

import { useState } from 'react';
import { PageTitle } from '@/components/common/PageTitle';
import SkillCard from '@/components/skills/SkillCard';
import { SKILLS_DATA } from '@/constants/skills';
import { SkillCategory } from '@/types/skill';
import { SkillFilterButton } from '@/components/skills/SkillFilterButton';

const categoryOptions: (SkillCategory | 'ALL')[] = [
  'ALL',
  'Client',
  'Server',
  'Web',
  'UI Styling',
  'Language',
  'DevOps',
  'Tool',
  'Collaboration',
  'Framework',
  'Library',
  'Infra',
  'DB',
];

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategories, setActiveCategories] = useState<SkillCategory[]>([]);

  const toggleCategory = (category: SkillCategory | 'ALL') => {
    if (category === 'ALL') {
      setActiveCategories([]);
    } else {
      setActiveCategories(
        (prev) =>
          prev.includes(category)
            ? prev.filter((c) => c !== category) // 제거
            : [...prev, category] // 추가
      );
    }
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory =
      activeCategories.length === 0 ||
      activeCategories.some((category) => skill.categories?.includes(category));
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSkillCount = (category: SkillCategory | 'ALL') => {
    if (category === 'ALL') return SKILLS_DATA.length;
    return SKILLS_DATA.filter((skill) => skill.categories?.includes(category)).length;
  };

  const isActive = (category: SkillCategory | 'ALL') => {
    if (category === 'ALL') return activeCategories.length === 0;
    return activeCategories.includes(category);
  };

  return (
    <div className='container mx-auto px-4 py-20'>
      <PageTitle
        title='SKILL'
        description={
          <>
            <p>제가 경험해본 기술 스택을 소개합니다.</p>
            <p>
              아래 검색창에 기술명을 검색하거나, 카테고리를 선택하여 필터링할 수 있습니다.
            </p>
          </>
        }
        align='center'
      />

      {/* 검색창 */}
      <div className='mb-8'>
        <input
          type='text'
          placeholder='찾고 싶은 기술명을 입력해주세요...'
          className='mx-auto block w-full rounded-lg border border-gray-300 p-3 md:w-1/2 lg:w-1/3'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 필터 버튼 */}
      <div className='mb-8 flex flex-wrap justify-center gap-4'>
        {categoryOptions.map((category) => (
          <SkillFilterButton
            key={category}
            category={category}
            count={getSkillCount(category)}
            isActive={isActive(category)}
            onClick={() => toggleCategory(category)}
          />
        ))}
      </div>

      {/* 스킬 카드 그리드 */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
              experiences={skill.experiences}
              categories={skill.categories}
            />
          ))
        ) : (
          <div className='col-span-2 py-10 text-center'>
            <p className='text-gray-500'>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}

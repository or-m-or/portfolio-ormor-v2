export type TechStack =
  | 'React'
  | 'React Native'
  | 'Next.js'
  | 'TypeScript'
  | 'JavaScript'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'TailwindCSS'
  | 'Git'
  | 'GitHub'
  | 'Docker'
  | 'AWS'
  | 'Python'
  | 'Django'
  | 'Flask'
  | 'Java'
  | 'Spring'
  | 'Kotlin'
  | 'Swift'
  | 'iOS'
  | 'Android'
  | 'CSS/SCSS'
  | 'GraphQL';

export type SkillCategory =
  | 'Client'
  | 'Server'
  | 'Web'
  | 'UI Styling'
  | 'Language'
  | 'DevOps'
  | 'Tool'
  | 'Collaboration'
  | 'Framework'
  | 'Library'
  | 'Infra'
  | 'DB';

export interface Skill {
  id: string;
  name: TechStack;
  icon?: string; // 외부 이미지 URL (선택적)
  categories: SkillCategory[];
  experiences: string[];
}

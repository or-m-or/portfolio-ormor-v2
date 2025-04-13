export type ProjectTag = 'ALL' | 'Personal' | 'Team';

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
  | 'Android';

export interface Project {
  title: string;
  imageUrl: string;
  projectTag: ProjectTag;
  date: string;
  summary: string;
  techStacks: TechStack[];
}

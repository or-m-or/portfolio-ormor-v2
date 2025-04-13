export type ProjectTag = 'ALL' | 'Personal' | 'Team';
export type FilterTag = 'ALL' | ProjectTag;

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

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  projectTag: ProjectTag;
  date: string;
  summary: string;
  techStacks: TechStack[];
  links?: {
    label: string;
    url: string;
  }[];
  features?: string[];
  purpose?: string;
  results?: string[];
  roles?: string[];
  contributions?: string[];
  process?: string[];
  troubleshooting?: string[];
  carouselImages?: string[];
  videoId?: string;
}

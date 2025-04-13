import { Skill } from '@/types/skill';

export const SKILLS_DATA: Skill[] = [
  {
    id: 'react',
    name: 'React',
    categories: ['Client', 'Web', 'Library'],
    experiences: [
      '3년간 React 기반 웹 애플리케이션 개발',
      'React Router, Redux를 활용한 상태관리 경험',
      '커스텀 훅 설계 및 구현',
    ],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    categories: ['Language'],
    experiences: [
      '2년간 타입스크립트 사용',
      '인터페이스와 타입 정의를 통한 코드 품질 향상',
      '제네릭을 활용한 재사용 가능한 컴포넌트 구현',
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    categories: ['Client', 'Server', 'Web', 'Framework'],
    experiences: [
      '여러 프로젝트에서 Next.js 활용 경험',
      'SSR, SSG 구현 경험',
      'API 라우트 구현',
    ],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    categories: ['Server', 'Language'],
    experiences: [
      'RESTful API 개발',
      'Express를 활용한 서버 구축',
      'MongoDB, MySQL 연동',
    ],
  },
  {
    id: 'css',
    name: 'CSS/SCSS',
    categories: ['UI Styling', 'Web'],
    experiences: [
      '반응형 웹 디자인 구현',
      'CSS 애니메이션 및 트랜지션 개발',
      'SCSS를 활용한 모듈화된 스타일 개발',
    ],
  },
  {
    id: 'tailwind',
    name: 'TailwindCSS',
    categories: ['UI Styling', 'Web', 'Library'],
    experiences: [
      '다수의 프로젝트에서 Tailwind CSS 활용',
      '커스텀 테마 설정 및 확장',
      '유틸리티 클래스 기반 개발 방법론 적용',
    ],
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    categories: ['Server', 'Client', 'Web', 'Library'],
    experiences: [
      'Apollo Client를 활용한 GraphQL 클라이언트 구현',
      'GraphQL API 설계 및 개발',
      '데이터 로딩 최적화',
    ],
  },
  {
    id: 'docker',
    name: 'Docker',
    categories: ['DevOps', 'Tool', 'Infra'],
    experiences: [
      'Docker를 활용한 개발 환경 구축',
      'Docker Compose를 통한 다중 컨테이너 관리',
      'CI/CD 파이프라인에 Docker 통합',
    ],
  },
  {
    id: 'git',
    name: 'GitHub',
    categories: ['Tool', 'Collaboration'],
    experiences: [
      'Git Flow를 활용한 브랜치 관리',
      'GitHub Actions를 통한 CI/CD 구축',
      '코드 리뷰 및 Pull Request 관리',
    ],
  },
];

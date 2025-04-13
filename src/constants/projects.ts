import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Project 1',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2023.01 ~ 2023.03',
    summary:
      '프로젝트 1에 대한 간단한 설명입니다. 이 프로젝트는 어떤 목적으로 시작되었고, 어떤 기능을 구현했는지 설명합니다.',
    techStacks: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Project 2',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2023.04 ~ 진행중',
    summary:
      '프로젝트 2에 대한 간단한 설명입니다. 이 프로젝트는 어떤 목적으로 시작되었고, 어떤 기능을 구현했는지 설명합니다.',
    techStacks: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    title: '포트폴리오 웹사이트',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2023.05 ~ 2023.06',
    summary:
      '개인 포트폴리오 웹사이트를 개발했습니다. 반응형 디자인과 모던한 UI를 구현하여 프로젝트와 기술 스택을 효과적으로 보여줍니다.',
    techStacks: ['Next.js', 'TypeScript', 'TailwindCSS', 'Git'],
  },
  {
    title: '쇼핑몰 플랫폼',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2023.07 ~ 2023.09',
    summary:
      '전자상거래 플랫폼을 개발했습니다. 사용자 인증, 상품 관리, 결제 시스템 등을 구현하여 안정적인 쇼핑 경험을 제공합니다.',
    techStacks: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
  },
  {
    title: '모바일 앱 개발',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2023.10 ~ 2023.12',
    summary:
      'iOS와 Android 플랫폼을 위한 모바일 앱을 개발했습니다. 크로스 플랫폼 개발을 통해 효율적인 개발과 일관된 사용자 경험을 제공합니다.',
    techStacks: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'AI 기반 추천 시스템',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2024.01 ~ 2024.02',
    summary:
      '머신러닝을 활용한 콘텐츠 추천 시스템을 개발했습니다. 사용자 행동 데이터를 분석하여 개인화된 추천을 제공합니다.',
    techStacks: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: '실시간 채팅 애플리케이션',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2024.03 ~ 진행중',
    summary:
      'WebSocket을 활용한 실시간 채팅 애플리케이션을 개발했습니다. 사용자 간의 즉각적인 메시지 전송과 그룹 채팅 기능을 구현했습니다.',
    techStacks: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    title: '헬스케어 모니터링 시스템',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2024.04 ~ 진행중',
    summary:
      '의료 데이터를 실시간으로 모니터링하고 분석하는 시스템을 개발했습니다. 환자 데이터의 안전한 저장과 분석을 위한 보안 시스템을 구현했습니다.',
    techStacks: ['Java', 'Spring', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'iOS 모바일 게임',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2024.05 ~ 진행중',
    summary:
      'Swift를 사용하여 iOS 플랫폼용 모바일 게임을 개발했습니다. 직관적인 UI와 부드러운 애니메이션으로 사용자 경험을 향상시켰습니다.',
    techStacks: ['Swift', 'iOS'],
  },
];

import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: '쇼핑몰 플랫폼',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2023.07 ~ 2023.09',
    summary:
      '전자상거래 플랫폼을 개발했습니다. 사용자 인증, 상품 관리, 결제 시스템 등을 구현하여 안정적인 쇼핑 경험을 제공합니다.',
    techStacks: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/ormor/shopping-platform',
      },
      {
        label: '배포 URL',
        url: 'https://shopping-platform.vercel.app',
      },
    ],
    carouselImages: [
      '/images/projects/project01/carousel1.jpg',
      '/images/projects/project01/carousel2.jpg',
      '/images/projects/project01/carousel3.jpg',
    ],
    features: [
      '사용자 인증 및 권한 관리',
      '상품 검색 및 필터링',
      '장바구니 및 주문 관리',
      '결제 시스템 연동',
      '리뷰 및 평점 시스템',
    ],
    purpose:
      '온라인 쇼핑의 편의성을 높이고, 사용자 경험을 개선하기 위한 전자상거래 플랫폼을 개발했습니다.',
    results: [
      '월 평균 10,000명의 활성 사용자 달성',
      '평균 페이지 로딩 시간 1.5초 이내',
      '결제 성공률 99.9% 달성',
      '사용자 만족도 4.8/5.0',
    ],
    roles: ['프론트엔드 개발', '백엔드 API 설계', '데이터베이스 설계', 'AWS 인프라 구축'],
    contributions: [
      'React와 Redux를 활용한 상태 관리 최적화',
      'MongoDB 인덱싱을 통한 검색 성능 향상',
      'AWS CloudFront를 활용한 정적 자원 캐싱',
      'JWT 기반의 안전한 인증 시스템 구현',
    ],
    process: [
      '요구사항 분석 및 기획',
      '데이터베이스 스키마 설계',
      'API 엔드포인트 개발',
      '프론트엔드 UI/UX 구현',
      '테스트 및 성능 최적화',
      '배포 및 모니터링',
    ],
    troubleshooting: [
      '대용량 트래픽 처리: Redis 캐싱 도입',
      '결제 실패 문제: 트랜잭션 처리 개선',
      '이미지 로딩 지연: 이미지 최적화 및 CDN 활용',
      '검색 성능: Elasticsearch 도입',
    ],
  },
  {
    id: 2,
    title: '모바일 앱 개발',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2023.10 ~ 2023.12',
    summary:
      'iOS와 Android 플랫폼을 위한 모바일 앱을 개발했습니다. 크로스 플랫폼 개발을 통해 효율적인 개발과 일관된 사용자 경험을 제공합니다.',
    techStacks: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/ormor/mobile-app',
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/app/id123456789',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.ormor.app',
      },
    ],
    features: [
      '실시간 알림 시스템',
      '오프라인 모드 지원',
      '소셜 로그인 통합',
      '데이터 동기화',
      '푸시 알림',
    ],
    purpose:
      '모바일 사용자들에게 최적화된 경험을 제공하고, 오프라인에서도 사용 가능한 기능을 구현하여 사용자 편의성을 높였습니다.',
    results: [
      'App Store 평점 4.9/5.0',
      'Play Store 평점 4.8/5.0',
      '월 활성 사용자 5,000명',
      '앱 다운로드 10,000회 이상',
    ],
    roles: ['프론트엔드 개발', '백엔드 API 개발', '데이터베이스 설계', '앱 배포 및 관리'],
    contributions: [
      'React Native를 활용한 크로스 플랫폼 개발',
      'Redux를 통한 상태 관리 최적화',
      'SQLite를 활용한 오프라인 데이터 저장',
      'Firebase Cloud Messaging을 활용한 푸시 알림 구현',
    ],
    process: [
      '기능 기획 및 와이어프레임 작성',
      'UI/UX 디자인',
      '프론트엔드 개발',
      '백엔드 API 개발',
      '테스트 및 디버깅',
      '스토어 배포',
    ],
    troubleshooting: [
      '메모리 누수: 컴포넌트 라이프사이클 최적화',
      '앱 크래시: 에러 바운더리 구현',
      '성능 이슈: 이미지 캐싱 및 지연 로딩 구현',
      '배터리 소모: 백그라운드 작업 최적화',
    ],
  },
  {
    id: 3,
    title: '포트폴리오 웹사이트',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2024.03 ~ 진행중',
    summary: 'Next.js와 Tailwind CSS를 사용하여 제작한 개인 포트폴리오 웹사이트입니다.',
    techStacks: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/ormor/portfolio-ormor-v2',
      },
    ],
    features: [
      '반응형 디자인',
      '다크 모드 지원',
      '애니메이션 효과',
      '프로젝트 필터링 기능',
    ],
    purpose:
      '개발자로서의 역량과 프로젝트를 효과적으로 보여주기 위한 포트폴리오 웹사이트를 제작했습니다.',
    results: [
      '모던하고 세련된 UI/UX 구현',
      '성능 최적화를 통한 빠른 로딩 속도',
      '접근성 향상을 위한 시맨틱 마크업 적용',
    ],
    roles: ['프론트엔드 개발', 'UI/UX 디자인', '성능 최적화'],
    contributions: [
      'Next.js와 TypeScript를 활용한 타입 안전성 확보',
      'Tailwind CSS를 통한 효율적인 스타일링',
      'Framer Motion을 활용한 부드러운 애니메이션 구현',
    ],
    process: [
      '디자인 시스템 구축',
      '컴포넌트 구조 설계',
      '반응형 레이아웃 구현',
      '성능 최적화 작업',
    ],
    troubleshooting: [
      '이미지 최적화를 통한 로딩 속도 개선',
      '다크 모드 전환 시 깜빡임 현상 해결',
      '모바일 환경에서의 터치 이벤트 최적화',
    ],
  },
  {
    id: 4,
    title: '쇼핑몰 플랫폼',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2023.07 ~ 2023.09',
    summary:
      '전자상거래 플랫폼을 개발했습니다. 사용자 인증, 상품 관리, 결제 시스템 등을 구현하여 안정적인 쇼핑 경험을 제공합니다.',
    techStacks: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
  },
  {
    id: 5,
    title: '모바일 앱 개발',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2023.10 ~ 2023.12',
    summary:
      'iOS와 Android 플랫폼을 위한 모바일 앱을 개발했습니다. 크로스 플랫폼 개발을 통해 효율적인 개발과 일관된 사용자 경험을 제공합니다.',
    techStacks: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 6,
    title: 'AI 기반 추천 시스템',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2024.01 ~ 2024.02',
    summary:
      '머신러닝을 활용한 콘텐츠 추천 시스템을 개발했습니다. 사용자 행동 데이터를 분석하여 개인화된 추천을 제공합니다.',
    techStacks: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 7,
    title: '실시간 채팅 애플리케이션',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2024.03 ~ 진행중',
    summary:
      'WebSocket을 활용한 실시간 채팅 애플리케이션을 개발했습니다. 사용자 간의 즉각적인 메시지 전송과 그룹 채팅 기능을 구현했습니다.',
    techStacks: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    id: 8,
    title: '헬스케어 모니터링 시스템',
    imageUrl: '/images/projects/project02/Thumbnail.jpg',
    projectTag: 'Team',
    date: '2024.04 ~ 진행중',
    summary:
      '의료 데이터를 실시간으로 모니터링하고 분석하는 시스템을 개발했습니다. 환자 데이터의 안전한 저장과 분석을 위한 보안 시스템을 구현했습니다.',
    techStacks: ['Java', 'Spring', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 9,
    title: 'iOS 모바일 게임',
    imageUrl: '/images/projects/project01/Thumbnail.jpg',
    projectTag: 'Personal',
    date: '2024.05 ~ 진행중',
    summary:
      'Swift를 사용하여 iOS 플랫폼용 모바일 게임을 개발했습니다. 직관적인 UI와 부드러운 애니메이션으로 사용자 경험을 향상시켰습니다.',
    techStacks: ['Swift', 'iOS'],
  },
];

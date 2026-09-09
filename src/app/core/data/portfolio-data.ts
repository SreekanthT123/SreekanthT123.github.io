import {
  CertificationEntry,
  ExperienceEntry,
  NavLink,
  ProjectEntry,
  SkillGroup,
  SocialLink,
} from '../models/portfolio.models';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', fragment: 'about' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'AI Projects', fragment: 'projects' },
  { label: 'Skills', fragment: 'skills' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/SreekanthT123', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/t-sreekanth-ksy', icon: 'linkedin' },
  // Commented out for privacy - re-enable when ready to expose email publicly
  // { label: 'Email', url: 'mailto:sreekanthksy02@gmail.com', icon: 'email' },
];

export const PROFILE = {
  name: 'Sreekanth T',
  title: 'Senior Frontend Engineer & Technical Lead',
  location: 'Kochi, Kerala, India',
  summary:
    'Senior Frontend Engineer & Technical Lead with 8+ years of experience architecting scalable enterprise platforms using Angular, TypeScript, and modern frontend technologies. Proven track record in frontend architecture, platform modernization, and performance engineering while leading cross-functional engineering teams in Agile environments.',
  resumeUrl: '/SREEKANTH_T_Resume.pdf',
  avatarUrl: '/sreekanth.webp',
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'ADYSAS Scientific Software Solutions LLC',
    role: 'Frontend Engineer',
    location: 'Kochi, India',
    startDate: 'Nov 2019',
    endDate: 'Present',
    highlights: [
      'Architected an enterprise healthcare Case Management platform (CMAPP) within an Angular monorepo serving 100+ clinicians across major insurance clients.',
      'Led the frontend migration from Angular 13 to Angular 20, introducing Standalone Components, Angular Signals, and Tailwind CSS — reducing bundle size by 20% and improving initial page load by 40%.',
      'Engineered dynamic UI workflows integrating 100+ RESTful APIs, with JWT authentication, RBAC, and custom route guards for sensitive healthcare data compliance.',
      'Optimized rendering with OnPush change detection, RxJS pipelines, and lazy-loaded modules, achieving a 90+ Lighthouse performance score.',
      'Introduced automated unit/integration testing (Jest/Jasmine) and CI/CD quality gates, raising code coverage to 80%.',
      'Led and mentored a team of 4 frontend engineers, driving stakeholder communication and technical roadmap planning.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Program Analyst',
    location: 'Bengaluru, India',
    startDate: 'Oct 2017',
    endDate: 'Sep 2019',
    highlights: [
      'Contributed to enterprise migration projects involving large-scale file transfer and integration workflows.',
      'Worked with IBM Sterling File Gateway (SFG) and related enterprise integration technologies for secure data exchange.',
    ],
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'ClearMyDev',
    description:
      'AI developer productivity SaaS that analyses code diffs, logs, and JSON payloads into plain-English debugging insights. Includes Google OAuth, JWT auth, and rate-limited usage tracking.',
    techStack: ['Angular', 'Node.js', 'OpenAI API', 'Google OAuth', 'JWT', 'Netlify', 'Render'],
    githubUrl: 'https://github.com/SreekanthT123/clearmydev',
    images: ['/cmd1.webp', '/cmd2.webp'],
  },
  {
    name: 'NoteIt',
    description:
      'AI knowledge and productivity platform with rich-text notes, automated task extraction, and AI-generated daily digests. Secure multi-user REST APIs with strict per-user data isolation.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/SreekanthT123/NoteIt',
    images: ['/ni1.webp', '/ni2.webp'],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend Architecture',
    items: [
      'Modular Architecture',
      'Feature-based Design',
      'Reusable Component Frameworks',
      'Enterprise UI Systems',
      'Responsive Design',
      'Performance Engineering',
    ],
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    category: 'Frameworks',
    items: ['Angular', 'RxJS', 'Angular Signals', 'NgRx', 'Angular Material', 'PrimeNG', 'Tailwind CSS'],
  },
  {
    category: 'Enterprise Engineering',
    items: [
      'REST API Integration',
      'RBAC',
      'JWT Authentication',
      'Route Guards',
      'HTTP Interceptors',
      'Lazy Loading',
      'OnPush Change Detection',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'CI/CD', 'npm', 'Netlify', 'Render', 'Vercel'],
  },
];

export const CERTIFICATIONS: CertificationEntry[] = [
  { name: 'AI-901: Azure AI Fundamentals', issuer: 'Microsoft' },
  { name: 'Meta Front-End Developer Certificate', issuer: 'Meta (Coursera)' },
  { name: 'Claude Code 101', issuer: 'Anthropic' },
];

export const EDUCATION = {
  degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
  school: 'Amrita Vishwa Vidyapeetham',
  graduated: 'June 2017',
};

import type { Skill } from '../types';

// Devicon CDN base URL for technology logos
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const skills: Skill[] = [
  // Core Stack (Backend & Full Stack)
  {
    name: 'Node.js',
    category: 'backend',
    icon: 'nodejs',
    iconUrl: `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
    color: '#679E63',
    level: 95
  },
  {
    name: 'React',
    category: 'frontend',
    icon: 'react',
    iconUrl: `${DEVICON_BASE}/react/react-original.svg`,
    color: '#61DAFB',
    level: 90
  },
  {
    name: 'TypeScript',
    category: 'backend',
    icon: 'typescript',
    iconUrl: `${DEVICON_BASE}/typescript/typescript-original.svg`,
    color: '#3178C6',
    level: 90
  },
  {
    name: 'Go',
    category: 'backend',
    icon: 'go',
    iconUrl: `${DEVICON_BASE}/go/go-original-wordmark.svg`,
    color: '#00ADD8',
    level: 75
  },
  {
    name: 'Python',
    category: 'backend',
    icon: 'python',
    iconUrl: `${DEVICON_BASE}/python/python-original.svg`,
    color: '#3776AB',
    level: 80
  },
  {
    name: 'Java',
    category: 'backend',
    icon: 'java',
    iconUrl: `${DEVICON_BASE}/java/java-original.svg`,
    color: '#007396',
    level: 70
  },
  {
    name: 'PHP',
    category: 'backend',
    icon: 'php',
    iconUrl: `${DEVICON_BASE}/php/php-original.svg`,
    color: '#787CB4',
    level: 85
  },

  // Frontend / UI & Styling
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: 'javascript',
    iconUrl: `${DEVICON_BASE}/javascript/javascript-original.svg`,
    color: '#F7E018',
    level: 95
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    icon: 'vuejs',
    iconUrl: `${DEVICON_BASE}/vuejs/vuejs-original.svg`,
    color: '#3FB37F',
    level: 90
  },
  {
    name: 'Angular',
    category: 'frontend',
    icon: 'angular',
    iconUrl: `${DEVICON_BASE}/angularjs/angularjs-original.svg`,
    color: '#DD0031',
    level: 70
  },
  {
    name: 'TailwindCSS',
    category: 'frontend',
    icon: 'tailwind',
    iconUrl: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
    color: '#38B2AC',
    level: 90
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'bootstrap',
    iconUrl: `${DEVICON_BASE}/bootstrap/bootstrap-original.svg`,
    color: '#7952B3',
    level: 90
  },
  {
    name: 'Material UI',
    category: 'frontend',
    icon: 'materialui',
    iconUrl: `${DEVICON_BASE}/materialui/materialui-original.svg`,
    color: '#0081CB',
    level: 85
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: 'html5',
    iconUrl: `${DEVICON_BASE}/html5/html5-original.svg`,
    color: '#E34F26',
    level: 95
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: 'css3',
    iconUrl: `${DEVICON_BASE}/css3/css3-original.svg`,
    color: '#1572B6',
    level: 90
  },

  // Database
  {
    name: 'MongoDB',
    category: 'database',
    icon: 'mongodb',
    iconUrl: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
    color: '#47A248',
    level: 90
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: 'postgresql',
    iconUrl: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
    color: '#336791',
    level: 85
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: 'mysql',
    iconUrl: `${DEVICON_BASE}/mysql/mysql-original.svg`,
    color: '#4479A1',
    level: 90
  },
  {
    name: 'Redis',
    category: 'database',
    icon: 'redis',
    iconUrl: `${DEVICON_BASE}/redis/redis-original.svg`,
    color: '#DC382D',
    level: 75
  },

  // Tools & Cloud
  {
    name: 'Git',
    category: 'tools',
    icon: 'git',
    iconUrl: `${DEVICON_BASE}/git/git-original.svg`,
    color: '#F05032',
    level: 95
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: 'docker',
    iconUrl: `${DEVICON_BASE}/docker/docker-original.svg`,
    color: '#2496ED',
    level: 85
  },
  {
    name: 'GCP',
    category: 'tools',
    icon: 'gcp',
    iconUrl: `${DEVICON_BASE}/googlecloud/googlecloud-original.svg`,
    color: '#4285F4',
    level: 80
  },
  {
    name: 'AWS',
    category: 'tools',
    icon: 'aws',
    iconUrl: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    color: '#FF9900',
    level: 75
  },
  {
    name: 'GraphQL',
    category: 'tools',
    icon: 'graphql',
    iconUrl: `${DEVICON_BASE}/graphql/graphql-plain.svg`,
    color: '#E10098',
    level: 80
  }
];

export const skillCategories = [
  { id: 'backend', labelEs: 'Core Stack', labelEn: 'Core Stack', icon: 'server' },
  { id: 'frontend', labelEs: 'UI & Styling', labelEn: 'UI & Styling', icon: 'layout' },
  { id: 'database', labelEs: 'Bases de Datos', labelEn: 'Databases', icon: 'database' },
  { id: 'tools', labelEs: 'Herramientas & Cloud', labelEn: 'Tools & Cloud', icon: 'tool' }
] as const;

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter(skill => skill.category === category);
}

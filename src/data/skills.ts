import type { Skill } from '../types';

export const skills: Skill[] = [
  // Core Stack (Backend & Full Stack)
  {
    name: 'Node.js',
    category: 'backend',
    icon: 'nodejs',
    color: '#679E63',
    level: 95
  },
  {
    name: 'React',
    category: 'backend',
    icon: 'react',
    color: '#61DAFB',
    level: 90
  },
  {
    name: 'NestJS',
    category: 'backend',
    icon: 'nestjs',
    color: '#E0234E',
    level: 85
  },
  {
    name: 'TypeScript',
    category: 'backend',
    icon: 'typescript',
    color: '#3178C6',
    level: 90
  },
  {
    name: 'Go',
    category: 'backend',
    icon: 'go',
    color: '#00ADD8',
    level: 75
  },
  {
    name: 'Express',
    category: 'backend',
    icon: 'express',
    color: '#000000',
    level: 90
  },
  {
    name: 'Python',
    category: 'backend',
    icon: 'python',
    color: '#3776AB',
    level: 80
  },
  {
    name: 'Java',
    category: 'backend',
    icon: 'java',
    color: '#007396',
    level: 70
  },
  {
    name: 'PHP',
    category: 'backend',
    icon: 'php',
    color: '#787CB4',
    level: 85
  },

  // Frontend / UI & Styling
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: 'javascript',
    color: '#F7E018',
    level: 95
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    icon: 'vuejs',
    color: '#3FB37F',
    level: 90
  },
  {
    name: 'Angular',
    category: 'frontend',
    icon: 'angular',
    color: '#DD0031',
    level: 70
  },
  {
    name: 'TailwindCSS',
    category: 'frontend',
    icon: 'tailwind',
    color: '#38B2AC',
    level: 90
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'bootstrap',
    color: '#7952B3',
    level: 90
  },
  {
    name: 'Material UI',
    category: 'frontend',
    icon: 'materialui',
    color: '#0081CB',
    level: 85
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: 'html5',
    color: '#E34F26',
    level: 95
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: 'css3',
    color: '#1572B6',
    level: 90
  },

  // Database
  {
    name: 'MongoDB',
    category: 'database',
    icon: 'mongodb',
    color: '#47A248',
    level: 90
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: 'postgresql',
    color: '#336791',
    level: 85
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: 'mysql',
    color: '#4479A1',
    level: 90
  },
  {
    name: 'Redis',
    category: 'database',
    icon: 'redis',
    color: '#DC382D',
    level: 75
  },

  // Tools & Cloud
  {
    name: 'Git',
    category: 'tools',
    icon: 'git',
    color: '#F05032',
    level: 95
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: 'docker',
    color: '#2496ED',
    level: 85
  },
  {
    name: 'GCP',
    category: 'tools',
    icon: 'gcp',
    color: '#4285F4',
    level: 80
  },
  {
    name: 'AWS',
    category: 'tools',
    icon: 'aws',
    color: '#FF9900',
    level: 75
  },
  {
    name: 'GraphQL',
    category: 'tools',
    icon: 'graphql',
    color: '#E10098',
    level: 80
  },
  {
    name: 'Jest',
    category: 'tools',
    icon: 'jest',
    color: '#C21325',
    level: 85
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

import type { Skill } from '../types';

export const skills: Skill[] = [
  // Backend
  {
    name: 'PHP',
    category: 'backend',
    icon: 'php',
    color: '#787CB4',
    level: 90
  },
  {
    name: 'Node.js',
    category: 'backend',
    icon: 'nodejs',
    color: '#679E63',
    level: 90
  },

  // Frontend
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: 'javascript',
    color: '#F7E018',
    level: 95
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: 'typescript',
    color: '#3178C6',
    level: 85
  },
  {
    name: 'React',
    category: 'frontend',
    icon: 'react',
    color: '#00D8FF',
    level: 90
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    icon: 'vuejs',
    color: '#3FB37F',
    level: 90
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: 'html5',
    color: '#FE4C1E',
    level: 95
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: 'css3',
    color: '#379AD6',
    level: 85
  },
  {
    name: 'TailwindCSS',
    category: 'frontend',
    icon: 'tailwind',
    color: '#17bab8',
    level: 90
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'bootstrap',
    color: '#543B79',
    level: 90
  },

  // Database
  {
    name: 'MongoDB',
    category: 'database',
    icon: 'mongodb',
    color: '#7FC061',
    level: 90
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: 'mysql',
    color: '#00758F',
    level: 90
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: 'postgresql',
    color: '#336791',
    level: 80
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    icon: 'git',
    color: '#F05032',
    level: 90
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: 'docker',
    color: '#2496ED',
    level: 75
  },
  {
    name: 'VS Code',
    category: 'tools',
    icon: 'vscode',
    color: '#007ACC',
    level: 95
  }
];

export const skillCategories = [
  { id: 'backend', label: 'Backend', icon: 'server' },
  { id: 'frontend', label: 'Frontend', icon: 'layout' },
  { id: 'database', label: 'Bases de Datos', icon: 'database' },
  { id: 'tools', label: 'Herramientas', icon: 'tool' }
] as const;

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter(skill => skill.category === category);
}

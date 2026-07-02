// Technology icons mapping using Simple Icons CDN
// Colors from Simple Icons: https://simpleicons.org/

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export const techIcons: Record<string, TechIcon> = {
  // Languages
  'Go': {
    name: 'Go',
    icon: 'https://cdn.simpleicons.org/go/00ADD8',
    color: '#00ADD8'
  },
  'Java': {
    name: 'Java',
    icon: 'https://cdn.simpleicons.org/openjdk/ED8B00',
    color: '#ED8B00'
  },
  'JavaScript': {
    name: 'JavaScript',
    icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    color: '#F7DF1E'
  },
  'TypeScript': {
    name: 'TypeScript',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    color: '#3178C6'
  },
  'Python': {
    name: 'Python',
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    color: '#3776AB'
  },
  'PHP': {
    name: 'PHP',
    icon: 'https://cdn.simpleicons.org/php/777BB4',
    color: '#777BB4'
  },
  'HTML': {
    name: 'HTML',
    icon: 'https://cdn.simpleicons.org/html5/E34F26',
    color: '#E34F26'
  },
  'CSS': {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#1572B6'
  },

  // Frontend Frameworks
  'React': {
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    color: '#61DAFB'
  },
  'Vue.js': {
    name: 'Vue.js',
    icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    color: '#4FC08D'
  },

  // Backend / Runtime
  'Node.js': {
    name: 'Node.js',
    icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    color: '#339933'
  },
  'GraphQL': {
    name: 'GraphQL',
    icon: 'https://cdn.simpleicons.org/graphql/E10098',
    color: '#E10098'
  },

  // Databases
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
    color: '#4169E1'
  },
  'MySQL': {
    name: 'MySQL',
    icon: 'https://cdn.simpleicons.org/mysql/4479A1',
    color: '#4479A1'
  },
  'MongoDB': {
    name: 'MongoDB',
    icon: 'https://cdn.simpleicons.org/mongodb/47A248',
    color: '#47A248'
  },
  'Redis': {
    name: 'Redis',
    icon: 'https://cdn.simpleicons.org/redis/DC382D',
    color: '#DC382D'
  },

  // DevOps / Cloud
  'Docker': {
    name: 'Docker',
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    color: '#2496ED'
  },
  'Kubernetes': {
    name: 'Kubernetes',
    icon: 'https://cdn.simpleicons.org/kubernetes/326CE5',
    color: '#326CE5'
  },
  'AWS': {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    color: '#FF9900'
  },
  'GCP': {
    name: 'GCP',
    icon: 'https://cdn.simpleicons.org/googlecloud/4285F4',
    color: '#4285F4'
  },

  // Testing
  'Jest': {
    name: 'Jest',
    icon: 'https://cdn.simpleicons.org/jest/C21325',
    color: '#C21325'
  }
};

export function getTechIcon(techName: string): TechIcon | null {
  return techIcons[techName] || null;
}

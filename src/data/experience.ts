import type { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Mercado Libre',
    role: 'Software Engineer',
    roleEs: 'Ingeniero de Software',
    description: 'Development of scalable solutions for the largest e-commerce platform in Latin America.',
    descriptionEs: 'Desarrollo de soluciones escalables para la plataforma de comercio electrónico más grande de América Latina.',
    period: 'Oct 2022 - Present',
    periodEs: 'Oct 2022 - Presente',
    year: '2022+',
    type: 'work',
    technologies: ['Go', 'Java', 'React', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS'],
    progression: [
      {
        role: 'Software Engineer',
        roleEs: 'Ingeniero de Software',
        period: 'Jan 2026 - Present',
        periodEs: 'Ene 2026 - Presente',
        current: true
      },
      {
        role: 'Software Developer',
        roleEs: 'Desarrollador de Software',
        period: 'Oct 2022 - Dec 2025',
        periodEs: 'Oct 2022 - Dic 2025'
      }
    ]
  },
  {
    id: 'exp-2',
    company: 'LAX #DataLovers',
    role: 'Software Engineer',
    roleEs: 'Ingeniero de Software',
    description: 'Software development and data engineering solutions.',
    descriptionEs: 'Desarrollo de software y soluciones de ingeniería de datos.',
    period: 'Aug 2021 - Dec 2022',
    periodEs: 'Ago 2021 - Dic 2022',
    year: '2021',
    type: 'work',
    technologies: ['Python', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: 'exp-3',
    company: 'Quality Telecom S.L',
    role: 'Software Engineer',
    roleEs: 'Ingeniero de Software',
    description: 'Created FARKAMON APP for online sales and pharmacy product management.',
    descriptionEs: 'Creación de FARKAMON APP para ventas en línea y gestión de productos farmacéuticos.',
    period: 'Jan 2021 - Dec 2021',
    periodEs: 'Ene 2021 - Dic 2021',
    year: '2021',
    type: 'work',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'GCP', 'Jest']
  },
  {
    id: 'exp-4',
    company: 'Leader Center',
    role: 'Software Engineer',
    roleEs: 'Ingeniero de Software',
    description: 'Client information management system.',
    descriptionEs: 'Sistema de gestión de información de clientes.',
    period: 'Dec 2020 - May 2021',
    periodEs: 'Dic 2020 - May 2021',
    year: '2020',
    type: 'work',
    technologies: ['Vue.js', 'Node.js', 'PHP', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    id: 'exp-5',
    company: 'Extreme Technologies S.A.',
    role: 'Software Developer',
    roleEs: 'Desarrollador de Software',
    description: 'Development of new functionalities and bug fixes.',
    descriptionEs: 'Desarrollo de nuevas funcionalidades y corrección de errores.',
    period: 'Jul 2020 - Dec 2020',
    periodEs: 'Jul 2020 - Dic 2020',
    year: '2020',
    type: 'work',
    technologies: ['JavaScript', 'PHP', 'PostgreSQL', 'MySQL', 'HTML', 'CSS']
  },
  {
    id: 'exp-6',
    company: 'INSUMOS Y SUMINISTROS DE LA COSTA',
    role: 'Software Engineer',
    roleEs: 'Ingeniero de Software',
    description: 'Accounting software development for SMEs.',
    descriptionEs: 'Desarrollo de software contable para PYMES.',
    period: 'Jun 2019 - Jul 2020',
    periodEs: 'Jun 2019 - Jul 2020',
    year: '2019',
    type: 'work',
    technologies: ['Vue.js', 'PHP', 'Node.js', 'MySQL']
  },
  {
    id: 'exp-7',
    company: 'SENA - SENNOVA',
    role: 'Research Developer',
    roleEs: 'Desarrollador de Investigación',
    description: 'Supported, developed and worked in teams to create projects for apprentices and instructors.',
    descriptionEs: 'Apoyo, desarrollo y trabajo en equipo para crear proyectos para aprendices e instructores.',
    period: 'Apr 2018 - Jul 2020',
    periodEs: 'Abr 2018 - Jul 2020',
    year: '2018',
    type: 'work',
    technologies: ['Python', 'JavaScript', 'PHP', 'MySQL']
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Platzi',
    degree: 'Software Developer - Computer Software Engineering',
    degreeEs: 'Desarrollador de Software - Ingeniería de Software',
    period: 'Current',
    periodEs: 'Actual',
    year: '2020'
  },
  {
    id: 'edu-2',
    institution: 'Universidad del Atlantico',
    degree: 'Licentiate - English Language and Literature',
    degreeEs: 'Licenciatura - Lengua y Literatura Inglesa',
    period: '2021 - 2024',
    periodEs: '2021 - 2024',
    year: '2024'
  },
  {
    id: 'edu-4',
    institution: 'SENA',
    degree: 'Technologist in Analysis and Development of Information Systems',
    degreeEs: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
    period: '2016 - 2019',
    periodEs: '2016 - 2019',
    year: '2019'
  }
];

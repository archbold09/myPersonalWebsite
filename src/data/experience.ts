import type { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Freelance & Personal Projects',
    role: 'Senior Fullstack Developer',
    description: 'Desarrollo de soluciones web personalizadas para clientes, implementando arquitecturas modernas con React, Vue, Node.js y bases de datos SQL/NoSQL.',
    period: '2020 - Presente',
    year: '2020+',
    type: 'freelance'
  },
  {
    id: 'exp-2',
    company: 'INSUMOS Y SUMINISTROS DE LA COSTA',
    role: 'Fullstack Developer',
    description: 'Desarrollo completo del aplicativo ACC-PYME, software contable para agilizar procesos financieros de una empresa.',
    period: '2020',
    year: '2020',
    type: 'work'
  },
  {
    id: 'exp-3',
    company: 'SENA - SENNOVA',
    role: 'Investigador y Programador',
    description: 'Desarrollo del aplicativo de contabilidad y pagina publicitaria del CONGRESO 2019 SENNOVA.',
    period: 'Julio 2019 - Enero 2020',
    year: '2019',
    type: 'work'
  },
  {
    id: 'exp-4',
    company: 'SENA - SENNOVA',
    role: 'Monitor Programador',
    description: 'Desarrollo del aplicativo de horarios para gestionar el horario de las fichas e instructores y mejorar el proceso de creacion para los funcionarios SENA.',
    period: 'Abril 2019 - Julio 2019',
    year: '2019',
    type: 'work'
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Educacion Online y Proyectos Personales',
    degree: 'Aprendizaje Continuo',
    period: '2020 - Presente',
    year: 'Actual'
  },
  {
    id: 'edu-2',
    institution: 'SENA',
    degree: 'Tecnologo en Analisis y Desarrollo de Sistemas de Informacion',
    period: '2017 - 2020',
    year: '2020'
  }
];

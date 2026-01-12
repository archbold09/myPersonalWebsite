export type Language = 'es' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    methodology: string;
    contact: string;
  };
  // Hero section
  hero: {
    greeting: string;
    role: string;
    description: string;
    descriptionHighlight1: string;
    descriptionHighlight2: string;
    descriptionHighlight3: string;
    cta: string;
    stats: {
      years: string;
      projects: string;
      technologies: string;
    };
  };
  // About section
  about: {
    title: string;
    subtitle: string;
    description: string;
  };
  // Experience section
  experience: {
    title: string;
    subtitle: string;
  };
  // Education section
  education: {
    title: string;
    subtitle: string;
  };
  // Skills section
  skills: {
    title: string;
    subtitle: string;
    categories: {
      backend: string;
      frontend: string;
      database: string;
      tools: string;
    };
  };
  // Methodology section
  methodology: {
    title: string;
    subtitle: string;
    iterativeTitle: string;
    iterativeSubtitle: string;
    communication: string;
    communicationDesc: string;
    iterations: string;
    iterationsDesc: string;
    quality: string;
    qualityDesc: string;
    steps: {
      idea: { title: string; description: string };
      planning: { title: string; description: string };
      design: { title: string; description: string };
      development: { title: string; description: string };
      testing: { title: string; description: string };
      deployment: { title: string; description: string };
    };
  };
  // Contact section
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    followMe: string;
  };
  // Footer
  footer: {
    rights: string;
    contactInfo: string;
  };
  // Common
  common: {
    present: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      skills: 'Skills',
      methodology: 'Metodología',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Software Developer',
      description: 'Desarrollador',
      descriptionHighlight1: 'Fullstack JavaScript',
      descriptionHighlight2: '6+ años de experiencia',
      descriptionHighlight3: 'desarrollo web, servicios cloud y ciencia de datos',
      cta: 'Conocer más',
      stats: {
        years: 'años de exp.',
        projects: 'Proyectos',
        technologies: 'Tecnologías',
      },
    },
    about: {
      title: 'Sobre',
      subtitle: 'Conoce mi trayectoria profesional y experiencia.',
      description: `Especializado en desarrollo web, servicios cloud y ciencia de datos.
        Amplia experiencia en el desarrollo de software a medida para grandes y pequeñas empresas.
        Áreas de experiencia: marketing relacional, educación, servicios públicos, ecommerce, contabilidad.
        Apasionado por la tecnología, los videojuegos y el gym.`,
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Mi recorrido profesional en el desarrollo de software.',
    },
    education: {
      title: 'Estudios',
      subtitle: 'Mi formación académica y aprendizaje continuo.',
    },
    skills: {
      title: 'Conocimientos de',
      subtitle: 'Lenguajes, frameworks, bases de datos y herramientas que domino.',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        database: 'Bases de Datos',
        tools: 'Herramientas',
      },
    },
    methodology: {
      title: 'Mi',
      subtitle: 'Un proceso estructurado para convertir ideas en productos digitales exitosos.',
      iterativeTitle: 'Un Proceso',
      iterativeSubtitle: 'Mi metodología es flexible y se adapta a las necesidades de cada proyecto.',
      communication: 'Comunicación Constante',
      communicationDesc: 'Mantente informado del progreso en cada etapa del desarrollo.',
      iterations: 'Iteraciones Rápidas',
      iterationsDesc: 'Entregas frecuentes para que puedas ver el progreso y dar feedback.',
      quality: 'Calidad Garantizada',
      qualityDesc: 'Testing riguroso antes de cada entrega para asegurar un producto sólido.',
      steps: {
        idea: { title: 'Idea', description: 'Definimos juntos el concepto y objetivos del proyecto.' },
        planning: { title: 'Planificación', description: 'Estructuramos el alcance, tecnologías y cronograma.' },
        design: { title: 'Diseño', description: 'Creamos wireframes y prototipos de la interfaz.' },
        development: { title: 'Desarrollo', description: 'Implementamos el código con las mejores prácticas.' },
        testing: { title: 'Testing', description: 'Probamos exhaustivamente para garantizar calidad.' },
        deployment: { title: 'Despliegue', description: 'Publicamos y configuramos el proyecto en producción.' },
      },
    },
    contact: {
      title: 'Trabajemos',
      subtitle: 'Estoy disponible para proyectos freelance y oportunidades de trabajo. Contáctame para discutir tu próximo proyecto.',
      email: 'Enviar Email',
      phone: 'Teléfono',
      followMe: 'Sígueme',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      contactInfo: 'Información de Contacto',
    },
    common: {
      present: 'Presente',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      methodology: 'Methodology',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Software Developer',
      description: 'Developer',
      descriptionHighlight1: 'Fullstack JavaScript',
      descriptionHighlight2: '6+ years of experience',
      descriptionHighlight3: 'web development, cloud services and data science',
      cta: 'Learn more',
      stats: {
        years: 'Years of exp.',
        projects: 'Projects',
        technologies: 'Technologies',
      },
    },
    about: {
      title: 'About',
      subtitle: 'Learn about my professional journey and experience.',
      description: `Specialized in web development, cloud services and data science.
        Extensive experience in custom software development for large and small companies.
        Areas of expertise: relational marketing, education, public services, ecommerce, accounting.
        Passionate about technology, video games and gym.`,
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey in software development.',
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background and continuous learning.',
    },
    skills: {
      title: 'Programming',
      subtitle: 'Languages, frameworks, databases and tools I master.',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        database: 'Databases',
        tools: 'Tools',
      },
    },
    methodology: {
      title: 'My',
      subtitle: 'A structured process to turn ideas into successful digital products.',
      iterativeTitle: 'An Iterative',
      iterativeSubtitle: 'My methodology is flexible and adapts to each project needs.',
      communication: 'Constant Communication',
      communicationDesc: 'Stay informed of progress at every stage of development.',
      iterations: 'Fast Iterations',
      iterationsDesc: 'Frequent deliveries so you can see progress and give feedback.',
      quality: 'Guaranteed Quality',
      qualityDesc: 'Rigorous testing before each delivery to ensure a solid product.',
      steps: {
        idea: { title: 'Idea', description: 'We define together the concept and project goals.' },
        planning: { title: 'Planning', description: 'We structure the scope, technologies and timeline.' },
        design: { title: 'Design', description: 'We create wireframes and interface prototypes.' },
        development: { title: 'Development', description: 'We implement the code with best practices.' },
        testing: { title: 'Testing', description: 'We test thoroughly to ensure quality.' },
        deployment: { title: 'Deployment', description: 'We publish and configure the project in production.' },
      },
    },
    contact: {
      title: "Let's Work",
      subtitle: "I'm available for freelance projects and job opportunities. Contact me to discuss your next project.",
      email: 'Send Email',
      phone: 'Phone',
      followMe: 'Follow Me',
    },
    footer: {
      rights: 'All rights reserved.',
      contactInfo: 'Contact Information',
    },
    common: {
      present: 'Present',
    },
  },
};

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}

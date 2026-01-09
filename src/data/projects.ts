import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'horario-cnca',
    title: 'Horario CNCA',
    description: 'Software de horarios para gestionar y agilizar la creacion y el manejo de los horarios de las fichas, ambientes e instructores del SENA.',
    fullDescription: `Sistema completo de gestion de horarios desarrollado para el Centro Nacional Colombo Aleman (CNCA) del SENA.
      Esta aplicacion permite a los funcionarios crear, modificar y gestionar los horarios de las fichas de formacion,
      asignacion de ambientes e instructores de manera eficiente y visual.

      El sistema incluye validaciones automaticas para evitar cruces de horarios, reportes exportables,
      y una interfaz intuitiva que reduce significativamente el tiempo de planificacion academica.`,
    thumbnail: '/images/projects/horario/thumbnail.png',
    gallery: [
      '/images/projects/horario/gallery/imagen1.png',
      '/images/projects/horario/gallery/imagen2.png',
      '/images/projects/horario/gallery/imagen3.png',
      '/images/projects/horario/gallery/imagen4.png',
      '/images/projects/horario/gallery/imagen5.png',
      '/images/projects/horario/gallery/imagen6.png',
      '/images/projects/horario/gallery/imagen7.png'
    ],
    technologies: ['PHP', 'Vue.js', 'MySQL', 'Bootstrap', 'JavaScript'],
    status: 'completed',
    features: [
      'Gestion de horarios por fichas de formacion',
      'Asignacion de ambientes e instructores',
      'Validacion automatica de cruces de horario',
      'Reportes exportables en PDF y Excel',
      'Sistema de autenticacion de usuarios',
      'Panel de administracion completo'
    ],
    year: '2019'
  },
  {
    slug: 'confecciones-lucelis',
    title: 'Confecciones Lucelis',
    description: 'Pagina web para la visualizacion de productos e informacion del negocio Confecciones Lucelis del Colombo Aleman.',
    fullDescription: `Sitio web de e-commerce desarrollado para Confecciones Lucelis, un negocio de confecciones
      del area del Colombo Aleman. El sitio permite a los clientes explorar el catalogo de productos,
      ver detalles de cada articulo y contactar directamente con el negocio.

      Diseño responsive que se adapta a todos los dispositivos, optimizado para SEO
      y con integracion a redes sociales para mayor alcance.`,
    thumbnail: '/images/projects/confecciones-lucelis/thumbnail.png',
    gallery: [
      '/images/projects/confecciones-lucelis/gallery/imagen1.png',
      '/images/projects/confecciones-lucelis/gallery/imagen2.png',
      '/images/projects/confecciones-lucelis/gallery/imagen3.png'
    ],
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5'],
    status: 'completed',
    features: [
      'Catalogo de productos interactivo',
      'Diseño responsive para moviles',
      'Optimizacion SEO',
      'Integracion con WhatsApp',
      'Galeria de imagenes',
      'Informacion de contacto y ubicacion'
    ],
    year: '2019'
  },
  {
    slug: 'mi-portafolio',
    title: 'Mi Portafolio Web',
    description: 'Mi portafolio web personal, creado para mostrar mis proyectos, habilidades y experiencia profesional.',
    fullDescription: `Este mismo sitio web que estas viendo. Desarrollado con las tecnologias mas modernas
      del ecosistema web: Astro para generacion estatica ultra-rapida, TailwindCSS para estilos
      utility-first, y TypeScript para mayor seguridad en el codigo.

      Incluye efectos de glassmorphism, modo oscuro/claro, animaciones fluidas y optimizacion
      para un rendimiento excepcional en Lighthouse.`,
    thumbnail: '/images/projects/my-website/thumbnail.png',
    gallery: [
      '/images/projects/my-website/gallery/imagen1.png'
    ],
    technologies: ['Astro', 'TailwindCSS', 'TypeScript'],
    status: 'completed',
    features: [
      'Diseño glassmorphism moderno',
      'Modo oscuro y claro',
      'Animaciones fluidas',
      'SEO optimizado',
      'Performance 90+ en Lighthouse',
      'Totalmente responsive'
    ],
    links: {
      github: 'https://github.com/archbold09/myPersonalWebsite'
    },
    year: '2024'
  },
  {
    slug: 'proximamente',
    title: 'Proximo Proyecto',
    description: 'Nuevos proyectos en desarrollo. Mantente atento para ver las ultimas creaciones.',
    fullDescription: 'Proyectos en desarrollo que seran publicados proximamente.',
    thumbnail: '/images/hero/inicio1.png',
    gallery: [],
    technologies: ['React', 'Node.js', 'TypeScript'],
    status: 'planned',
    features: [
      'En desarrollo...'
    ],
    year: '2024'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getCompletedProjects(): Project[] {
  return projects.filter(project => project.status === 'completed');
}

export function getAllProjects(): Project[] {
  return projects;
}

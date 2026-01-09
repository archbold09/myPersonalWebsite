import type { MethodologyStep } from '../types';

export const methodologySteps: MethodologyStep[] = [
  {
    id: 1,
    title: 'Idea',
    titleEs: 'Idea',
    titleEn: 'Idea',
    description: 'Todo comienza con una idea. Analizo tus necesidades y objetivos.',
    descriptionEs: 'Todo comienza con una idea. Analizo tus necesidades y objetivos para entender que solucion se adapta mejor a tu proyecto.',
    descriptionEn: 'Everything starts with an idea. I analyze your needs and goals to understand what solution best fits your project.',
    icon: 'lightbulb',
    image: '/images/methodology/idea.png'
  },
  {
    id: 2,
    title: 'Especificacion',
    titleEs: 'Especificacion',
    titleEn: 'Specification',
    description: 'Definimos requisitos detallados y alcance del proyecto.',
    descriptionEs: 'Definimos los requisitos detallados, funcionalidades y alcance del proyecto. Creamos un plan claro y medible.',
    descriptionEn: 'We define detailed requirements, functionalities and project scope. We create a clear and measurable plan.',
    icon: 'list',
    image: '/images/methodology/lista.png'
  },
  {
    id: 3,
    title: 'Diseno',
    titleEs: 'Diseno',
    titleEn: 'Design',
    description: 'Creo bocetos y prototipos visuales de la interfaz.',
    descriptionEs: 'Creo bocetos y prototipos visuales. Disenamos la experiencia de usuario y la interfaz antes de escribir codigo.',
    descriptionEn: 'I create visual sketches and prototypes. We design the user experience and interface before writing code.',
    icon: 'pen-tool',
    image: '/images/methodology/boceto.png'
  },
  {
    id: 4,
    title: 'Maquetacion',
    titleEs: 'Maquetacion',
    titleEn: 'Layout',
    description: 'Transformo los disenos en paginas web funcionales.',
    descriptionEs: 'Transformo los disenos en paginas web funcionales. Implemento el frontend con las mejores practicas de desarrollo.',
    descriptionEn: 'I transform designs into functional web pages. I implement the frontend with best development practices.',
    icon: 'layout',
    image: '/images/methodology/paginaDiseno.png'
  },
  {
    id: 5,
    title: 'Desarrollo',
    titleEs: 'Desarrollo',
    titleEn: 'Development',
    description: 'Construyo la logica del negocio y APIs robustas.',
    descriptionEs: 'Construyo la logica del negocio, bases de datos y APIs. Desarrollo el backend robusto y escalable.',
    descriptionEn: 'I build business logic, databases and APIs. I develop a robust and scalable backend.',
    icon: 'code',
    image: '/images/methodology/aplicacion.png'
  },
  {
    id: 6,
    title: 'Publicacion',
    titleEs: 'Publicacion',
    titleEn: 'Deployment',
    description: 'Desplegamos la aplicacion en produccion.',
    descriptionEs: 'Desplegamos la aplicacion en produccion. Configuramos servidores, dominios y monitoreo continuo.',
    descriptionEn: 'We deploy the application to production. We configure servers, domains and continuous monitoring.',
    icon: 'upload-cloud',
    image: '/images/methodology/publicar.png'
  }
];

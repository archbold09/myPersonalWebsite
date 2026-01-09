import type { MethodologyStep } from '../types';

export const methodologySteps: MethodologyStep[] = [
  {
    id: 1,
    title: 'Idea',
    description: 'Todo comienza con una idea. Analizo tus necesidades y objetivos para entender que solucion se adapta mejor a tu proyecto.',
    icon: 'lightbulb',
    image: '/images/methodology/idea.png'
  },
  {
    id: 2,
    title: 'Especificacion',
    description: 'Definimos los requisitos detallados, funcionalidades y alcance del proyecto. Creamos un plan claro y medible.',
    icon: 'list',
    image: '/images/methodology/lista.png'
  },
  {
    id: 3,
    title: 'Diseno',
    description: 'Creo bocetos y prototipos visuales. Diseñamos la experiencia de usuario y la interfaz antes de escribir codigo.',
    icon: 'pen-tool',
    image: '/images/methodology/boceto.png'
  },
  {
    id: 4,
    title: 'Maquetacion',
    description: 'Transformo los diseños en paginas web funcionales. Implemento el frontend con las mejores practicas de desarrollo.',
    icon: 'layout',
    image: '/images/methodology/paginaDiseno.png'
  },
  {
    id: 5,
    title: 'Desarrollo',
    description: 'Construyo la logica del negocio, bases de datos y APIs. Desarrollo el backend robusto y escalable.',
    icon: 'code',
    image: '/images/methodology/aplicacion.png'
  },
  {
    id: 6,
    title: 'Publicacion',
    description: 'Desplegamos la aplicacion en produccion. Configuramos servidores, dominios y monitoreo continuo.',
    icon: 'upload-cloud',
    image: '/images/methodology/publicar.png'
  }
];

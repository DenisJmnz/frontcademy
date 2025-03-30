// Ejemplo para el máster de Full Stack
import { fullstackSyllabus } from '../syllabus/fullstack';

const masterFullstack = {
  id: 'master-fullstack',
  title: 'Máster en Desarrollo Full Stack',
  description: 'Conviértete en desarrollador web completo dominando tanto el frontend como el backend',
  fullDescription: 'Programa completo que te permitirá dominar el desarrollo web tanto en frontend como en backend. Aprenderás las tecnologías más demandadas del mercado y realizarás proyectos reales.',
  heroImage: '@assets/images/masters/fullstack/cover.jpg',
  syllabusUrl: '/master-fullstack.pdf',
  schedule: {
    duration: '9 meses',
    hours: '400 horas'
  },
  employmentRate: 98,
  technologies: [
    {
      name: 'React',
      description: 'Biblioteca JavaScript para construir interfaces de usuario',
      iconType: 'Javascript'
    },
    {
      name: 'Node.js',
      description: 'Entorno de ejecución para JavaScript',
      iconType: 'Code'
    },
    {
      name: 'MongoDB',
      description: 'Base de datos NoSQL líder en el mercado',
      iconType: 'Storage'
    }
  ],
  syllabus: fullstackSyllabus.modules,
  keyPoints: [
    "Formación 100% práctica",
    "Mentorías personalizadas",
    "Proyectos reales",
    "Bolsa de empleo exclusiva"
  ],
  mainTechnologies: [
    {
      name: "React",
      logo: "/path/to/react-logo.png"
    },
    {
      name: "Node.js",
      logo: "/path/to/nodejs-logo.png"
    }
  ]
};

export const mastersData = {
  'master-fullstack': masterFullstack,
  // ... otros másters
};

export default masterFullstack; 
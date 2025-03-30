import cybersecuritySyllabus from '../syllabus/cybersecurity';

export const masterCybersecurity = {
  id: 'master-cybersecurity',
  title: 'Máster en Ciberseguridad',
  description: 'Conviértete en experto en seguridad informática',
  fullDescription: 'Programa completo que te permitirá dominar la seguridad informática...',
  heroImage: '@assets/images/masters/cybersecurity/cover.jpg',
  syllabusUrl: '/master-cibersecurity.pdf',  // Este archivo debe estar en la carpeta public
  syllabus: cybersecuritySyllabus.modules,
  // ... resto de propiedades
};

// Asegurarnos que se exporta correctamente
export default masterCybersecurity; 
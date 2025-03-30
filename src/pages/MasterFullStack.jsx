import React, { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { fullstackSyllabus } from '../data/syllabus/fullstack';
import MasterDetailPage from '../components/MasterDetailPage/MasterDetailPage';

const masterData = {
  title: "Máster en Desarrollo Full Stack",
  description: "Conviértete en un desarrollador web completo dominando tanto el frontend como el backend",
  heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  fullDescription: "En un mundo donde la transformación digital es imparable, los desarrolladores Full Stack son los arquitectos del futuro digital. Este máster te convertirá en un profesional capaz de crear cualquier producto digital desde cero, dominando tanto el frontend como el backend, e integrando las últimas tecnologías incluyendo Inteligencia Artificial.\n\n" +
  "La revolución digital está transformando todas las industrias, y los desarrolladores Full Stack son los creadores que están dando forma a este nuevo mundo digital. Con la integración de la Inteligencia Artificial en el desarrollo web, las posibilidades son infinitas y la demanda de profesionales cualificados crece exponencialmente.",
  skills: "Imagina poder construir aplicaciones web completas desde cero, dominar las tecnologías más demandadas del mercado, y tener la capacidad de crear productos digitales que impacten en la vida de miles de personas. Aprenderás las tecnologías más potentes, desde el desarrollo frontend con React hasta el backend con Node.js, incluyendo bases de datos, cloud y DevOps.\n\n" +
  "No solo aprenderás a programar: te convertirás en un creador digital completo. Ya sea que sueñes con lanzar tu propia startup o aspires a destacar en las empresas más innovadoras del sector, este máster te dará todas las herramientas necesarias para triunfar en el mundo digital.",
  syllabusUrl: '/pdfs/fullstack-syllabus.pdf',
  technologies: fullstackSyllabus.technologies,
  keyPoints: [
    "Aprende las tecnologías más demandadas del mercado",
    "Desarrolla proyectos reales con empresas colaboradoras",
    "Mentorización personalizada con expertos del sector",
    "Acceso a bolsa de empleo exclusiva",
    "Certificación profesional al completar el máster",
    "Posibilidad de financiación personalizada",
    "Clases en directo con profesionales en activo",
    "Acceso a recursos y materiales exclusivos",
    "Networking con otros profesionales del sector",
    "Prácticas garantizadas en empresas líderes",
    "Desarrollo de portfolio profesional",
    "Preparación para entrevistas técnicas"
  ],
  employmentRate: 97,
  schedule: {
    duration: "6 meses",
    hours: "480 horas de formación",
    format: "Clases en directo y mentorías personalizadas"
  },
  certification: {
    title: "Certificación Profesional en Desarrollo Full Stack",
    description: "Certificado avalado por la industria que acredita tus competencias como desarrollador Full Stack"
  },
  financing: {
    available: true,
    options: [
      "Pago único con descuento",
      "Financiación hasta en 12 meses",
      "Becas disponibles hasta 1.500€"
    ]
  },
  mainTechnologies: [
    {
      name: "HTML5",
      logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    },
    {
      name: "CSS3",
      logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg",
    },
    {
      name: "React",
      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "Node.js",
      logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      name: "Express",
      logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    },
    {
      name: "MongoDB",
      logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    },
    {
      name: "Git",
      logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Docker",
      logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    },
    {
      name: "Vercel",
      logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    },
    {
      name: "Netlify",
      logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    }
  ],
};

const MasterFullStack = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <MasterDetailPage masterData={masterData} />
    </Suspense>
  );
};

export default MasterFullStack; 
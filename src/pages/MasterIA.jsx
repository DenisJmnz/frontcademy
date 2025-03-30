import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Box, CircularProgress } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataIcon from '@mui/icons-material/DataObject';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { iaSyllabus } from '../data/syllabus/ia';

const MasterDetailPage = React.lazy(() => import('../components/MasterDetailPage/MasterDetailPage'));

const masterData = {
  title: "Máster en Inteligencia Artificial",
  description: "Lidera la revolución tecnológica creando soluciones de IA avanzadas",
  heroImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
  fullDescription: "La Inteligencia Artificial está transformando cada aspecto de nuestra sociedad, desde cómo trabajamos hasta cómo vivimos. Este máster te convertirá en un experto capaz de crear soluciones de IA que revolucionen industrias enteras. Aprenderás desde los fundamentos hasta las técnicas más avanzadas, trabajando con tecnologías de vanguardia como GPT, deep learning y sistemas de visión artificial.\n\n" +
    "La demanda de expertos en IA crece exponencialmente, y las empresas compiten por el mejor talento. Las aplicaciones de la IA son infinitas: desde sistemas de recomendación hasta vehículos autónomos, desde diagnóstico médico hasta análisis financiero predictivo.",
  skills: "Imagina ser parte de esta revolución tecnológica, creando sistemas inteligentes que pueden aprender, adaptarse y evolucionar. Desarrollarás proyectos fascinantes que van desde crear asistentes virtuales avanzados hasta sistemas autónomos de toma de decisiones que transformarán industrias enteras.\n\n" +
    "Este máster te posicionará en la vanguardia de esta revolución tecnológica, preparándote para liderar la próxima generación de innovaciones en IA.",
  syllabusUrl: './../public/pdfs/master-ia.pdf',
  technologies: iaSyllabus.technologies,
  keyPoints: [
    "Aprende las últimas tecnologías en IA y ML",
    "Trabaja con datasets reales y casos prácticos",
    "Mentorización por expertos en IA",
    "Desarrolla un portfolio de proyectos de IA",
    "Certificación profesional en IA",
    "Posibilidad de financiación personalizada",
    "Clases en directo con profesionales en activo",
    "Acceso a recursos y datasets exclusivos",
    "Networking con otros profesionales del sector",
    "Prácticas garantizadas en empresas tecnológicas",
    "Desarrollo de modelos de IA avanzados",
    "Preparación para entrevistas técnicas"
  ],
  employmentRate: 98,
  schedule: {
    duration: "6 meses",
    hours: "480 horas de formación",
    format: "Clases en directo y mentorías personalizadas"
  },
  certification: {
    title: "Certificación Profesional en Inteligencia Artificial",
    description: "Certificado avalado por la industria que acredita tus competencias en IA y Machine Learning"
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
      name: "Python",
      logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    },
    {
      name: "PyTorch",
      logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    },
    {
      name: "Scikit-learn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      name: "Keras",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    },
    {
      name: "OpenCV",
      logo: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
    },
    {
      name: "Pandas",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
    },
    {
      name: "Hugging Face",
      logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    },
    {
      name: "CUDA",
      logo: "https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg",
    },
    {
      name: "MLflow",
      logo: "https://raw.githubusercontent.com/mlflow/mlflow/master/assets/icon.svg",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
    },
    {
      name: "Jupyter",
      logo: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
    }
  ],
};

const MasterIA = () => {
  return (
    <>
      <Helmet>
        <title>Máster en Inteligencia Artificial | Appcademy</title>
        <meta name="description" content={masterData.description} />
        <meta property="og:title" content="Máster en Inteligencia Artificial | Appcademy" />
        <meta property="og:description" content={masterData.description} />
        <meta property="og:image" content={masterData.heroImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1976d2" />
        <link rel="preload" href={masterData.heroImage} as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>
      <Suspense
        fallback={
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default'
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <MasterDetailPage masterData={masterData} />
      </Suspense>
    </>
  );
};

export default MasterIA; 
import React from 'react';
import MasterDetailPage from '../components/MasterDetailPage/MasterDetailPage';
import StorageIcon from '@mui/icons-material/Storage';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BusinessIcon from '@mui/icons-material/Business';
import { datascienceSyllabus } from '../data/syllabus/datascience';

const masterData = {
  title: "Máster en Data Science",
  description: "Lidera la revolución de los datos y la inteligencia artificial",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  fullDescription: "En la era del Big Data y la Inteligencia Artificial, los científicos de datos son los profesionales más demandados del mercado. Este máster te convertirá en un experto capaz de extraer conocimiento valioso de los datos y crear soluciones de IA que transformen las empresas y la sociedad.\n\n" +
  "Adéntrate en el fascinante mundo del Data Science, donde los datos se convierten en el nuevo oro del siglo XXI. Los datos son el motor de la transformación digital, y las empresas necesitan expertos que puedan convertirlos en insights accionables.",
  skills: "Aprenderás a descifrar los patrones ocultos en los datos y convertirlos en decisiones estratégicas que cambien el rumbo de las empresas. Dominarás el ciclo completo del análisis de datos: desde la recolección y limpieza hasta el análisis avanzado y la creación de modelos predictivos con IA.\n\n" +
  "Desde el primer día, te sumergirás en proyectos reales, trabajando con datasets complejos y herramientas de vanguardia. No solo aprenderás teoría: vivirás la emoción de descubrir insights que pueden cambiar el mundo. Las oportunidades son enormes: podrás liderar proyectos de transformación digital en grandes empresas o crear soluciones de IA que revolucionen industrias enteras.",
  syllabusUrl: '/pdfs/datascience-syllabus.pdf',
  technologies: datascienceSyllabus.technologies,
  keyPoints: [
    "Domina las herramientas más utilizadas en Data Science",
    "Proyectos reales con empresas del sector",
    "Mentorización personalizada",
    "Acceso a datasets exclusivos",
    "Certificación profesional en Data Science",
    "Posibilidad de financiación personalizada",
    "Clases en directo con científicos de datos",
    "Acceso a recursos y herramientas premium",
    "Networking con profesionales del Big Data",
    "Prácticas en empresas data-driven",
    "Desarrollo de proyectos de análisis avanzado",
    "Preparación para entrevistas técnicas"
  ],
  employmentRate: 96,
  schedule: {
    duration: "6 meses",
    hours: "480 horas de formación",
    format: "Clases en directo y mentorías personalizadas"
  },
  certification: {
    title: "Certificación Profesional en Data Science",
    description: "Certificado avalado por la industria que acredita tus competencias como Data Scientist"
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
      name: "R",
      logo: "https://www.r-project.org/logo/Rlogo.svg",
    },
    {
      name: "SQL",
      logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    },
    {
      name: "Tableau",
      logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    },
    {
      name: "Power BI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    },
    {
      name: "Apache Spark",
      logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
    },
    {
      name: "Hadoop",
      logo: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
    },
    {
      name: "MongoDB",
      logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "Apache Kafka",
      logo: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    },
    {
      name: "Databricks",
      logo: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
    },
    {
      name: "Snowflake",
      logo: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg",
    },
    {
      name: "dbt",
      logo: "https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png",
    }
  ],
};

const MasterDataScience = () => {
  return <MasterDetailPage masterData={masterData} />;
};

export default MasterDataScience; 
import React from 'react';
import MasterDetailPage from '../components/MasterDetailPage/MasterDetailPage';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import BugReportIcon from '@mui/icons-material/BugReport';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { cybersecuritySyllabus } from '../data/syllabus/cybersecurity';

const masterData = {
  title: "Máster en Ciberseguridad",
  description: "Protege el futuro digital contra las amenazas más sofisticadas",
  heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2400&brightness=120&contrast=90",
  fullDescription: "En un mundo hiperconectado, la ciberseguridad se ha convertido en una prioridad absoluta para empresas y organizaciones. Este máster te convertirá en un profesional de élite capaz de proteger sistemas críticos y datos sensibles contra las amenazas más sofisticadas, utilizando tecnologías avanzadas e inteligencia artificial.\n\n" +
  "La ciberdelincuencia evoluciona constantemente, y necesitamos expertos que puedan anticiparse a las amenazas. Las organizaciones buscan desesperadamente profesionales capaces de proteger sus activos digitales y mantener la integridad de sus sistemas.",
  skills: "Desde el primer día, te sumergirás en escenarios reales de ciberataques, aprendiendo técnicas avanzadas de hacking ético y forensia digital. No solo aprenderás a defender: comprenderás cómo piensan los atacantes para anticiparte a sus movimientos.\n\n" +
  "Te convertirás en un guardián digital, dominando las últimas técnicas de seguridad y sistemas de detección basados en IA. La ciberseguridad no es solo una profesión: es una misión para proteger nuestro futuro digital.",
  syllabusUrl: '/pdfs/cybersecurity-syllabus.pdf',
  technologies: cybersecuritySyllabus.technologies,
  keyPoints: [
    "Aprende técnicas avanzadas de seguridad",
    "Laboratorios prácticos en entornos reales",
    "Preparación para certificaciones oficiales",
    "Mentorización por expertos en ciberseguridad",
    "Certificación profesional en Ciberseguridad",
    "Posibilidad de financiación personalizada",
    "Clases en directo con expertos en seguridad",
    "Acceso a laboratorios virtuales exclusivos",
    "Networking con profesionales del sector",
    "Prácticas en empresas de ciberseguridad",
    "Desarrollo de proyectos de hacking ético",
    "Preparación para entrevistas técnicas"
  ],
  employmentRate: 98,
  schedule: {
    duration: "6 meses",
    hours: "480 horas de formación",
    format: "Clases en directo y mentorías personalizadas"
  },
  certification: {
    title: "Certificación Profesional en Ciberseguridad",
    description: "Certificado avalado por la industria que acredita tus competencias en seguridad informática"
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
      name: "Kali Linux",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg",
    },
    {
      name: "Snort",
      logo: "https://www.vectorlogo.zone/logos/snort/snort-icon.svg",
    },
    {
      name: "Wireshark",
      logo: "https://www.wireshark.org/assets/theme-2015/images/wireshark_logo.png",
    },
    {
      name: "Burp Suite",
      logo: "https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg",
    },
    {
      name: "Nmap",
      logo: "https://nmap.org/images/nmap-logo-256x256.png",
    },
    {
      name: "Python",
      logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    },
    {
      name: "Linux",
      logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    },
    {
      name: "Docker",
      logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    },
    {
      name: "Splunk",
      logo: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg",
    },
    {
      name: "Elastic",
      logo: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
    },
    {
      name: "Fortinet",
      logo: "https://www.vectorlogo.zone/logos/fortinet/fortinet-icon.svg",
    },
    {
      name: "Hashicorp Vault",
      logo: "https://www.vectorlogo.zone/logos/vaultproject/vaultproject-icon.svg",
    }
  ],
};

const MasterCiberseguridad = () => {
  return <MasterDetailPage masterData={masterData} />;
};

export default MasterCiberseguridad; 
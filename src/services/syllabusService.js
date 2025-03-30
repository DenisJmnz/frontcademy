import { jsPDF } from 'jspdf';
import { fullstackSyllabus } from '../data/syllabus/fullstack';
import { iaSyllabus } from '../data/syllabus/ia';
import { datascienceSyllabus } from '../data/syllabus/datascience';
import { cybersecuritySyllabus } from '../data/syllabus/cybersecurity';

const generatePDF = (syllabus) => {
  const doc = new jsPDF();
  
  // Configuración de estilos
  const styles = {
    title: { fontSize: 24, fontStyle: 'bold' },
    subtitle: { fontSize: 18, fontStyle: 'bold' },
    heading: { fontSize: 14, fontStyle: 'bold' },
    normal: { fontSize: 12 },
    small: { fontSize: 10 }
  };

  let yPos = 20;
  const margin = 20;
  const lineHeight = 7;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(styles.title.fontSize);
  doc.text(syllabus.title, margin, yPos);
  yPos += lineHeight * 2;

  // Duración
  doc.setFontSize(styles.normal.fontSize);
  doc.text(`Duración: ${syllabus.duration}`, margin, yPos);
  yPos += lineHeight * 2;

  // Módulos
  syllabus.modules.forEach(module => {
    // Verificar si necesitamos nueva página
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(styles.subtitle.fontSize);
    doc.text(module.title, margin, yPos);
    yPos += lineHeight;

    doc.setFontSize(styles.normal.fontSize);
    doc.text(`Duración: ${module.duration}`, margin, yPos);
    yPos += lineHeight * 1.5;

    module.content.forEach(section => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFont('helvetica', 'bold');
      doc.text(section.title, margin + 5, yPos);
      yPos += lineHeight;

      doc.setFont('helvetica', 'normal');
      section.topics.forEach(topic => {
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(`• ${topic}`, margin + 10, yPos);
        yPos += lineHeight;
      });

      yPos += lineHeight / 2;
    });

    yPos += lineHeight;
  });

  return doc;
};

export const generateAllSyllabusPDFs = () => {
  const syllabuses = [
    { data: fullstackSyllabus, filename: 'fullstack-syllabus.pdf' },
    { data: iaSyllabus, filename: 'ia-syllabus.pdf' },
    { data: datascienceSyllabus, filename: 'datascience-syllabus.pdf' },
    { data: cybersecuritySyllabus, filename: 'cybersecurity-syllabus.pdf' }
  ];

  syllabuses.forEach(({ data, filename }) => {
    const doc = generatePDF(data);
    // En lugar de guardar, abrimos en una nueva pestaña
    doc.output('dataurlnewwindow');
  });
}; 
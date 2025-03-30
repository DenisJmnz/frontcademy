import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const generateSyllabusPDF = (syllabus) => {
  const doc = new jsPDF();
  
  // Añadir logo y título
  doc.setFontSize(20);
  doc.text(syllabus.title, 20, 20);
  
  // Añadir información general
  doc.setFontSize(12);
  doc.text(`Duración: ${syllabus.duration}`, 20, 30);
  
  let yPos = 40;
  
  // Iterar sobre los módulos
  syllabus.modules.forEach(module => {
    doc.setFontSize(14);
    doc.text(module.title, 20, yPos);
    yPos += 10;
    
    doc.setFontSize(12);
    doc.text(`Duración: ${module.duration}`, 20, yPos);
    yPos += 10;
    
    module.content.forEach(section => {
      doc.setFontSize(12);
      doc.text(section.title, 25, yPos);
      yPos += 10;
      
      section.topics.forEach(topic => {
        doc.setFontSize(10);
        doc.text(`• ${topic}`, 30, yPos);
        yPos += 6;
      });
      
      yPos += 5;
    });
    
    yPos += 10;
    
    // Nueva página si es necesario
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
  });
  
  return doc;
}; 
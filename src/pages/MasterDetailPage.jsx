import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MasterDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    // Extraer el ID del máster de la URL actual
    const path = location.pathname;
    
    // Mapeo directo del path al ID del máster
    let masterId = '';
    if (path === '/master-fullstack') masterId = 'fullstack';
    if (path === '/master-ia') masterId = 'ia';
    if (path === '/master-data') masterId = 'data';
    if (path === '/master-cyber') masterId = 'cyber';

    console.log('URL actual:', path);
    console.log('Master ID:', masterId);

    // Navegar con el estado
    if (masterId) {
      const state = { master: masterId };
      console.log('Enviando estado:', state);
      
      navigate('/contact', { 
        state,
        replace: true  // Usar replace para evitar problemas con el historial
      });
    } else {
      console.error('No se pudo determinar el ID del máster desde:', path);
    }
  };

  return (
    <div>
      {/* Render your component content here */}
      <button 
        onClick={handleContactClick}
        className="contact-button"
      >
        Solicitar información
      </button>
    </div>
  );
};

export default MasterDetailPage; 
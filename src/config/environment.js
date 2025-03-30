export const getApiUrl = () => {
  // Si estamos en producción, siempre usar la URL de producción
  if (import.meta.env.PROD) {
    return 'https://backademy.onrender.com';
  }
  
  // En desarrollo, usar la variable de entorno o localhost como fallback
  return import.meta.env.VITE_API_URL || 'http://localhost:5000';
};

export const getWebSocketUrl = () => {
  return getApiUrl();
};

// Configuración de entorno
export const environment = {
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
  apiUrl: getApiUrl(),
  wsUrl: getWebSocketUrl(),
  mode: import.meta.env.MODE
};

// Log de configuración
console.log('=== Environment Configuration ===');
console.log('Environment:', environment);
console.log('==============================='); 
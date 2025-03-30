import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

// Precargar recursos críticos
const preloadResources = () => {
  const resources = [
    { rel: 'preload', href: '/assets/appcademy-logo.svg', as: 'image' },
    { rel: 'preload', href: '/fonts/roboto-mono-v22-latin-900.woff2', as: 'font', type: 'font/woff2', crossorigin: true }
  ];
  
  resources.forEach(resource => {
    const link = document.createElement('link');
    Object.entries(resource).forEach(([key, value]) => link[key] = value);
    document.head.appendChild(link);
  });
};

preloadResources();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Register service worker
serviceWorkerRegistration.register()

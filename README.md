# ProdAppCademy Frontend

Este es el frontend de ProdAppCademy, una aplicación web para la gestión de cursos y estudiantes.

## Requisitos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
VITE_API_URL=http://localhost:3000
```

## Despliegue

Este proyecto está configurado para ser desplegado en Vercel. Para desplegar:

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el panel de control de Vercel
3. Vercel desplegará automáticamente cuando hagas push a la rama principal 
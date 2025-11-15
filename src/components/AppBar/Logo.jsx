import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import logoSvg from '../../assets/Logo Updademy.svg';

const Logo = ({ width, height, className, style, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  // Determinar el ancho basado en el tamaño de pantalla si no se especifica
  let logoWidth = width;
  if (!logoWidth || typeof logoWidth === 'object') {
    if (isMobile) {
      logoWidth = 150;
    } else if (isTablet) {
      logoWidth = 180;
    } else {
      logoWidth = 220;
    }
  }
  
  // Si width es un objeto con breakpoints, usar el valor apropiado
  if (typeof width === 'object' && width !== null) {
    if (isMobile) {
      logoWidth = width.xs || width.sm || 150;
    } else if (isTablet) {
      logoWidth = width.sm || width.md || 180;
    } else {
      logoWidth = width.md || width.lg || 220;
    }
  }
  
  // El SVG tiene viewBox="0 0 1200 500", así que la proporción es 2.4:1
  // Si no se especifica height, calcularlo basado en width para mantener la proporción
  const calculatedHeight = height || (logoWidth / 2.4);
  
  return (
    <img
      src={logoSvg}
      alt="Updademy Logo"
      width={logoWidth}
      height={calculatedHeight}
      className={className}
      style={{
        display: 'block',
        maxWidth: '100%',
        objectFit: 'contain',
        ...style
      }}
      {...props}
    />
  );
};

export default Logo;


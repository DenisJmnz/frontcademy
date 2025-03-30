// Variación del Logo 8 con estilo holográfico
import React from 'react';
import { Box, Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';

function NewLogo34() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
      backdropFilter: 'blur(10px)',
      p: 2,
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.3)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transform: 'translateX(-100%)',
        animation: 'shimmer 3s infinite',
      },
      '@keyframes shimmer': {
        '100%': {
          transform: 'translateX(100%)'
        }
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: 'rgba(255,255,255,0.8)',
            filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'
          }
        }}
      >
        <DataObjectIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.8)',
          fontFamily: '"Space Grotesk", sans-serif',
          textShadow: '0 0 10px rgba(255,255,255,0.5)',
          background: 'linear-gradient(90deg, #ffd700, #ff69b4, #87ceeb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'colorShift 8s linear infinite',
          '@keyframes colorShift': {
            '100%': {
              filter: 'hue-rotate(360deg)'
            }
          }
        }}
      >
        appcademy_
      </Typography>
    </Box>
  );
}

export default NewLogo34; 
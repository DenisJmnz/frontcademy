// Estilo sci-fi futurista
import React from 'react';
import { Box, Typography } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';

function NewLogo38() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(90deg, rgba(13,17,23,0.8) 0%, rgba(23,27,33,0.8) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(48,54,61,0.8)',
      p: 2,
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #58a6ff, transparent)',
        animation: 'scanline 2s linear infinite'
      },
      '@keyframes scanline': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' }
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: '#58a6ff',
            filter: 'drop-shadow(0 0 5px #58a6ff)'
          }
        }}
      >
        <RocketIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 600,
          color: '#58a6ff',
          fontFamily: '"Rajdhani", sans-serif',
          letterSpacing: '2px',
          textShadow: '0 0 10px rgba(88,166,255,0.5)',
          position: 'relative',
          '&::after': {
            content: '"_"',
            animation: 'blink 1s step-end infinite'
          },
          '@keyframes blink': {
            '50%': { opacity: 0 }
          }
        }}
      >
        [APP:CADEMY]
      </Typography>
    </Box>
  );
}

export default NewLogo38; 
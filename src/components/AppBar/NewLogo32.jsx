// Variación del Logo 13 con estilo glitch
import React from 'react';
import { Box, Typography } from '@mui/material';
import BrainIcon from '@mui/icons-material/Psychology';

function NewLogo32() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      position: 'relative',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'rgba(255,0,0,0.2)',
        animation: 'glitch 2s infinite',
        clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        transform: 'translate(-5px)',
        mixBlendMode: 'multiply'
      },
      '&::after': {
        background: 'rgba(0,255,255,0.2)',
        animation: 'glitch 2s infinite reverse',
        clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        transform: 'translate(5px)'
      },
      '@keyframes glitch': {
        '0%, 100%': { transform: 'translate(0)' },
        '20%': { transform: 'translate(-5px, 5px)' },
        '40%': { transform: 'translate(-5px, -5px)' },
        '60%': { transform: 'translate(5px, 5px)' },
        '80%': { transform: 'translate(5px, -5px)' }
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#000',
          borderRadius: '8px',
          p: 1.2,
          position: 'relative',
          zIndex: 1,
          '& svg': {
            fontSize: 'inherit',
            color: '#FFF'
          }
        }}
      >
        <BrainIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: '#FFF',
          fontFamily: '"Chakra Petch", sans-serif',
          position: 'relative',
          zIndex: 1
        }}
      >
        APPCADEMY
      </Typography>
    </Box>
  );
}

export default NewLogo32; 
// Estilo 3D isométrico
import React from 'react';
import { Box, Typography } from '@mui/material';
import CubeIcon from '@mui/icons-material/ViewInAr';

function NewLogo37() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)',
      transformStyle: 'preserve-3d'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          p: 1.2,
          borderRadius: '12px',
          boxShadow: `
            5px 5px 0 #4F46E5,
            10px 10px 20px rgba(79, 70, 229, 0.3)
          `,
          transform: 'translateZ(20px)',
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <CubeIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 800,
          color: '#4F46E5',
          fontFamily: '"Audiowide", cursive',
          textShadow: '2px 2px 0 rgba(79, 70, 229, 0.3)',
          transform: 'translateZ(10px)'
        }}
      >
        APPCADEMY
      </Typography>
    </Box>
  );
}

export default NewLogo37; 
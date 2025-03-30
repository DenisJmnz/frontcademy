import React from 'react';
import { Box, Typography } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';

function NewLogo3() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1.5  // Gap más pequeño
    }}>
      {/* Icono con borde */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid',
          borderColor: 'primary.main',
          bgcolor: 'transparent',
          borderRadius: '8px',
          p: 1,
          '& svg': {
            fontSize: 'inherit',
            color: 'primary.main'
          }
        }}
      >
        <DevicesIcon />
      </Box>
      
      {/* Texto del Logo con estilo moderno */}
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 800,
          color: 'primary.main',
          letterSpacing: '-1px',  // Espaciado negativo para un look más moderno
          fontFamily: '"Inter", sans-serif'
        }}
      >
        appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo3; 
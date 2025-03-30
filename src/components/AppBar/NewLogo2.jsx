import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function NewLogo2() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2 
    }}>
      {/* Icono en círculo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          borderRadius: '50%',  // Círculo en lugar de cuadrado
          p: 1.2,
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <SchoolIcon />
      </Box>
      
      {/* Texto del Logo */}
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 700,
          color: 'primary.main',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'  // Todo en mayúsculas
        }}
      >
        Appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo2; 
import React from 'react';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function NewLogo4() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      position: 'relative'  // Para el efecto de superposición
    }}>
      {/* Icono con efecto de superposición */}
      <Box
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'primary.main',
            opacity: 0.2,
            borderRadius: '16px',
            transform: 'rotate(-5deg)'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            borderRadius: '16px',
            p: 1.2,
            position: 'relative',
            '& svg': {
              fontSize: 'inherit',
              color: 'white'
            }
          }}
        >
          <AutoAwesomeIcon />
        </Box>
      </Box>
      
      {/* Texto del Logo con estilo bold y elegante */}
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: 'primary.main',
          letterSpacing: '0px',
          fontFamily: '"Poppins", sans-serif',
          textTransform: 'capitalize'
        }}
      >
        Appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo4; 
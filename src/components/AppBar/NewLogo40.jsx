// Variación del Logo 6 con icono azul
import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo40() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2 
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#2563EB',  // Azul
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#DBEAFE'  // Azul claro
          }
        }}
      >
        <LightbulbIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: '#2563EB',  // Azul
          fontFamily: '"Roboto Mono", monospace'
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo40; 
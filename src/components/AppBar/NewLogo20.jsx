// Variación del Logo 6 (Developer) en tonos naranja
import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo20() {
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
          bgcolor: '#F97316', // Naranja
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#FED7AA' // Naranja claro
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
          color: '#F97316',
          fontFamily: '"Roboto Mono", monospace'
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo20; 
// Variación del Logo 6 (Developer) en tonos teal
import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo26() {
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
          bgcolor: '#0D9488',
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          boxShadow: '4px 4px 0 #115E59',
          '& svg': {
            fontSize: 'inherit',
            color: '#CCFBF1'
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
          color: '#0D9488',
          fontFamily: '"Roboto Mono", monospace',
          textShadow: '2px 2px 0 rgba(17,94,89,0.2)'
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo26; 
import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo17() {
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
          bgcolor: '#22C55E',  // Verde
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          boxShadow: '4px 4px 0 #15803D',  // Verde oscuro
          '& svg': {
            fontSize: 'inherit',
            color: '#DCFCE7'  // Verde claro
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
          color: '#22C55E',
          fontFamily: '"Roboto Mono", monospace',
          textShadow: '2px 2px 0 #15803D'
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo17; 
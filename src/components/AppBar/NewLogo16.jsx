import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo16() {
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
          bgcolor: '#6366F1',  // Indigo
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#E0E7FF'  // Light Indigo
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
          color: '#6366F1',  // Indigo
          fontFamily: '"Roboto Mono", monospace'
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo16; 
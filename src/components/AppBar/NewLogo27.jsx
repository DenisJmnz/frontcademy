// Variación del Logo 6 (Developer) con estilo cyberpunk
import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo27() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      position: 'relative'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#000',
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          border: '2px solid #FF00FF',
          boxShadow: '0 0 10px #FF00FF, inset 0 0 10px #FF00FF',
          '& svg': {
            fontSize: 'inherit',
            color: '#00FFFF',
            filter: 'drop-shadow(0 0 5px #00FFFF)'
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
          color: '#FF00FF',
          fontFamily: '"Roboto Mono", monospace',
          textShadow: '0 0 10px #FF00FF',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: 'linear-gradient(45deg, #FF00FF, #00FFFF)',
            opacity: 0.3,
            filter: 'blur(8px)',
            zIndex: -1
          }
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo27; 
// Variación del Logo 6 con estilo gaming RGB
import React from 'react';
import { Box, Typography } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function NewLogo33() {
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
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(black, black), linear-gradient(90deg, #ff0000, #00ff00, #0000ff)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
          animation: 'borderRotate 4s linear infinite',
          '@keyframes borderRotate': {
            '100%': {
              filter: 'hue-rotate(360deg)'
            }
          },
          '& svg': {
            fontSize: 'inherit',
            color: 'white',
            animation: 'colorCycle 4s linear infinite',
            '@keyframes colorCycle': {
              '0%': { color: '#ff0000' },
              '33%': { color: '#00ff00' },
              '66%': { color: '#0000ff' },
              '100%': { color: '#ff0000' }
            }
          }
        }}
      >
        <SportsEsportsIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          background: 'linear-gradient(90deg, #ff0000, #00ff00, #0000ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Russo One", sans-serif',
          animation: 'textRotate 4s linear infinite',
          '@keyframes textRotate': {
            '100%': {
              filter: 'hue-rotate(360deg)'
            }
          }
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo33; 
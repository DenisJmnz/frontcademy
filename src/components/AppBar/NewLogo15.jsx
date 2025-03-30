import React from 'react';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function NewLogo15() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(135deg, #000851 0%, #1CB5E0 100%)',
      p: 2,
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        opacity: 0.1,
        mixBlendMode: 'overlay'
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: 'white',
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
          }
        }}
      >
        <AutoAwesomeIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: 'white',
          fontFamily: '"Cal Sans", sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '0 0 10px rgba(255,255,255,0.3)'
        }}
      >
        Appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo15; 
// Variación del Logo 13 (Glassmorphism) en tonos rosados
import React from 'react';
import { Box, Typography } from '@mui/material';
import BrainIcon from '@mui/icons-material/Psychology';

function NewLogo25() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'rgba(244,114,182,0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(244,114,182,0.2)',
      p: 2,
      borderRadius: '16px'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -2,
            background: 'conic-gradient(from 0deg, #F472B6, #EC4899, #DB2777, #F472B6)',
            borderRadius: '50%',
            animation: 'spin 4s linear infinite',
            filter: 'blur(8px)'
          },
          '& svg': {
            fontSize: 'inherit',
            color: 'white',
            position: 'relative',
            zIndex: 1
          },
          '@keyframes spin': {
            '100%': {
              transform: 'rotate(360deg)'
            }
          }
        }}
      >
        <BrainIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: '#DB2777',
          textShadow: '2px 2px 4px rgba(219,39,119,0.3)',
          fontFamily: '"Clash Display", sans-serif'
        }}
      >
        Appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo25; 
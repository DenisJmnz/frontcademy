import React from 'react';
import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

function NewLogo14() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: -4,
        background: 'repeating-linear-gradient(45deg, #FF6B6B, #FF6B6B 10px, transparent 10px, transparent 20px)',
        opacity: 0.1,
        zIndex: -1
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FF6B6B',
          clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
          p: 1.5,
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <CodeIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 800,
          color: '#FF6B6B',
          fontFamily: '"Syne", sans-serif',
          letterSpacing: '-1px',
          position: 'relative',
          '&::after': {
            content: '"_"',
            animation: 'blink 1s step-end infinite'
          },
          '@keyframes blink': {
            '50%': {
              opacity: 0
            }
          }
        }}
      >
        appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo14; 
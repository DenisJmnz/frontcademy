// Variación del Logo 8 (Dark Mode) con estilo matrix
import React from 'react';
import { Box, Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';

function NewLogo28() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      bgcolor: '#001100',
      p: 2,
      borderRadius: '8px',
      border: '1px solid #00FF00',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(transparent 50%, rgba(0,255,0,0.1) 50%)',
        backgroundSize: '100% 4px',
        animation: 'scan 4s linear infinite',
        zIndex: 1
      },
      '@keyframes scan': {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(100%)' }
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          '& svg': {
            fontSize: 'inherit',
            color: '#00FF00',
            animation: 'flicker 1.5s infinite'
          },
          '@keyframes flicker': {
            '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
              opacity: 1
            },
            '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
              opacity: 0.4
            }
          }
        }}
      >
        <DataObjectIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 700,
          color: '#00FF00',
          fontFamily: '"Share Tech Mono", monospace',
          zIndex: 2,
          textShadow: '0 0 8px #00FF00'
        }}
      >
        appcademy.sys
      </Typography>
    </Box>
  );
}

export default NewLogo28; 
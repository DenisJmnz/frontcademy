// Variación del Logo 11 con estilo vaporwave
import React from 'react';
import { Box, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';

function NewLogo35() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(45deg, #FF6AD5, #C774E8)',
      p: 2,
      borderRadius: '8px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: -2,
        background: 'linear-gradient(45deg, #FF6AD5, #C774E8, #AD8CFF, #8795E8, #94D0FF)',
        borderRadius: '10px',
        zIndex: -1,
        animation: 'borderGlow 3s linear infinite',
      },
      '@keyframes borderGlow': {
        '0%, 100%': {
          opacity: 1
        },
        '50%': {
          opacity: 0.5
        }
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'perspective(500px) rotateY(-15deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#FFF',
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
          }
        }}
      >
        <GridViewIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 700,
          color: '#FFF',
          fontFamily: '"VT323", monospace',
          letterSpacing: '2px',
          textShadow: `
            2px 2px 0 #AD8CFF,
            -2px -2px 0 #94D0FF,
            4px 4px 0 rgba(0,0,0,0.2)
          `
        }}
      >
        APPCADEMY.exe
      </Typography>
    </Box>
  );
}

export default NewLogo35; 
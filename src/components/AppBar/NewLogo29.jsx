// Variación del Logo 11 (Terminal) con estilo retro-wave
import React from 'react';
import { Box, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

function NewLogo29() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(45deg, #FF1493 0%, #7B68EE 100%)',
      p: 2,
      borderRadius: '30px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: -1,
        background: 'linear-gradient(45deg, #FF1493, #7B68EE, #FF1493)',
        borderRadius: '31px',
        animation: 'borderRotate 4s linear infinite',
        zIndex: -1
      },
      '@keyframes borderRotate': {
        '100%': {
          filter: 'hue-rotate(360deg)'
        }
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: '#FFF',
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'
          }
        }}
      >
        <TerminalIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 700,
          color: '#FFF',
          fontFamily: '"Press Start 2P", cursive',
          letterSpacing: '1px',
          textShadow: '2px 2px 0 #FF1493, 4px 4px 0 #7B68EE'
        }}
      >
        ./appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo29; 
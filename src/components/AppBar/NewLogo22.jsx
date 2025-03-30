// Variación del Logo 11 (Terminal) en tonos cian
import React from 'react';
import { Box, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

function NewLogo22() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(45deg, #164E63 0%, #083344 100%)',
      p: 2,
      borderRadius: '30px',
      border: '1px solid #0E7490'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: '#06B6D4',
            animation: 'blink 1s infinite'
          },
          '@keyframes blink': {
            '50%': {
              opacity: 0.5
            }
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
          color: '#06B6D4',
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: '1px'
        }}
      >
        ./appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo22; 
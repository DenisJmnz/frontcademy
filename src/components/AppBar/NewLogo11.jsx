import React from 'react';
import { Box, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

function NewLogo11() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: 'linear-gradient(45deg, #000 0%, #333 100%)',
      p: 2,
      borderRadius: '30px',
      border: '1px solid #444'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: '#0F0',
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
          color: '#0F0',
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: '1px'
        }}
      >
        ./appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo11; 
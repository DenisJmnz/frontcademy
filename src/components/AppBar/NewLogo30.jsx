// Variación del Logo 14 con estilo pixel art
import React from 'react';
import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

function NewLogo30() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      position: 'relative',
      imageRendering: 'pixelated'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FF4081',
          p: 1.5,
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          border: '4px solid #000',
          boxShadow: '4px 4px 0 #000',
          '& svg': {
            fontSize: 'inherit',
            color: '#FFF',
            transform: 'scale(0.8)'
          }
        }}
      >
        <CodeIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: '#000',
          fontFamily: '"Press Start 2P", cursive',
          letterSpacing: '1px',
          textShadow: `
            2px 2px 0 #FF4081,
            4px 4px 0 #000
          `,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: -4,
            right: -4,
            bottom: -4,
            height: '4px',
            background: '#000'
          }
        }}
      >
        APPCADEMY
      </Typography>
    </Box>
  );
}

export default NewLogo30; 
// Variación del Logo 12 con estilo neón
import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function NewLogo31() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      bgcolor: '#0A0A0A',
      p: 3,
      borderRadius: '16px',
      position: 'relative'
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
            inset: -4,
            background: '#39FF14',
            borderRadius: '50%',
            filter: 'blur(8px)',
            opacity: 0.6,
            animation: 'pulse 2s ease-in-out infinite'
          },
          '@keyframes pulse': {
            '50%': {
              opacity: 0.4,
              filter: 'blur(12px)'
            }
          },
          '& svg': {
            fontSize: 'inherit',
            color: '#39FF14',
            position: 'relative',
            filter: 'drop-shadow(0 0 8px #39FF14)'
          }
        }}
      >
        <SchoolIcon />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            fontWeight: 800,
            color: '#39FF14',
            fontFamily: '"Orbitron", sans-serif',
            textShadow: `
              0 0 7px #39FF14,
              0 0 10px #39FF14,
              0 0 21px #39FF14
            `,
            lineHeight: 1
          }}
        >
          APP
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            fontWeight: 800,
            color: '#FE53BB',
            fontFamily: '"Orbitron", sans-serif',
            textShadow: `
              0 0 7px #FE53BB,
              0 0 10px #FE53BB,
              0 0 21px #FE53BB
            `,
            lineHeight: 1
          }}
        >
          CADEMY
        </Typography>
      </Box>
    </Box>
  );
}

export default NewLogo31; 
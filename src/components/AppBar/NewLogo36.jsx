// Estilo minimalista japonés
import React from 'react';
import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

function NewLogo36() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 3,
      p: 2
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '& svg': {
            fontSize: 'inherit',
            color: '#FF3333',
            transform: 'scale(0.8)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -4,
            border: '1px solid #000',
            borderRadius: '50%'
          }
        }}
      >
        <CircleIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 300,
          color: '#000',
          fontFamily: '"Noto Sans JP", sans-serif',
          letterSpacing: '4px',
          borderBottom: '1px solid #000'
        }}
      >
        アプカデミー
      </Typography>
    </Box>
  );
}

export default NewLogo36; 
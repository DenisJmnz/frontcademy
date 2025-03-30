import React from 'react';
import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

function NewLogo() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2 
    }}>
      {/* Icono */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          borderRadius: '12px',
          p: 1,
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <CodeIcon />
      </Box>
      
      {/* Texto del Logo */}
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            fontWeight: 800,
            color: 'primary.main',
            letterSpacing: '-0.5px'
          }}
        >
          App
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            fontWeight: 700,
            color: 'text.primary',
            letterSpacing: '-0.5px'
          }}
        >
          cademy
        </Typography>
      </Box>
    </Box>
  );
}

export default NewLogo; 
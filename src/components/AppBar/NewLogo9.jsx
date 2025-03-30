import React from 'react';
import { Box, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

function NewLogo9() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2 
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
          borderRadius: '16px',
          p: 1.2,
          '& svg': {
            fontSize: 'inherit',
            color: 'white',
            transform: 'rotate(45deg)'
          }
        }}
      >
        <AdbIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Plus Jakarta Sans", sans-serif'
        }}
      >
        Appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo9; 
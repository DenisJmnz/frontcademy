import React from 'react';
import { Box, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

function NewLogo7() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1.5 
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FF4500',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          p: 1.2,
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <BoltIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 800,
          color: '#FF4500',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      >
        APPCADEMY
      </Typography>
    </Box>
  );
}

export default NewLogo7; 
import React from 'react';
import { Box, Typography } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';

function NewLogo10() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      position: 'relative'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(120deg, #00F260 0%, #0575E6 100%)',
          borderRadius: '20px',
          p: 1.2,
          transform: 'perspective(500px) rotateY(-15deg)',
          boxShadow: '5px 5px 20px rgba(0,242,96,0.2)',
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <SmartToyIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          background: 'linear-gradient(120deg, #00F260 0%, #0575E6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Space Grotesk", sans-serif'
        }}
      >
        APPCADEMY
      </Typography>
    </Box>
  );
}

export default NewLogo10; 
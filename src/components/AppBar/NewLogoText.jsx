import React from 'react';
import { Box, Typography } from '@mui/material';

const NewLogoText = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'baseline',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.5px'
      }}>
        <Typography 
          component="span" 
          sx={{ 
            color: 'primary.main',
            fontSize: 'inherit'
          }}
        >
          Tech
        </Typography>
        <Typography 
          component="span" 
          sx={{ 
            color: 'text.primary',
            fontSize: 'inherit'
          }}
        >
          School
        </Typography>
      </Box>
    </Box>
  );
};

export default NewLogoText; 
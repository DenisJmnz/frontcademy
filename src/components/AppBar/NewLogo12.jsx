import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function NewLogo12() {
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
          background: '#FF3CAC',
          backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
          borderRadius: '50%',
          p: 1.4,
          boxShadow: '0 4px 15px rgba(120,75,160,0.3)',
          '& svg': {
            fontSize: 'inherit',
            color: 'white',
            filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))'
          }
        }}
      >
        <SchoolIcon />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            fontWeight: 800,
            color: '#784BA0',
            fontFamily: '"Outfit", sans-serif',
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
            color: '#2B86C5',
            fontFamily: '"Outfit", sans-serif',
            lineHeight: 1
          }}
        >
          CADEMY
        </Typography>
      </Box>
    </Box>
  );
}

export default NewLogo12; 
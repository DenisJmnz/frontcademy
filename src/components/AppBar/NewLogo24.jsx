import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function NewLogo24() {
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
          background: '#FB923C',
          backgroundImage: 'linear-gradient(225deg, #FB923C 0%, #E11D48 50%, #7E22CE 100%)',
          borderRadius: '50%',
          p: 1.4,
          boxShadow: '0 4px 15px rgba(251,146,60,0.3)',
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
            color: '#FB923C',
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
            color: '#7E22CE',
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

export default NewLogo24; 
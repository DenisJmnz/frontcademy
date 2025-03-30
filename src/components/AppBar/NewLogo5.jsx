import React from 'react';
import { Box, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function NewLogo5() {
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
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          borderRadius: '50%',
          p: 1.2,
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          '& svg': {
            fontSize: 'inherit',
            color: 'white'
          }
        }}
      >
        <RocketLaunchIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 800,
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Appcademy
      </Typography>
    </Box>
  );
}

export default NewLogo5; 
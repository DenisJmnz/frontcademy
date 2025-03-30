import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo6() {
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
          bgcolor: '#000',
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#FFD700'
          }
        }}
      >
        <LightbulbIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 900,
          color: '#000',
          fontFamily: '"Roboto Mono", monospace'
        }}
      >
        &lt;Appcademy/&gt;
      </Typography>
    </Box>
  );
}

export default NewLogo6; 
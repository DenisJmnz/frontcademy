import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo39() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: '#FFFFFF',
      p: 2,
      borderRadius: '16px',
      border: '1px solid #E5E7EB'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#0EA5E9',
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#F0F9FF'
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
          color: '#0EA5E9',
          fontFamily: '"Roboto Mono", monospace',
          '& .bracket': {
            color: '#94A3B8'
          }
        }}
      >
        <span className="bracket">&lt;</span>
        Appcademy
        <span className="bracket">/&gt;</span>
      </Typography>
    </Box>
  );
}

export default NewLogo39; 
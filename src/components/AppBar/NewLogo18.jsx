import React from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function NewLogo18() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      background: '#1E293B',  // Slate oscuro
      p: 2,
      borderRadius: '16px',
      border: '1px solid #475569'  // Slate medio
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#0EA5E9',  // Sky
          borderRadius: '12px',
          p: 1.2,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: 'inherit',
            color: '#F0F9FF'  // Sky claro
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
          color: '#0EA5E9',  // Sky
          fontFamily: '"Roboto Mono", monospace',
          '& .bracket': {
            color: '#94A3B8'  // Slate claro
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

export default NewLogo18; 
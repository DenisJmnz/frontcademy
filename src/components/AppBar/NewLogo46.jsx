import React from 'react';
import { Box, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

function NewLogo46() {
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
          bgcolor: '#0EA5E9',
          borderRadius: '12px',
          p: 1,
          transform: 'rotate(-10deg)',
          '& svg': {
            fontSize: '0.9em',
            color: '#F0F9FF'
          }
        }}
      >
        <TerminalIcon />
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

export default NewLogo46; 
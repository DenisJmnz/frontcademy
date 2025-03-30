import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

function NewLogo43() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        fontSize: isMobile ? '1.5rem' : '1.8rem'
      }}>
        <Typography 
          component="span" 
          sx={{ 
            fontSize: 'inherit',
            fontWeight: 900,
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: '-1px',
            '& .bracket': {
              color: '#94A3B8'
            },
            '& .app': {
              color: '#475569'
            },
            '& .cademy': {
              color: '#0284C7'
            }
          }}
        >
          <span className="bracket">&lt;</span>
          <span className="app">App</span>
          <span className="cademy">cademy</span>
          <span className="bracket">/&gt;</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default NewLogo43; 
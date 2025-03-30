import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ id, children }) => {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        minHeight: { xs: '80px', md: '100px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography 
        id={id}
        variant="h2"
        sx={{ 
          textAlign: 'center',
          mb: { xs: 2, md: 6 },
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 2,
          scrollMarginTop: '100px',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default SectionTitle; 
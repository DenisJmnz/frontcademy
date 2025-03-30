// Variación del Logo 8 (Dark Mode) en tonos morados
import React from 'react';
import { Box, Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';

function NewLogo21() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      bgcolor: '#2E1065', // Púrpura oscuro
      p: 2,
      borderRadius: '8px'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: 'inherit',
            color: '#A855F7' // Púrpura brillante
          }
        }}
      >
        <DataObjectIcon />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 700,
          color: '#A855F7',
          fontFamily: '"Fira Code", monospace'
        }}
      >
        appcademy_
      </Typography>
    </Box>
  );
}

export default NewLogo21; 
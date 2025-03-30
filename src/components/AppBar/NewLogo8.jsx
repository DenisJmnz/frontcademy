import React from 'react';
import { Box, Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';

function NewLogo8() {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      bgcolor: '#1E1E1E',
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
            color: '#61DAFB'
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
          color: '#61DAFB',
          fontFamily: '"Fira Code", monospace'
        }}
      >
        appcademy_
      </Typography>
    </Box>
  );
}

export default NewLogo8; 
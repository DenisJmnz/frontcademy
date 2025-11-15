import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import Logo from '../AppBar/Logo';

function LogoPreview() {
  const logoVariants = [
    { width: 200, height: 'auto', name: 'Logo (Tamaño estándar)' },
    { width: 150, height: 'auto', name: 'Logo (Tamaño mediano)' },
    { width: 100, height: 'auto', name: 'Logo (Tamaño pequeño)' },
    { width: 300, height: 'auto', name: 'Logo (Tamaño grande)' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Logo Preview
      </Typography>
      <Grid container spacing={3}>
        {logoVariants.map((variant, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <Typography variant="subtitle1" color="text.secondary" align="center">
                {variant.name}
              </Typography>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Logo width={variant.width} height={variant.height} />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LogoPreview; 
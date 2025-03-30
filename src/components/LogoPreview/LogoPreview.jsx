import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import NewLogo from '../AppBar/NewLogo';
import NewLogo2 from '../AppBar/NewLogo2';
import NewLogo3 from '../AppBar/NewLogo3';
import NewLogo4 from '../AppBar/NewLogo4';
import NewLogo5 from '../AppBar/NewLogo5';
import NewLogo6 from '../AppBar/NewLogo6';
import NewLogo7 from '../AppBar/NewLogo7';
import NewLogo8 from '../AppBar/NewLogo8';
import NewLogo9 from '../AppBar/NewLogo9';
import NewLogo10 from '../AppBar/NewLogo10';
import NewLogo11 from '../AppBar/NewLogo11';
import NewLogo12 from '../AppBar/NewLogo12';
import NewLogo13 from '../AppBar/NewLogo13';
import NewLogo14 from '../AppBar/NewLogo14';
import NewLogo15 from '../AppBar/NewLogo15';
import NewLogo16 from '../AppBar/NewLogo16';
import NewLogo17 from '../AppBar/NewLogo17';
import NewLogo18 from '../AppBar/NewLogo18';
import NewLogo19 from '../AppBar/NewLogo19';
import NewLogo20 from '../AppBar/NewLogo20';
import NewLogo21 from '../AppBar/NewLogo21';
import NewLogo22 from '../AppBar/NewLogo22';
import NewLogo23 from '../AppBar/NewLogo23';
import NewLogo24 from '../AppBar/NewLogo24';
import NewLogo25 from '../AppBar/NewLogo25';
import NewLogo26 from '../AppBar/NewLogo26';
import NewLogo30 from '../AppBar/NewLogo30';
import NewLogo31 from '../AppBar/NewLogo31';
import NewLogo32 from '../AppBar/NewLogo32';
import NewLogo33 from '../AppBar/NewLogo33';
import NewLogo34 from '../AppBar/NewLogo34';
import NewLogo35 from '../AppBar/NewLogo35';
import NewLogo36 from '../AppBar/NewLogo36';
import NewLogo37 from '../AppBar/NewLogo37';
import NewLogo38 from '../AppBar/NewLogo38';
import NewLogo39 from '../AppBar/NewLogo39';
import NewLogo40 from '../AppBar/NewLogo40';
import NewLogo42 from '../AppBar/NewLogo42';
import NewLogo43 from '../AppBar/NewLogo43';
import NewLogo44 from '../AppBar/NewLogo44';
import NewLogo45 from '../AppBar/NewLogo45';
import NewLogo46 from '../AppBar/NewLogo46';
import NewLogo47 from '../AppBar/NewLogo47';
import NewLogo48 from '../AppBar/NewLogo48';
import NewLogo49 from '../AppBar/NewLogo49';
import NewLogo50 from '../AppBar/NewLogo50';
import NewLogo51 from '../AppBar/NewLogo51';

function LogoPreview() {
  const logos = [
    { component: NewLogo, name: 'Logo 1 (Original)' },
    { component: NewLogo2, name: 'Logo 2 (Circular)' },
    { component: NewLogo3, name: 'Logo 3 (Bordered)' },
    { component: NewLogo4, name: 'Logo 4 (Modern)' },
    { component: NewLogo5, name: 'Logo 5 (Gradient)' },
    { component: NewLogo6, name: 'Logo 6 (Developer)' },
    { component: NewLogo7, name: 'Logo 7 (Hexagon)' },
    { component: NewLogo8, name: 'Logo 8 (Dark Mode)' },
    { component: NewLogo9, name: 'Logo 9 (Purple Gradient)' },
    { component: NewLogo10, name: 'Logo 10 (AI Bot)' },
    { component: NewLogo11, name: 'Logo 11 (Terminal)' },
    { component: NewLogo12, name: 'Logo 12 (Split Color)' },
    { component: NewLogo13, name: 'Logo 13 (Glassmorphism)' },
    { component: NewLogo14, name: 'Logo 14 (Retro Stripe)' },
    { component: NewLogo15, name: 'Logo 15 (Ocean Dark)' },
    { component: NewLogo16, name: 'Logo 16 (Indigo Dev)' },
    { component: NewLogo17, name: 'Logo 17 (Green Dev)' },
    { component: NewLogo18, name: 'Logo 18 (Dark Dev)' },
    { component: NewLogo19, name: 'Logo 19 (Gradient Dev)' },
    { component: NewLogo20, name: 'Logo 20 (Orange Dev)' },
    { component: NewLogo21, name: 'Logo 21 (Purple Dark)' },
    { component: NewLogo22, name: 'Logo 22 (Cyan Terminal)' },
    { component: NewLogo23, name: 'Logo 23 (Blue Retro)' },
    { component: NewLogo24, name: 'Logo 24 (Sunset Split)' },
    { component: NewLogo25, name: 'Logo 25 (Pink Glass)' },
    { component: NewLogo26, name: 'Logo 26 (Teal Dev)' },
    { component: NewLogo30, name: 'Logo 30 (Pixel Art)' },
    { component: NewLogo31, name: 'Logo 31 (Neon Split)' },
    { component: NewLogo32, name: 'Logo 32 (Glitch)' },
    { component: NewLogo33, name: 'Logo 33 (Gaming RGB)' },
    { component: NewLogo34, name: 'Logo 34 (Holographic)' },
    { component: NewLogo35, name: 'Logo 35 (Vaporwave)' },
    { component: NewLogo36, name: 'Logo 36 (Japanese)' },
    { component: NewLogo37, name: 'Logo 37 (Isometric)' },
    { component: NewLogo38, name: 'Logo 38 (Sci-Fi)' },
    { component: NewLogo39, name: 'Logo 39 (Light Mode Dev)' },
    { component: NewLogo40, name: 'Logo 40 (Blue Dev)' },
    { component: NewLogo42, name: 'Logo 42 (Code Icon)' },
    { component: NewLogo43, name: 'Logo 43 (School Icon)' },
    { component: NewLogo44, name: 'Logo 44 (Brain Icon)' },
    { component: NewLogo45, name: 'Logo 45 (Rocket Icon)' },
    { component: NewLogo46, name: 'Logo 46 (Terminal Icon)' },
    { component: NewLogo47, name: 'Logo 47 (Data Icon)' },
    { component: NewLogo48, name: 'Logo 48 (Robot Icon)' },
    { component: NewLogo49, name: 'Logo 49 (Chip Icon)' },
    { component: NewLogo50, name: 'Logo 50 (Network Icon)' },
    { component: NewLogo51, name: 'Logo 51 (Science Icon)' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Logo Preview
      </Typography>
      <Grid container spacing={3}>
        {logos.map((Logo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
              <Typography variant="subtitle1" color="text.secondary">
                {Logo.name}
              </Typography>
              <Box sx={{ 
                '& .MuiBox-root': { 
                  fontSize: '2rem'
                }
              }}>
                <Logo.component />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LogoPreview; 
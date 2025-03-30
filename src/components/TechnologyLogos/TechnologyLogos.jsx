import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const TechnologyLogos = ({ technologies = [] }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ 
        fontSize: { xs: '1.8rem', md: '2.2rem' },
        fontWeight: 'bold',
        mb: 4,
        textAlign: 'center'
      }}>
        Tecnologías que aprenderás
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {technologies.map((tech, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 2,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain'
                }}
              />
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 'medium',
                  textAlign: 'center'
                }}
              >
                {tech.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologyLogos; 
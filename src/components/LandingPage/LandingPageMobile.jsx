import React from 'react';
import { Container, Typography, Box, Grid, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LandingPageMobile = () => {
  const navigate = useNavigate();

  const handleMasterClick = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ position: 'relative', color: 'white', textAlign: 'center' }}>
            <Typography variant="h1" sx={{ 
              fontSize: '2rem',
              fontWeight: 'bold',
              mb: 2
            }}>
              Forma tu futuro digital
            </Typography>
            <Typography variant="h2" sx={{ 
              fontSize: '1.2rem',
              mb: 4
            }}>
              Másters especializados en tecnología
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/contacto')}
              sx={{ 
                py: 1.5,
                px: 4,
                fontSize: '1rem'
              }}
            >
              Solicita información
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Masters Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h2" sx={{ 
          fontSize: '1.8rem',
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center'
        }}>
          Nuestros Másters
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: 'Máster Full Stack',
              description: 'Desarrollo web completo',
              path: '/master-fullstack'
            },
            {
              title: 'Máster en IA',
              description: 'Inteligencia Artificial y ML',
              path: '/master-ia'
            },
            {
              title: 'Máster Data Science',
              description: 'Análisis de datos avanzado',
              path: '/master-data-science'
            },
            {
              title: 'Máster Ciberseguridad',
              description: 'Seguridad informática',
              path: '/master-ciberseguridad'
            }
          ].map((master, index) => (
            <Grid item xs={12} key={index}>
              <Card 
                sx={{ 
                  p: 3,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
                onClick={() => handleMasterClick(master.path)}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {master.title}
                </Typography>
                <Typography color="text.secondary">
                  {master.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Formación Especializada
                </Typography>
                <Typography color="text.secondary">
                  Programas diseñados por expertos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <GroupIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Mentorización Personal
                </Typography>
                <Typography color="text.secondary">
                  Seguimiento individualizado
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Flexibilidad Horaria
                </Typography>
                <Typography color="text.secondary">
                  Adapta el estudio a tu ritmo
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPageMobile; 
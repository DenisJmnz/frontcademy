import React from 'react';
import { Container, Typography, Box, Grid, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LandingPage = () => {
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
          minHeight: '80vh',
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
        <Container>
          <Box sx={{ position: 'relative', color: 'white', maxWidth: '600px' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', mb: 2 }}>
              Forma tu futuro digital
            </Typography>
            <Typography 
              variant="h2"
              sx={{ 
                textAlign: 'center',
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                mb: { xs: 2, sm: 3 },
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              ¿Listo para impulsar tu carrera?
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/contacto')}
              sx={{ py: 2, px: 4 }}
            >
              Solicita información
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Masters Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
          Nuestros Másters
        </Typography>
        <Grid container spacing={4}>
          {masters.map((master, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 4,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
                onClick={() => navigate(master.path)}
              >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
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
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
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

export default LandingPage;


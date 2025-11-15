import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from '../AppBar/Logo';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, isSection) => {
    if (path === '/') {
      navigate('/');
      if (isSection) {
        setTimeout(() => {
          const sectionId = path.replace('/#', '');
          const element = document.getElementById(sectionId);
          if (element) {
            const navbarHeight = 67;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    } else if (isSection) {
      navigate('/');
      setTimeout(() => {
        const sectionId = path.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 67;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#186dc7',
        color: 'white',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo y Descripción */}
          <Grid item xs={12} md={4}>
            <Box 
              onClick={() => handleNavigation('/')}
              sx={{ 
                cursor: 'pointer',
                mb: 3,
                display: 'inline-block',
                '& img': {
                  filter: 'brightness(0) invert(1)'
                }
              }}
            >
              <Logo width={180} />
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 3,
                lineHeight: 1.7
              }}
            >
              Formación tecnológica de calidad para impulsar tu carrera profesional. 
              Másters especializados con profesores expertos en activo.
            </Typography>
            {/* Redes Sociales */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                aria-label="Facebook"
                sx={{
                  color: '#1877F2',
                  bgcolor: 'white',
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#1877F2',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{
                  color: '#1DA1F2',
                  bgcolor: 'white',
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#1DA1F2',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{
                  color: '#0077B5',
                  bgcolor: 'white',
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#0077B5',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: '#E4405F',
                  bgcolor: 'white',
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#E4405F',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                sx={{
                  color: '#FF0000',
                  bgcolor: 'white',
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#FF0000',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Enlaces Rápidos */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 3,
                fontSize: '1.1rem',
                color: 'white'
              }}
            >
              Enlaces
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                component="button"
                onClick={() => handleNavigation('/')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Inicio
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/#masters', true)}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Másters
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/#about', true)}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Profesores
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/contacto')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Contacto
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/blog')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Blog
              </Link>
            </Box>
          </Grid>

          {/* Másters */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 3,
                fontSize: '1.1rem',
                color: 'white'
              }}
            >
              Másters
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                component="button"
                onClick={() => handleNavigation('/master-fullstack')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Máster Full Stack
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/master-ia')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Máster en IA
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/master-data-science')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Máster Data Science
              </Link>
              <Link
                component="button"
                onClick={() => handleNavigation('/master-ciberseguridad')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                Máster Ciberseguridad
              </Link>
            </Box>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 3,
                fontSize: '1.1rem',
                color: 'white'
              }}
            >
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailIcon sx={{ color: 'white', fontSize: '1.2rem', mt: 0.5 }} />
                <Link
                  href="mailto:info@updademy.com"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: 'white'
                    }
                  }}
                >
                  info@updademy.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneIcon sx={{ color: 'white', fontSize: '1.2rem', mt: 0.5 }} />
                <Link
                  href="tel:+34900123456"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: 'white'
                    }
                  }}
                >
                  +34 900 123 456
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: 'white', fontSize: '1.2rem', mt: 0.5 }} />
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}
                >
                  Madrid, España
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright y Enlaces Legales */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.9rem'
            }}
          >
            © {new Date().getFullYear()} Updademy. Todos los derechos reservados.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 }
            }}
          >
            <Link
              component="button"
              onClick={() => {}}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              Política de Privacidad
            </Link>
            <Link
              component="button"
              onClick={() => {}}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              Términos y Condiciones
            </Link>
            <Link
              component="button"
              onClick={() => {}}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


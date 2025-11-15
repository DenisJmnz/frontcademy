import React, { useRef, useEffect } from 'react';
import { Container, Typography, Box, Grid, Button, Card, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';
import styled from 'styled-components';

const StatsSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
`;

const MastersSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;

  h2 {
    color: white;
  }

  // Ajustamos los colores de las tarjetas si es necesario
  .master-card {
    background: white;
    color: #333;
  }
`;

// Si hay textos que necesitan ajuste de color por el fondo oscuro
const StatNumber = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-family: 'DM Sans', sans-serif;
`;

const LandingPageDesktop = () => {
  const navigate = useNavigate();
  const mastersRef = useRef(null);
  const aboutRef = useRef(null);

  const [statsRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    { 
      label: 'Alumnos Formados', 
      value: 500,
      suffix: '+',
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#1E3A8A' }} />,
      color: '#1E3A8A'
    },
    { 
      label: 'Profesores',
      value: 10,
      suffix: '+',
      decimals: 0,
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#2563EB' }} />,
      color: '#2563EB'
    },
    { 
      label: 'Empleabilidad', 
      value: 97,
      suffix: '%',
      icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      color: '#3B82F6'
    },
    { 
      label: 'Satisfacción', 
      value: 100,
      suffix: '%',
      icon: <ThumbUpIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
      color: '#60A5FA'
    }
  ];

  const masters = [
    {
      title: 'Máster en Desarrollo Full Stack',
      description: 'Conviértete en desarrollador web completo dominando tanto el frontend como el backend',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#2563eb' }} />,
      path: '/master-fullstack',
      color: '#2563eb'
    },
    {
      title: 'Máster en Inteligencia Artificial',
      description: 'Especialízate en IA y lidera la revolución tecnológica del futuro',
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#7c3aed' }} />,
      path: '/master-ia',
      color: '#7c3aed'
    },
    {
      title: 'Máster en Data Science',
      description: 'Domina el análisis de datos y las técnicas más avanzadas de Data Science',
      icon: <StorageIcon sx={{ fontSize: 40, color: '#E67E22' }} />,
      path: '/master-data-science',
      color: '#E67E22'
    },
    {
      title: 'Máster en Ciberseguridad',
      description: 'Protege sistemas y datos con las últimas técnicas en ciberseguridad',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#dc2626' }} />,
      path: '/master-ciberseguridad',
      color: '#dc2626'
    }
  ];

  const reasons = [
    {
      title: 'Profesores Expertos en Activo',
      description: 'Aprende de profesionales que trabajan en las mejores empresas del sector',
      icon: <SchoolIcon sx={{ color: '#1E40AF', fontSize: 40 }} />
    },
    {
      title: 'Clases en Directo Interactivas',
      description: 'Participa activamente en las clases y resuelve tus dudas en tiempo real',
      icon: <LiveTvIcon sx={{ color: '#2563EB', fontSize: 40 }} />
    },
    {
      title: 'Proyectos Reales',
      description: 'Desarrolla proyectos basados en casos reales del mundo empresarial',
      icon: <BuildIcon sx={{ color: '#3B82F6', fontSize: 40 }} />
    },
    {
      title: 'Mentorías Personalizadas',
      description: 'Seguimiento individual para asegurar tu progreso',
      icon: <PersonIcon sx={{ color: '#60A5FA', fontSize: 40 }} />
    },
    {
      title: 'Flexibilidad Total',
      description: 'Accede a las clases grabadas y adapta la formación a tu ritmo',
      icon: <AccessTimeIcon sx={{ color: '#1E40AF', fontSize: 40 }} />
    },
    {
      title: 'Comunidad y Coworking',
      description: 'Forma parte de una comunidad activa de profesionales y estudiantes',
      icon: <GroupsIcon sx={{ color: '#2563EB', fontSize: 40 }} />
    },
    {
      title: 'Orientación Laboral',
      description: 'Preparación de CV, entrevistas y acceso a ofertas exclusivas',
      icon: <WorkIcon sx={{ color: '#3B82F6', fontSize: 40 }} />
    },
    {
      title: 'Certificación Oficial',
      description: 'Obtén un certificado avalado por profesionales del sector',
      icon: <CardMembershipIcon sx={{ color: '#60A5FA', fontSize: 40 }} />
    }
  ];

  const testimonials = [
    {
      name: 'María García',
      role: 'Full Stack Developer',
      rating: 5,
      comment: 'Conocía al equipo antes de que formaran la academia y no dudé en apuntarme. Su metodología y profesionalidad son excepcionales.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Data Scientist',
      rating: 5,
      comment: 'La mejor inversión en mi carrera. Los profesores son increíbles y la metodología práctica me permitió empezar a trabajar en solo 6 meses.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Laura Martínez',
      role: 'AI Engineer',
      comment: 'Las mentorías personalizadas y el enfoque práctico marcan la diferencia. El equipo está realmente comprometido con tu éxito.'
    }
  ];

  const scrollToSection = (elementId, ref) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.slice(1);
      const ref = sectionId === 'masters' ? mastersRef : 
                 sectionId === 'about' ? aboutRef : null;
      scrollToSection(`${sectionId}-title`, ref);
    }
  }, []);

  return (
    <Box 
      component="main" 
      sx={{ 
        width: '100%',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'visible'
    }}>
      {/* Hero Section */}
      <Box
        data-aos="fade-down"
        sx={{
          position: 'relative',
          backgroundImage: `url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: { xs: '70vh', md: '80vh' },
          marginTop: '-64px',
          paddingTop: '64px',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            position: 'relative', 
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 }
          }}>
            <Typography variant="h1" sx={{ 
              fontSize: { 
                xs: '1.8rem',
                sm: '2rem',
                md: '2.8rem',
                lg: '3.5rem'
              },
              fontWeight: 'bold',
              mb: { xs: 2, md: 3 },
              lineHeight: { xs: 1.3, md: 1.3 },
              whiteSpace: { xs: 'normal', md: 'nowrap' },
              overflow: 'visible',
              maxWidth: { 
                xs: '100%',
                sm: '60%',
                md: '50%',
                lg: '45%'
              },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              Te ayudamos a formar parte del futuro digital
            </Typography>
            <Typography variant="h2" sx={{ 
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              mb: { xs: 3, md: 4 },
              lineHeight: 1.4
            }}>
              Másters especializados en las tecnologías más demandadas
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 2, sm: 3 }}
              sx={{ 
                justifyContent: { xs: 'center', md: 'flex-start' },
                width: '100%'
              }}
            >
              <Button 
                variant="contained"
                size="large"
                onClick={() => scrollToSection('masters-title', mastersRef)}
                sx={{ 
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem'
                }}
              >
                Ver Másters
              </Button>
              <Button 
                variant="outlined"
                size="large"
                onClick={() => navigate('/contacto')}
                sx={{ 
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.4)'
                  }
                }}
              >
                Más Información
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box 
        ref={statsRef}
        sx={{ 
          py: { xs: 6, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
          bgcolor: 'grey.50'
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 3, md: 4 }}
            sx={{
              '& > .MuiGrid-item': {
                width: {
                  xs: '50%',
                  md: '25%'
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <Grid item key={index}>
                <Box
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    textAlign: 'center',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .stat-icon': {
                        transform: 'scale(1.1)',
                        color: 'primary.main',
                      }
                    }
                  }}
                >
                  <Box
                    className="stat-icon"
                    sx={{
                      mb: 2,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(45deg, ${stat.color}, ${stat.color}CC)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' }
                      }}
                    >
                      {stat.prefix}
                      {inView && (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          decimals={stat.decimals || 0}
                          separator={stat.separator || ''}
                        />
                      )}
                      {stat.suffix}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '40px',
                          height: '3px',
                          backgroundColor: stat.color,
                          borderRadius: '2px',
                          opacity: 0.7
                        }
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box 
        id="why-choose-us"
        sx={{ 
          pt: 0,
          pb: { xs: 4, md: 8 },
          bgcolor: 'white',
          scrollMarginTop: '67px'
        }}
      >
        <Container>
          <Typography 
            variant="h2"
            sx={{ 
              textAlign: 'center',
              mb: { xs: 4, md: 8 },
              mt: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold'
            }}
          >
            ¿Por qué elegirnos?
          </Typography>
          
          <Grid container spacing={{ xs: 3, md: 5 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                data-aos="fade-right"
                data-aos-duration="400"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Equipo trabajando"
                sx={{
                  width: '100%',
                  height: { xs: '250px', md: '100%' },
                  minHeight: { xs: '250px', md: 'auto' },
                  borderRadius: 2,
                  boxShadow: 3,
                  objectFit: 'cover',
                  display: 'block',
                  mb: { xs: 3, md: 0 }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { xs: 0, md: 1.5 } }}>
              <Grid container spacing={3}>
                {reasons.map((reason, index) => (
                  <Grid item xs={12} key={index}>
                    <Box 
                      data-aos="fade-left"
                      data-aos-delay={index * 50}
                      data-aos-duration="400"
                      sx={{ 
                        mb: 2,
                        display: 'flex', 
                        alignItems: 'flex-start' 
                      }}
                    >
                      <Box sx={{ mr: 2 }}>
                        {reason.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                          {reason.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {reason.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Masters Section */}
      <Box 
        id="masters" 
        ref={mastersRef}
        sx={{ 
          pt: 4,
          pb: { xs: 4, md: 8 },
          scrollMarginTop: '67px',
          bgcolor: 'grey.50'
        }}
      >
        <Container>
          <Typography 
            id="masters-title"
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 4, md: 8 },
              mt: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold'
            }}
          >
            Nuestros Másters
          </Typography>
          
          <Grid container spacing={4}>
            {masters.map((master, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="600"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid',
                    borderColor: master.color,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(45deg, ${master.color}10, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 28px ${master.color}30`,
                      borderWidth: '2px',
                      '&::before': {
                        opacity: 1
                      },
                      '& .master-icon': {
                        transform: 'scale(1.1) rotate(5deg)'
                      }
                    }
                  }}
                  onClick={() => navigate(master.path)}
                >
                  <Box 
                    className="master-icon"
                    sx={{ 
                      mb: 2,
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  >
                    {master.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    className="master-title"
                    sx={{ 
                      mb: 2, 
                      fontWeight: 'bold',
                      color: 'text.primary'
                    }}
                  >
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
      </Box>

      {/* About Us Section */}
      <Box 
        id="about"
        sx={{ 
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 8 },
          scrollMarginTop: '100px'
        }}
      >
        <Container>
          <Typography 
            variant="h2"
            sx={{ 
              textAlign: 'center',
              mb: { xs: 4, md: 8 },
              mt: 0,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold'
            }}
          >
            ¿Quiénes somos?
          </Typography>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                data-aos="fade-right"
                data-aos-duration="600"
                sx={{ mb: 3 }}
              >
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Somos un grupo de entusiastas unidos por una misión: democratizar la formación tecnológica.
                </Typography>
                <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                  Tras años de experiencia en las empresas referentes del sector, identificamos una necesidad clara:
                  la formación tecnológica debía ser accesible para todos, independientemente de su punto de partida.
                  Esta visión nos impulsó a desarrollar una metodología revolucionaria que rompe con los estándares
                  establecidos.
                </Typography>
                <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                  Nuestra metodología única está especialmente diseñada para que cualquier persona, incluso partiendo
                  desde cero absoluto, pueda adentrarse en el mundo tecnológico con confianza. Hemos eliminado las
                  barreras tradicionales y creado un sistema que combina claridad, práctica y apoyo constante.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Lo que nos diferencia es nuestra pasión por ver crecer a cada alumno. Entendemos que cada persona
                  tiene un ritmo diferente, y nuestro compromiso es adaptar la formación para asegurar que nadie
                  se quede atrás en su camino hacia el éxito profesional.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                data-aos="fade-left"
                data-aos-duration="600"
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86"
                alt="Equipo de profesores"
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '300px', md: '400px' },
                  objectFit: 'cover',
                  borderRadius: 2,
                  mt: { xs: -4, md: 4 },
                  display: 'block',
                  clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)',
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box 
        id="testimonials"
        sx={{ 
          py: { xs: 4, md: 8 }, 
          bgcolor: 'grey.50',
          scrollMarginTop: '67px'
        }}
      >
        <Container>
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 2, md: 6 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold'
            }}
          >
            Lo que dicen nuestros alumnos
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Datos del usuario arriba */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 3
                  }}>
                    <Box
                      component="img"
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        mr: 2,
                        objectFit: 'cover'
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Comentario en medio */}
                  <Typography sx={{ 
                    mb: 3, 
                    fontStyle: 'italic',
                    flex: 1
                  }}>
                    "{testimonial.comment}"
                  </Typography>

                  {/* Estrellas abajo centradas */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    mt: 'auto'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i}
                        sx={{ 
                          color: i < (testimonial.rating || 5) ? '#FFD700' : 'grey.300',
                          fontSize: '1.5rem',
                          mx: 0.5
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        data-aos="fade-up"
        data-aos-duration="600"
        sx={{ 
          py: { xs: 2.5, md: 4 },
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2"
            sx={{ 
              textAlign: 'center',
              fontSize: { xs: '1.2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              mb: { xs: 2, sm: 3 },
              whiteSpace: 'nowrap',
              width: '100%',
              lineHeight: 1.2
            }}
          >
            ¿Listo para impulsar tu carrera?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contacto')}
            sx={{ 
              py: { xs: 1.5, md: 2 },
              px: { xs: 4, md: 6 },
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Solicitar más información
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPageDesktop; 
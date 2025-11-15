import React, { useEffect, lazy, Suspense } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button, 
  Card, 
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CircularProgress
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EuroIcon from '@mui/icons-material/Euro';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedIcon from '@mui/icons-material/Verified';
import DownloadIcon from '@mui/icons-material/Download';
import GroupIcon from '@mui/icons-material/Group';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BoltIcon from '@mui/icons-material/Bolt';
import CloudIcon from '@mui/icons-material/Cloud';
import ApiIcon from '@mui/icons-material/Api';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';

const MasterDetailPage = ({ masterData }) => {
  const location = window.location.pathname;
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  console.log('MasterDetailPage - masterData recibido:', masterData);
  console.log('URL actual:', location);

  const getPDFPath = () => {
    console.log('Comprobando ruta:', location);
    
    // Para el máster de ciberseguridad (comprobando todas las posibles variantes)
    if (location.includes('ciber') || location.includes('cyber')) {
      return '/master-cibersecurity.pdf';
    }
    
    // Para el máster de IA
    if (location.includes('ia')) {
      return '/master-ia.pdf';
    }
    
    // Para el máster Fullstack
    if (location.includes('fullstack')) {
      return '/master-fullstack.pdf';
    }
    
    // Para el máster de Data Science (comprobando todas las posibles variantes)
    if (location.includes('data')) {
      return '/master-datascience.pdf';
    }
    
    console.log('No se encontró coincidencia para la ruta:', location);
    return null;
  };

  const getMasterColor = () => {
    if (location.includes('ia')) {
      return '#7c3aed';
    }
    if (location.includes('fullstack')) {
      return '#2563eb';
    }
    if (location.includes('ciber') || location.includes('cyber')) {
      return '#dc2626';
    }
    if (location.includes('data')) {
      return '#E67E22';
    }
    return '#1976d2'; // Color por defecto
  };

  const masterColor = getMasterColor();

  useEffect(() => {
    // Scroll inmediato al top sin animación
    window.scrollTo(0, 0);
    // También forzamos el scroll después de un pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  const handleContact = () => {
    navigate('/contacto', { 
      state: { master: masterData.id } 
    });
  };

  const getIconForKeyPoint = (point) => {
    const point_lower = point.toLowerCase();
    
    // Nueva paleta de colores evitando los colores de los másters
    const iconColors = {
      education: '#0891b2',     // Cyan
      technology: '#059669',    // Verde esmeralda
      career: '#0d9488',        // Verde azulado
      community: '#6366f1',     // Índigo
      tools: '#f97316',         // Naranja oscuro
      certification: '#0ea5e9', // Azul cielo
      finance: '#14b8a6',       // Verde turquesa
      security: '#8b5cf6',      // Violeta
      support: '#06b6d4',       // Cyan oscuro
      time: '#3b82f6'          // Azul
    };

    // Metodología y aprendizaje
    if (point_lower.includes('metodología') || point_lower.includes('método')) 
      return <CastForEducationIcon sx={{ fontSize: 24, color: iconColors.education }} />;
    if (point_lower.includes('práctic')) 
      return <EngineeringIcon sx={{ fontSize: 24, color: iconColors.tools }} />;
    if (point_lower.includes('ejercicio')) 
      return <BuildIcon sx={{ fontSize: 24, color: iconColors.tools }} />;
    if (point_lower.includes('mentor') || point_lower.includes('tutor')) 
      return <GroupsIcon sx={{ fontSize: 24, color: iconColors.support }} />;
    if (point_lower.includes('flexib') || point_lower.includes('horario')) 
      return <AccessTimeIcon sx={{ fontSize: 24, color: iconColors.time }} />;

    // Contenido técnico
    if (point_lower.includes('tecnolog') || point_lower.includes('herramienta')) 
      return <HandymanIcon sx={{ fontSize: 24, color: iconColors.technology }} />;
    if (point_lower.includes('proyecto') || point_lower.includes('caso real')) 
      return <BuildIcon sx={{ fontSize: 24, color: iconColors.tools }} />;
    if (point_lower.includes('certificación') || point_lower.includes('título')) 
      return <WorkspacePremiumIcon sx={{ fontSize: 24, color: iconColors.certification }} />;
    if (point_lower.includes('contenido') || point_lower.includes('material')) 
      return <AutoStoriesIcon sx={{ fontSize: 24, color: iconColors.education }} />;

    // Carrera profesional
    if (point_lower.includes('empleo') || point_lower.includes('laboral')) 
      return <WorkIcon sx={{ fontSize: 24, color: iconColors.career }} />;
    if (point_lower.includes('entrevista')) 
      return <PersonSearchIcon sx={{ fontSize: 24, color: iconColors.career }} />;

    // Financiación
    if (point_lower.includes('financia') || point_lower.includes('pago')) 
      return <AccountBalanceWalletIcon sx={{ fontSize: 24, color: iconColors.finance }} />;

    // Comunidad y soporte
    if (point_lower.includes('comunidad') || point_lower.includes('networking')) 
      return <GroupsIcon sx={{ fontSize: 24, color: iconColors.community }} />;
    if (point_lower.includes('apoyo') || point_lower.includes('soporte')) 
      return <GroupIcon sx={{ fontSize: 24, color: iconColors.support }} />;

    // Específicos por máster
    if (point_lower.includes('inteligencia artificial') || point_lower.includes('machine')) 
      return <PsychologyIcon sx={{ fontSize: 24, color: iconColors.technology }} />;
    if (point_lower.includes('desarrollo') || point_lower.includes('programación')) 
      return <CodeIcon sx={{ fontSize: 24, color: iconColors.technology }} />;
    if (point_lower.includes('data') || point_lower.includes('datos')) 
      return <StorageIcon sx={{ fontSize: 24, color: iconColors.technology }} />;
    if (point_lower.includes('seguridad') || point_lower.includes('ciber')) 
      return <SecurityIcon sx={{ fontSize: 24, color: iconColors.security }} />;

    return <BoltIcon sx={{ fontSize: 24, color: iconColors.technology }} />; // Icono por defecto
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '40vh', sm: '50vh', md: '60vh' },
          marginTop: '-64px',
          paddingTop: '64px',
          backgroundColor: 'black',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <img
          src={masterData.heroImage}
          alt=""
          loading="eager"
          onLoad={() => setIsImageLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isImageLoaded ? 0.5 : 0,
            transition: 'opacity 0.3s'
          }}
        />
        <Container maxWidth="lg">
          <Box sx={{ 
            position: 'relative', 
            color: 'white', 
            py: 8,
            height: { xs: 'calc(40vh - 64px)', sm: 'auto' }
          }}>
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' },
              fontWeight: 'bold',
              mb: { xs: 1, sm: 2 },
              lineHeight: { xs: 1.2, sm: 1.3 },
              maxWidth: '100%',
              whiteSpace: { xs: 'normal', sm: 'nowrap' },
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {masterData.title}
            </Typography>
            <Typography variant="h2" sx={{ 
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              mb: { xs: 2, sm: 4 },
              maxWidth: '800px'
            }}>
              {masterData.description}
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                py: { xs: 1, sm: 2 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                bgcolor: masterColor,
                position: { xs: 'static', sm: 'static' },
                width: { xs: 'auto', sm: 'auto' },
                '&:hover': {
                  bgcolor: `${masterColor}CC`
                }
              }}
              onClick={handleContact}
            >
              Me interesa este máster
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, pb: { xs: 0, md: 8 } }}>
        <Grid container spacing={6} sx={{ mb: { xs: 4, md: 0 } }}>
          <Grid item xs={12} md={8}>
            {/* Overview Section */}
            <Typography variant="h3" sx={{ 
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 'bold',
              mb: 4
            }}>
              Descripción del máster
            </Typography>
            <Typography sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 8
            }}>
              {masterData.fullDescription}
            </Typography>

            {/* Skills Section */}
            <Typography variant="h3" sx={{ 
              fontSize: { xs: '1.8rem', md: '1.8rem' },
              fontWeight: 'bold',
              mb: 4,
              whiteSpace: { md: 'nowrap' },
              overflow: 'hidden',
              width: '100%'
            }}>
              ¿Qué habilidades adquirirás al finalizar el máster?
            </Typography>
            <Typography sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 8
            }}>
              {masterData.skills}
            </Typography>

            {/* Main Technologies Section */}
            <Box sx={{ mt: 6, mb: 8 }}>
              <Typography variant="h3" sx={{ 
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 'bold',
                mb: 4,
                textAlign: 'center'
              }}>
                Tecnologías que aprenderás
              </Typography>
              <Grid container spacing={3} justifyContent="center" alignItems="center">
                {masterData.mainTechnologies.map((tech, index) => (
                  <Grid item xs={4} sm={3} md={2} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        p: 2,
                        height: '100%',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={tech.logo}
                        alt={tech.name}
                        sx={{
                          width: '100%',
                          maxWidth: '60px',
                          height: 'auto',
                          filter: 'grayscale(30%)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            filter: 'grayscale(0%)'
                          }
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          textAlign: 'center',
                          fontWeight: 'medium',
                          color: 'text.secondary'
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Key Points Section - Full Width */}
      <Box sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        bgcolor: 'grey.50',
        py: 4,
        mt: { xs: -8, md: -12 }
      }}>
        <Typography variant="h3" sx={{ 
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center'
        }}>
          Puntos clave del máster
        </Typography>
        <Container maxWidth="xl">
          <Grid container spacing={0.75}>
            {masterData.keyPoints.map((point, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 2,
                  p: 0.5,
                  minHeight: '40px',
                  py: 0.25
                }}>
                  {getIconForKeyPoint(point)}
                  <Typography sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.2
                  }}>
                    {point}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Price Card - Mobile Only */}
      <Box sx={{ 
        display: { xs: 'block', md: 'none' },
        px: 2,
        mb: 4,
        mt: 4
      }}>
        <Card sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Price Section */}
            <Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                mb: 3
              }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  Inversión total
                </Typography>
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.2rem',
                      textDecoration: 'line-through',
                      mb: 1
                    }}
                  >
                    6.000€
                  </Typography>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main'
                  }}>
                    5.500 <EuroIcon sx={{ fontSize: '2rem' }} />
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'success.main',
                      fontWeight: 'bold',
                      mt: 1
                    }}
                  >
                    ¡Ahorra 500€!
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                {/* Becas Box */}
                <Box sx={{ 
                  p: 2,
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: 2,
                  textAlign: 'center',
                  transform: 'scale(1.02)',
                  boxShadow: 1,
                  '& .MuiTypography-h6': {
                    fontSize: '1.1rem'
                  },
                  '& .MuiTypography-body1': {
                    fontSize: '0.9rem'
                  }
                }}>
                  <Typography variant="h6" sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 1,
                    fontWeight: 'bold'
                  }}>
                    <LocalOfferIcon /> ¡Becas Disponibles!
                  </Typography>
                  <Typography>
                    Obtén hasta <strong>1.500€</strong> de descuento
                  </Typography>
                </Box>

                {/* Financiación Box */}
                <Box sx={{ 
                  p: 2,
                  backgroundColor: '#059669',
                  color: 'white',
                  borderRadius: 1,
                  textAlign: 'center'
                }}>
                  <Typography sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}>
                    <PaymentIcon /> Financiación flexible disponible
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Divider />

            {/* Certification Section */}
            <Box sx={{ 
              p: 2, 
              bgcolor: '#f3f4f6',
              border: '2px solid #1976d2',
              color: 'text.primary',
              borderRadius: 1
            }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontWeight: 'bold'
                }}
              >
                <VerifiedIcon color="primary" /> Certificación Profesional
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Al finalizar el máster obtendrás un certificado que acredita tus competencias
              </Typography>
            </Box>

            {/* Key Stats */}
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <WorkIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {masterData.employmentRate}%
                  </Typography>
                  <Typography color="text.secondary">
                    Tasa de empleabilidad en el sector
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTimeIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {masterData.schedule.hours}
                  </Typography>
                  <Typography color="text.secondary">
                    {masterData.schedule.duration} con horarios flexibles
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SchoolIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Formación en directo
                  </Typography>
                  <Typography color="text.secondary">
                    Clases en directo y grabadas + mentorías personalizadas
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GroupIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Grupos reducidos
                  </Typography>
                  <Typography color="text.secondary">
                    Máximo 25 alumnos por clase
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Button 
              variant="contained" 
              size="large"
              fullWidth
              onClick={handleContact}
              sx={{ 
                py: 2,
                fontSize: '1.1rem',
                bgcolor: masterColor,
                '&:hover': {
                  bgcolor: `${masterColor}CC`
                }
              }}
            >
              Me interesa este máster
            </Button>

            <Divider sx={{ my: 2 }} />
            
            <Button
              variant="outlined"
              size="large"
              fullWidth
              startIcon={<DownloadIcon />}
              onClick={async () => {
                try {
                  const pdfPath = getPDFPath();
                  if (!pdfPath) {
                    console.error('No se encontró un PDF para esta ruta');
                    return;
                  }
                  
                  const response = await fetch(pdfPath);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  
                  // Descargar el PDF
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = pdfPath.substring(1); // Quitar el / inicial
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  // Abrir el PDF en una nueva ventana
                  window.open(pdfPath, '_blank');
                  
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('Error al descargar el PDF:', error);
                }
              }}
              sx={{
                py: 1.5,
                color: masterColor,
                bgcolor: 'white',
                borderColor: masterColor,
                fontSize: '0.9rem',
                lineHeight: '1.2',
                height: 'auto',
                minHeight: '48px',
                '&:hover': {
                  bgcolor: `${masterColor}10`,
                  borderColor: masterColor
                }
              }}
            >
              DESCARGAR DESGLOSE DEL CONTENIDO DEL CURSO
            </Button>
          </Stack>
        </Card>
      </Box>

      {/* Price Card - Desktop Only */}
      <Box sx={{ 
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        top: (() => {
          if (location.includes('ia')) return '72vh'; // IA: un poco más arriba
          if (location.includes('fullstack')) return '80vh'; // Desarrollo: más arriba
          if (location.includes('data')) return '65vh'; // Data: más abajo
          if (location.includes('ciber') || location.includes('cyber')) return '70vh'; // Ciber: un poco más arriba
          return '80vh'; // Por defecto
        })(),
        right: '5%',
        width: '380px',
        transform: (location.includes('ciber') || location.includes('cyber') || location.includes('data') || location.includes('ia')) ? 'scale(0.95)' : 'none'
      }}>
        <Card sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Price Section */}
            <Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                mb: 3
              }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  Inversión total
                </Typography>
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.2rem',
                      textDecoration: 'line-through',
                      mb: 1
                    }}
                  >
                    6.000€
                  </Typography>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main'
                  }}>
                    5.500 <EuroIcon sx={{ fontSize: '2rem' }} />
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'success.main',
                      fontWeight: 'bold',
                      mt: 1
                    }}
                  >
                    ¡Ahorra 500€!
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                {/* Becas Box */}
                <Box sx={{ 
                  p: 2,
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: 2,
                  textAlign: 'center',
                  transform: 'scale(1.02)',
                  boxShadow: 1,
                  '& .MuiTypography-h6': {
                    fontSize: '1.1rem'
                  },
                  '& .MuiTypography-body1': {
                    fontSize: '0.9rem'
                  }
                }}>
                  <Typography variant="h6" sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 1,
                    fontWeight: 'bold'
                  }}>
                    <LocalOfferIcon /> ¡Becas Disponibles!
                  </Typography>
                  <Typography>
                    Obtén hasta <strong>1.500€</strong> de descuento
                  </Typography>
                </Box>

                {/* Financiación Box */}
                <Box sx={{ 
                  p: 2,
                  backgroundColor: '#059669',
                  color: 'white',
                  borderRadius: 1,
                  textAlign: 'center'
                }}>
                  <Typography sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}>
                    <PaymentIcon /> Financiación flexible disponible
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Divider />

            {/* Certification Section */}
            <Box sx={{ 
              p: 2, 
              bgcolor: '#f3f4f6',
              border: '2px solid #1976d2',
              color: 'text.primary',
              borderRadius: 1
            }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontWeight: 'bold'
                }}
              >
                <VerifiedIcon color="primary" /> Certificación Profesional
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Al finalizar el máster obtendrás un certificado que acredita tus competencias
              </Typography>
            </Box>

            {/* Key Stats */}
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <WorkIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {masterData.employmentRate}%
                  </Typography>
                  <Typography color="text.secondary">
                    Tasa de empleabilidad en el sector
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTimeIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {masterData.schedule.hours}
                  </Typography>
                  <Typography color="text.secondary">
                    {masterData.schedule.duration} con horarios flexibles
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SchoolIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Formación en directo
                  </Typography>
                  <Typography color="text.secondary">
                    Clases en directo y grabadas + mentorías personalizadas
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GroupIcon color="primary" />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Grupos reducidos
                  </Typography>
                  <Typography color="text.secondary">
                    Máximo 25 alumnos por clase
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Button 
              variant="contained" 
              size="large"
              fullWidth
              onClick={handleContact}
              sx={{ 
                py: 2,
                fontSize: '1.1rem',
                bgcolor: masterColor,
                '&:hover': {
                  bgcolor: `${masterColor}CC`
                }
              }}
            >
              Me interesa este máster
            </Button>

            <Divider sx={{ my: 2 }} />
            
            <Button
              variant="outlined"
              size="large"
              fullWidth
              startIcon={<DownloadIcon />}
              onClick={async () => {
                try {
                  const pdfPath = getPDFPath();
                  if (!pdfPath) {
                    console.error('No se encontró un PDF para esta ruta');
                    return;
                  }
                  
                  const response = await fetch(pdfPath);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  
                  // Descargar el PDF
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = pdfPath.substring(1); // Quitar el / inicial
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  // Abrir el PDF en una nueva ventana
                  window.open(pdfPath, '_blank');
                  
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('Error al descargar el PDF:', error);
                }
              }}
              sx={{
                py: 1.5,
                color: masterColor,
                bgcolor: 'white',
                borderColor: masterColor,
                fontSize: '0.9rem',
                lineHeight: '1.2',
                height: 'auto',
                minHeight: '48px',
                '&:hover': {
                  bgcolor: `${masterColor}10`,
                  borderColor: masterColor
                }
              }}
            >
              DESCARGAR DESGLOSE DEL CONTENIDO DEL CURSO
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default MasterDetailPage; 
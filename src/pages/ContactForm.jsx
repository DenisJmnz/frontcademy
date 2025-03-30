import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Card,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Divider,
  CircularProgress,
  Backdrop
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLocation, useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const masters = [
  { value: 'fullstack', label: 'Máster en Desarrollo Full Stack' },
  { value: 'ia', label: 'Máster en Inteligencia Artificial' },
  { value: 'data', label: 'Máster en Data Science' },
  { value: 'cyber', label: 'Máster en Ciberseguridad' }
];

const contactTypes = [
  { 
    value: 'call', 
    label: 'Quiero que me llamen',
    description: 'Te llamaremos lo antes posible para resolver tus dudas'
  },
  { 
    value: 'videocall', 
    label: 'Solicitar videollamada con director académico',
    description: 'Agenda una videollamada personal con uno de nuestros directores académicos'
  }
];

const experienceLevels = [
  { 
    value: 'none', 
    label: 'Sin experiencia previa',
    description: 'No tengo experiencia en el sector'
  },
  { 
    value: 'basic', 
    label: 'Conocimientos básicos',
    description: 'Tengo algunos conocimientos básicos o estoy estudiando'
  },
  { 
    value: 'professional', 
    label: 'Experiencia profesional',
    description: 'Tengo experiencia laboral en el sector'
  }
];

// Añadir nuevo array para horarios de contacto
const contactSchedules = [
  { 
    value: 'morning', 
    label: 'Mañana (9:00 - 14:00)',
    description: 'Te contactaremos durante la mañana'
  },
  { 
    value: 'afternoon', 
    label: 'Tarde (16:00 - 20:00)',
    description: 'Te contactaremos durante la tarde'
  }
];

const ContactForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    master: location.state?.master || '',
    contactType: '',
    contactSchedule: '', // Nuevo campo
    experience: '',
    schedule: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      if (data.success) {
        setIsSubmitted(true);
      } else {
        console.error('Error del servidor:', data.error);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setIsSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (isSubmitted) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.50',
          py: 8
        }}
      >
        <Container maxWidth="sm">
          <Card
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 2,
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <CheckCircleIcon
              sx={{
                fontSize: 80,
                color: 'success.main',
                mb: 3,
                animation: 'popIn 0.5s ease-out',
                '@keyframes popIn': {
                  '0%': {
                    transform: 'scale(0)',
                    opacity: 0
                  },
                  '100%': {
                    transform: 'scale(1)',
                    opacity: 1
                  }
                }
              }}
            />
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
              ¡Solicitud enviada!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Nos pondremos en contacto contigo lo antes posible para resolver todas tus dudas.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleBackToHome}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontSize: '1.1rem'
              }}
            >
              Volver al inicio
            </Button>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Backdrop
        sx={{ 
          color: '#fff', 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }}
        open={isLoading}
      >
        <Stack spacing={2} alignItems="center">
          <CircularProgress color="primary" />
          <Typography>Enviando formulario...</Typography>
        </Stack>
      </Backdrop>

      {/* Hero Image */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902)', // Imagen de una reunión profesional/consultoría
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          marginTop: '-64px',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: alpha('#000', 0.7),
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', color: 'white', py: 8 }}>
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 2
            }}>
              Solicita información
            </Typography>
            <Typography sx={{ 
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: '600px',
              opacity: 0.9
            }}>
              Nuestro equipo estará encantado de resolver todas tus dudas y ayudarte a elegir el máster que mejor se adapte a tus objetivos
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ 
        bgcolor: 'grey.50', 
        minHeight: '100vh',
        position: 'relative',
        py: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)'
        }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Left Column - Form */}
            <Grid item xs={12} md={8}>
              <Card 
                elevation={3}
                sx={{ 
                  p: 4,
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'primary.main',
                    borderRadius: '2px 2px 0 0'
                  }
                }}
              >
                <Typography variant="h5" sx={{ 
                  fontWeight: 'bold',
                  mb: 3
                }}>
                  Formulario de contacto
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        label="Máster de interés"
                        name="master"
                        value={formData.master}
                        onChange={handleChange}
                        required
                      >
                        {masters.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" sx={{ 
                        mb: 2,
                        fontWeight: 500,
                        color: 'text.primary'
                      }}>
                        ¿Cómo prefieres que te contactemos?
                      </Typography>
                      <Grid container spacing={2}>
                        {contactTypes.map((type) => (
                          <Grid item xs={12} sm={6} key={type.value}>
                            <Card
                              onClick={() => handleChange({
                                target: { name: 'contactType', value: type.value }
                              })}
                              sx={{
                                p: 2,
                                cursor: 'pointer',
                                border: '2px solid',
                                borderColor: formData.contactType === type.value ? 
                                  'primary.main' : 'grey.200',
                                bgcolor: formData.contactType === type.value ?
                                  'primary.lighter' : 'background.paper',
                                transition: 'all 0.2s',
                                '&:hover': {
                                  borderColor: 'primary.main',
                                  transform: 'translateY(-4px)'
                                }
                              }}
                            >
                              <Typography variant="subtitle1" sx={{ 
                                fontWeight: 'bold',
                                mb: 1,
                                color: formData.contactType === type.value ?
                                  'primary.main' : 'text.primary'
                              }}>
                                {type.label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {type.description}
                              </Typography>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" sx={{ width: '100%' }}>
                        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                          ¿En qué horario prefieres que te contactemos?
                        </Typography>
                        <RadioGroup
                          row
                          name="contactSchedule"
                          value={formData.contactSchedule}
                          onChange={handleChange}
                          sx={{ 
                            justifyContent: 'flex-start',
                            width: '100%',
                            gap: 2
                          }}
                        >
                          {contactSchedules.map((schedule) => (
                            <FormControlLabel 
                              key={schedule.value}
                              value={schedule.value} 
                              control={<Radio />} 
                              label={schedule.label} 
                              sx={{ 
                                flex: '0 1 auto',
                                margin: 0,
                                mr: 2
                              }}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" sx={{ 
                        mb: 2,
                        fontWeight: 500,
                        color: 'text.primary'
                      }}>
                        ¿Tienes experiencia previa?
                      </Typography>
                      <Grid container spacing={2}>
                        {experienceLevels.map((level) => (
                          <Grid item xs={12} sm={4} key={level.value}>
                            <Card
                              onClick={() => handleChange({
                                target: { name: 'experience', value: level.value }
                              })}
                              sx={{
                                p: 2,
                                cursor: 'pointer',
                                border: '2px solid',
                                borderColor: formData.experience === level.value ? 
                                  'primary.main' : 'grey.200',
                                bgcolor: formData.experience === level.value ?
                                  'primary.lighter' : 'background.paper',
                                transition: 'all 0.2s',
                                '&:hover': {
                                  borderColor: 'primary.main',
                                  transform: 'translateY(-4px)'
                                }
                              }}
                            >
                              <Typography variant="subtitle1" sx={{ 
                                fontWeight: 'bold',
                                mb: 1,
                                color: formData.experience === level.value ?
                                  'primary.main' : 'text.primary'
                              }}>
                                {level.label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {level.description}
                              </Typography>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" sx={{ width: '100%' }}>
                        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                          Horario preferido para impartir el máster
                        </Typography>
                        <RadioGroup
                          row
                          name="schedule"
                          value={formData.schedule}
                          onChange={handleChange}
                          sx={{ 
                            justifyContent: 'flex-start',
                            width: '100%',
                            gap: 2
                          }}
                        >
                          <FormControlLabel 
                            value="morning" 
                            control={<Radio />} 
                            label="Mañana (10:00 - 14:00)" 
                            sx={{ 
                              flex: '0 1 auto',
                              margin: 0,
                              mr: 2
                            }}
                          />
                          <FormControlLabel 
                            value="afternoon" 
                            control={<Radio />} 
                            label="Tarde (16:30 - 20:30)" 
                            sx={{ 
                              flex: '0 1 auto',
                              margin: 0
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Mensaje (opcional)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Coméntanos tus dudas sobre becas, contenido del máster, formato de las clases, modalidad de pago..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ 
                          py: 2,
                          fontSize: '1.1rem'
                        }}
                      >
                        Enviar solicitud
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>

            {/* Right Column - Contact Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                position: 'sticky',
                top: '100px'
              }}>
                <Card 
                  elevation={3}
                  sx={{ 
                    p: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)'
                  }}
                >
                  <Stack spacing={4}>
                    <Box>
                      <Typography variant="h5" sx={{ 
                        fontWeight: 'bold',
                        mb: 3,
                        color: 'primary.main'
                      }}>
                        Información de contacto
                      </Typography>
                      <Stack spacing={3}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 2
                        }}>
                          <PhoneIcon color="primary" />
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              Teléfono
                            </Typography>
                            <Typography variant="body1">
                              +34 900 123 456
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 2
                        }}>
                          <EmailIcon color="primary" />
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              Email
                            </Typography>
                            <Typography variant="body1">
                              info@techschool.com
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Box>

                    <Divider />

                    <Box sx={{ 
                      p: 3,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: 2,
                      textAlign: 'center'
                    }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                        ¿Te llamamos?
                      </Typography>
                      <Typography>
                        Déjanos tus datos y te<br />
                        contactaremos lo antes posible
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactForm; 
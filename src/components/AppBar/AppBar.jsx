import React, { useState, useEffect, useRef } from 'react';
import { 
  AppBar as MuiAppBar, 
  Box, 
  Toolbar, 
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  useScrollTrigger
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import styled from 'styled-components';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LoginIcon from '@mui/icons-material/Login';

const menuItems = [
  { text: 'Inicio', path: '/' },
  { text: 'Másters', path: '/#masters', isSection: true },
  { text: 'Profesores', path: '/#about', isSection: true },
  { text: 'Contacto', path: '/contacto' },
  { text: 'Blog', path: '/blog' }
];

function AppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const pendingSectionRef = useRef(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const isAdmin = localStorage.getItem('adminAuth') === 'true';

  // Efecto para hacer scroll a la sección cuando la navegación se completa
  useEffect(() => {
    if (pendingSectionRef.current && location.pathname === '/') {
      const sectionId = pendingSectionRef.current;
      
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 67;
          const extraOffset = sectionId === 'about' ? 25 : 20;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight - extraOffset,
            behavior: 'smooth'
          });
          pendingSectionRef.current = null;
          return true;
        }
        return false;
      };
      
      // Esperar un momento para que el componente se renderice completamente
      const timeoutId = setTimeout(() => {
        let attempts = 0;
        const maxAttempts = 20;
        const tryScroll = setInterval(() => {
          attempts++;
          if (scrollToSection() || attempts >= maxAttempts) {
            clearInterval(tryScroll);
            if (attempts >= maxAttempts) {
              pendingSectionRef.current = null;
            }
          }
        }, 50);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [location.pathname]);

  const handleNavigation = (path, isSection) => {
    setMobileOpen(false);
    
    if (path === '/') {
      if (window.location.pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        navigate('/');
      }
    } else if (isSection) {
      const sectionId = path.replace('/#', '');
      
      // Si es una sección, navegar a la página principal primero si no estamos ahí
      if (window.location.pathname !== '/') {
        // Guardar la sección a la que queremos navegar
        pendingSectionRef.current = sectionId;
        navigate('/');
      } else {
        // Ya estamos en la página principal, hacer scroll directamente
        const scrollToSection = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            const navbarHeight = 67;
            const extraOffset = sectionId === 'about' ? 25 : 20;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - navbarHeight - extraOffset,
              behavior: 'smooth'
            });
            return true;
          }
          return false;
        };
        
        // Intentar hacer scroll inmediatamente
        if (!scrollToSection()) {
          // Si no se encuentra, intentar después de un pequeño delay
          setTimeout(() => {
            scrollToSection();
          }, 50);
        }
      }
    } else {
      navigate(path);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAdminClick = () => {
    setMobileOpen(false);
    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate('/login');
    }
  };

  return (
    <MuiAppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        bgcolor: trigger ? 'rgba(255, 255, 255, 0.85)' : 'white',
        boxShadow: 'none',
        borderBottom: 'none',
        transition: 'all 0.3s ease',
        backdropFilter: trigger ? 'blur(10px)' : 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
          <Box 
            component="div"
            onClick={() => handleNavigation('/')}
            sx={{ 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              ml: { xs: 0, md: -3 }
            }}
            className="logo-animation"
          >
            <Logo width={{ xs: 150, sm: 180, md: 220 }} />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  ml: 2,
                  color: 'text.primary'
                }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleNavigation(item.path, item.isSection)}
                    sx={{ 
                      color: 'text.primary',
                      mx: 1,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                <AdminLinkContainer onClick={handleAdminClick}>
                  <AdminIconContainer>
                    {isAdmin ? (
                      <SupervisorAccountIcon sx={{ fontSize: 24, color: '#1976d2' }} />
                    ) : (
                      <LoginIcon sx={{ fontSize: 24, color: '#1976d2' }} />
                    )}
                  </AdminIconContainer>
                  {!isAdmin && <AdminText>Acceso al campus</AdminText>}
                </AdminLinkContainer>
              </Box>
            </>
          )}

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 240,
                bgcolor: 'white'
              },
            }}
          >
            <List sx={{ pt: 8 }}>
              {menuItems.map((item) => (
                <ListItem 
                  key={item.text}
                  onClick={() => handleNavigation(item.path, item.isSection)}
                  sx={{ 
                    textDecoration: 'none',
                    color: 'text.primary',
                    cursor: 'pointer',
                    '& .MuiListItemText-primary': {
                      fontSize: '0.95rem',
                      fontWeight: 500
                    }
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
              <ListItem 
                onClick={handleAdminClick}
                sx={{ 
                  textDecoration: 'none',
                  color: 'text.primary',
                  cursor: 'pointer',
                  '& .MuiListItemText-primary': {
                    fontSize: '0.95rem',
                    fontWeight: 500
                  },
                  display: 'flex',
                  gap: '12px'
                }}
              >
                {isAdmin ? (
                  <SupervisorAccountIcon sx={{ fontSize: 24, color: '#1976d2' }} />
                ) : (
                  <LoginIcon sx={{ fontSize: 24, color: '#1976d2' }} />
                )}
                <ListItemText primary={isAdmin ? "Dashboard" : "Acceso al campus"} />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

const AdminIconContainer = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  &:hover {
    background-color: white;
    transform: scale(1.05);
    box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  }
`;

const AdminText = styled.span`
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  
  &:hover {
    color: #1976d2;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const AdminLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-left: 20px;

  &:hover ${AdminText} {
    color: #1976d2;
  }
`;

export default AppBar;

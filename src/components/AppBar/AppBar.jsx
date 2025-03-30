import React, { useState } from 'react';
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
import NewLogo43 from './NewLogo43';
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
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const isAdmin = localStorage.getItem('adminAuth') === 'true';

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
    } else if (isSection && window.location.pathname === '/') {
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
    } else {
      navigate(path);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAdminClick = () => {
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
        bgcolor: 'white',
        boxShadow: 'none',
        borderBottom: 'none',
        transition: 'all 0.3s ease'
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
            <NewLogo43 />
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

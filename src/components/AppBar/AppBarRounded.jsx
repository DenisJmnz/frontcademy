import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import NewLogo43 from './NewLogo43';

function AppBarRounded() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Másters', path: '/masters' },
    { text: 'Profesores', path: '/profesores' },
    { text: 'Contacto', path: '/contacto' },
    { text: 'Logo Preview', path: '/logo-preview' }
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        mt: { xs: 1, sm: 1.5 }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            background: '#FFFFFF',
            borderRadius: '100px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            mx: { xs: 1, sm: 2 },
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Toolbar 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              minHeight: '56px !important',
              py: 0.75,
              px: { xs: 2, sm: 3 },
              '& .MuiButton-root': {
                minWidth: 'auto',
                borderRadius: '100px',
                px: 2,
                py: 0.75,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white'
                }
              }
            }}
          >
            <Box 
              component={RouterLink}
              to="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
                '& .MuiBox-root': {
                  fontSize: { xs: '1.5rem', sm: '1.7rem' }
                }
              }}
            >
              <NewLogo43 />
            </Box>

            {/* Desktop Navigation */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                gap: 0.75,
                alignItems: 'center'
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    letterSpacing: '0.2px'
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: 'text.primary',
                padding: '6px',
                '& .MuiSvgIcon-root': {
                  fontSize: '1.3rem'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '400px' },
            backgroundColor: 'rgba(255, 255, 255, 0.98)', 
            backdropFilter: 'blur(8px)',
            pt: 2
          }
        }}
      >
        {/* Drawer Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          pb: 4,
          pt: 4,
          borderBottom: '1px solid',
          borderColor: 'divider',
          background: '#FFFFFF'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flex: 1,
            '& .MuiBox-root': {
              fontSize: { xs: '3rem', sm: '4rem' }
            }
          }}>
            <NewLogo43 />
          </Box>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ 
              position: 'absolute',
              top: 16,
              right: 16
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        {/* Drawer Content */}
        <Box sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.text}
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: '1.1rem',
                  fontWeight: 500
                }}
              >
                {item.text}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default AppBarRounded; 
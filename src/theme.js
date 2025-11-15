const theme = createTheme({
  palette: {
    primary: {
      main: '#0F172A',
      light: '#1E293B',
      dark: '#020617'
    },
    secondary: {
      main: '#38BDF8',
      light: '#7DD3FC',
      dark: '#0284C7'
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
      subtle: '#F1F5F9'
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569'
    },
    accent: {
      main: '#38BDF8',
      light: '#BAE6FD',
      dark: '#0369A1'
    }
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontWeight: 600
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          }
        },
        contained: {
          background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
          '&:hover': {
            background: 'linear-gradient(145deg, #1E293B 0%, #0F172A 100%)',
          }
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0'
        }
      }
    }
  }
}); 
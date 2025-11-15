import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9D8F', // Turquesa más oscuro
      light: '#40C4AA',
      dark: '#1F756B',
      lighter: 'rgba(42, 157, 143, 0.12)', // Para fondos suaves
      contrastText: '#fff',
    },
    secondary: {
      main: '#40C4AA', // Turquesa medio
      light: '#A5ECD7',
      dark: '#2A9D8F',
      contrastText: '#2A4365',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    error: {
      main: '#F87171',
      light: '#FCA5A5',
      dark: '#DC2626',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFE082',
      dark: '#F57C00',
    },
    info: {
      main: '#64B5F6',
      light: '#90CAF9',
      dark: '#1976D2',
    },
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2A4365', // Azul oscuro para mejor contraste
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
}); 
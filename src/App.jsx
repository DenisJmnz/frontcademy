import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ChatBot from './components/ChatBot'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 50,
      once: true,
      easing: 'ease-out-cubic',
      delay: 25,
      mirror: false,
      anchorPlacement: 'top-center',
    });
  }, []);

  return (
    <Router basename="/">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-container">
          <AppBar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <ChatBot />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

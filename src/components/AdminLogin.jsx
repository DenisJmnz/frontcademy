import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Paper, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useResponsive } from '../hooks/useResponsive';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isMobile = useResponsive();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'dnsjmnz' && credentials.password === 'Nsd2dSMR') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <LoginContainer isMobile={isMobile}>
      <LoginPaper elevation={3} isMobile={isMobile}>
        <LoginHeader>
          <SchoolIcon sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
          <Typography variant="h4" component="h1" align="center" sx={{ mb: 0.5 }}>
            Campus Virtual
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center" sx={{ mb: 1 }}>
            Accede a tu espacio de aprendizaje
          </Typography>
        </LoginHeader>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <LoginForm onSubmit={handleLogin}>
          <InputGroup>
            <InputLabel>
              <PersonIcon sx={{ color: '#666', mr: 0.5 }} />
              <Label>Usuario</Label>
            </InputLabel>
            <Input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              placeholder="Ingresa tu usuario"
            />
          </InputGroup>
          
          <InputGroup>
            <InputLabel>
              <LockIcon sx={{ color: '#666', mr: 0.5 }} />
              <Label>Contraseña</Label>
            </InputLabel>
            <Input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              placeholder="Ingresa tu contraseña"
            />
          </InputGroup>
          
          <LoginButton type="submit">
            Iniciar sesión
          </LoginButton>

          <HelpLinks>
            <HelpLink href="#">¿Olvidaste tu contraseña?</HelpLink>
            <HelpLink href="#">Ayuda</HelpLink>
          </HelpLinks>
        </LoginForm>

        <Footer>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Appcademy. Todos los derechos reservados.
          </Typography>
        </Footer>
      </LoginPaper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  padding: 0;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 64px);

  .main-content {
    padding-top: 0 !important;
  }
`;

const LoginPaper = styled(Paper)`
  width: 100%;
  max-width: ${props => props.isMobile ? '100%' : '400px'};
  padding: ${props => props.isMobile ? '1rem' : '1.5rem'};
  border-radius: ${props => props.isMobile ? '0' : '8px'};
  margin: ${props => props.isMobile ? '0' : '2rem auto 0'};
  box-shadow: ${props => props.isMobile ? 'none' : '0 8px 24px rgba(0,0,0,0.15)'};
  background: white;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  .MuiSvgIcon-root {
    font-size: 50px !important;
    margin-bottom: 0.5rem !important;
  }

  h1 {
    margin-bottom: 0.5rem !important;
  }
`;

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: 500;
  color: #666;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 0.75rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 0.75rem;

  &:hover {
    background: #1565c0;
  }
`;

const HelpLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const HelpLink = styled.a`
  color: #1976d2;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #eee;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  background: #ffe6e6;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

export default AdminLogin;
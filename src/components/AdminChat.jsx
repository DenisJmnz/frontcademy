import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Badge } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { useResponsive } from '../hooks/useResponsive';

const AdminChat = () => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [clients, setClients] = useState({});
  const [currentResponse, setCurrentResponse] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const navigate = useNavigate();
  const isMobile = useResponsive();

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);
    
    // Autenticación del admin
    newSocket.emit('admin-auth', 'admin-secret-token');

    // Escuchar conexión
    newSocket.on('connect', () => {
      console.log('Conectado al servidor como admin');
      setIsConnected(true);
    });

    // Escuchar mensajes de clientes
    newSocket.on('client-message', ({ message, clientId }) => {
      console.log('Mensaje recibido de cliente:', message, 'ID:', clientId);
      setClients(prev => ({
        ...prev,
        [clientId]: {
          ...prev[clientId],
          messages: [...(prev[clientId]?.messages || []), { text: message, isClient: true }],
          hasUnread: selectedClient !== clientId
        }
      }));
    });

    // Escuchar estado de conexión
    newSocket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      setIsConnected(false);
    });

    // Escuchar errores
    newSocket.on('connect_error', (error) => {
      console.error('Error de conexión:', error);
    });

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []); // Quitamos selectedClient de las dependencias

  const handleClientSelect = (clientId) => {
    setSelectedClient(clientId);
    if (clients[clientId]) {
      setClients(prev => ({
        ...prev,
        [clientId]: {
          ...prev[clientId],
          hasUnread: false
        }
      }));
    }
  };

  const handleSendResponse = (clientId) => {
    if (!currentResponse.trim() || !socket) return;

    const message = currentResponse.trim();
    
    socket.emit('admin-message', {
      message,
      clientId
    });

    setClients(prev => ({
      ...prev,
      [clientId]: {
        ...prev[clientId],
        messages: [...(prev[clientId]?.messages || []), { text: message, isClient: false }]
      }
    }));

    setCurrentResponse('');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/login');
  };

  return (
    <AdminContainer $isMobile={isMobile}>
      <AdminHeader $isMobile={isMobile}>
        <Typography variant="h4" component="h1" sx={{ 
          fontSize: isMobile ? '1.5rem' : '2rem',
          mb: isMobile ? 1 : 0 
        }}>
          Dashboard
        </Typography>
        <LogoutButton $isMobile={isMobile} onClick={handleLogout}>
          <ExitToAppIcon /> {!isMobile && "Cerrar Sesión"}
        </LogoutButton>
      </AdminHeader>

      <ChatInterface $isMobile={isMobile}>
        <ClientsList $isMobile={isMobile}>
          <Typography variant="h6" sx={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
            Chats Activos
          </Typography>
          {Object.entries(clients).map(([clientId, clientData]) => (
            <ClientItem 
              key={clientId} 
              onClick={() => handleClientSelect(clientId)}
              $selected={selectedClient === clientId}
            >
              <PersonIcon />
              <ClientInfo>
                <Typography variant="subtitle1">Usuario {clientId.slice(0, 6)}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {clientData.messages[clientData.messages.length - 1]?.text.slice(0, 30)}...
                </Typography>
              </ClientInfo>
              {clientData.hasUnread && <UnreadBadge />}
            </ClientItem>
          ))}
        </ClientsList>

        <ChatArea>
          {selectedClient ? (
            <>
              <ChatMessages>
                {clients[selectedClient]?.messages.map((msg, idx) => (
                  <Message key={idx} $isAdmin={!msg.isClient}>
                    <MessageContent $isAdmin={!msg.isClient}>
                      {msg.text}
                    </MessageContent>
                  </Message>
                ))}
              </ChatMessages>
              <ResponseForm onSubmit={(e) => {
                e.preventDefault();
                handleSendResponse(selectedClient);
              }}>
                <ResponseInput
                  value={currentResponse}
                  onChange={(e) => setCurrentResponse(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                />
                <SendButton type="submit">
                  <SendIcon />
                </SendButton>
              </ResponseForm>
            </>
          ) : (
            <EmptyState>
              <Typography variant="h6">Selecciona un chat para comenzar</Typography>
            </EmptyState>
          )}
        </ChatArea>
      </ChatInterface>
    </AdminContainer>
  );
};

const AdminContainer = styled.div`
  padding: 0;
  height: 100vh;
  background: #f5f7fa;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.$isMobile ? '1rem' : '0 2rem'};
  height: ${props => props.$isMobile ? 'auto' : '64px'};
  flex-wrap: ${props => props.$isMobile ? 'wrap' : 'nowrap'};
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 64px;
`;

const ChatInterface = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$isMobile ? '1fr' : '300px 1fr'};
  grid-template-rows: ${props => props.$isMobile ? 'auto 1fr' : '1fr'};
  height: calc(100vh - 128px);
  overflow: hidden;
`;

const ClientsList = styled.div`
  border-right: ${props => props.$isMobile ? 'none' : '1px solid #eee'};
  border-bottom: ${props => props.$isMobile ? '1px solid #eee' : 'none'};
  overflow-y: auto;
  max-height: ${props => props.$isMobile ? '200px' : 'none'};
`;

const ClientItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  background: ${props => props.$selected ? '#f0f7ff' : 'transparent'};
  position: relative;

  &:hover {
    background: ${props => props.$selected ? '#f0f7ff' : '#f5f5f5'};
  }
`;

const ClientInfo = styled.div`
  margin-left: 1rem;
  flex: 1;
`;

const UnreadBadge = styled(Badge)`
  position: absolute;
  right: 1rem;
  width: 10px;
  height: 10px;
  background: #1976d2;
  border-radius: 50%;
`;

const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const Message = styled.div`
  display: flex;
  justify-content: ${props => props.$isAdmin ? 'flex-end' : 'flex-start'};
  margin-bottom: 1rem;
`;

const MessageContent = styled.div`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  background: ${props => props.$isAdmin ? '#0284C7' : '#f1f5f9'};
  color: ${props => props.$isAdmin ? 'white' : '#1e293b'};
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

const ResponseForm = styled.form`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-top: 1px solid #eee;
`;

const ResponseInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #1976d2;
  }
`;

const SendButton = styled.button`
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #1565c0;
  }
`;

const LogoutButton = styled.button`
  padding: ${props => props.$isMobile ? '0.5rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.$isMobile ? '0.9rem' : '1rem'};
  width: ${props => props.$isMobile ? '40px' : 'auto'};
  height: ${props => props.$isMobile ? '40px' : 'auto'};
  border-radius: ${props => props.$isMobile ? '50%' : '0.5rem'};
  background: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #c82333;
  }
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
`;

export default AdminChat; 
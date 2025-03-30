import React, { useState, useEffect, useRef } from 'react';
import { ChatService } from '../core/infrastructure/chat/ChatService';
import { Box, IconButton, Typography, TextField, Paper, CircularProgress } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

const ChatButton = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor: '#0284C7',
      color: 'white',
      '&:hover': {
        backgroundColor: '#0369A1'
      },
      width: 56,
      height: 56,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}
  >
    <ChatIcon sx={{ fontSize: 28 }} />
  </IconButton>
);

const ChatWindow = ({ onClose, messages, onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(e);
      setMessage('');
    }
  };

  const isAssistantTime = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 9 && hour < 18;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 90,
        right: 20,
        width: 350,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: '#0284C7',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Asistencia e información
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'flex-start',
              flexDirection: msg.isUser ? 'row-reverse' : 'row'
            }}
          >
            {!msg.isUser && (
              <Box sx={{ mt: 0.5 }}>
                {isAssistantTime() ? (
                  <SmartToyIcon sx={{ color: '#0284C7' }} />
                ) : (
                  <PersonIcon sx={{ color: '#0284C7' }} />
                )}
              </Box>
            )}
            <Box
              sx={{
                backgroundColor: msg.isUser ? '#0284C7' : '#F1F5F9',
                color: msg.isUser ? 'white' : 'black',
                p: 1.5,
                borderRadius: 2,
                maxWidth: '80%',
                wordBreak: 'break-word'
              }}
            >
              <Typography variant="body2">
                {msg.text}
              </Typography>
            </Box>
          </Box>
        ))}
        {isLoading && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <SmartToyIcon sx={{ color: '#0284C7' }} />
            <CircularProgress size={20} />
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 2,
          borderTop: '1px solid #E2E8F0',
          display: 'flex',
          gap: 1
        }}
      >
        <TextField
          fullWidth
          size="small"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        <IconButton
          type="submit"
          disabled={!message.trim() || isLoading}
          sx={{
            backgroundColor: '#0284C7',
            color: 'white',
            '&:hover': {
              backgroundColor: '#0369A1'
            },
            '&.Mui-disabled': {
              backgroundColor: '#CBD5E1'
            }
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatService = useRef(null);
  const unsubscribe = useRef(null);

  const isBusinessHours = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 100 + minutes;

    // Horario de mañana: 9:00 - 14:00
    const isMorningShift = currentTime >= 900 && currentTime <= 1400;
    // Horario de tarde: 16:00 - 20:00
    const isAfternoonShift = currentTime >= 1600 && currentTime <= 2000;

    return isMorningShift || isAfternoonShift;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 14 ? "Buenos días" : "Buenas tardes";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.message?.value || '';
    if (!message.trim()) return;

    const newMessage = { text: message, isUser: true };
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(false);

    try {
      chatService.current.sendMessage(message);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  useEffect(() => {
    chatService.current = new ChatService();
    chatService.current.connect();

    // Suscribirse a los mensajes
    unsubscribe.current = chatService.current.onMessage((data) => {
      // Verificar si el mensaje es un objeto y tiene la propiedad message
      const messageText = typeof data === 'object' ? data.message : data;
      setMessages(prev => [...prev, { text: messageText, isUser: false }]);
      setIsLoading(false);
    });

    // Mensajes iniciales según el horario
    const businessHours = isBusinessHours();
    if (businessHours) {
      setMessages([
        {
          text: `${getGreeting()}, mi nombre es David, ¿en qué puedo ayudarte?`,
          isUser: false
        }
      ]);
    } else {
      setMessages([
        {
          text: "¡Bienvenido! En este momento te atenderá nuestro equipo de atención personalizada. Horario de atención: Lunes a Viernes de 9:00 a 14:00 y de 16:00 a 20:00.",
          isUser: false
        }
      ]);
    }

    return () => {
      if (unsubscribe.current) {
        unsubscribe.current();
      }
      if (chatService.current) {
        chatService.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {!isOpen && <ChatButton onClick={() => setIsOpen(true)} />}
      {isOpen && (
        <ChatWindow
          onClose={() => setIsOpen(false)}
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default ChatBot;
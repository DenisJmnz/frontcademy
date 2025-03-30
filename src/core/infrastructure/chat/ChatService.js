import { io } from 'socket.io-client';

export class ChatService {
  constructor() {
    this.socket = null;
    this.connected = false;
    this.messageCallbacks = new Set();
  }

  connect() {
    if (!this.connected) {
      this.socket = io('http://localhost:5000', {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        path: '/socket.io/',
        withCredentials: true,
        autoConnect: true
      });

      this.socket.on('connect', () => {
        console.log('Conectado al servidor de chat');
        this.connected = true;
      });

      this.socket.on('disconnect', () => {
        console.log('Desconectado del servidor de chat');
        this.connected = false;
      });

      this.socket.on('connect_error', (error) => {
        console.error('Error de conexión:', error);
      });

      this.socket.on('error', (error) => {
        console.error('Error en socket:', error);
      });

      this.socket.on('receive_message', (message) => {
        console.log('Mensaje recibido:', message);
        this.messageCallbacks.forEach(callback => callback(message));
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.connected = false;
    }
  }

  joinRoom(room) {
    if (this.connected) {
      this.socket.emit('join_room', room);
      console.log('Uniéndose a la sala:', room);
    }
  }

  sendMessage(message) {
    if (this.connected) {
      console.log('Enviando mensaje:', message);
      this.socket.emit('client-message', { 
        message,
        clientId: this.socket.id
      });
    } else {
      console.error('No hay conexión con el servidor');
      throw new Error('No hay conexión con el servidor');
    }
  }

  onMessage(callback) {
    this.messageCallbacks.add(callback);
    return () => this.messageCallbacks.delete(callback);
  }

  offMessage(callback) {
    this.messageCallbacks.delete(callback);
  }
} 
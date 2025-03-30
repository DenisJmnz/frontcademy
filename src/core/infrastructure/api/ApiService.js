import { environment } from '../../config/environment';

export class ApiService {
  constructor() {
    this.baseUrl = environment.apiUrl;
    console.log('=== API Service Configuration ===');
    console.log('Base URL:', this.baseUrl);
    console.log('===============================');
  }

  async request(endpoint, options = {}) {
    // Asegurarnos de que el endpoint siempre comience con slash
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${normalizedEndpoint}`;
    
    console.log('=== Making API Request ===');
    console.log('Request details:', {
      url,
      endpoint,
      normalizedEndpoint,
      baseUrl: this.baseUrl,
      method: options.method || 'GET'
    });
    console.log('=========================');
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('=== API Error ===');
      console.error('Error details:', {
        error,
        url,
        endpoint,
        baseUrl: this.baseUrl
      });
      console.error('=====================');
      throw error;
    }
  }

  // Métodos específicos para usuarios
  async createUser(userData) {
    return this.request('/api/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    return this.request('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getUser(userId) {
    return this.request(`/api/users/${userId}`);
  }

  async getProfile() {
    return this.request('/api/users/profile');
  }

  // Métodos para el formulario de contacto
  async sendContactForm(formData) {
    return this.request('/api/form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Métodos para otros recursos...
} 
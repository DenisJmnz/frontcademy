export class ApiService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
    console.log('API URL:', this.baseUrl);
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
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
      console.error('API Error:', error);
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
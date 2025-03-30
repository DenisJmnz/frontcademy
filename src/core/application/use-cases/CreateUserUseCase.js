import { User } from '../../domain/entities/User.js';
import { ApiService } from '../../infrastructure/api/ApiService.js';

export class CreateUserUseCase {
  constructor() {
    this._apiService = new ApiService();
  }

  async execute(userData) {
    try {
      // Crear la entidad User
      const user = new User(userData);

      // Enviar al backend
      const response = await this._apiService.createUser(user);

      return new User(response);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
} 
import { User } from '../../domain/entities/User.js';
import { ApiService } from '../../infrastructure/api/ApiService.js';

export class GetUserUseCase {
  constructor() {
    this._apiService = new ApiService();
  }

  async execute(userId) {
    try {
      const response = await this._apiService.getUser(userId);
      return new User(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error.message}`);
    }
  }
} 
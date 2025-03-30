import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/entities/User';

export class UserRepository extends IUserRepository {
  constructor(apiClient) {
    super();
    this._apiClient = apiClient;
  }

  async findById(id) {
    const response = await this._apiClient.get(`/users/${id}`);
    return new User(response.data);
  }

  async findByEmail(email) {
    const response = await this._apiClient.get(`/users/email/${email}`);
    return new User(response.data);
  }

  async save(user) {
    const response = await this._apiClient.post('/users', user);
    return new User(response.data);
  }

  async update(user) {
    const response = await this._apiClient.put(`/users/${user.id}`, user);
    return new User(response.data);
  }

  async delete(id) {
    await this._apiClient.delete(`/users/${id}`);
  }
} 
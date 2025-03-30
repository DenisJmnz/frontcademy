export class User {
  constructor({ id, name, email, role }) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._role = role;
  }

  // Getters
  get id() { return this._id; }
  get name() { return this._name; }
  get email() { return this._email; }
  get role() { return this._role; }

  // Métodos de negocio
  isAdmin() {
    return this._role === 'admin';
  }

  // Método para crear una copia inmutable
  clone() {
    return new User({
      id: this._id,
      name: this._name,
      email: this._email,
      role: this._role
    });
  }
} 
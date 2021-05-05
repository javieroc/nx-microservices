export type Role = 'provider' | 'consumer';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  role: Role;
}

export type AuthUser = Pick<User, 'id' | 'email'>

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  confirmPassword: string;
}

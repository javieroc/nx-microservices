export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
}

export type AuthUser = Pick<User, 'id' | 'email'>

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

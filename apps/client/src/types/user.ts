type Role = 'provider' | 'consumer';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: Role;
}

export interface CreateUserPayload {
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  password: string;
}

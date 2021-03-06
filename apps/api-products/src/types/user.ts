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

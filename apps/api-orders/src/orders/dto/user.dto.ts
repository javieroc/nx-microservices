type Role = 'provider' | 'consumer';

class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: Role;
}

export { UserDto, Role }

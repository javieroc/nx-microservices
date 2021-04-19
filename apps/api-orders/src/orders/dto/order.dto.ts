import { UserDto } from "./user.dto";

class OrderDto {
  id: string;
  date: Date;
  total: number;
  provider: UserDto;
}

export { OrderDto };

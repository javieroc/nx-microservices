declare namespace Express {
  import UserDto from '../../orders/dto/user.dto';
  export interface Request {
    user?: UserDto;
  }
}

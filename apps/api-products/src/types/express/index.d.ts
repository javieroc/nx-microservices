declare namespace Express {
  import { User } from '../user';
  export interface Request {
    user?: User;
  }
}

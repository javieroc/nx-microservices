import { GenericError } from './GenericError'

class AuthenticateError extends GenericError {
  constructor() {
    super(404, 'Authentication fail', 'AuthenticateError');
  }
}

export { AuthenticateError }

import { GenericError } from './GenericError'

class ForbiddenError extends GenericError {
  constructor() {
    super(403, 'User not autorized to perform this action', 'ForbiddenError');
  }
}

export { ForbiddenError }

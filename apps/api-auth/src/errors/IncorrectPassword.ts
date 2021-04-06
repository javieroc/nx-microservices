import { GenericError } from './GenericError'

class IncorrectPassword extends GenericError {
  constructor() {
    super(400, 'Incorrect password', 'IncorrectPassword')
  }
}

export { IncorrectPassword }

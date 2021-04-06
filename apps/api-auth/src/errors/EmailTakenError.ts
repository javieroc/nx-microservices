import { GenericError } from './GenericError'

class EmailTakenError extends GenericError {
  constructor() {
    super(400, 'Email address already used.', 'EmailAddressInUse')
  }
}

export { EmailTakenError }

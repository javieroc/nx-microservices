import { GenericError } from './GenericError'

class NotFoundError extends GenericError {
  constructor(resource: string) {
    super(404, `${resource} not found`, 'NotFoundError')
  }
}

export { NotFoundError }

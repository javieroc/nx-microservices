import { CelebrateError } from 'celebrate'
import { GenericError } from './GenericError'

interface FieldError {
  field: string;
  message: string;
}

const getErrors = (error: CelebrateError): FieldError[] => {
  const errors: FieldError[] = []

  error.details.forEach((value) => {
    value.details.forEach((error) => {
      errors.push({
        field: error.path[0] as string,
        message: error.message
      })
    })
  })

  return errors;
}

class ValidationError extends GenericError {
  validations: FieldError[]

  constructor(error: CelebrateError) {
    super(400, error.message, 'ValidationError')
    this.validations = getErrors(error)
  }
}

export { ValidationError }

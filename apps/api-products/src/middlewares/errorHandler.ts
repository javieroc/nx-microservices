/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import { isCelebrateError } from 'celebrate'
import { ValidationError } from '../errors/ValidationError'
import { GenericError } from '../errors/GenericError'

const getResponseError = (error: Error) => {
  if (isCelebrateError(error)) return new ValidationError(error)

  if (error instanceof GenericError) return error

  return new GenericError(500, error.message)
}

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  const responseError = getResponseError(error)
  res
    .status(responseError.status)
    .send({ error: { ...responseError, message: responseError.message } })
}

export { errorHandler }

import fetch from 'node-fetch';
import { Request, Response, NextFunction } from 'express';
import { AuthenticateError } from '../errors';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
      ? req.headers.authorization.split(' ')[1] : ''

    if (!token) throw new AuthenticateError();

    const url = `${process.env.API_AUTH_URL}/auth/validate`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json()
    if (!data) throw new AuthenticateError();

    req.user = data;

    next()
  } catch (error) {
    next(error)
  }
}

export { authenticate };

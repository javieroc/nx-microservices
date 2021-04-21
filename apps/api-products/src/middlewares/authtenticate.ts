import fetch from 'node-fetch';
import { Request, Response, NextFunction } from 'express';
import { AuthenticateError, ForbiddenError } from '../errors';
import { User } from '../types';

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
    const user: User = await response.json()
    if (!user) throw new AuthenticateError();

    if (user.role !== 'provider') throw new ForbiddenError();

    req.user = user;

    next();
  } catch (error) {
    next(error)
  }
}

export { authenticate };

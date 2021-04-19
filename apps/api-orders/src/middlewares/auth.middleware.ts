import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

@Injectable()
class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
        ? req.headers.authorization.split(' ')[1] : ''

      if (!token) throw new Error('auth error');

      const url = `${process.env.API_AUTH_URL}/auth/validate`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json()
      if (!data) throw new Error('auth error');

      req.user = data;

      next()
    } catch (error) {
      next(error)
    }
  }
}

export { AuthMiddleware };

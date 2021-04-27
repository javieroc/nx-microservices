import { Injectable, NestMiddleware, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { UserDto } from '../orders/dto';

@Injectable()
class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
        ? req.headers.authorization.split(' ')[1] : ''

      if (!token) throw new UnauthorizedException();

      const url = `${process.env.API_AUTH_URL}/auth/validate`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const user: UserDto = await response.json()
      if (!user) throw new UnauthorizedException();

      if (user.role !== 'consumer') {
        throw new ForbiddenException();
      }
      req.user = user;

      next()
    } catch (error) {
      next(error)
    }
  }
}

export { AuthMiddleware };

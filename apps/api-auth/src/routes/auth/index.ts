import passport from 'passport';
import express, { Request, Response, NextFunction } from 'express';
import { UserPayload, AuthUser, User } from '../../types';
import { AuthenticationService } from '../../services/AuthenticationService';
import { AuthUtils } from '../../utils/auth';
import { validateLogin, validateRegister } from './validations';

const authRouter = express.Router();

authRouter.get('/welcome', (req, res) => {
  res.send({ message: 'Welcome to api-users!' })
});

const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authUser = req.user as AuthUser
    const token = AuthUtils.generateJwt(authUser)
    const user = await AuthenticationService.findUser(authUser)
    res.status(200).send({ user, token })
  } catch (error) {
    next(error)
  }
}

authRouter.post(
  '/login',
  validateLogin,
  passport.authenticate('local', { session: false }),
  loginHandler,
);

const registerHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payloadUser: UserPayload = req.body
    await AuthenticationService.createUser(payloadUser)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
}

authRouter.post(
  '/register',
  validateRegister,
  registerHandler,
);

const validateHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user as User
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
}

authRouter.get(
  '/validate',
  passport.authenticate('jwt', { session: false }),
  validateHandler,
)

export { authRouter };

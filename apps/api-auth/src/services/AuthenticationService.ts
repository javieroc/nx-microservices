import { User } from '../models';
import { AuthUtils } from '../utils/auth';
import { User as UserType, UserPayload, AuthUser } from '../types';
import { NotFoundError, IncorrectPassword, EmailTakenError } from '../errors';
import { QueryFailedError } from 'typeorm';

const authenticate = async (email: string, password: string): Promise<AuthUser> => {
  const user = await User.findOne({ email }, { select: ['id', 'email', 'password'] })

  if (!user) throw new NotFoundError('User')

  const match = await AuthUtils.comparePassword(password, user.password)

  if (!match) throw new IncorrectPassword()
  return { id: user.id, email: user.email }
}

const createUser = async ({ password, email, ...rest }: UserPayload): Promise<UserType> => {
  try {
    const passwordHash = await AuthUtils.hashPassword(password)
    const user = await User.create({
      password: passwordHash,
      email,
      avatar: `https://robohash.org/${email}`,
      ...rest,
    }).save()
    return user
  } catch (error) {
    if (error instanceof QueryFailedError) {
      throw new EmailTakenError()
    }
    throw error
  }
}

const findUser = async ({ id }: AuthUser) => User.findOne({ id })

export const AuthenticationService = {
  authenticate,
  createUser,
  findUser
}

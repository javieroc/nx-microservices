import bcrypt from 'bcrypt'
import jwt, { SignOptions } from 'jsonwebtoken'
import { AuthUser } from '../types'

const comparePassword = (password: string, hash: string) => bcrypt.compare(password, hash)

const generateJwt = (payload: AuthUser, signOptions?: SignOptions) => jwt.sign(payload, process.env.JWT_SECRET, signOptions)

const hashPassword = (password: string) => bcrypt.hash(password, 10)

export const AuthUtils = {
  comparePassword,
  generateJwt,
  hashPassword,
}

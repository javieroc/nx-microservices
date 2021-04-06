import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import { AuthenticationService } from '../services/AuthenticationService'

const localStrategy = new LocalStrategy(
  { usernameField: 'email', passReqToCallback: true, session: false },
  async (_req, email, password, done) => {
    try {
      const user = await AuthenticationService.authenticate(email, password)
      return done(null, user)
    } catch (error) {
      return done(error, false)
    }
  }
)

const jwtStrategy = new JwtStrategy(
  { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWT_SECRET },
  async (payload, done) => {
    try {
      const user = await AuthenticationService.findUser({ id: payload.id, email: payload.email })
      return done(null, user)
    } catch (error) {
      return done(error, false)
    }
  }
)

const config = () => {
  passport.use(localStrategy)
  passport.use(jwtStrategy)
}

export const Passport = {
  config,
}

import express from 'express'
import passport from 'passport'
import dotenv from 'dotenv'
import { mainRouter } from './routes'
import { Passport } from './setup/passport'
import { errorHandler } from './middlewares'

dotenv.config()
Passport.config()
const app = express()

app.use(express.json())
app.use(passport.initialize())
app.use(mainRouter)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-users!' })
})

app.use(errorHandler)

export { app }

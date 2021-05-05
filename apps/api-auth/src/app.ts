import express from 'express'
import passport from 'passport'
import dotenv from 'dotenv'
import cors from 'cors';
import { mainRouter } from './routes'
import { Passport } from './setup/passport'
import { errorHandler } from './middlewares'

dotenv.config()
Passport.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use(mainRouter)

app.use(errorHandler)

export { app }

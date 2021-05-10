import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mainRouter } from './routes'
import { errorHandler } from './middlewares';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-products!' });
});

app.use(errorHandler);

export { app };

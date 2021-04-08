import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-products!' });
});

export { app };

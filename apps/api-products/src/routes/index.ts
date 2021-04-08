import express from 'express';
import { productsRouter } from './products';

const mainRouter = express.Router();

mainRouter.use('/products', productsRouter);

export { mainRouter };

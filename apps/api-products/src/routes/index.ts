import express from 'express';
import { categoryRouter } from './category';
import { productsRouter } from './products';
import { authenticate } from '../middlewares';

const mainRouter = express.Router();

mainRouter.use('/categories', authenticate, categoryRouter);
mainRouter.use('/products', authenticate, productsRouter);

export { mainRouter };

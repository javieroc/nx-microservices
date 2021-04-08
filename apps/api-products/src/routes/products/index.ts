import express, { Request, Response } from 'express';

const productsRouter = express.Router();

productsRouter.get('/', (req: Request, res: Response) => {
  res.send('list of products')
});

productsRouter.post('/', (req: Request, res: Response) => {
  res.send('create product')
});

productsRouter.put('/:id', (req: Request, res: Response) => {
  res.send('list of products')
});

productsRouter.delete('/:id', (req: Request, res: Response) => {
  res.send('create product')
});

export { productsRouter };

import express, { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../services';
import { User, ProductCreatePayload, ProductUpdatePayload } from '../../types';
import { validateCreateProduct, validateIdParams, validateUpdateProduct } from './validations';

const productsRouter = express.Router();

productsRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).send(products);
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.get(
  '/:id',
  validateIdParams,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductById(productId);
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.post(
  '/',
  validateCreateProduct,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productPayload: ProductCreatePayload = req.body.product;
      const product = await ProductService.createProduct(productPayload, req.user as User);
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.put(
  '/:id',
  validateIdParams,
  validateUpdateProduct,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const productPayload: ProductUpdatePayload = req.body.product;
      await ProductService.updateProduct(productId, productPayload);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.delete(
  '/:id',
  validateIdParams,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      await ProductService.deleteProduct(productId);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

export { productsRouter };

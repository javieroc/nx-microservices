import express, { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../services';
import { CategoryCreatePayload, CategoryUpdatePayload } from '../../types';
import { validateCreateCategory, validateIdParams, validateUpdateCategory } from './validations';

const categoryRouter = express.Router();

categoryRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await CategoryService.getAllCategories();
      res.status(200).send(categories);
    } catch (error) {
      next(error)
    }
  }
);

categoryRouter.get(
  '/:id',
  validateIdParams,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = req.params.id
      const category = await CategoryService.getCategoryById(categoryId);
      res.status(200).send(category);
    } catch (error) {
      next(error)
    }
  }
);

categoryRouter.post(
  '/',
  validateCreateCategory,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryPayload: CategoryCreatePayload = req.body.category;
      const category = await CategoryService.createCategory(categoryPayload);
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
);

categoryRouter.put(
  '/:id',
  validateIdParams,
  validateUpdateCategory,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryPayload: CategoryUpdatePayload = req.body.category;
      const categoryId = req.params.id
      await CategoryService.updateCategory(categoryId, categoryPayload);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

categoryRouter.delete(
  '/:id',
  validateIdParams,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = req.params.id
      await CategoryService.deleteCategory(categoryId);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

export { categoryRouter };

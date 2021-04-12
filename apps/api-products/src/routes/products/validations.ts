import { celebrate, Joi, Segments } from 'celebrate'

const validateIdParams = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string()
      .required(),
  },
});

const validateCreateProduct = celebrate({
  [Segments.BODY]: {
    product: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().optional(),
      amount: Joi.number().integer().positive().required(),
      price: Joi.number().positive().required(),
      categoryId: Joi.string().required(),
    }),
  }
}, { abortEarly: false });

const validateUpdateProduct = celebrate({
  [Segments.BODY]: {
    product: Joi.object().keys({
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      amount: Joi.number().integer().positive().optional(),
      price: Joi.number().positive().optional(),
      categoryId: Joi.string().optional(),
    }),
  }
}, { abortEarly: false });

export {
  validateCreateProduct,
  validateIdParams,
  validateUpdateProduct,
}

import { celebrate, Joi, Segments } from 'celebrate'

const validateIdParams = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string()
      .required(),
  },
});

const validateCreateCategory = celebrate({
  [Segments.BODY]: {
    product: Joi.object().keys({
      name: Joi.string().email().required(),
      description: Joi.string().optional(),
    }),
  }
}, { abortEarly: false });

const validateUpdateCategory = celebrate({
  [Segments.BODY]: {
    product: Joi.object().keys({
      name: Joi.string().email().optional(),
      description: Joi.string().optional(),
    }),
  }
}, { abortEarly: false });

export {
  validateCreateCategory,
  validateIdParams,
  validateUpdateCategory,
}

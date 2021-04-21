import { celebrate, Joi, Segments } from 'celebrate'

const validateIdParams = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string()
      .required(),
  },
});

const validateCreateCategory = celebrate({
  [Segments.BODY]: {
    category: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().optional(),
    }),
  }
}, { abortEarly: false });

const validateUpdateCategory = celebrate({
  [Segments.BODY]: {
    category: Joi.object().keys({
      name: Joi.string().optional(),
      description: Joi.string().optional(),
    }),
  }
}, { abortEarly: false });

export {
  validateCreateCategory,
  validateIdParams,
  validateUpdateCategory,
}

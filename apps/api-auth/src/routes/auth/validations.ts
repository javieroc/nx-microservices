import { celebrate, Joi, Segments } from 'celebrate'

const validateLogin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  })
}, { abortEarly: false })

const validateRegister = celebrate({
  [Segments.BODY]: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.ref('password'),
    role: Joi.string().valid('provider', 'consumer').required(),
  }
}, { abortEarly: false })

export {
  validateLogin,
  validateRegister,
}

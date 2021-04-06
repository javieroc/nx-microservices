import { celebrate, Joi, Segments } from 'celebrate'

const validateLogin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  })
}, { abortEarly: false })

const validateRegister = celebrate({
  [Segments.BODY]: {
    user: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      confirmPassword: Joi.ref('password'),
    })
  }
}, { abortEarly: false })

export {
  validateLogin,
  validateRegister,
}

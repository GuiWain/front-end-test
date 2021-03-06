import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(2).required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'Confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

import { FormSignInValue } from 'components/FormSignIn'
export function signInValidate(values: FormSignInValue) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

import { FormSignUpValue } from 'components/FormSignUp'
export function signUpValidate(values: FormSignUpValue) {
  const { username, email, password, confirm_password } = fieldsValidations
  const schema = Joi.object({ username, email, password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

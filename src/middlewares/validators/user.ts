import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createUserValidators = [
  body('email').isEmail().withMessage('Must provide a valid email'),
  body('password')
    .isString()
    .withMessage('Password must be a string')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  checkValidations,
]

export const updateUserValidators = [
  body('status') // admin or client
    .isString()
    .withMessage('status must be a string')
    .notEmpty()
    .withMessage('status cannot be empty')
    .isIn(['ENABLE', 'DISABLE'])
    .withMessage('status must be ENABLE or DISABLE'),
  checkValidations,
]

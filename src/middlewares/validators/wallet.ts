import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createWalletValidators = [
  body('balance').optional().isDecimal().withMessage('Debe ser una monto de dinero valido'),
  checkValidations,
]

export const updateWalletValidators = [
  body('balance').optional().isDecimal().withMessage('Debe ser una monto de dinero valido'),
  body('status')
    .optional()
    .notEmpty()
    .withMessage('status cannot be empty')
    .isString()
    .withMessage('status must be a string')
    .isIn(['ENABLE', 'DISABLE'])
    .withMessage('status must be ENABLE or DISABLE'),
  checkValidations,
]

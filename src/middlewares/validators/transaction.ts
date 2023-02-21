import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createTransactionValidators = [
  body('amount').isDecimal().withMessage('Amount debe ser una monto de dinero valido.'),
  body('description')
    .isLength({ min: 3 })
    .isString()
    .withMessage('Colaca una descripcion de tu compra! con una lingitud minima de 3 caracteres.'),
  checkValidations,
]

export const updateTransactionValidators = [
  body('amount').optional().isDecimal().withMessage('Amount debe ser una monto de dinero valido.'),
  body('description')
    .optional()
    .isLength({ min: 3 })
    .isString()
    .withMessage('Colaca una descripcion de tu compra! con una lingitud minima de 3 caracteres.'),
  checkValidations,
]

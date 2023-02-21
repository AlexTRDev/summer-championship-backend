import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createTicketValidators = [
  body('price').optional().isDecimal().withMessage('Price debe ser un monto valido.'),
  body('pro').optional().isBoolean().withMessage('Pro debe ser verdadero o falso.'),
  body('userId').optional().isInt().withMessage('userId debe ser un identificador valido'),
  checkValidations,
]

export const updateTicketValidators = [
  body('price').optional().isDecimal().withMessage('Price debe ser un monto valido.'),
  body('pro').optional().isBoolean().withMessage('Pro debe ser verdadero o falso.'),
  body('userId').optional().isInt().withMessage('userId debe ser un identificador valido'),
  checkValidations,
]

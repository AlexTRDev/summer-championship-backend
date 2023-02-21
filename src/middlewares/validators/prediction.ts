import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createPredictionValidators = [
  body('ticketId').optional().isInt().withMessage('tickedId debe ser un identificador valido'),
  body('calendarId').optional().isInt().withMessage('calendar debe ser un identificador valido'),
  body('result').optional().isIn(['L', 'E', 'V']).withMessage('Result debe ser un caracter "L", "E" o "V"'),
  checkValidations,
]

export const updatePredictionValidators = [
  body('ticketId').optional().isInt().withMessage('tickedId debe ser un identificador valido'),
  body('calendarId').optional().isInt().withMessage('calendar debe ser un identificador valido'),
  body('result').optional().isIn(['L', 'E', 'V']).withMessage('Result debe ser un caracter "L", "E" o "V"'),
  checkValidations,
]

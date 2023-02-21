import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createResultValidators = [
  body('calendarId').optional().isInt().withMessage('calendar debe ser un identificador valido'),
  body('result').optional().isIn(['L', 'E', 'V', 'D']).withMessage('Result debe ser un caracter "L", "E", "V" o "D"'),
  checkValidations,
]

export const updateResultValidators = [
  body('calendarId').optional().isInt().withMessage('calendar debe ser un identificador valido'),
  body('result').optional().isIn(['L', 'E', 'V', 'D']).withMessage('Result debe ser un caracter "L", "E", "V" o "D"'),
  checkValidations,
]

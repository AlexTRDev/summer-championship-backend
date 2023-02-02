import { body, query } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createJourneyValidators = [
  body('date')
    .isISO8601()
    .withMessage('Debe ser una fecha en formato yyyy/mm/dd')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/)
    .withMessage('Debe ser una fecha en formato yyyy/mm/dd'),
  checkValidations,
]

export const updateJourneyValidators = [
  body('date')
    .optional()
    .isISO8601()
    .withMessage('Debe ser una fecha en formato yyyy/mm/dd')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/)
    .withMessage('Debe ser una fecha en formato yyyy/mm/dd'),
  checkValidations,
]

export const getAllJourneyValidators = [
  query('journeyId').optional().isInt().withMessage('Debe ser una identificador valido de tipo entero'),
  query('isInclude').optional().isString().withMessage('Debe ser una cadena de texto yes'),
  checkValidations,
]

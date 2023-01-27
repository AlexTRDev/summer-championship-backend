import { body } from 'express-validator'

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

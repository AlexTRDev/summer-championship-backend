import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createPlayerValidators = [
  body('dni')
    .optional()
    .isLength({ min: 3, max: 10 })
    .withMessage('El dni del jugador debe estar entre 3 y 10 caracteres caracteres'),
  body('name')
    .isLength({ min: 3, max: 50 })
    .withMessage('El nombre del jugador debe estar entre 3 y 50 caracteres caracteres'),
  body('lastName')
    .isLength({ min: 3, max: 100 })
    .withMessage('Los apellidos del jugador debe estar entre 3 y 100 caracteres caracteres'),
  body('birthday')
    .optional()
    .isISO8601()
    .withMessage('Debe ser una fecha en formato yyyy/mm/dd')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/),
  checkValidations,
]

export const updatePlayerValidators = [
  body('dni')
    .optional()
    .isLength({ min: 3, max: 10 })
    .withMessage('El dni del jugador debe estar entre 3 y 10 caracteres caracteres'),
  body('name')
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage('El nombre del jugador debe estar entre 3 y 50 caracteres caracteres'),
  body('lastName')
    .optional()
    .isLength({ min: 3, max: 100 })
    .withMessage('Los apellidos del jugador debe estar entre 3 y 100 caracteres caracteres'),
  body('birthday')
    .optional()
    .isISO8601()
    .withMessage('Debe ser una fecha en formato yyyy/mm/dd')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/),
  checkValidations,
]

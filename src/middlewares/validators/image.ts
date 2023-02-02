import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createImageValidators = [
  body('url').isURL().withMessage('Debe ser una url valida'),
  body('description')
    .optional()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Debe ser una cadena de texto de entre 3 y 50 caracteres'),
  body('teamId').optional().isInt().withMessage('Debe ser un numero entero'),
  body('playerId').optional().isInt().withMessage('Debe ser un numero entero'),
  body('managerId').optional().isInt().withMessage('Debe ser un numero entero'),
  checkValidations,
]

export const updateImageValidators = [
  body('url').optional().isURL().withMessage('Debe ser una url valida'),
  body('description')
    .optional()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Debe ser una cadena de texto de entre 3 y 50 caracteres'),
  body('teamId').optional().isInt().withMessage('Debe ser un numero entero'),
  body('playerId').optional().isInt().withMessage('Debe ser un numero entero'),
  body('managerId').optional().isInt().withMessage('Debe ser un numero entero'),
  checkValidations,
]

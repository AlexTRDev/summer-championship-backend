import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createTeamValidators = [
  body('name').isLength({ min: 3, max: 50 }).withMessage('El nombre del equipo debe tener entre 3 y 50 caracteres'),
  body('serie').isIn(['A', 'B', 'C']).withMessage('La serie debe ser A, B o C'),
  body('season')
    .isInt()
    .withMessage('La temporada debe ser el año que se realiza el evento como número entero (ej. 2023)'),
  body('presentation')
    .optional()
    .isBoolean()
    .withMessage('La presentación debe ser verdadero o falso (ej. true or false)'),
  checkValidations,
]

export const updateTeamValidators = [
  body('name')
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage('El nombre del equipo debe tener entre 3 y 50 caracteres'),
  body('series').optional().isIn(['A', 'B', 'C']).withMessage('La serie debe ser A, B o C'),
  body('season').optional().isInt().withMessage('La temporada debe ser un número entero'),
  body('presentation')
    .optional()
    .isBoolean()
    .withMessage('La presentación debe ser verdadero o falso (ej. true or false)'),
  checkValidations,
]

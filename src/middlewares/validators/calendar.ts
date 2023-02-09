import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createCalendarValidators = [
  body('homeTeamId').isInt().withMessage('homeTeamId Debe ser una valor valido de tipo entero'),
  body('awayTeamId').optional().isInt().withMessage('awayTeamId Debe ser una valor de tipo entero'),
  body('homeTeamScore').optional().isInt().withMessage('homeTeamScore Debe ser una valor de tipo entero'),
  body('awayTeamScore').optional().isInt().withMessage('awayTeamScore Debe ser una valor de tipo entero'),
  body('jornadaId').optional().isInt().withMessage('jornadaId Debe ser una valor de tipo entero'),
  body('mvpId').optional().isInt().withMessage('mvpId Debe ser una valor de tipo entero'),
  checkValidations,
]

export const updateCalendarValidators = [
  body('homeTeamId').optional().isInt().withMessage('homeTeamId Debe ser una valor valido de tipo entero'),
  body('awayTeamId').optional().isInt().withMessage('awayTeamId Debe ser una valor de tipo entero'),
  body('homeTeamScore').optional().isInt().withMessage('homeTeamScore Debe ser una valor de tipo entero'),
  body('awayTeamScore').optional().isInt().withMessage('awayTeamScore Debe ser una valor de tipo entero'),
  body('jornadaId').optional().isInt().withMessage('jornadaId Debe ser una valor de tipo entero'),
  body('mvpId').optional().isInt().withMessage('mvpId Debe ser una valor de tipo entero'),
  checkValidations,
]

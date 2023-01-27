import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createCalendarValidators = [
  body('homeTeamId').isInt(),
  body('awayTeamId').isInt(),
  body('homeTeamScore').optional().isInt(),
  body('awayTeamScore').optional().isInt(),
  body('jornadaId').optional().isInt(),
  body('mvpId').optional().isInt(),
  checkValidations,
]

export const updateCalendarValidators = [
  body('homeTeamId').isInt(),
  body('awayTeamId').isInt(),
  body('homeTeamScore').optional().isInt(),
  body('awayTeamScore').optional().isInt(),
  body('jornadaId').optional().isInt(),
  body('mvpId').optional().isInt(),
  checkValidations,
]

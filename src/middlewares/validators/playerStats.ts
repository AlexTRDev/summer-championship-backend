import { body } from 'express-validator'

import { checkValidations } from './checkValidators'

export const createPlayerStatsValidators = [
  body('gamesPlayed').isInt().withMessage('El número de partidos jugados debe ser un número entero'),
  body('goalsScored').isInt().withMessage('El número total de goles debe ser un número entero'),
  body('numberAsists').isInt().withMessage('El número total de asistencias debe ser un número entero'),
  body('playerId').isInt().withMessage('El id del jugador debe ser un número entero'),
  checkValidations,
]

export const updatePlayerStatsValidators = [
  body('gamesPlayed').optional().isInt().withMessage('El número de partidos jugados debe ser un número entero'),
  body('goalsScored').optional().isInt().withMessage('El número total de goles debe ser un número entero'),
  body('numberAsists').optional().isInt().withMessage('El número total de asistencias debe ser un número entero'),
  body('playerId').optional().isInt().withMessage('El id del jugador debe ser un número entero'),
  checkValidations,
]

import { Router } from 'express'
import {
  createPlayerStats,
  deletePlayerStats,
  getAllPlayerStats,
  getPlayerStatsById,
  updatePlayerStatsById,
} from '../controllers'
import { createPlayerStatsValidators, updatePlayerStatsValidators, playerStatsExists } from '../middlewares'

export const playerStatsRoutes = Router()

// rutas de acceso
playerStatsRoutes
  .get('/', getAllPlayerStats)
  .get('/:playerStatsId', playerStatsExists, getPlayerStatsById)
  .post('/', createPlayerStatsValidators, createPlayerStats)
  .patch('/:playerStatsId', updatePlayerStatsValidators, playerStatsExists, updatePlayerStatsById)
  .delete('/:playerStatsId', playerStatsExists, deletePlayerStats)

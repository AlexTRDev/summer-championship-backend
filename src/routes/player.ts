import { Router } from 'express'
import { bulkPlayers, createPlayer, deletePlayer, getAllPlayers, getPlayerById, updatePlayerById } from '../controllers'
import { createPlayerValidators, updatePlayerValidators, playerExists } from '../middlewares'

export const playerRoutes = Router()

// rutas de acceso
playerRoutes
  .get('/', getAllPlayers)
  .get('/:playerId', playerExists, getPlayerById)
  .post('/', createPlayerValidators, createPlayer)
  .patch('/:playerId', updatePlayerValidators, playerExists, updatePlayerById)
  .delete('/:playerId', playerExists, deletePlayer)
  .post('/bulk', bulkPlayers)

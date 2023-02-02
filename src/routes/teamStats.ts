import { Router } from 'express'
import {
  createTeamStats,
  deleteTeamStats,
  getAllTeamStats,
  getTeamStatsById,
  updateTeamStatsById,
} from '../controllers'
import { teamStatsExists } from '../middlewares/exists/teamStats'

export const teamStatsRoutes = Router()

// rutas de acceso
teamStatsRoutes
  .get('/', getAllTeamStats)
  .get('/:teamStatsId', teamStatsExists, getTeamStatsById)
  .post('/', createTeamStats)
  .patch('/:teamStatsId', teamStatsExists, updateTeamStatsById)
  .delete('/:teamStatsId', teamStatsExists, deleteTeamStats)

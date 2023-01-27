import { Router } from 'express'
import { createTeam, deleteTeam, getAllTeams, getTeamById, updateTeamById } from '../controllers'
import { createTeamValidators, updateTeamValidators, teamExists } from '../middlewares'

export const teamRoutes = Router()

// rutas de acceso
teamRoutes
  .get('/', getAllTeams)
  .get('/:teamId', teamExists, getTeamById)
  .post('/', createTeamValidators, createTeam)
  .patch('/:teamId', updateTeamValidators, teamExists, updateTeamById)
  .delete('/:teamId', teamExists, deleteTeam)

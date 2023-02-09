import { Router } from 'express'
import data from '../data/data.json'
import { IJourney, ITeam, ITeamStatsCreation, Journey, Team, TeamStats } from '../models'

export const dataRoutes = Router()

dataRoutes.post('/', async (_req, res, _next) => {
  const teams = data.teams as ITeam[]
  const journeys = data.journeys as IJourney[]
  const teamStat = data.teamStats as ITeamStatsCreation[]

  await Team.bulkCreate(teams)
  await Journey.bulkCreate(journeys)
  await TeamStats.bulkCreate(teamStat)

  res.status(201).json({ status: 'success' })
})

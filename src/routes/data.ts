import { Router } from 'express'
import data from '../data/data.json'
import { IJourney, ITeam, Journey, Team } from '../models'

export const dataRoutes = Router()

dataRoutes.post('/', async (_req, res, _next) => {
  const teams = data.teams as ITeam[]
  const journeys = data.journeys as IJourney[]

  await Team.bulkCreate(teams)
  await Journey.bulkCreate(journeys)

  res.status(201).json({ status: 'success' })
})

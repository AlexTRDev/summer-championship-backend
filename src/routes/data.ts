import { Router } from 'express'
import data from '../data/data.json'
import {
  Calendar,
  ICalendar,
  IJourney,
  IPlayerCreation,
  IPlayerStatsCreation,
  ITeam,
  ITeamStatsCreation,
  Journey,
  Player,
  PlayerStats,
  Team,
  TeamStats,
} from '../models'

export const dataRoutes = Router()

dataRoutes.post('/', async (_req, res, _next) => {
  const teams = data.teams as ITeam[]
  const journeys = data.journeys as IJourney[]
  const calendars = data.calendars as ICalendar[]
  const player_stats = data.playerStats as IPlayerStatsCreation[]
  const teamStat = data.teamStats as ITeamStatsCreation[]
  const players = data.players as IPlayerCreation[]

  await Team.bulkCreate(teams)
  await Player.bulkCreate(players)
  await Journey.bulkCreate(journeys)
  await Calendar.bulkCreate(calendars)

  await TeamStats.bulkCreate(teamStat)
  await PlayerStats.bulkCreate(player_stats)

  res.status(201).json({ status: 'success' })
})

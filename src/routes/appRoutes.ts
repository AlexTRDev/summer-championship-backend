import { Router } from 'express'
import { calendarRoutes } from './calendar'
import { dataRoutes } from './data'
import { imageRoutes } from './image'
import { journeyRoutes } from './journey'
import { playerRoutes } from './player'
import { playerStatsRoutes } from './playerStats'
import { teamRoutes } from './team'
import { teamStatsRoutes } from './teamStats'
import { userRoutes } from './user'

export const appRoutes = Router()

// rutas de acceso
appRoutes.use('/data', dataRoutes)
appRoutes.use('/calendars', calendarRoutes)
appRoutes.use('/images', imageRoutes)
appRoutes.use('/journeys', journeyRoutes)
appRoutes.use('/players', playerRoutes)
appRoutes.use('/playerStats', playerStatsRoutes)
appRoutes.use('/teams', teamRoutes)
appRoutes.use('/teamStats', teamStatsRoutes)
appRoutes.use('/users', userRoutes)

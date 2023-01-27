import { Router } from 'express'
import { calendarRoutes } from './calendar'
import { dataRoutes } from './data'
import { journeyRoutes } from './journey'
import { teamRoutes } from './team'
import { userRoutes } from './user'

export const appRoutes = Router()

// rutas de acceso
appRoutes.use('/data', dataRoutes)
appRoutes.use('/calendars', calendarRoutes)
appRoutes.use('/journeys', journeyRoutes)
appRoutes.use('/teams', teamRoutes)
appRoutes.use('/users', userRoutes)

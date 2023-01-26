import { Router } from 'express'
import { dataRoutes } from './data'
import { userRoutes } from './user'

export const appRoutes = Router()

// rutas de acceso
appRoutes.use('/users', userRoutes)
appRoutes.use('/data', dataRoutes)

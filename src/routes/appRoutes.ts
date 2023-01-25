import express from 'express'
import { userRoutes } from './user'

export const appRoutes = express.Router()

// rutas de acceso
appRoutes.use('/users', userRoutes)

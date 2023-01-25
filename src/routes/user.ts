import { createUser, getAllUsers, getUserById, updateById } from '../controllers'
import { createUserValidators, updateUserValidators, userExists } from '../middlewares'

import express from 'express'

export const userRoutes = express.Router()

// rutas de acceso
userRoutes
  .get('/', getAllUsers)
  .get('/:userId', userExists, getUserById)
  .post('/', createUserValidators, createUser)
  .patch('/:userId', updateUserValidators, userExists, updateById)

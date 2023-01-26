import { Router } from 'express'
import { createUser, getAllUsers, getUserById, updateUserById } from '../controllers'
import { createUserValidators, updateUserValidators, userExists } from '../middlewares'

export const userRoutes = Router()

// rutas de acceso
userRoutes
  .get('/', getAllUsers)
  .get('/:userId', userExists, getUserById)
  .post('/', createUserValidators, createUser)
  .patch('/:userId', updateUserValidators, userExists, updateUserById)

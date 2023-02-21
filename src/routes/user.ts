import { Router } from 'express'
import { getAllUsers, getUserById, signUpUser, updateUserById } from '../controllers'
import { protectSession, updateUserValidators, userExists } from '../middlewares'
import { User } from '../models'

export const userRoutes = Router()

// rutas de acceso
userRoutes
  .post('/admin/bulk', async (req, res) => {
    const { users } = req.body
    const data = await User.bulkCreate(users)

    res.status(200).json({
      status: 'success',
      data,
    })
  })
  .get('/', getAllUsers)
  .get('/admin/:userId', userExists, getUserById)
  .patch('/:userId', updateUserValidators, userExists, updateUserById)
  .get('/signIn', protectSession, signUpUser)

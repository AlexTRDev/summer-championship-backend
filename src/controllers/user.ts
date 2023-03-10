import type { NextFunction, Request, Response } from 'express'
import type { IUser } from '../models'
import { userServices } from '../services'

import { catchAsync } from '../utils'

export const getAllUsers = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const users = await userServices.getAll()

  res.status(200).json({
    status: 'success',
    users,
  })
})

export const getUserById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    user: req.user,
  })
})

export const updateUserById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const userUpdate: IUser = req.body
  const { user } = req
  const data = await userServices.update(user, userUpdate)
  res.status(200).json({
    status: 'success',
    user: data,
  })
})

export const signUpUser = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  res.status(201).json({
    status: 'success',
    user: req.sesionUser,
  })
})

export const signOutUser = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  res.status(201).json({
    status: 'success',
    user: null,
  })
})

// const deleteUser = catchAsync(async (req, res, next) => {
//   const { user } = req

//   await user.update({ status: 'deleted' })

//   res.status(204).json({ status: 'success' })
// })

// const login = catchAsync(async (req, res, next) => {
//   // Get email and password from req.body
//   const { email, password } = req.body

//   // Validate if the user exist with given email
//   const user = await User.findOne({
//     where: { email, status: 'active' }
//   })

//   // Compare passwords (entered password vs db password)
//   // If user doesn't exists or passwords doesn't match, send error
//   if ((user == null) || !(await bcrypt.compare(password, user.password))) {
//     return next(new AppError('Wrong credentials', 400))
//   }

//   // Remove password from response
//   user.password = undefined

//   // Generate JWT (payload, secretOrPrivateKey, options)
//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//     expiresIn: '30d'
//   })

//   res.status(200).json({
//     status: 'success',
//     data: { user, token }
//   })
// })

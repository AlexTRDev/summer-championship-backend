// Models

import { AppError, catchAsync } from '../../utils'
import { NextFunction, Request, Response } from 'express'

import { User } from '../../models'

// Utils

export const userExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.params

  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id: userId },
  })

  if (user == null) {
    return next(new AppError('User not found', 404))
  }

  req.user = user
  next()
})

// aqui van a ir los middlewares de existencia

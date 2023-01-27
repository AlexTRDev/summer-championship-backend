// Models
import { AppError, catchAsync } from '../../utils'
import type { NextFunction, Request, Response } from 'express'
import { teamServices } from '../../services'

// aqui van a ir los middlewares de existencia
export const teamExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { teamId } = req.params

  const team = await teamServices.getById(Number(teamId))

  if (team === null) {
    return next(new AppError('Team not found', 404))
  }

  req.team = team
  next()
})

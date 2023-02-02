// Models
import { AppError, catchAsync } from '../../utils'
import type { NextFunction, Request, Response } from 'express'
import { teamStatsServices } from '../../services'

// aqui van a ir los middlewares de existencia
export const teamStatsExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { teamStatsId } = req.params

  const teamStats = await teamStatsServices.getById(Number(teamStatsId))

  if (teamStats === null) {
    return next(new AppError('teamStats not found', 404))
  }

  req.teamStats = teamStats
  next()
})

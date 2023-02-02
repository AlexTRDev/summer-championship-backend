// Models
import { AppError, catchAsync } from '../../utils'
import type { NextFunction, Request, Response } from 'express'
import { playerStatsServices } from '../../services'

// aqui van a ir los middlewares de existencia
export const playerStatsExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { playerStatsId } = req.params

  const playerStats = await playerStatsServices.getById(Number(playerStatsId))

  if (playerStats === null) {
    return next(new AppError('PlayerStats not found', 404))
  }

  req.playerStats = playerStats
  next()
})

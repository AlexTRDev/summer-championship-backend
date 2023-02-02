// Models
import { AppError, catchAsync } from '../../utils'
import type { NextFunction, Request, Response } from 'express'
import { playerServices } from '../../services'

// aqui van a ir los middlewares de existencia
export const playerExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { playerId } = req.params

  const player = await playerServices.getById(Number(playerId))

  if (player === null) {
    return next(new AppError('Player not found', 404))
  }

  req.player = player
  next()
})

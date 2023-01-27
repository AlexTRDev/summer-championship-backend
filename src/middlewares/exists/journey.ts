// Models
import type { NextFunction, Request, Response } from 'express'
import { journeyServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const journeyExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { journeyId } = req.params

  const journey = await journeyServices.getById(Number(journeyId))

  if (journey === null) {
    return next(new AppError('Journey not found', 404))
  }

  req.journey = journey
  next()
})

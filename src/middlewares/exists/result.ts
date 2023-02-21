// Models
import type { NextFunction, Request, Response } from 'express'
import { resultServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const resultExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { calendarId } = req.params

  const result = await resultServices.getById(Number(calendarId))

  if (result === null) {
    return next(new AppError('Result not found', 404))
  }

  req.result = result
  next()
})

// Models
import type { NextFunction, Request, Response } from 'express'
import { calendarServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const calendarExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { calendarId } = req.params

  const calendar = await calendarServices.getById(Number(calendarId))

  if (calendar === null) {
    return next(new AppError('Calendar not found', 404))
  }

  req.calendar = calendar
  next()
})

// Models
import type { NextFunction, Request, Response } from 'express'
import { predictionServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const predictionExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { calendarId, ticketId } = req.params

  const prediction = await predictionServices.getById(Number(calendarId), Number(ticketId))

  if (prediction === null) {
    return next(new AppError('Prediction not found', 404))
  }

  req.prediction = prediction
  next()
})

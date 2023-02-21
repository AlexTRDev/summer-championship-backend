// Models
import type { NextFunction, Request, Response } from 'express'
import { ticketServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const ticketExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { ticketId } = req.params

  const ticket = await ticketServices.getById(Number(ticketId))

  if (ticket === null) {
    return next(new AppError('Ticket not found', 404))
  }

  req.ticket = ticket
  next()
})

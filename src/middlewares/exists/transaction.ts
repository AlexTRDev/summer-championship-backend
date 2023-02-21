// Models
import type { NextFunction, Request, Response } from 'express'
import { transactionServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const transactionExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { transactionId } = req.params

  const transaction = await transactionServices.getById(Number(transactionId))

  if (transaction === null) {
    return next(new AppError('Transaction not found', 404))
  }

  req.transaction = transaction
  next()
})

// Models
import type { NextFunction, Request, Response } from 'express'
import { walletServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const walletExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { walletId } = req.params

  const wallet = await walletServices.getById(Number(walletId))

  if (wallet === null) {
    return next(new AppError('Wallet not found', 404))
  }

  req.wallet = wallet
  next()
})

export const userWalletExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { sesionUser } = req

  const wallet = await walletServices.getByUser(sesionUser.id)

  if (wallet === null) {
    return next(new AppError('Wallet not found', 404))
  }

  req.wallet = wallet
  next()
})

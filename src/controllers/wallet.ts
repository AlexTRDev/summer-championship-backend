import type { NextFunction, Request, Response } from 'express'
import type { IWallet } from '../models'

import { walletServices } from '../services'
import { catchAsync } from '../utils'

export const getAllWallets = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const wallets = await walletServices.getAll()

  res.status(200).json({
    status: 'success',
    wallets,
  })
})

export const getWalletById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    wallet: req.wallet,
  })
})

export const getWalletByUser = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    wallet: req.wallet,
  })
})

export const createWallet = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const wallet: IWallet = req.body
  const user = req.sesionUser
  const data = await walletServices.create(wallet, user?.id)

  res.status(201).json({
    status: 'success',
    wallet: data,
  })
})

export const createWalletAdmin = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const wallet: IWallet = req.body
  const data = await walletServices.createAdmin(wallet)

  res.status(201).json({
    status: 'success',
    wallet: data,
  })
})

export const updateWalletById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const walletUpdate: IWallet = req.body
  const { wallet } = req
  const data = await walletServices.update(wallet, walletUpdate)
  res.status(200).json({
    status: 'success',
    wallet: data,
  })
})

export const deleteWallet = catchAsync(async (req, res, next) => {
  const { wallet } = req

  const isRemoved = await walletServices.remove(wallet)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove wallet'))
  }
})

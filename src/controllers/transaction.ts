import type { NextFunction, Request, Response } from 'express'
import type { ITransaction } from '../models'

import { transactionServices } from '../services'
import { catchAsync } from '../utils'

export const getAllTransactions = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const transactions = await transactionServices.getAll()

  res.status(200).json({
    status: 'success',
    transactions,
  })
})

export const getTransactionById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { transaction } = req
  res.status(200).json({
    status: 'success',
    data: transaction,
  })
})

export const createTransaction = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const transaction: ITransaction = req.body
  const { sesionUser, wallet } = req

  const data = await transactionServices.create(transaction, sesionUser.id, wallet)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updateTransactionById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const transactionUpdate: ITransaction = req.body
  const { transaction } = req
  const data = await transactionServices.update(transaction, transactionUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteTransaction = catchAsync(async (req, res, next) => {
  const { transaction } = req

  const isRemoved = await transactionServices.remove(transaction)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove transaction'))
  }
})

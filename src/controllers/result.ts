import type { NextFunction, Request, Response } from 'express'
import type { IResult } from '../models'

import { resultServices } from '../services'
import { catchAsync } from '../utils'

export const getAllResults = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const results = await resultServices.getAll()

  res.status(200).json({
    status: 'success',
    results,
  })
})

export const getResultById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    result: req.result,
  })
})

export const createResult = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const result: IResult = req.body
  const data = await resultServices.create(result)

  res.status(201).json({
    status: 'success',
    result: data,
  })
})

export const updateResultById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const resultUpdate: IResult = req.body
  const { result } = req
  const data = await resultServices.update(result, resultUpdate)
  res.status(200).json({
    status: 'success',
    result: data,
  })
})

export const deleteResult = catchAsync(async (req, res, next) => {
  const { result } = req

  const isRemoved = await resultServices.remove(result)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove result'))
  }
})

export const bulkResults = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { results }: { results: IResult[] } = req.body

  const data = await resultServices.bulkAdmin(results)

  res.status(201).json({
    status: 'success',
    results: data,
  })
})

import type { NextFunction, Request, Response } from 'express'
import type { IPrediction, ITicket } from '../models'

import { predictionServices } from '../services'
import { catchAsync } from '../utils'

export const getAllPredictions = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const predictions = await predictionServices.getAll()

  res.status(200).json({
    status: 'success',
    predictions,
  })
})

export const getPredictionById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { prediction } = req
  res.status(200).json({
    status: 'success',
    data: prediction,
  })
})

export const createPrediction = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const prediction: IPrediction = req.body
  const data = await predictionServices.create(prediction)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updatePredictionById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const predictionUpdate: IPrediction = req.body
  const { prediction } = req
  const data = await predictionServices.update(prediction, predictionUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deletePrediction = catchAsync(async (req, res, next) => {
  const { prediction } = req

  const isRemoved = await predictionServices.remove(prediction)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove prediction'))
  }
})

export const bulkPredictions = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { predictions, ticket }: { predictions: IPrediction[]; ticket: ITicket } = req.body
  const { sesionUser, wallet } = req

  const data = await predictionServices.bulk(predictions, ticket, sesionUser.id, wallet)
  // const data = await Prediction.bulkCreate(predictions)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const createPredictionResults = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { predictions }: { predictions: IPrediction[] } = req.body

  const data = await predictionServices.createPredictionResults(predictions)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const bulkWallet = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { predictions, ticket }: { predictions: IPrediction[]; ticket: ITicket } = req.body

  const data = await predictionServices.bulkWallet(predictions, ticket)

  res.status(201).json({
    status: 'success',
    data,
  })
})

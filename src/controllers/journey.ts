import type { NextFunction, Request, Response } from 'express'
import type { IJourney } from '../models'

import { journeyServices } from '../services'
import { catchAsync } from '../utils'

export const getAllJourneys = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const journeys = await journeyServices.getAll()

  res.status(200).json({
    status: 'success',
    journeys,
  })
})

export const getJourneyById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { journey } = req
  res.status(200).json({
    status: 'success',
    data: journey,
  })
})

export const createJourney = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const journey: IJourney = req.body
  const data = await journeyServices.create(journey)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updateJourneyById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const journeyUpdate: IJourney = req.body
  const { journey } = req
  const data = await journeyServices.update(journey, journeyUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteJourney = catchAsync(async (req, res, next) => {
  const { journey } = req

  const isRemoved = await journeyServices.remove(journey)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove journey'))
  }
})

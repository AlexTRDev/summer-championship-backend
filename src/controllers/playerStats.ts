import type { NextFunction, Request, Response } from 'express'
import type { IPlayerStatsCreation } from '../models'

import { playerStatsServices } from '../services'
import type { IQueriesPlayerStats } from '../types/Queries'
import { catchAsync } from '../utils'

export const getAllPlayerStats = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const queries = req.query as IQueriesPlayerStats

  const playerStats = await playerStatsServices.getAll(queries)

  res.status(200).json({
    status: 'success',
    playerStats,
  })
})

export const getPlayerStatsById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { playerStats } = req
  res.status(200).json({
    status: 'success',
    data: playerStats,
  })
})

export const createPlayerStats = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const playerStats: IPlayerStatsCreation = req.body
  const data = await playerStatsServices.create(playerStats)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updatePlayerStatsById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const playerStatsUpdate: IPlayerStatsCreation = req.body
  const { playerStats } = req
  const data = await playerStatsServices.update(playerStats, playerStatsUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deletePlayerStats = catchAsync(async (req, res, next) => {
  const { playerStats } = req

  const isRemoved = await playerStatsServices.remove(playerStats)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove journey'))
  }
})

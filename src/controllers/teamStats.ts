import type { NextFunction, Request, Response } from 'express'
import type { ITeamStatsCreation } from '../models'

import { teamStatsServices } from '../services'
import type { IQueriesTeamStats } from '../types/Queries'
import { catchAsync } from '../utils'

export const getAllTeamStats = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const queries = req.query as IQueriesTeamStats

  const teamStats = await teamStatsServices.getAll(queries)

  res.status(200).json({
    status: 'success',
    teamStats,
  })
})

export const getTeamStatsById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { teamStats } = req
  res.status(200).json({
    status: 'success',
    data: teamStats,
  })
})

export const createTeamStats = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const teamStats: ITeamStatsCreation = req.body
  const data = await teamStatsServices.create(teamStats)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updateTeamStatsById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const teamStatsUpdate: ITeamStatsCreation = req.body
  const { teamStats } = req
  const data = await teamStatsServices.update(teamStats, teamStatsUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteTeamStats = catchAsync(async (req, res, next) => {
  const { teamStats } = req

  const isRemoved = await teamStatsServices.remove(teamStats)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove journey'))
  }
})

export const bulkTeamStats = catchAsync(async (req, res, _next) => {
  const { teamStats } = req.body
  const data = await teamStatsServices.bulkCreate(teamStats)

  res.status(200).json({ status: 'success', data })
})

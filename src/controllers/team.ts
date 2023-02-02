import type { NextFunction, Request, Response } from 'express'
import type { ITeam } from '../models'

import { teamServices } from '../services'
import { AppError, catchAsync } from '../utils'

export const getAllTeams = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const teams = await teamServices.getAll()

  res.status(200).json({
    status: 'success',
    teams,
  })
})

export const getTeamById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { team } = req
  res.status(200).json({
    status: 'success',
    team,
  })
})

export const createTeam = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const data: ITeam = req.body
  const team = await teamServices.create(data)

  if (data instanceof AppError) return next(data)
  else res.status(201).json({ status: 'success', team })
})

export const updateTeamById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const teamUpdate: ITeam = req.body
  const { team } = req
  const data = await teamServices.update(team, teamUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteTeam = catchAsync(async (req, res, next) => {
  const { team } = req

  const isRemoved = await teamServices.remove(team)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove team'))
  }
})

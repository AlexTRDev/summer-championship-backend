import type { NextFunction, Request, Response } from 'express'
import type { ITeam } from '../models'

import { teamServices } from '../services'
import { catchAsync } from '../utils'

export const getAllTeams = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const data = await teamServices.getAll()

  res.status(200).json({
    status: 'success',
    data,
  })
})

export const getTeamById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { team } = req
  res.status(200).json({
    status: 'success',
    data: team,
  })
})

export const createTeam = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const team: ITeam = req.body
  const data = await teamServices.create(team)

  res.status(201).json({
    status: 'success',
    data,
  })
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

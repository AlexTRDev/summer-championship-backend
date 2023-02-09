import type { NextFunction, Request, Response } from 'express'
import type { IPlayer } from '../models'

import { playerServices } from '../services'
import { AppError, catchAsync } from '../utils'

export const getAllPlayers = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const players = await playerServices.getAll()

  res.status(200).json({
    status: 'success',
    players,
  })
})

export const getPlayerById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { player } = req
  res.status(200).json({
    status: 'success',
    data: player,
  })
})

export const createPlayer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const data: IPlayer = req.body
  const player = await playerServices.create(data)

  if (data instanceof AppError) return next(data)
  else res.status(201).json({ status: 'success', player })
})

export const updatePlayerById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const playerUpdate: IPlayer = req.body
  const { player } = req
  const data = await playerServices.update(player, playerUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deletePlayer = catchAsync(async (req, res, next) => {
  const { player } = req

  const isRemoved = await playerServices.remove(player)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove player'))
  }
})

export const bulkPlayers = catchAsync(async (req, res, _next) => {
  const { players } = req.body
  const data = await playerServices.bulkCreate(players)

  res.status(200).json({ status: 'success', data })
})

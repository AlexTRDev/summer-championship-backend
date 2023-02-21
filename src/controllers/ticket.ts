import type { NextFunction, Request, Response } from 'express'
import type { ITicket } from '../models'

import { ticketServices } from '../services'
import type { IQueriesTicket } from '../types/Queries'
import { catchAsync } from '../utils'

export const getAllTickets = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const queries: IQueriesTicket = req.query

  const tickets = await ticketServices.getAll(queries)
  res.status(200).json({
    status: 'success',
    tickets,
  })
})

export const getTicketById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { ticket } = req
  res.status(200).json({
    status: 'success',
    data: ticket,
  })
})

export const createTicket = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const ticket: ITicket = req.body
  const data = await ticketServices.create(ticket)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updateTicketById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const ticketUpdate: ITicket = req.body
  const { ticket } = req
  const data = await ticketServices.update(ticket, ticketUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteTicket = catchAsync(async (req, res, next) => {
  const { ticket } = req

  const isRemoved = await ticketServices.remove(ticket)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove ticket'))
  }
})

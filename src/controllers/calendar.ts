import type { NextFunction, Request, Response } from 'express'
import type { ICalendar } from '../models'

import { calendarServices } from '../services'
import { catchAsync } from '../utils'

export const getAllCalendars = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const data = await calendarServices.getAll()

  res.status(200).json({
    status: 'success',
    data,
  })
})

export const getCalendarById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { calendar } = req
  res.status(200).json({
    status: 'success',
    data: calendar,
  })
})

export const createCalendar = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const calendar: ICalendar = req.body
  const data = await calendarServices.create(calendar)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updateCalendarById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const calendarUpdate: ICalendar = req.body
  const { calendar } = req
  const data = await calendarServices.update(calendar, calendarUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteCalendar = catchAsync(async (req, res, next) => {
  const { calendar } = req

  const isRemoved = await calendarServices.remove(calendar)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove journey'))
  }
})

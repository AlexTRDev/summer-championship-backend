import { Router } from 'express'
import { createCalendar, deleteCalendar, getAllCalendars, getCalendarById, updateCalendarById } from '../controllers'
import {
  calendarExists,
  createCalendarValidators,
  getAllJourneyValidators,
  updateCalendarValidators,
} from '../middlewares'

export const calendarRoutes = Router()

// rutas de acceso
calendarRoutes
  .get('/', getAllJourneyValidators, getAllCalendars)
  .get('/:calendarId', calendarExists, getCalendarById)
  .post('/', createCalendarValidators, createCalendar)
  .patch('/:calendarId', updateCalendarValidators, calendarExists, updateCalendarById)
  .delete('/:calendarId', calendarExists, deleteCalendar)

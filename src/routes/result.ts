import { Router } from 'express'
import { bulkResults, createResult, deleteResult, getAllResults, getResultById, updateResultById } from '../controllers'
import { createResultValidators, resultExists } from '../middlewares'

export const resultRoutes = Router()

// rutas de acceso
resultRoutes
  .post('/admin/bulk', bulkResults)
  .get('/', getAllResults)
  .get('/:calendarId', resultExists, getResultById)
  .patch('/:calendarId', resultExists, updateResultById)
  .post('/', createResultValidators, createResult)
  .delete('/:calendarId', resultExists, deleteResult)

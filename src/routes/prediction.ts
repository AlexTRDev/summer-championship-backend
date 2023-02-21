import { Router } from 'express'
import {
  bulkPredictions,
  bulkWallet,
  createPrediction,
  deletePrediction,
  getAllPredictions,
  getPredictionById,
  updatePredictionById,
} from '../controllers'
import {
  createPredictionValidators,
  predictionExists,
  protectSession,
  updatePredictionValidators,
  userWalletExists,
} from '../middlewares'

export const predictionRoutes = Router()

// rutas de acceso
predictionRoutes
  .post('/admin/notWallet', bulkWallet)
  .post('/admin/bulk', bulkPredictions)
  .patch('/admin/:ticketId/:calendarId', updatePredictionValidators, predictionExists, updatePredictionById)
  .get('/', getAllPredictions)
  .get('/admin/:ticketId/:calendarId', predictionExists, getPredictionById)
  .use(protectSession)
  .post('/', createPredictionValidators, createPrediction)
  .delete('/:predictionId', predictionExists, deletePrediction)
  .post('/bulk', userWalletExists, bulkPredictions)

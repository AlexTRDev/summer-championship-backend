import { Router } from 'express'
import { createJourney, deleteJourney, getAllJourneys, getJourneyById, updateJourneyById } from '../controllers'
import { createJourneyValidators, updateJourneyValidators, journeyExists } from '../middlewares'

export const journeyRoutes = Router()

// rutas de acceso
journeyRoutes
  .get('/', getAllJourneys)
  .get('/:journeyId', journeyExists, getJourneyById)
  .post('/', createJourneyValidators, createJourney)
  .patch('/:journeyId', updateJourneyValidators, journeyExists, updateJourneyById)
  .delete('/:journeyId', journeyExists, deleteJourney)

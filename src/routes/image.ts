import { Router } from 'express'
import { createImage, deleteImage, getAllImages, getImageById, updateImageById } from '../controllers'
import { createImageValidators, updateImageValidators, imageExists } from '../middlewares'

export const imageRoutes = Router()

// rutas de acceso
imageRoutes
  .get('/', getAllImages)
  .get('/:imageId', imageExists, getImageById)
  .post('/', createImageValidators, createImage)
  .patch('/:imageId', updateImageValidators, imageExists, updateImageById)
  .delete('/:imageId', imageExists, deleteImage)

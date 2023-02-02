// Models
import type { NextFunction, Request, Response } from 'express'
import { imageServices } from '../../services'
import { AppError, catchAsync } from '../../utils'

// aqui van a ir los middlewares de existencia
export const imageExists = catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { imageId } = req.params

  const image = await imageServices.getById(Number(imageId))

  if (image === null) {
    return next(new AppError('Image not found', 404))
  }

  req.image = image
  next()
})

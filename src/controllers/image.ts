import type { NextFunction, Request, Response } from 'express'
import type { IImage } from '../models'

import { imageServices } from '../services'
import { catchAsync } from '../utils'

export const getAllImages = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const images = await imageServices.getAll()

  res.status(200).json({
    status: 'success',
    images,
  })
})

export const getImageById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { image } = req
  res.status(200).json({
    status: 'success',
    data: image,
  })
})

export const createImage = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const image: IImage = req.body
  const data = await imageServices.create(image)

  res.status(201).json({
    status: 'success',
    data,
  })
})

export const updateImageById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const imageUpdate: IImage = req.body
  const { image } = req
  const data = await imageServices.update(image, imageUpdate)
  res.status(200).json({
    status: 'success',
    data,
  })
})

export const deleteImage = catchAsync(async (req, res, next) => {
  const { image } = req

  const isRemoved = await imageServices.remove(image)

  if (isRemoved) {
    res.status(200).json({ status: 'success' })
  } else {
    next(new Error('Failed to remove image'))
  }
})

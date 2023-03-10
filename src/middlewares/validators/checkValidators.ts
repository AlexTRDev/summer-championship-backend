import type { NextFunction, Request, Response } from 'express'

import { AppError } from '../../utils/appError'
import { validationResult } from 'express-validator'

export const checkValidations = (req: Request, _res: Response, next: NextFunction): any => {
  const errors = validationResult(req)

  // [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg)
    const message = errorMessages.join('. ')
    return next(new AppError(message, 400))
  }

  next()
}

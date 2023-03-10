import type { NextFunction, Request, Response } from 'express'

import { AppError } from '../utils'
import dotenv from 'dotenv'

dotenv.config({ path: './config.env' })

const sendErrorDev = (error: AppError, _req: Request, res: Response): void => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    error,
    stack: error.stack,
  })
}

const sendErrorProd = (error: AppError, _req: Request, res: Response): void => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message ?? 'Something went wrong!',
  })
}

const tokenExpiredError = (): AppError => {
  return new AppError('Session expired', 403)
}

const tokenInvalidSignatureError = (): AppError => {
  return new AppError('Session invalid', 403)
}

const dbUniqueConstraintError = (): AppError => {
  return new AppError('The entered email has already been taken', 400)
}

const globalErrorHandler = (error: AppError, req: Request, res: Response, _next: NextFunction): void => {
  // Set default values for original error obj
  error.statusCode = error.statusCode ?? 500
  error.status = error.status ?? 'fail'

  if (process.env.NODE_ENV === 'production') {
    let err = { ...error }

    if (error.name === 'TokenExpiredError') err = tokenExpiredError()
    else if (error.name === 'JsonWebTokenError') {
      err = tokenInvalidSignatureError()
    } else if (error.name === 'SequelizeUniqueConstraintError') {
      err = dbUniqueConstraintError()
    }
    sendErrorProd(err, req, res)
  } else {
    sendErrorDev(error, req, res)
  }
}
export { globalErrorHandler }

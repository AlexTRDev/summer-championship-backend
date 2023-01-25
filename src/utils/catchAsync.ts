import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

type FunctionAsync = (req: Request, res: Response, next: NextFunction) => Promise<void>

// fn -> controller function or middleware
export const catchAsync = (fn: FunctionAsync) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch((err: ErrorRequestHandler) => next(err))
  }
}

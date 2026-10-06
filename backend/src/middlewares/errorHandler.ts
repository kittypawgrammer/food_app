import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/AppError';

// Any error passed to next(err) or thrown in a route ends up here.
export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const status = err instanceof AppError ? err.status : 500;
  if (status === 500) console.error(err);
  res.status(status).json({ message: status === 500 ? 'Something went wrong' : err.message });
};

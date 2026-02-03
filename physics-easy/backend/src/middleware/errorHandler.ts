import { Request, Response, NextFunction } from 'express';
import { AppError } from '../types';

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);

  const statusCode = (err as AppError).statusCode || 500;
  const message = err.message || '서버 오류가 발생했습니다.';

  res.status(statusCode).json({
    success: false,
    error: message,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    error: '요청한 리소스를 찾을 수 없습니다.',
    message: `경로 ${req.originalUrl}를 찾을 수 없습니다.`,
  });
};

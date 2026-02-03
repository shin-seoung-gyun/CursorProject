import express, { Request, Response } from 'express';
import router from './routes';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';
import { logger } from './middleware/logger';

// cors 임포트 (타입 이슈로 인해 require 사용)
const cors = require('cors');

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// 라우터
app.use('/api', router);

// 기본 경로
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Physics Easy API',
    version: '1.0.0',
  });
});

// 404 핸들러
app.use(notFound);

// 에러 핸들러 (마지막에 위치)
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});

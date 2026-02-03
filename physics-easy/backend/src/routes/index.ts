import { Router } from 'express';
import { healthRouter } from './health';

const router = Router();

router.use('/health', healthRouter);
// 추후 다른 라우터 추가
// router.use('/api/topics', topicsRouter);
// router.use('/api/simulations', simulationsRouter);

export default router;

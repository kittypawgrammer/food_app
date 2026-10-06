import { Router } from 'express';
import healthRoutes from './health.routes';

const router = Router();

router.use('/health', healthRoutes);
// Next lessons: router.use('/restaurants', restaurantRoutes); router.use('/auth', authRoutes);

export default router;

import { Router } from 'express';
import healthRoutes from './health.routes';
import restaurantRoutes from './restaurant.routes'; 

const router = Router();

router.use('/health', healthRoutes);
router.use('/restaurants', restaurantRoutes)

export default router;

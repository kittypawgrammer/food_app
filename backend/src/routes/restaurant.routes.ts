import { Router } from 'express';
import { getRestaurants } from '../controllers/restaurant.controller';

const router = Router();

// GET /  → getRestaurants
router.get('/', getRestaurants);

export default router;
import { Router } from 'express';
import {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurant.controller';

const router = Router();

// GET /api/restaurants         → List all restaurants (supports query filters)
router.get('/', getRestaurants);

// GET /api/restaurants/:id     → Get restaurant by ID
router.get('/:id', getRestaurantById);

// POST /api/restaurants        → Create a new restaurant
router.post('/', createRestaurant);

// PUT /api/restaurants/:id     → Update restaurant details
router.put('/:id', updateRestaurant);

// DELETE /api/restaurants/:id  → Delete restaurant
router.delete('/:id', deleteRestaurant);

export default router;
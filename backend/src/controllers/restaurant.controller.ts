import { Request, Response } from 'express';
import { Restaurant } from '../types/restaurant';

// In-memory mock restaurants (to be replaced with PostgreSQL in Phase 2 & 3)
const mockRestaurants: Restaurant[] = [
  { id: 1, name: 'Pasta & Co', cuisine: 'Italian', rating: 4.6 },
  { id: 2, name: 'Burger Haven', cuisine: 'American', rating: 4.3 },
  { id: 3, name: 'Curry Delight', cuisine: 'Indian', rating: 4.7 }
];

// GET /api/restaurants → return all restaurants
export const getRestaurants = (
  req: Request,
  res: Response
): void => {
  res.status(200).json({
    message: 'Restaurants fetched successfully',
    data: mockRestaurants
  });
};
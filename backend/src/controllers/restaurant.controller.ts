import { Request, Response } from 'express';
import { Restaurant } from '../types/restaurant';

// Temporary data (we'll replace this with a database later)
const restaurants: Restaurant[] = [
  { id: 1, name: 'Pizza Palace', cuisine: 'Italian' },
  { id: 2, name: 'Spice Route', cuisine: 'Indian' },
  { id: 3, name: 'Sushi Bar', cuisine: 'Japanese' },
];

// GET /api/restaurants → return all restaurants
export const getRestaurants = (req: Request, res: Response) => {
  res.json(restaurants);
};  
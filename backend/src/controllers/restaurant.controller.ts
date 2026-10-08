import { Request, Response } from 'express';
import { RestaurantModel } from '../models/restaurant.model';
import { AppError } from '../utils/AppError';
import { UpdateRestaurantDto } from '../types/restaurant';

// GET /api/restaurants → List all restaurants (supports optional filter queries: ?cuisine= & ?search= & ?minRating=)
export const getRestaurants = (req: Request, res: Response): void => {
  const cuisine = req.query.cuisine ? String(req.query.cuisine) : undefined;
  const search = req.query.search ? String(req.query.search) : undefined;
  const minRating = req.query.minRating ? parseFloat(String(req.query.minRating)) : undefined;

  const restaurants = RestaurantModel.findAll({ cuisine, search, minRating });

  res.status(200).json({
    message: 'Restaurants fetched successfully',
    count: restaurants.length,
    data: restaurants
  });
};

// GET /api/restaurants/:id → Get single restaurant by ID
export const getRestaurantById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    throw new AppError(400, 'Invalid restaurant ID: must be a positive number');
  }

  const restaurant = RestaurantModel.findById(id);
  if (!restaurant) {
    throw new AppError(404, `Restaurant with ID ${id} not found`);
  }

  res.status(200).json({
    message: 'Restaurant fetched successfully',
    data: restaurant
  });
};

// POST /api/restaurants → Create a new restaurant
export const createRestaurant = (req: Request, res: Response): void => {
  const { name, cuisine, rating, address, imageUrl } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    throw new AppError(400, 'Restaurant name is required');
  }
  if (!cuisine || typeof cuisine !== 'string' || !cuisine.trim()) {
    throw new AppError(400, 'Restaurant cuisine is required');
  }
  if (rating !== undefined && (typeof rating !== 'number' || rating < 0 || rating > 5)) {
    throw new AppError(400, 'Rating must be a number between 0 and 5');
  }

  const newRestaurant = RestaurantModel.create({
    name: name.trim(),
    cuisine: cuisine.trim(),
    rating,
    address: address ? String(address).trim() : undefined,
    imageUrl: imageUrl ? String(imageUrl).trim() : undefined
  });

  res.status(201).json({
    message: 'Restaurant created successfully',
    data: newRestaurant
  });
};

// PUT /api/restaurants/:id → Update an existing restaurant
export const updateRestaurant = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    throw new AppError(400, 'Invalid restaurant ID: must be a positive number');
  }

  const { name, cuisine, rating, address, imageUrl } = req.body;

  if (name !== undefined && (typeof name !== 'string' || !name.trim())) {
    throw new AppError(400, 'Restaurant name cannot be empty');
  }
  if (cuisine !== undefined && (typeof cuisine !== 'string' || !cuisine.trim())) {
    throw new AppError(400, 'Restaurant cuisine cannot be empty');
  }
  if (rating !== undefined && (typeof rating !== 'number' || rating < 0 || rating > 5)) {
    throw new AppError(400, 'Rating must be a number between 0 and 5');
  }

  const updateData: UpdateRestaurantDto = {};
  if (name !== undefined) updateData.name = name.trim();
  if (cuisine !== undefined) updateData.cuisine = cuisine.trim();
  if (rating !== undefined) updateData.rating = rating;
  if (address !== undefined) updateData.address = String(address).trim();
  if (imageUrl !== undefined) updateData.imageUrl = String(imageUrl).trim();

  const updatedRestaurant = RestaurantModel.update(id, updateData);
  if (!updatedRestaurant) {
    throw new AppError(404, `Restaurant with ID ${id} not found`);
  }

  res.status(200).json({
    message: 'Restaurant updated successfully',
    data: updatedRestaurant
  });
};

// DELETE /api/restaurants/:id → Delete a restaurant
export const deleteRestaurant = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    throw new AppError(400, 'Invalid restaurant ID: must be a positive number');
  }

  const deletedRestaurant = RestaurantModel.delete(id);
  if (!deletedRestaurant) {
    throw new AppError(404, `Restaurant with ID ${id} not found`);
  }

  res.status(200).json({
    message: 'Restaurant deleted successfully',
    data: deletedRestaurant
  });
};
export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating?: number;
  address?: string;
  imageUrl?: string;
  createdAt?: string;
}

export interface CreateRestaurantDto {
  name: string;
  cuisine: string;
  rating?: number;
  address?: string;
  imageUrl?: string;
}

export interface UpdateRestaurantDto {
  name?: string;
  cuisine?: string;
  rating?: number;
  address?: string;
  imageUrl?: string;
}

import { Restaurant, CreateRestaurantDto, UpdateRestaurantDto } from '../types/restaurant';

// Seed mock restaurants (to be backed by PostgreSQL in Phase 2 & 3)
let restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Pasta & Co',
    cuisine: 'Italian',
    rating: 4.6,
    address: '123 Via Roma, Downtown',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Burger Haven',
    cuisine: 'American',
    rating: 4.3,
    address: '456 Main St, Uptown',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    name: 'Curry Delight',
    cuisine: 'Indian',
    rating: 4.7,
    address: '789 Spice Ave, Midtown',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500',
    createdAt: new Date().toISOString()
  }
];

export const RestaurantModel = {
  findAll(filter?: { cuisine?: string; search?: string; minRating?: number }): Restaurant[] {
    let result = [...restaurants];

    if (filter?.cuisine) {
      const q = filter.cuisine.toLowerCase();
      result = result.filter(r => r.cuisine.toLowerCase() === q);
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(r =>
        r.name.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q)
      );
    }

    if (filter?.minRating !== undefined) {
      result = result.filter(r => (r.rating ?? 0) >= filter.minRating!);
    }

    return result;
  },

  findById(id: number): Restaurant | undefined {
    return restaurants.find(r => r.id === id);
  },

  create(data: CreateRestaurantDto): Restaurant {
    const nextId = restaurants.length > 0 ? Math.max(...restaurants.map(r => r.id)) + 1 : 1;
    const newRestaurant: Restaurant = {
      id: nextId,
      name: data.name,
      cuisine: data.cuisine,
      rating: data.rating,
      address: data.address,
      imageUrl: data.imageUrl,
      createdAt: new Date().toISOString()
    };
    restaurants.push(newRestaurant);
    return newRestaurant;
  },

  update(id: number, data: UpdateRestaurantDto): Restaurant | undefined {
    const index = restaurants.findIndex(r => r.id === id);
    if (index === -1) return undefined;

    restaurants[index] = {
      ...restaurants[index],
      ...(data.name !== undefined && { name: data.name }),
      ...(data.cuisine !== undefined && { cuisine: data.cuisine }),
      ...(data.rating !== undefined && { rating: data.rating }),
      ...(data.address !== undefined && { address: data.address }),
      ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl })
    };
    return restaurants[index];
  },

  delete(id: number): Restaurant | undefined {
    const index = restaurants.findIndex(r => r.id === id);
    if (index === -1) return undefined;
    const [deleted] = restaurants.splice(index, 1);
    return deleted;
  }
};

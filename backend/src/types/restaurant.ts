export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
}

export type CreateRestaurantDto = Omit<Restaurant, 'id'>;
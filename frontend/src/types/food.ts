export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating?: number;
  address?: string;
  imageUrl?: string;
  createdAt?: string;
  description?: string;
  deliveryTimeMin?: number;
  priceRange?: '$' | '$$' | '$$$';
  isFeatured?: boolean;
  bannerUrl?: string;
  openingHours?: string;
}

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: 'Popular' | 'Starters' | 'Mains' | 'Pizzas & Burgers' | 'Desserts' | 'Drinks';
  imageUrl: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  calories?: number;
}

export interface CartItem {
  id: string; // unique cart line id (e.g. menuItemId + special instructions)
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface OrderDetails {
  customerName: string;
  email: string;
  phone: string;
  streetAddress: string;
  paymentMethod: 'card' | 'cod' | 'upi';
  notes?: string;
}

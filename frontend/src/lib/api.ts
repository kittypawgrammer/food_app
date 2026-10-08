import { Restaurant } from "@/types/food";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Fallback data in case backend is offline
const FALLBACK_RESTAURANTS: Restaurant[] = [
    {
        id: 1,
        name: "Pasta & Co",
        cuisine: "Italian",
        rating: 4.6,
        address: "123 Via Roma, Downtown",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500",
        deliveryTimeMin: 25,
        priceRange: "$$",
        description: "Authentic handmade pasta, wood-fired pizzas, and classic Italian desserts.",
    },
    {
        id: 2,
        name: "Burger Haven",
        cuisine: "American",
        rating: 4.3,
        address: "456 Main St, Uptown",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        deliveryTimeMin: 20,
        priceRange: "$",
        description: "Juicy smashed beef patties, crispy loaded fries, and thick shakes.",
    },
    {
        id: 3,
        name: "Curry Delight",
        cuisine: "Indian",
        rating: 4.7,
        address: "789 Spice Ave, Midtown",
        imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
        deliveryTimeMin: 35,
        priceRange: "$$",
        description: "Fragrant biryanis, rich curries, and tandoor-baked garlic naan.",
    },
];

/**
 * Fetch all restaurants.
 * Runs on the server during Server Component rendering.
 */
export async function getRestaurants(): Promise<Restaurant[]> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/restaurants`, {
            // 'no-store' ensures fresh data every request during development
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }

        const json = await res.json();
        return json.data || FALLBACK_RESTAURANTS;
    } catch (error) {
        console.warn("⚠️ Backend unreachable, using fallback mock data:", error);
        return FALLBACK_RESTAURANTS;
    }
}

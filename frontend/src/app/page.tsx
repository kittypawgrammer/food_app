import { getRestaurants } from "@/lib/api";
import RestaurantCard from "@/components/restaurant-card";

// Food inspiration categories like Zomato
const FOOD_CATEGORIES = [
  { name: "Biryani", emoji: "🍛" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Burger", emoji: "🍔" },
  { name: "Thali", emoji: "🍱" },
  { name: "Rolls", emoji: "🌯" },
  { name: "Cake", emoji: "🍰" },
  { name: "Noodles", emoji: "🍜" },
  { name: "Ice Cream", emoji: "🍨" },
];

export default async function HomePage() {
  const restaurants = await getRestaurants();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
      
      {/* 1. Zomato Primary Navigation Tabs (Delivery / Dining / Nightlife) */}
      <div className="border-b border-stone-200 mb-8 pb-1">
        <div className="flex items-center gap-8 sm:gap-12">
          
          {/* Active Tab: Delivery */}
          <button className="flex items-center gap-3 pb-3 border-b-2 border-[#e23744] text-[#e23744] font-bold text-sm sm:text-base cursor-pointer">
            <span className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-2xl shadow-2xs">
              🛵
            </span>
            <span>Delivery</span>
          </button>

          {/* Inactive Tab: Dining Out */}
          <button className="flex items-center gap-3 pb-3 border-b-2 border-transparent text-stone-500 hover:text-stone-800 font-semibold text-sm sm:text-base transition cursor-pointer">
            <span className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
              🍽️
            </span>
            <span>Dining Out</span>
          </button>

          {/* Inactive Tab: Nightlife */}
          <button className="flex items-center gap-3 pb-3 border-b-2 border-transparent text-stone-500 hover:text-stone-800 font-semibold text-sm sm:text-base transition hidden sm:flex cursor-pointer">
            <span className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
              🍸
            </span>
            <span>Nightlife</span>
          </button>

        </div>
      </div>

      {/* 2. Zomato "Inspiration for your first meal" - ALWAYS in a clean horizontal ROW */}
      <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 mb-12 border border-stone-200/60 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 tracking-tight">
          Inspiration for your first meal
        </h2>
        
        {/* Single Horizontal Row with smooth scrolling and shrink-0 items */}
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 overflow-x-auto pb-3 pt-1">
          {FOOD_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center gap-2.5 shrink-0 cursor-pointer group text-center min-w-[76px] sm:min-w-[96px]"
            >
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white shadow-xs border border-stone-200/80 flex items-center justify-center text-3xl sm:text-4xl group-hover:scale-108 group-hover:shadow-md transition-all duration-200">
                {cat.emoji}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-stone-700 group-hover:text-[#e23744] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Restaurant Section Header */}
      <section className="mt-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Delivery Restaurants in Indiranagar
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Showing {restaurants.length} top-rated food places nearby
            </p>
          </div>
        </div>

        {/* 4. Restaurant Cards Grid - strictly 3 items in a row on desktop/laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

    </main>
  );
}



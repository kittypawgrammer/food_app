import Link from "next/link";
import { Restaurant } from "@/types/food";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  // Format price for two like Zomato
  const priceForTwo =
    restaurant.priceRange === "$" ? "₹200 for two" :
    restaurant.priceRange === "$$$" ? "₹800 for two" : "₹350 for two";

  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="group p-3 rounded-2xl bg-white border border-stone-200/60 hover:border-stone-300 hover:shadow-xl transition-all duration-200 flex flex-col"
    >
      {/* Photo with Overlay Badges - strictly constrained height */}
      <div className="relative h-48 sm:h-52 w-full bg-stone-100 rounded-xl overflow-hidden mb-3 shrink-0">
        {restaurant.imageUrl ? (
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            🍽️
          </div>
        )}

        {/* Zomato Blue Discount Tag (Bottom Left) */}
        <div className="absolute bottom-3 left-0 bg-[#256fef] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-r-md shadow-xs">
          50% OFF up to ₹100
        </div>

        {/* Delivery Time Badge (Bottom Right) */}
        {restaurant.deliveryTimeMin && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
            {restaurant.deliveryTimeMin} min
          </div>
        )}
      </div>

      {/* Row 1: Restaurant Name & Green Rating Box */}
      <div className="flex items-center justify-between gap-2 mb-1">
        <h3 className="font-bold text-base text-stone-900 group-hover:text-[#e23744] transition-colors truncate">
          {restaurant.name}
        </h3>

        {/* Zomato Signature Green Rating Badge */}
        {restaurant.rating && (
          <div className="bg-[#24963f] text-white text-xs font-bold px-1.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
            <span>{restaurant.rating.toFixed(1)}</span>
            <span className="text-[10px]">★</span>
          </div>
        )}
      </div>

      {/* Row 2: Cuisine and Price for Two */}
      <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
        <span className="truncate max-w-[170px]">{restaurant.cuisine}, Fast Food</span>
        <span className="shrink-0 font-medium text-stone-600">{priceForTwo}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-stone-100 pt-2 mt-auto flex items-center gap-2 text-[11px] text-stone-400">
        <span className="text-[#e23744]">🛵</span>
        <span className="truncate">Follows best safety & hygiene standards</span>
      </div>
    </Link>
  );
}



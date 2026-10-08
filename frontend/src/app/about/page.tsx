import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      <span className="text-5xl mb-4 block">🍕</span>
      <h1 className="text-4xl font-extrabold text-stone-900 mb-4 tracking-tight">
        About QuickBite
      </h1>
      <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
        QuickBite is built to deliver mouth-watering food from your favorite local restaurants in 30 minutes or less.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-10">
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <span className="text-2xl mb-2 block">⚡</span>
          <h3 className="font-bold text-stone-900 mb-1">Superfast</h3>
          <p className="text-xs text-stone-500">Optimized delivery routes ensuring your meal arrives hot and fresh.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <span className="text-2xl mb-2 block">🌱</span>
          <h3 className="font-bold text-stone-900 mb-1">Fresh Ingredients</h3>
          <p className="text-xs text-stone-500">Partnering only with hygienic, high-rated local kitchens.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <span className="text-2xl mb-2 block">💳</span>
          <h3 className="font-bold text-stone-900 mb-1">Easy Checkout</h3>
          <p className="text-xs text-stone-500">Seamless ordering with live tracking and flexible payments.</p>
        </div>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition"
      >
        <span>Explore Restaurants</span>
        <span>→</span>
      </Link>
    </main>
  );
}

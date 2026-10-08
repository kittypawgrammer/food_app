import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo (Zomato-style italic bold wordmark) */}
        <Link href="/" className="shrink-0 flex items-center gap-1 group">
          <span className="text-2xl font-black italic tracking-tighter text-[#e23744] group-hover:opacity-95 transition">
            quickbite
          </span>
        </Link>

        {/* Zomato-Style Location + Search Combined Pill */}
        <div className="hidden md:flex items-center flex-1 max-w-2xl bg-white rounded-xl border border-stone-200 shadow-xs h-12 overflow-hidden mx-4">
          
          {/* Location Dropdown Part */}
          <div className="flex items-center gap-2 px-3 text-stone-500 hover:text-stone-800 cursor-pointer shrink-0">
            <span className="text-[#e23744] text-base">📍</span>
            <span className="text-xs font-semibold text-stone-700 truncate max-w-[130px]">
              Indiranagar, Bengaluru
            </span>
            <span className="text-[10px] text-stone-400">▼</span>
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-[1px] bg-stone-300 mx-1 shrink-0" />

          {/* Search Input Part */}
          <div className="flex items-center flex-1 px-3 gap-2">
            <span className="text-stone-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="w-full text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden bg-transparent"
            />
          </div>
        </div>

        {/* Right Nav Actions */}
        <nav className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link
            href="/about"
            className="text-sm font-medium text-stone-600 hover:text-[#e23744] transition hidden sm:block"
          >
            About
          </Link>

          {/* Cart with Red Notification Counter */}
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 text-xs font-bold px-3.5 py-2 rounded-xl transition shadow-2xs"
          >
            <span className="text-base">🛒</span>
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-[#e23744] text-white text-[11px] font-black px-1.5 py-0.2 rounded-full">
              0
            </span>
          </Link>
        </nav>

      </div>
    </header>
  );
}


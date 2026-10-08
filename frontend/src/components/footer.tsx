import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 text-stone-600 text-xs mt-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Row: Brand & Country/Language pickers */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-stone-200 gap-4">
          <div className="text-2xl font-black italic tracking-tighter text-black">
            quickbite
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white border border-stone-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
              <span>🇮🇳</span>
              <span>India</span>
              <span className="text-[10px] text-stone-400">▼</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-stone-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
              <span>🌐</span>
              <span>English</span>
              <span className="text-[10px] text-stone-400">▼</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8">
          <div>
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">
              About QuickBite
            </h4>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/about" className="hover:text-stone-900">Who We Are</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Blog</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Work With Us</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Report Fraud</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">
              Quickverse
            </h4>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/" className="hover:text-stone-900">QuickBite</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Feeding India</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Hyperpure</Link></li>
              <li><Link href="/" className="hover:text-stone-900">QuickBite Live</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">
              For Restaurants
            </h4>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/" className="hover:text-stone-900">Partner With Us</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Apps For You</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">
              Learn More
            </h4>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/" className="hover:text-stone-900">Privacy</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Security</Link></li>
              <li><Link href="/" className="hover:text-stone-900">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 border-t border-stone-200 text-stone-400 text-[11px] text-center sm:text-left">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, and Privacy Policy. All trademarks are properties of their respective owners. 2008-{new Date().getFullYear()} © QuickBite™ Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}


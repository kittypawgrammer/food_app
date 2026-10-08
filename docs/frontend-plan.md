# 🎓 Frontend Learning & Implementation Plan (Next.js)

> **Goal:** Master core **Next.js (App Router)** and **React** concepts by building the food app frontend step-by-step. Each phase introduces a specific concept, explains *why* it exists, and applies it to a real feature.

---

## 🧠 Core Next.js Concepts You Will Learn

| Concept | What It Is | Why It Matters |
|---|---|---|
| **App Router & File Routing** | Folders define URLs; files have special names (`page.tsx`, `layout.tsx`, `loading.tsx`) | No React Router setup needed; routing is intuitive and nested |
| **Server Components (RSC)** | Components rendered on the server by default | Direct database/API access, zero JavaScript sent to client, fast initial load & great SEO |
| **Client Components (`"use client"`)** | Components opt-in to browser interactivity | Used when you need `useState`, `useEffect`, event listeners (`onClick`), or browser APIs |
| **Component Composition** | Nesting Client Components inside Server Components | Keeps pages fast while allowing interactive islands (like search bars, carts) |
| **Dynamic Routes (`[id]`)** | Parameterized URLs like `/restaurants/1` or `/restaurants/2` | One template renders unique data for each restaurant or dish |
| **Data Fetching & Caching** | Direct `async/await` in server components with `fetch()` options | Replaces old `useEffect` data fetching loops; built-in caching & revalidation |
| **Global State with Context** | React Context (`CartContext`) combined with `"use client"` | Share cart items, order count, and total across all pages |
| **Hydration & SSR Safety** | Syncing client state (`localStorage`) with server-rendered HTML | Avoids common Next.js hydration mismatch bugs |
| **Special Routing Files** | `loading.tsx`, `not-found.tsx`, `error.tsx` | Instant streaming UI with Suspense and automatic error handling |

---

## 🗺️ Step-by-Step Learning Phases

```
Phase 1: App Router & Layout
  └── Learn: Root layout, metadata, fonts, persistent navbar
        ↓
Phase 2: Server Components & Data Fetching
  └── Learn: async Server Components, API calls, props passing
        ↓
Phase 3: Client Components & Interactive Filters
  └── Learn: "use client", useState, live search, cuisine tags
        ↓
Phase 4: Dynamic Routes ([id])
  └── Learn: URL parameters, restaurant menu page, dish cards
        ↓
Phase 5: Global State & Cart Drawer
  └── Learn: React Context, useCart hook, cart drawer, localStorage hydration
        ↓
Phase 6: Full Cart & Checkout Page
  └── Learn: Form handling, order summary calculation, validation
        ↓
Phase 7: Suspense & Error Boundaries
  └── Learn: loading.tsx, not-found.tsx, error.tsx
        ↓
Phase 8: Full Fullstack Connection
  └── Learn: Linking frontend to Docker PostgreSQL + Express API
```

---

### 📍 Phase 1: The App Router Mental Model & Root Layout
* **Concepts:**
  - How Next.js 16 uses folder-based routing (`src/app/`).
  - What `layout.tsx` is (a shared wrapper that never re-renders when navigating).
  - What `page.tsx` is (the unique content for a specific URL).
  - How `globals.css` and Tailwind CSS v4 style the app.
* **What We Build:**
  - A clean Root Layout with a responsive **Navbar** and **Footer**.
  - Learn why the Navbar lives in `layout.tsx` rather than being copied into every page.

---

### 📍 Phase 2: Server Components vs Client Components
* **Concepts:**
  - In Next.js App Router, every component is a **Server Component** by default.
  - Server components can be `async function Page()` and call `fetch()` directly without `useEffect`.
  - Zero bundle weight: server components do not ship their JavaScript code to the user's browser.
  - **Rule of Thumb:**
    - Need `onClick`, `onChange`, `useState`, `useEffect`? ➔ Add `'use client'` at the very top.
    - Just showing data or rendering HTML? ➔ Keep it as a Server Component.
* **What We Build:**
  - A restaurant list on the home page fetched via an async server component.
  - A clean resilient API layer (`src/lib/api.ts`) that calls Express when online, or uses mock data when backend is stopped.

---

### 📍 Phase 3: Interactive UI (Search, Cuisine Filters & Client Islands)
* **Concepts:**
  - The "Interactive Island" architecture: keeping the outer page as a Server Component while embedding focused Client Components inside it.
  - Using `useState` to manage live search queries and active cuisine categories (Italian, American, Indian, etc.).
* **What We Build:**
  - `RestaurantFilter.tsx` (Client Component with search bar + cuisine pills).
  - Passing filtered items to `RestaurantCard.tsx`.

---

### 📍 Phase 4: Dynamic Routes (`/restaurants/[id]`)
* **Concepts:**
  - How Next.js handles dynamic URLs using brackets: `app/restaurants/[id]/page.tsx`.
  - Accessing route parameters: `params: Promise<{ id: string }>`.
  - Fetching restaurant-specific data based on the ID in the URL.
* **What We Build:**
  - Restaurant detail page showing the banner, opening hours, address, and menu items grouped by categories (Starters, Mains, Desserts, Drinks).
  - `DishCard.tsx` component with price, veg/non-veg tags, and descriptions.

---

### 📍 Phase 5: Global State with React Context (`useCart`)
* **Concepts:**
  - Why local state isn't enough when you want a cart count badge in the Navbar and an "Add to Cart" button inside a deep restaurant menu card.
  - Creating a Client Context Provider (`CartProvider`) and custom hook (`useCart()`).
  - Handling Next.js **hydration**: why accessing `localStorage` directly in component body causes errors, and how to safely sync it with `useEffect`.
* **What We Build:**
  - `CartContext.tsx` with actions: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`.
  - A slide-over **Cart Drawer** with item list, quantity steppers, and delivery fee progress bar.

---

### 📍 Phase 6: Forms & Checkout Page (`/cart`)
* **Concepts:**
  - Controlled inputs in React (`customerName`, `address`, `paymentMethod`).
  - Handling form submission and validation in client components.
  - Calculating financials (Subtotal, Delivery Fee, Taxes, Grand Total).
* **What We Build:**
  - Full dedicated `/cart` page with order summary breakdown, delivery address form, and an animated order confirmation modal.

---

### 📍 Phase 7: Special App Router Files (Suspense, Loading & 404)
* **Concepts:**
  - `loading.tsx`: Uses React Suspense under the hood to display immediate skeletons while server data streams in.
  - `not-found.tsx`: Triggered by `notFound()` when an invalid restaurant ID is visited (e.g. `/restaurants/999`).
  - `error.tsx`: Client error boundary to catch unexpected errors gracefully without crashing the entire app.
* **What We Build:**
  - Skeleton loading cards for restaurants and menus.
  - Custom branded 404 Not Found screen.

---

### 📍 Phase 8: Full-Stack Integration (Express + Docker Postgres)
* **Concepts:**
  - Environment variables in Next.js (`NEXT_PUBLIC_API_URL`).
  - CORS handling between frontend (`localhost:3000`) and backend (`localhost:5000`).
  - Connecting the live Postgres database via Docker Compose and watching real mutations reflect on the frontend.

---

## 📌 How We Will Work Together
1. We will tackle **one phase at a time**.
2. Before writing each piece of code, I will explain **what concept we are using and why**.
3. You can ask questions, experiment, and test each step locally in your browser (`http://localhost:3000`).

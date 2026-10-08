# 🤖 Agent Guidelines & Project Manual

## 1. Project Overview
**food_app** is a full-stack web application designed to browse restaurants, view dishes/menus, and explore prices. The project is structured as a dual-workspace repository to learn and master core full-stack engineering principles.

---

## 2. Technology Stack & Ports

| Layer | Technology | Port | Directory |
|---|---|---|---|
| **Frontend** | Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript | `3000` | [`frontend/`](../frontend) |
| **Backend** | Node.js, Express.js 5, TypeScript (`tsx` dev runner) | `5000` | [`backend/`](../backend) |
| **Database** | PostgreSQL 16 (running via Docker) | `5432` | Root / [`docker-compose.yml`](../docker-compose.yml) |

---

## 3. Architecture Rules for Agents

### A. Backend Architecture
* **Layer Separation**:
  * `routes/`: Define endpoint URLs and attach controller handlers.
  * `controllers/`: Extract request parameters/body, invoke service logic, and send standard JSON responses.
  * `models/` & `services/`: Database queries and business logic.
  * `middlewares/`: Request interceptors (CORS, error handling, validation).
  * `types/`: Shared TypeScript data models and DTO interfaces.
* **Error Handling**: Use the central `AppError` class and propagate errors to `errorHandler.ts`. Do not crash the process with unhandled exceptions.
* **Ports & CORS**: Backend **must** run on port `5000` to prevent port collision with Next.js (port `3000`). Always maintain CORS origins aligned with `CLIENT_URL`.

### B. Frontend Architecture
* **Next.js App Router Conventions**:
  * Default to **React Server Components (RSC)** for data fetching.
  * Use `'use client'` only when client-side interactivity, event listeners, or hooks (`useState`, `useEffect`) are strictly necessary.
  * Maintain clean path aliases (`@/*` pointing to `./src/*`).
* **Design & Styling**:
  * Use modern Tailwind CSS styling.
  * Design cards, badges, and clean layouts for restaurants and dishes with prominent pricing indicators.

---

## 4. Verification & Validation Commands

Always run verification before concluding tasks:

```bash
# Verify backend TypeScript compilation
cd backend && npm run typecheck

# Verify backend production build
cd backend && npm run build

# Verify frontend TypeScript compilation
cd frontend && npx tsc --noEmit
```

---

## 5. Learning & Implementation Roadmap

1. [x] **Phase 1**: Environment alignment, ports, CORS, and skeleton fixes.
2. [ ] **Phase 2**: Docker & PostgreSQL setup via `docker-compose.yml`.
3. [ ] **Phase 3**: Relational schema (Restaurants & Dishes) and Express REST API.
4. [ ] **Phase 4**: Next.js Server Components and API data fetching.
5. [ ] **Phase 5**: UI catalog (Restaurant listings, Dish cards with prices).
6. [ ] **Phase 6**: Search, filtering, and mutation forms.

# 🍔 food_app

A learning project: **Angular 17 (module-based)** frontend + **Node.js / Express (TypeScript)** backend,
built step by step to learn backend concepts (auth from basic login to JWT, CRUD, roles, orders, …).

```
food_app/
├── backend/            Node.js + Express + TypeScript API
│   └── src/
│       ├── server.ts       starts the server
│       ├── app.ts          express app, middleware, routes
│       ├── config/         env variables
│       ├── routes/         URL → controller mapping
│       ├── controllers/    request handling logic
│       ├── middlewares/    404 + error handler (auth later)
│       ├── models/         database models (later)
│       ├── utils/          AppError etc.
│       └── types/          shared TS types/interfaces
└── frontend/           Angular 17 (NgModules, lazy-loaded features)
    └── src/app/
        ├── core/           singletons: services, guards, interceptors (CoreModule)
        ├── shared/         reusable components (SharedModule) e.g. navbar
        └── features/       home, auth (login/register), restaurants — lazy modules
```

## Run it

**Backend** (http://localhost:3000)
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Check: http://localhost:3000/api/health

**Frontend** (http://localhost:4200)
```bash
cd frontend
npm install
npm start
```
The home page shows "Backend status: ok" when both are running.

## Learning roadmap
1. ✅ Setup, first server, routes
2. CRUD restaurants & dishes (in-memory → MongoDB)
3. Middleware, validation, error handling
4. Auth 1 — plain register/login (and why it's bad)
5. Auth 2 — password hashing with bcrypt
6. Auth 3 — sessions & cookies
7. Auth 4 — JWT, protected routes, refresh tokens
8. Roles (customer / restaurant owner / admin)
9. Orders: cart → order → status flow
10. Extras: uploads, pagination & search, rate limiting, tests, deployment

## Backend scripts
| Command | What it does |
|---|---|
| `npm run dev` | run `src/server.ts` with auto-reload (tsx watch) |
| `npm run typecheck` | check types without building |
| `npm run build` | compile TS → `dist/` |
| `npm start` | run the compiled `dist/server.js` |

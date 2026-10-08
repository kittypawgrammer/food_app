# 🍔 food_app

A learning project: **Next.js (App Router)** frontend + **Node.js / Express (TypeScript)** backend + **PostgreSQL (Docker)**,
built step by step to learn core backend and frontend concepts.

```
food_app/
├── backend/            Node.js + Express + TypeScript API (Port 5000)
│   └── src/
│       ├── server.ts       starts the server
│       ├── app.ts          express app, middleware, routes
│       ├── config/         env variables
│       ├── routes/         URL → controller mapping
│       ├── controllers/    request handling logic
│       ├── middlewares/    404 + error handler
│       ├── models/         database models
│       ├── utils/          AppError etc.
│       └── types/          shared TS types/interfaces
└── frontend/           Next.js 16 + React 19 + Tailwind CSS (Port 3000)
    └── src/
        ├── app/            App router pages & layouts
        └── components/     reusable UI components
```

## Run it

**Backend** (http://localhost:5000)
```bash
cd backend
npm install
npm run dev
```
Check: http://localhost:5000/api/health or http://localhost:5000/api/restaurants

**Frontend** (http://localhost:3000)
```bash
cd frontend
npm install
npm run dev
```

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

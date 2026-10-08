# 🚀 Production Deployment & Operations Guide

## 1. Production Architecture Overview

In production, **food_app** runs with isolated frontend and backend services backed by a persistent PostgreSQL database:

```text
[ Internet / Clients ]
         │
         ▼
[ Reverse Proxy / SSL (Nginx or Caddy) ]
    ├── /api/*   ──────▶  Backend (Node.js / Express - dist/server.js)
    └── /*       ──────▶  Frontend (Next.js Standalone Server)
                               │
                               ▼
                       [ PostgreSQL 16 (Persistent Volume) ]
```

---

## 2. Production Build & Execution

### A. Backend Production Build
1. **Compilation**:
   ```bash
   cd backend
   npm run build
   ```
   Compiles TypeScript source from `src/` to production JavaScript in `dist/`.
2. **Execution**:
   ```bash
   NODE_ENV=production npm run start
   ```

### B. Frontend Production Build
1. **Compilation**:
   ```bash
   cd frontend
   npm run build
   ```
   Generates optimized Next.js production output.
2. **Execution**:
   ```bash
   npm run start
   ```

---

## 3. Production Environment Variables Checklist

Ensure these variables are never committed to version control and are set securely via production secrets management:

### Backend (`backend/.env`)
```env
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-food-app-domain.com
DATABASE_URL=postgresql://food_user:STRONG_PASSWORD@postgres:5432/food_db
```

### Frontend (`frontend/.env.production`)
```env
NEXT_PUBLIC_API_URL=https://your-food-app-domain.com/api
```

---

## 4. Containerization Strategy

### Recommended Multi-Stage Docker Setup:
1. **Backend `Dockerfile`**:
   * *Stage 1 (Builder)*: Install all dependencies, run `npm run build`.
   * *Stage 2 (Runner)*: Copy only `dist/` and production `node_modules` into a slim Alpine image. Run under a non-root user.
2. **Frontend `Dockerfile`**:
   * Uses Next.js `output: 'standalone'` mode to produce an ultra-lightweight container image.
3. **PostgreSQL**:
   * Managed via `docker-compose.prod.yml` with named volumes for persistent database files:
     ```yaml
     volumes:
       postgres_data:
         driver: local
     ```

---

## 5. Security & Operational Checklist

* [ ] **CORS Lockdown**: Restrict `CLIENT_URL` strictly to your production domain (no `*` wildcards).
* [ ] **HTTP Headers**: Add `helmet` middleware to Express to configure secure HTTP headers (CSP, HSTS, X-Frame-Options).
* [ ] **Rate Limiting**: Protect backend endpoints against brute-force and DDoS via `express-rate-limit`.
* [ ] **Database Migrations**: Run database migrations automatically in CI/CD or container initialization scripts before launching the application.
* [ ] **Database Backups**: Schedule automated `pg_dump` backups with offsite storage (e.g., S3 or encrypted remote volume).
* [ ] **Health Monitoring**: Use the `/api/health` endpoint for uptime monitoring and container orchestrator health probes.

# ComplyIQ

ComplyIQ is a multi-tenant SaaS starter built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Getting started

1. Copy `.env.example` to `.env` and update `DATABASE_URL`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate the Prisma client:
   ```bash
   npm run prisma:generate
   ```
4. Run the first migration:
   ```bash
   npm run prisma:migrate
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Local development with Docker

```bash
docker compose up --build
```

## Deployment

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Features

- Multi-tenant data model for organizations, users, and projects.
- Next.js App Router and TypeScript support.
- Prisma + PostgreSQL backend.
- Docker development configuration.

## Project layout

- `app/` — Next.js application routes, layouts, and global styles.
- `prisma/` — Prisma schema and database models.
- `Dockerfile` — Production container build.
- `docker-compose.yml` — Local PostgreSQL and app service.
- `.env.example` — Environment variable template.

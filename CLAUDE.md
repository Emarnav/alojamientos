# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack university housing rental application for UCH-CEU. The platform connects property managers (propietarios) with students (estudiantes) for accommodation rentals, with administrative oversight.

**Architecture**: Monorepo structure with separate client (Next.js) and server (Express.js + Prisma) applications.

## Core Commands

### Development
- `npm run dev` - Start both client and server in development mode
- `cd client && npm run dev` - Client only (localhost:3000)  
- `cd server && npm run dev` - Server only (localhost:3001)

### Build & Deploy
- `npm run build` - Full build: install dependencies, build server, build client, run migrations
- `npm run install:all` - Install dependencies for root, server, and client
- `cd server && npm run build` - Build TypeScript server to dist/
- `cd client && npm run build` - Build Next.js client
- `cd server && npx prisma migrate deploy` - Deploy database migrations

### Database Operations
- `cd server && npx prisma generate` - Generate Prisma client
- `cd server && npm run seed` - Seed database with initial data
- `cd server && npx prisma studio` - Open Prisma Studio (database GUI)

### Linting
- `cd client && npm run lint` - Lint client code with Next.js ESLint

## Architecture Overview

### Client (Next.js App Router)
- **Location**: `/client`
- **Framework**: Next.js 15 with TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: Redux Toolkit Query (RTK Query) for API calls and caching
- **Authentication**: JWT tokens stored in localStorage
- **Key Directories**:
  - `src/app/` - App Router pages and layouts
  - `src/components/` - Reusable UI components
  - `src/state/` - RTK Query API definitions and Redux store
  - `src/types/` - TypeScript type definitions

### Server (Express.js)
- **Location**: `/server`
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcryptjs password hashing
- **File Storage**: Multer for image uploads (local storage)
- **Key Directories**:
  - `src/controllers/` - Route handlers grouped by feature
  - `src/routes/` - Express route definitions
  - `src/middleware/` - Custom middleware (auth, validation, security)
  - `prisma/` - Database schema and migrations

### User Roles & Permissions
The application has three distinct user types with different access levels:

1. **Estudiante (Student)**: Browse properties, save favorites, send messages to property managers
2. **Propietario (Property Manager)**: Create/manage properties, respond to student inquiries
3. **Admin**: Review/approve properties, manage users, oversee platform operations

### API Architecture
RESTful API with role-based endpoints:
- `/api/auth/*` - Authentication (register, login, password reset)
- `/api/alojamientos/*` - Public property listings
- `/api/estudiante/*` - Student-specific operations
- `/api/propietario/*` - Property manager operations  
- `/api/admin/*` - Administrative functions
- `/api/chat/*` - Messaging system
- `/api/notifications/*` - Real-time notifications

### Database Schema (Key Models)
- **Usuario**: Base user model with role-based access (Estudiante, Propietario, Admin)
- **Alojamiento**: Property listings with approval workflow (Pendiente → Aprobado/Rechazado)
- **Conversacion**: Chat system linking students and property managers
- **Mensaje**: Individual chat messages
- **Notificacion**: Real-time notifications for users
- **Ubicacion**: Geographic location data for properties

## Development Guidelines

### Environment Setup
- Requires Node.js ≥18.0.0 and npm ≥8.0.0
- Server requires `DATABASE_URL` environment variable for PostgreSQL connection
- Client proxies API requests to `localhost:3001` via Next.js rewrites

### Type Safety
- Prisma generates TypeScript types automatically via `postprisma:generate` script
- Client imports Prisma types from `src/types/prismaTypes.d.ts`
- RTK Query provides full type safety for API operations

### Security Features
- Rate limiting on API routes (stricter for auth endpoints)
- CORS configuration for cross-origin requests
- Helmet.js for security headers
- Input sanitization middleware
- Anti-crawler protection (site not indexed)

### File Structure Patterns
- **Controllers**: Handle business logic, grouped by user role (adminControllers, tenantControllers, etc.)
- **Routes**: Define endpoint paths, apply middleware, call controllers
- **Components**: Reusable React components with shadcn/ui design system
- **Pages**: Next.js App Router file-based routing in `src/app/`

### State Management Patterns
- RTK Query handles all API calls with automatic caching and invalidation
- Authentication state managed via localStorage tokens
- Cache tags ensure UI updates when data changes (e.g., "Alojamientos", "Mensajes")

### Common Workflow: Adding New Features
1. Update Prisma schema if database changes needed
2. Run `npx prisma migrate dev` and `npx prisma generate`
3. Add server routes/controllers with proper middleware
4. Create RTK Query endpoints in client/src/state/api.ts
5. Build UI components using existing patterns and shadcn/ui
6. Test authentication and role-based access controls

## Production Considerations
- Uses standalone Next.js build for hosting compatibility
- Images served statically from server/public/alojamientos/
- Database migrations run automatically during build process
- CORS configured for production domains in server configuration
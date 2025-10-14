# UCH-CEU Rental App

Plataforma de alojamientos universitarios para UCH-CEU. Conecta propietarios con estudiantes para alquileres de alojamientos.

## Arquitectura

- **Cliente**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Servidor**: Express.js + TypeScript + Prisma ORM
- **Base de datos**: PostgreSQL
- **Despliegue**: Aplicaciones Node.js separadas

## Desarrollo Local

### Requisitos

- Node.js ≥18.0.0
- npm ≥8.0.0
- PostgreSQL (configurado en servidor remoto)

### Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd CEU

# Instalar todas las dependencias
npm run install:all
```

### Configuración

#### 1. Variables de entorno del servidor

Crear/editar `server/.env`:

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
JWT_SECRET="clave-secreta-para-jwt"
CLIENT_URL=http://localhost:3000
PORT=3001
NODE_ENV=development
```

#### 2. Variables de entorno del cliente

Copiar `client/.env.example` a `client/.env` y ajustar para desarrollo local:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_MEDIA_BASE_URL=http://localhost:3001/uploads
PORT=3000
```

### Comandos de Desarrollo

```bash
# Ejecutar ambas aplicaciones en desarrollo
npm run dev

# Solo servidor (puerto 3001)
npm run dev:server

# Solo cliente (puerto 3000)
npm run dev:client

# Limpiar builds
npm run clean
```

### Comandos de Base de Datos

```bash
# Generar Prisma client
npm run generate

# Ejecutar migraciones
npm run migrate

# Seed de datos iniciales
npm run seed

# Abrir Prisma Studio (GUI de BD)
cd server && npx prisma studio
```

### Build de Producción

```bash
# Build completo
npm run build

# Build solo servidor
npm run build:server

# Build solo cliente
npm run build:client
```

### Iniciar en Producción

```bash
# Opción 1: Con PM2 (recomendado)
pm2 start ecosystem.config.js

# Opción 2: Manual en terminales separadas
# Terminal 1: Servidor
npm run start:server

# Terminal 2: Cliente
npm run start:client
```

## Estructura del Proyecto

```
CEU/
├── client/                 # Aplicación Next.js
│   ├── src/
│   │   ├── app/           # App Router (páginas)
│   │   ├── components/    # Componentes React
│   │   ├── state/         # RTK Query API
│   │   └── types/         # TypeScript types
│   └── .env               # Variables de entorno
│
├── server/                # API Express
│   ├── src/
│   │   ├── controllers/   # Lógica de negocio
│   │   ├── routes/        # Endpoints
│   │   ├── middleware/    # Middleware
│   │   └── index.ts       # Entrada principal
│   ├── prisma/
│   │   ├── schema.prisma  # Esquema de BD
│   │   └── migrations/    # Migraciones
│   └── public/            # Archivos estáticos
│
└── package.json           # Scripts raíz
```

## Roles de Usuario

1. **Estudiante**: Buscar alojamientos, favoritos, mensajes
2. **Propietario**: Gestionar propiedades, responder consultas
3. **Admin**: Aprobar propiedades, gestión de usuarios

## Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registro
- `POST /api/auth/login` - Login
- `POST /api/auth/request-password-reset` - Recuperar contraseña

### Alojamientos (público)
- `GET /api/alojamientos` - Listar alojamientos
- `GET /api/alojamientos/:id` - Detalle de alojamiento

### Estudiante
- `POST /api/estudiante/favoritos` - Guardar favorito
- `GET /api/estudiante/favoritos` - Mis favoritos

### Propietario
- `POST /api/propietario/alojamientos` - Crear alojamiento
- `GET /api/propietario/alojamientos` - Mis alojamientos

### Admin
- `GET /api/admin/alojamientos/pendientes` - Alojamientos pendientes
- `PUT /api/admin/alojamientos/:id/aprobar` - Aprobar alojamiento

### Chat
- `GET /api/chat/conversaciones` - Mis conversaciones
- `POST /api/chat/mensajes` - Enviar mensaje

## Despliegue en Producción

Ver [README_DESPLIEGUE.md](./README_DESPLIEGUE.md) para guía rápida de despliegue.
Ver [COMANDOS_DESPLIEGUE.md](./COMANDOS_DESPLIEGUE.md) para instrucciones paso a paso.

### Resumen:

1. Build local: `npm run build` (cliente y servidor)
2. Crear BD PostgreSQL en Dinahosting
3. Subir archivos al servidor
4. Configurar 2 aplicaciones Node.js:
   - **Cliente**: puerto 3000 → `server.js`
   - **API**: puerto 3001 → `dist/index.js`
5. Configurar proxy/rewrites:
   - `/api/*`, `/uploads/*` → puerto 3001
   - `/*` → puerto 3000

## Tecnologías Utilizadas

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Redux Toolkit Query (RTK Query)
- Mapbox GL

### Backend
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcryptjs
- Multer (uploads)

### Seguridad
- Helmet.js
- CORS
- Rate limiting
- Input sanitization
- Anti-crawler protection

## Licencia

MIT

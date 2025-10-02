# Guía de Despliegue en Dinahosting

Esta guía explica cómo desplegar el cliente (Next.js) y el servidor (Express) como **aplicaciones Node.js separadas** en Dinahosting.

## Arquitectura de Despliegue

- **Servidor (API)**: Express.js corriendo en puerto 3001
- **Cliente**: Next.js standalone corriendo en puerto 3000
- Ambas aplicaciones se comunican vía HTTP
- Base de datos PostgreSQL ya configurada en Dinahosting

## Requisitos Previos

- Acceso SSH al servidor Dinahosting
- Node.js ≥18.0.0 instalado en el servidor
- Credenciales de base de datos PostgreSQL configuradas

## Pasos de Despliegue

### 1. Conectar al Servidor via SSH

```bash
ssh usuario@tuservidor.dinahosting.com
```

### 2. Clonar el Repositorio en /www

```bash
cd /www

# Limpiar directorio (CUIDADO: borra todo)
rm -rf * .[^.]*

# Clonar directamente en /www (punto al final importante)
git clone https://github.com/Emarnav/alojamientos.git .

# Verificar
ls -la
# Deberías ver: package.json, client/, server/, etc.
```

### 3. Instalar Dependencias

```bash
npm run install:all
```

Este comando instala dependencias en:
- Raíz del proyecto
- `/server` (API)
- `/client` (Frontend)

### 4. Configurar Variables de Entorno

#### Servidor (`server/.env`)

```bash
cd server
nano .env
```

Configurar:
```env
DATABASE_URL="postgresql://user:password@host:5432/database"
JWT_SECRET="tu-clave-secreta-segura"
CLIENT_URL=https://tudominio.com
PORT=3001
NODE_ENV=production
```

#### Cliente (`client/.env.production`)

```bash
cd ../client
nano .env.production
```

Configurar según tu setup:

**Opción A: Mismo dominio con subdirectorio `/api`**
```env
NEXT_PUBLIC_API_BASE_URL=https://tudominio.com/api
NEXT_PUBLIC_BASE_URL=https://tudominio.com
NEXT_PUBLIC_MEDIA_BASE_URL=https://tudominio.com/uploads
```

**Opción B: Subdominio separado**
```env
NEXT_PUBLIC_API_BASE_URL=https://api.tudominio.com/api
NEXT_PUBLIC_BASE_URL=https://tudominio.com
NEXT_PUBLIC_MEDIA_BASE_URL=https://api.tudominio.com/uploads
```

### 5. Ejecutar Build

```bash
cd ..  # Volver a raíz
npm run build
```

Esto ejecuta:
1. ✅ Build del servidor TypeScript → `server/dist/`
2. ✅ Build del cliente Next.js → `client/.next/`
3. ✅ Migraciones de base de datos
4. ✅ Generación de Prisma Client

### 6. Configurar Aplicaciones Node.js en Dinahosting

#### Aplicación 1: API (Servidor)

- **Nombre**: `rental-api`
- **Directorio**: `/ruta/completa/CEU/server`
- **Puerto**: 3001 (o el que asigne Dinahosting)
- **Comando de inicio**: `node dist/index.js`
- **Variables de entorno**: Copiar desde `server/.env`

#### Aplicación 2: Cliente (Next.js)

- **Nombre**: `rental-client`
- **Directorio**: `/ruta/completa/CEU/client`
- **Puerto**: 3000 (o el que asigne Dinahosting)
- **Comando de inicio**: `node .next/standalone/server.js`
- **Variables de entorno**: Copiar desde `client/.env.production`

### 7. Configurar Dominio y Proxy

En el panel de Dinahosting:

**Opción A: Nginx Reverse Proxy (recomendado)**

Configurar proxy para:
- `tudominio.com` → Cliente (puerto 3000)
- `tudominio.com/api` → Servidor (puerto 3001)
- `tudominio.com/uploads` → Servidor (puerto 3001)

**Opción B: Subdominios**

- `tudominio.com` → Cliente (puerto 3000)
- `api.tudominio.com` → Servidor (puerto 3001)

### 8. Iniciar las Aplicaciones

Desde el panel de Dinahosting:
1. Iniciar aplicación `rental-api` (servidor)
2. Iniciar aplicación `rental-client` (cliente)

O via SSH con PM2 (si está disponible):

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar servidor
cd server
pm2 start dist/index.js --name rental-api

# Iniciar cliente
cd ../client
pm2 start .next/standalone/server.js --name rental-client

# Guardar configuración PM2
pm2 save
pm2 startup
```

### 9. Verificar Funcionamiento

#### Health Check del API
```bash
curl http://localhost:3001
# Debe retornar: {"message":"UCH-CEU Rental API","status":"running"}
```

#### Health Check del Cliente
```bash
curl http://localhost:3000
# Debe retornar HTML de la página principal
```

#### Verificar desde navegador
- Visitar `https://tudominio.com` → Ver aplicación
- Probar login/registro → Verificar comunicación con API

## Comandos de Mantenimiento

### Actualizar la aplicación

```bash
cd CEU
git pull origin main
npm run install:all
npm run build

# Reiniciar servicios (PM2)
pm2 restart rental-api
pm2 restart rental-client

# O desde panel Dinahosting
# Reiniciar ambas aplicaciones Node.js
```

### Ver logs (con PM2)

```bash
pm2 logs rental-api
pm2 logs rental-client
```

### Ejecutar migraciones

```bash
cd server
npx prisma migrate deploy
```

### Seed de datos iniciales

```bash
cd server
npm run seed
```

## Solución de Problemas

### Error de CORS

Si hay errores CORS, verificar:
1. `CLIENT_URL` en `server/.env` coincide con el dominio del cliente
2. CORS configuration en `server/src/index.ts` incluye tu dominio
3. Las URLs en `client/.env.production` son correctas

### Imágenes no cargan

Verificar:
1. `NEXT_PUBLIC_MEDIA_BASE_URL` apunta al servidor correcto
2. Carpeta `server/public/alojamientos/` existe y tiene permisos
3. Ruta `/uploads` está configurada en proxy/reverse proxy

### Base de datos no conecta

Verificar:
1. `DATABASE_URL` en `server/.env` es correcto
2. PostgreSQL está corriendo
3. Firewall permite conexión al puerto 5432
4. Migraciones ejecutadas: `cd server && npx prisma migrate deploy`

### Aplicación no inicia

Verificar:
1. Build completado: `npm run build` sin errores
2. Variables de entorno configuradas correctamente
3. Puerto disponible (no usado por otra aplicación)
4. Logs de la aplicación para ver errores específicos

## Arquitectura de Puertos

```
┌─────────────────────────────────────────┐
│         Dinahosting Server              │
│                                         │
│  ┌──────────────┐    ┌──────────────┐  │
│  │   Cliente    │    │   Servidor   │  │
│  │  (Next.js)   │◄───┤  (Express)   │  │
│  │  Puerto 3000 │    │  Puerto 3001 │  │
│  └──────────────┘    └──────────────┘  │
│         ▲                    ▲          │
│         │                    │          │
│    ┌────┴────────────────────┴────┐    │
│    │   Nginx Reverse Proxy        │    │
│    │   tudominio.com → 3000       │    │
│    │   tudominio.com/api → 3001   │    │
│    └──────────────────────────────┘    │
│                  ▲                      │
└──────────────────┼──────────────────────┘
                   │
              ┌────┴────┐
              │ Internet │
              └─────────┘
```

## Notas Importantes

- ✅ **Next.js standalone** está configurado - build optimizado
- ✅ **CORS** configurado para aceptar peticiones entre aplicaciones
- ✅ **Variables de entorno separadas** para desarrollo y producción
- ⚠️ **Actualizar URLs** en `.env.production` según tu configuración de Dinahosting
- ⚠️ **Configurar proxy/reverse proxy** para enrutar correctamente el tráfico
- ⚠️ **SSL/HTTPS** debe estar configurado en Dinahosting para producción

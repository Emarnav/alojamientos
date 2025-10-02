# Resumen de Cambios - Arquitectura Separada

## ✅ Cambios Realizados

### 1. Arquitectura Separada
- ❌ **Eliminado**: `app.js` (servidor integrado)
- ✅ **Nuevo**: Cliente y servidor como aplicaciones Node.js independientes
- ✅ **Configuración**: Next.js en modo standalone (ya estaba)

### 2. Servidor (Express API)

**Archivo modificado**: `server/src/index.ts`

- **Puerto**: Cambiado de 5000 a 3001
- **CORS**: Actualizado para aceptar `CLIENT_URL` desde variables de entorno
- **Inicio**: Servidor inicia siempre (eliminado `require.main === module`)
- **Logs**: Muestra URL del cliente aceptado

**Variables de entorno**: `server/.env`

```env
PORT=3001                                    # ← NUEVO
CLIENT_URL=https://alojamientos.uchceu.es   # ← Para CORS
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=...
```

### 3. Cliente (Next.js)

**Archivos de variables de entorno**:

- **Desarrollo** (`client/.env`):
  ```env
  NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
  NEXT_PUBLIC_BASE_URL=http://localhost:3000
  NEXT_PUBLIC_MEDIA_BASE_URL=http://localhost:3001/uploads
  ```

- **Producción** (`client/.env.production`):
  ```env
  NEXT_PUBLIC_API_BASE_URL=https://alojamientos.uchceu.es/api
  NEXT_PUBLIC_BASE_URL=https://alojamientos.uchceu.es
  NEXT_PUBLIC_MEDIA_BASE_URL=https://alojamientos.uchceu.es/uploads
  ```

### 4. Scripts NPM Actualizados

**package.json raíz**:

```json
{
  "scripts": {
    // Desarrollo
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "cd server && npm run dev",
    "dev:client": "cd client && npm run dev",

    // Build
    "build": "npm run install:all && npm run build:server && npm run build:client && npm run migrate && npm run generate",
    "build:server": "cd server && npm run build",
    "build:client": "cd client && npm run build",

    // Producción
    "start:server": "cd server && node dist/index.js",
    "start:client": "cd client && NODE_ENV=production node .next/standalone/client/server.js",

    // Otros
    "install:all": "npm install && cd server && npm install && cd ../client && npm install && cd ..",
    "migrate": "cd server && npx prisma migrate deploy",
    "generate": "cd server && npx prisma generate"
  }
}
```

### 5. Nuevos Archivos

#### Documentación
- ✅ **DEPLOYMENT.md**: Guía completa de despliegue en Dinahosting
- ✅ **README.md**: Documentación de desarrollo
- ✅ **CAMBIOS.md**: Este archivo

#### Scripts de producción
- ✅ **start-production.sh**: Inicia ambas aplicaciones (con PM2 o sin él)
- ✅ **stop-production.sh**: Detiene ambas aplicaciones
- ✅ **ecosystem.config.js**: Configuración PM2 actualizada

#### Carpetas
- ✅ **logs/**: Para logs de aplicaciones
- ✅ **pids/**: Para PIDs de procesos

## 📋 Comandos de Desarrollo

### Local (desarrollo)
```bash
# Ejecutar ambas aplicaciones
npm run dev

# Solo servidor (puerto 3001)
npm run dev:server

# Solo cliente (puerto 3000)
npm run dev:client
```

### Build
```bash
# Build completo
npm run build

# Build individual
npm run build:server
npm run build:client
```

### Producción (local)
```bash
# Opción 1: PM2
pm2 start ecosystem.config.js
pm2 logs
pm2 stop all

# Opción 2: Scripts bash
./start-production.sh
./stop-production.sh

# Opción 3: Manual
npm run start:server   # Terminal 1
npm run start:client   # Terminal 2
```

## 🚀 Despliegue en Dinahosting

### Pasos resumidos:

1. **SSH al servidor**
   ```bash
   ssh usuario@servidor.dinahosting.com
   cd /ruta/al/proyecto
   ```

2. **Actualizar código**
   ```bash
   git pull origin main
   npm run install:all
   ```

3. **Configurar variables de entorno**
   - `server/.env`: Configurar PORT, CLIENT_URL, DATABASE_URL
   - `client/.env.production`: Configurar URLs de producción

4. **Build**
   ```bash
   npm run build
   ```

5. **Configurar en Panel Dinahosting**

   **App 1: API**
   - Directorio: `/ruta/CEU/server`
   - Puerto: 3001
   - Comando: `node dist/index.js`

   **App 2: Cliente**
   - Directorio: `/ruta/CEU/client`
   - Puerto: 3000
   - Comando: `node .next/standalone/client/server.js`

6. **Configurar Proxy/Dominio**
   - `tudominio.com` → Cliente (3000)
   - `tudominio.com/api` → Servidor (3001)
   - `tudominio.com/uploads` → Servidor (3001)

Ver **DEPLOYMENT.md** para guía completa.

## ⚙️ Configuración de CORS y URLs

### En desarrollo:
- Cliente: `http://localhost:3000`
- API: `http://localhost:3001/api`
- CORS acepta: localhost:3000

### En producción:
- Cliente: `https://alojamientos.uchceu.es`
- API: `https://alojamientos.uchceu.es/api` (via proxy)
- CORS acepta: alojamientos.uchceu.es

## 🔍 Verificación

### Health checks:
```bash
# API
curl http://localhost:3001
# Response: {"message":"UCH-CEU Rental API","status":"running"}

# Cliente
curl http://localhost:3000
# Response: HTML de página principal
```

### Logs (con PM2):
```bash
pm2 logs rental-api
pm2 logs rental-client
```

## ⚠️ Notas Importantes

1. **Variables de entorno de producción**: Actualizar `client/.env.production` con las URLs correctas de tu servidor Dinahosting

2. **CORS**: Si las apps están en dominios/puertos diferentes, asegúrate que `CLIENT_URL` en `server/.env` está configurado correctamente

3. **Archivos estáticos**: El servidor debe estar accesible para servir imágenes (`/uploads`)

4. **SSL/HTTPS**: Configurar en Dinahosting para producción

5. **PM2**: Opcional pero recomendado para gestión de procesos en producción

## 🐛 Troubleshooting

### Error de CORS
- Verificar `CLIENT_URL` en `server/.env`
- Verificar configuración CORS en `server/src/index.ts`

### Imágenes no cargan
- Verificar `NEXT_PUBLIC_MEDIA_BASE_URL` en cliente
- Verificar acceso a `/uploads` en servidor

### Base de datos no conecta
- Verificar `DATABASE_URL` en `server/.env`
- Ejecutar migraciones: `npm run migrate`

### Aplicación no inicia
- Verificar build: `npm run build`
- Verificar variables de entorno
- Ver logs de errores

# 🚀 Despliegue en Dinahosting - UCH-CEU Rental App

## Arquitectura

**Dos aplicaciones Node.js en mismo dominio con proxy:**
- Cliente Next.js → `https://alojamientos.uchceu.es/` (puerto 3000)
- API Express → `https://alojamientos.uchceu.es/api/` (puerto 3001)
- Uploads → `https://alojamientos.uchceu.es/uploads/` (puerto 3001)

## Quick Start

### 1. Build Local

```bash
# Cliente
cd client
npm install
npm run build

# Servidor
cd ../server
npm install
npx prisma generate
npm run build
```

### 2. Archivos a Subir

**Cliente (`/www/alojamientos.uchceu.es/cliente/`):**
- `.next/`
- `public/`
- `package.json`, `package-lock.json`
- `next.config.ts`
- `server.js`
- `.env`

**Servidor (`/www/alojamientos.uchceu.es/servidor/`):**
- `dist/`
- `prisma/`
- `public/`
- `package.json`, `package-lock.json`
- `.env`

### 3. Configuración en Dinahosting

#### Base de Datos PostgreSQL
1. Crear BD en panel: PostgreSQL → Crear
2. Anotar: host, puerto, usuario, contraseña, BD
3. Configurar `server/.env`:
   ```
   DATABASE_URL="postgresql://usuario:pass@host:5432/bd"
   ```

#### Aplicación 1: Cliente
- Nombre: `alojamientos-cliente`
- Puerto: `3000`
- Archivo inicio: `server.js`
- Dominio: `alojamientos.uchceu.es`

#### Aplicación 2: Servidor API
- Nombre: `alojamientos-servidor`
- Puerto: `3001`
- Archivo inicio: `dist/index.js`
- Dominio: `alojamientos.uchceu.es` (interno)

#### Configurar Rewrites/Proxy
```
/api/*     → puerto 3001
/uploads/* → puerto 3001
/*         → puerto 3000
```

### 4. En el Servidor

```bash
# Cliente
cd /www/alojamientos.uchceu.es/cliente
npm install --production

# Servidor
cd /www/alojamientos.uchceu.es/servidor
npm install --production
npx prisma migrate deploy
```

### 5. Iniciar Aplicaciones
- Panel Dinahosting: "Iniciar aplicación" en ambas apps

## Verificación

✅ `https://alojamientos.uchceu.es` → Página web
✅ `https://alojamientos.uchceu.es/api/` → JSON con status
✅ Login, registro, listados funcionan
✅ Imágenes cargan desde `/uploads`

## Variables de Entorno

**Cliente (.env)** - Ya configurado ✅
```env
NEXT_PUBLIC_API_BASE_URL=https://alojamientos.uchceu.es/api
NEXT_PUBLIC_BASE_URL=https://alojamientos.uchceu.es
NEXT_PUBLIC_MEDIA_BASE_URL=https://alojamientos.uchceu.es/uploads
PORT=3000
```

**Servidor (.env)** - Configurar DATABASE_URL
```env
DATABASE_URL="postgresql://usuario:pass@host:5432/bd"
JWT_SECRET=cc746b2fb24148ef34879a95ff3ecdb723ccafea4b9bcf478e77abb9f0390076a41fc2b1beaf71da6ae136bde66856bbcf119317069f931bfe507c491b506df1
CLIENT_URL=https://alojamientos.uchceu.es
PORT=3001
NODE_ENV=production
```

## Troubleshooting

**Error 404 en /api:**
→ Verificar rewrites configurados

**CORS errors:**
→ Verificar `CLIENT_URL=https://alojamientos.uchceu.es` en servidor

**Imágenes no cargan:**
→ Verificar `/uploads/*` apunta a puerto 3001

**BD no conecta:**
→ Verificar DATABASE_URL

---

📖 **Guía completa paso a paso**: Ver `COMANDOS_DESPLIEGUE.md`

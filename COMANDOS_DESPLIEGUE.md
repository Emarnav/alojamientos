
# Despliegue en Dinahosting - Dos Apps con Proxy

## 📋 PREPARACIÓN LOCAL

### Build del Cliente
```bash
cd client
npm install
npm run build
```

### Build del Servidor
```bash
cd server
npm install
npx prisma generate
npm run build
```

---

## 📦 FASE 1: CLIENTE

### 1.1 Archivos a Subir
Desde `/client`, subir a `/www/alojamientos.uchceu.es/cliente/`:
```
.next/
public/
package.json
package-lock.json
next.config.ts
server.js
.env
```

### 1.2 Crear Aplicación Node.js en Dinahosting
1. **Aplicaciones** → **Node.js** → **Crear aplicación**
2. Configurar:
   - **Nombre**: `alojamientos-cliente`
   - **Versión Node.js**: 18.x o superior
   - **Dominio**: `alojamientos.uchceu.es`
   - **Ruta**: `/www/alojamientos.uchceu.es/cliente/`
   - **Archivo de inicio**: `server.js`
   - **Puerto**: `3000`

### 1.3 Variables de Entorno
En panel, añadir:
```
NODE_ENV=production
PORT=3000
```

### 1.4 Instalar Dependencias
Vía SSH/Terminal:
```bash
cd /www/alojamientos.uchceu.es/cliente
npm install --production
```

### 1.5 Iniciar Cliente
Panel: "Iniciar aplicación"

---

## 📦 FASE 2: SERVIDOR

### 2.1 Crear Base de Datos PostgreSQL
1. **Bases de datos** → **PostgreSQL** → **Crear**
2. Anotar:
   - Host: `pgsqlXX.dinaserver.com`
   - Puerto: `5432`
   - Nombre BD: `aloja_db_xxxxx`
   - Usuario: `aloja_adm_xxxxx`
   - Contraseña: `[tu-contraseña]`

3. Construir DATABASE_URL:
   ```
   postgresql://usuario:contraseña@host:5432/nombre_bd
   ```

### 2.2 Archivos a Subir
Desde `/server`, subir a `/www/alojamientos.uchceu.es/servidor/`:
```
dist/
prisma/
  ├── schema.prisma
  └── migrations/
public/
  └── alojamientos/
package.json
package-lock.json
.env
```

### 2.3 Configurar .env del Servidor
Editar `server/.env` con:
```env
DATABASE_URL="postgresql://usuario:contraseña@host:5432/bd"
JWT_SECRET=cc746b2fb24148ef34879a95ff3ecdb723ccafea4b9bcf478e77abb9f0390076a41fc2b1beaf71da6ae136bde66856bbcf119317069f931bfe507c491b506df1
CLIENT_URL=https://alojamientos.uchceu.es
PORT=3001
NODE_ENV=production
```

### 2.4 Crear Aplicación Node.js en Dinahosting
1. **Aplicaciones** → **Node.js** → **Crear aplicación**
2. Configurar:
   - **Nombre**: `alojamientos-servidor`
   - **Versión Node.js**: 18.x o superior
   - **Dominio**: `alojamientos.uchceu.es` (interno)
   - **Ruta**: `/www/alojamientos.uchceu.es/servidor/`
   - **Archivo de inicio**: `dist/index.js`
   - **Puerto**: `3001`

### 2.5 Variables de Entorno
Añadir todas las del `.env`:
```
DATABASE_URL=postgresql://...
JWT_SECRET=cc746b2fb...
CLIENT_URL=https://alojamientos.uchceu.es
PORT=3001
NODE_ENV=production
```

### 2.6 Instalar y Configurar
Vía SSH/Terminal:
```bash
cd /www/alojamientos.uchceu.es/servidor
npm install --production
npx prisma migrate deploy
```

Opcional (datos iniciales):
```bash
npm run seed
```

### 2.7 Iniciar Servidor
Panel: "Iniciar aplicación"

---

## 📦 FASE 3: CONFIGURAR PROXY/REWRITES

### En Panel de Dinahosting
Configurar reglas de proxy para `alojamientos.uchceu.es`:

```
/api/*     → localhost:3001
/uploads/* → localhost:3001
/*         → localhost:3000
```

**Ubicación típica**:
- Sección "Dominios" → Configuración avanzada → Rewrites/Proxy
- O "Aplicaciones Node.js" → Configuración de rutas

**Si no encuentras esta opción**, preguntar a soporte:
> "¿Cómo configuro proxy inverso para que:
> - `/api/*` y `/uploads/*` apunten a puerto 3001
> - `/*` apunte a puerto 3000
> para el dominio alojamientos.uchceu.es?"

---

## 📦 FASE 4: SSL Y DNS

### Activar SSL
1. **Dominios** → `alojamientos.uchceu.es`
2. Activar certificado SSL (Let's Encrypt)

### Verificar DNS
- `alojamientos.uchceu.es` → IP del servidor Dinahosting

---

## ✅ VERIFICACIÓN FINAL

### Tests
```bash
# Página principal
curl https://alojamientos.uchceu.es

# API
curl https://alojamientos.uchceu.es/api/
# Debe responder JSON: {"message":"UCH-CEU Rental API","status":"running"}
```

### Checklist
- [ ] Cliente carga en `https://alojamientos.uchceu.es`
- [ ] API responde en `https://alojamientos.uchceu.es/api/`
- [ ] Login/registro funcionan
- [ ] Listados de alojamientos se muestran
- [ ] Imágenes cargan desde `/uploads`
- [ ] No hay errores CORS en consola

---

## 🔧 TROUBLESHOOTING

### Error: Cannot find module
```bash
npm install --production
```

### Error: Prisma Client not found
```bash
npx prisma generate
npx prisma migrate deploy
```

### Error 404 en /api
1. Verificar rewrites/proxy configurados
2. Verificar servidor corriendo: `curl http://localhost:3001/api/`

### CORS errors
Verificar en `server/.env`:
```
CLIENT_URL=https://alojamientos.uchceu.es
```

### Imágenes no cargan
1. Verificar carpeta `server/public/alojamientos/` existe
2. Verificar `/uploads/*` en proxy apunta a puerto 3001

### Error 502 Bad Gateway
1. Verificar ambas apps están iniciadas
2. Revisar logs en panel Dinahosting
3. Verificar puertos correctos (3000 y 3001)

---

## 📌 RESUMEN

**Dos aplicaciones Node.js:**
1. **Cliente** (puerto 3000): `server.js`
2. **Servidor** (puerto 3001): `dist/index.js`

**Proxy configurado:**
- `/api/*`, `/uploads/*` → 3001
- `/*` → 3000

**Variables críticas:**
- Cliente: URLs apuntan a `https://alojamientos.uchceu.es`
- Servidor: `DATABASE_URL`, `CLIENT_URL`, `JWT_SECRET`

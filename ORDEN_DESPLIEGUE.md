# Orden de Despliegue - Guía Rápida

## FASE 1: PREPARACIÓN LOCAL

### 1. Build del Cliente
```bash
cd client
npm install
npm run build
```

### 2. Build del Servidor
```bash
cd ../server
npm install
npx prisma generate
npm run build
```

---

## FASE 2: SUBIR CLIENTE (PRIMERO)

### Archivos a subir a `/www/alojamientos.uchceu.es/cliente/`:
```
client/.next/
client/public/
client/package.json
client/package-lock.json
client/next.config.ts
client/server.js
client/.env
```

### Crear App Node.js en Dinahosting:
- Nombre: `alojamientos-cliente`
- Puerto: `3000`
- Archivo inicio: `server.js`
- Dominio: `alojamientos.uchceu.es`

### Variables de entorno:
```
NODE_ENV=production
PORT=3000
```

### En servidor:
```bash
cd /www/alojamientos.uchceu.es/cliente
npm install --production
```

### Iniciar aplicación cliente

---

## FASE 3: SUBIR SERVIDOR (DESPUÉS)

### 1. Crear BD PostgreSQL
- Panel Dinahosting → PostgreSQL → Crear
- Anotar: host, puerto, usuario, contraseña, BD

### 2. Archivos a subir a `/www/alojamientos.uchceu.es/servidor/`:
```
server/dist/
server/prisma/
server/public/
server/package.json
server/package-lock.json
server/.env  # ⚠️ Configurar DATABASE_URL primero!
```

### 3. Configurar server/.env:
```env
DATABASE_URL="postgresql://usuario:contraseña@host:5432/bd"
JWT_SECRET=cc746b2fb24148ef34879a95ff3ecdb723ccafea4b9bcf478e77abb9f0390076a41fc2b1beaf71da6ae136bde66856bbcf119317069f931bfe507c491b506df1
CLIENT_URL=https://alojamientos.uchceu.es
PORT=3001
NODE_ENV=production
```

### 4. Crear App Node.js en Dinahosting:
- Nombre: `alojamientos-servidor`
- Puerto: `3001`
- Archivo inicio: `dist/index.js`
- Dominio: `alojamientos.uchceu.es` (interno)

### 5. Añadir variables de entorno (las del .env)

### 6. En servidor:
```bash
cd /www/alojamientos.uchceu.es/servidor
npm install --production
npx prisma migrate deploy
```

### 7. Iniciar aplicación servidor

---

## FASE 4: CONFIGURAR PROXY

### En Panel Dinahosting (Dominio/Rewrites):
```
/api/*     → localhost:3001
/uploads/* → localhost:3001
/*         → localhost:3000
```

---

## VERIFICACIÓN

✅ `https://alojamientos.uchceu.es` → Página web
✅ `https://alojamientos.uchceu.es/api/` → JSON {"message":"UCH-CEU Rental API"...}
✅ Login funciona
✅ Imágenes cargan

---

**📖 Guía completa**: Ver `COMANDOS_DESPLIEGUE.md`

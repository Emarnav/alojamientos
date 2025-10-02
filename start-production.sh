#!/bin/bash

# Script de inicio para producción - Aplicaciones separadas
# Usar con PM2 o systemd

echo "🚀 Iniciando aplicaciones UCH-CEU Rental..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json no encontrado${NC}"
    echo "Por favor ejecuta este script desde el directorio raíz del proyecto"
    exit 1
fi

# Verificar builds
if [ ! -d "server/dist" ]; then
    echo -e "${RED}❌ Error: servidor no compilado${NC}"
    echo "Ejecuta: npm run build:server"
    exit 1
fi

if [ ! -d "client/.next" ]; then
    echo -e "${RED}❌ Error: cliente no compilado${NC}"
    echo "Ejecuta: npm run build:client"
    exit 1
fi

# Verificar variables de entorno
if [ ! -f "server/.env" ]; then
    echo -e "${RED}❌ Error: server/.env no encontrado${NC}"
    exit 1
fi

# Opción 1: Con PM2 (recomendado)
if command -v pm2 &> /dev/null; then
    echo -e "${BLUE}📦 Usando PM2 para gestión de procesos${NC}"

    # Detener procesos existentes
    pm2 delete rental-api 2>/dev/null || true
    pm2 delete rental-client 2>/dev/null || true

    # Iniciar servidor
    echo -e "${GREEN}▶️  Iniciando API (puerto 3001)...${NC}"
    cd server
    pm2 start dist/index.js --name rental-api --env production
    cd ..

    # Iniciar cliente
    echo -e "${GREEN}▶️  Iniciando Cliente (puerto 3000)...${NC}"
    cd client
    pm2 start .next/standalone/client/server.js --name rental-client --env production
    cd ..

    # Guardar configuración
    pm2 save

    echo -e "${GREEN}✅ Aplicaciones iniciadas con PM2${NC}"
    pm2 status

# Opción 2: Sin PM2 (procesos en background)
else
    echo -e "${BLUE}📦 Iniciando sin PM2 (background processes)${NC}"

    # Iniciar servidor en background
    echo -e "${GREEN}▶️  Iniciando API (puerto 3001)...${NC}"
    cd server
    NODE_ENV=production nohup node dist/index.js > ../logs/api.log 2>&1 &
    SERVER_PID=$!
    echo $SERVER_PID > ../pids/api.pid
    cd ..

    # Esperar a que el servidor inicie
    sleep 2

    # Iniciar cliente en background
    echo -e "${GREEN}▶️  Iniciando Cliente (puerto 3000)...${NC}"
    cd client
    NODE_ENV=production nohup node .next/standalone/client/server.js > ../logs/client.log 2>&1 &
    CLIENT_PID=$!
    echo $CLIENT_PID > ../pids/client.pid
    cd ..

    echo -e "${GREEN}✅ Aplicaciones iniciadas${NC}"
    echo "API PID: $SERVER_PID (puerto 3001)"
    echo "Cliente PID: $CLIENT_PID (puerto 3000)"
    echo ""
    echo "Para ver logs:"
    echo "  tail -f logs/api.log"
    echo "  tail -f logs/client.log"
    echo ""
    echo "Para detener:"
    echo "  kill \$(cat pids/api.pid)"
    echo "  kill \$(cat pids/client.pid)"
fi

echo ""
echo -e "${GREEN}🎉 Aplicaciones corriendo!${NC}"
echo -e "${BLUE}API:${NC} http://localhost:3001"
echo -e "${BLUE}Cliente:${NC} http://localhost:3000"

#!/bin/bash

# Script para detener aplicaciones en producción

echo "🛑 Deteniendo aplicaciones UCH-CEU Rental..."

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Opción 1: Con PM2
if command -v pm2 &> /dev/null; then
    echo -e "${GREEN}Deteniendo con PM2...${NC}"
    pm2 delete rental-api 2>/dev/null || echo "rental-api no está corriendo"
    pm2 delete rental-client 2>/dev/null || echo "rental-client no está corriendo"
    pm2 save
    echo -e "${GREEN}✅ Aplicaciones detenidas${NC}"

# Opción 2: Sin PM2
else
    echo -e "${GREEN}Deteniendo procesos...${NC}"

    # Detener API
    if [ -f "pids/api.pid" ]; then
        kill $(cat pids/api.pid) 2>/dev/null && echo "✅ API detenida" || echo "⚠️  API no estaba corriendo"
        rm pids/api.pid
    fi

    # Detener Cliente
    if [ -f "pids/client.pid" ]; then
        kill $(cat pids/client.pid) 2>/dev/null && echo "✅ Cliente detenido" || echo "⚠️  Cliente no estaba corriendo"
        rm pids/client.pid
    fi

    echo -e "${GREEN}✅ Aplicaciones detenidas${NC}"
fi

#!/usr/bin/env node

/**
 * Script de inicialización para producción
 * Verifica y configura la base de datos
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('🔧 Inicializando configuración de producción...');

// Cambiar al directorio del servidor
process.chdir(path.join(__dirname, '..'));

try {
  // Verificar conexión a la base de datos
  console.log('📡 Verificando conexión a la base de datos...');
  execSync('npx prisma db pull --force-reset', { stdio: 'inherit' });
  
  // Generar cliente Prisma
  console.log('⚙️  Generando cliente Prisma...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Aplicar migraciones si es necesario
  console.log('🔄 Aplicando migraciones...');
  try {
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  } catch (error) {
    console.warn('⚠️  No hay migraciones nuevas que aplicar o la base de datos ya está actualizada');
  }
  
  console.log('✅ Configuración de producción completada');
  
} catch (error) {
  console.error('❌ Error durante la inicialización:', error.message);
  
  // Intentar solo generar el cliente como fallback
  try {
    console.log('🔄 Intentando solo generar cliente Prisma...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('✅ Cliente Prisma generado correctamente');
  } catch (fallbackError) {
    console.error('❌ Error crítico:', fallbackError.message);
    process.exit(1);
  }
}
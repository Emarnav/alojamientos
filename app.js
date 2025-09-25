#!/usr/bin/env node

/**
 * Archivo principal Node.js para Dinahosting
 * Punto de entrada único que sirve tanto el API como el cliente
 */

const path = require('path');
const express = require('express');

// Puerto principal (el que asigna Dinahosting)
const PORT = process.env.PORT || 3000;

console.log('🚀 Iniciando aplicación');

// Crear aplicación principal
const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: 'production'
  });
});

// Servir archivos estáticos del servidor (imágenes)
app.use('/alojamientos', express.static(path.join(__dirname, 'server', 'public', 'alojamientos'), {
  maxAge: '30d'
}));

// Servir archivos estáticos del cliente
app.use('/_next/static', express.static(path.join(__dirname, 'client', '.next', 'static'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Servir robots.txt desde el cliente
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'client', 'public', 'robots.txt'));
});

// Cargar servidor API
const serverApp = require('./server/dist/index.js').default;

// Montar rutas API
app.use('/api', serverApp);

// Servir aplicación Next.js para todas las demás rutas
app.get('*', (req, res) => {
  const nextHandler = require('./client/.next/server/pages/_app.js');
  if (nextHandler && nextHandler.default) {
    return nextHandler.default(req, res);
  }
  res.status(404).send('Page not found');
});

// Verificar que los directorios existen antes de iniciar
const fs = require('fs');
const requiredDirs = [
  path.join(__dirname, 'server', 'dist'),
  path.join(__dirname, 'client', '.next')
];

for (const dir of requiredDirs) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directorio requerido no encontrado: ${dir}`);
    console.error('💡 Ejecuta "npm run build" antes de iniciar la aplicación');
    process.exit(1);
  }
}

// Iniciar servidor
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('🎉 Aplicación iniciada correctamente!');
  console.log(`🌍 Servidor corriendo en puerto ${PORT}`);
  console.log(`📁 Archivos estáticos: client/.next/static`);
  console.log(`🖼️  Imágenes: server/public/alojamientos`);
  
  // Señal de ready para hosting providers
  if (process.send) {
    process.send('ready');
  }
});

// Manejo de cierre graceful
process.on('SIGTERM', () => {
  console.log('🛑 Cerrando aplicación...');
  server.close();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Cerrando aplicación...');
  server.close();
  process.exit(0);
});

module.exports = app;
import { Request, Response, NextFunction } from 'express';

/**
 * Lista de User-Agents de crawlers/bots que queremos bloquear
 * Incluye los principales motores de búsqueda y bots de redes sociales
 */
const BLOCKED_CRAWLERS = [
  'googlebot',
  'bingbot',
  'slurp', // Yahoo
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'telegrambot',
  'applebot',
  'crawler',
  'spider',
  'bot/',
  'crawl',
  'scrap',
  'search',
  'index'
];

/**
 * Lista de IPs de crawlers conocidos (opcional)
 * Puedes añadir rangos específicos si es necesario
 */
const BLOCKED_IPS: string[] = [
  // Ejemplo: rangos de Google
  // '66.249.',
  // '64.233.',
];

/**
 * Middleware para bloquear crawlers y bots
 */
export const blockCrawlers = (req: Request, res: Response, next: NextFunction): void => {
  const userAgent = req.get('User-Agent')?.toLowerCase() || '';
  const clientIP = req.ip || req.connection.remoteAddress || '';

  // Verificar User-Agent
  const isCrawler = BLOCKED_CRAWLERS.some(crawler => 
    userAgent.includes(crawler.toLowerCase())
  );

  // Verificar IP (opcional)
  const isBlockedIP = BLOCKED_IPS.some(blockedIP => 
    clientIP.startsWith(blockedIP)
  );

  if (isCrawler || isBlockedIP) {
    console.log(`🚫 Crawler bloqueado: ${userAgent} - IP: ${clientIP}`);
    
    // Respuesta personalizada para crawlers
    res.status(403).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Acceso Restringido</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">
      </head>
      <body>
        <h1>Sitio en Desarrollo</h1>
        <p>Este sitio web está actualmente en desarrollo y no está disponible para indexación.</p>
        <p>Por favor, inténtelo más tarde.</p>
      </body>
      </html>
    `);
    return;
  }

  next();
};

/**
 * Middleware para añadir headers anti-crawlers a todas las respuestas
 */
export const addAntiCrawlerHeaders = (req: Request, res: Response, next: NextFunction): void => {
  // Headers para prevenir indexación
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  next();
};
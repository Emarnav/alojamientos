import * as path from "path";

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

/* MIDDLEWARE IMPORT */
import { sanitizeHtml } from "./middleware/validationMiddleware";
import { blockCrawlers, addAntiCrawlerHeaders } from "./middleware/crawlerBlocking";

/* ROUTE IMPORT */
import authRoutes from "./routes/authRoutes";
import tenantRoutes from "./routes/tenantRoutes";
import managerRoutes from "./routes/managerRoutes";
import propertyRoutes from "./routes/propertyRoutes";
import chatRoutes from "./routes/chatRoutes";
import adminRoutes from "./routes/adminRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();

/* SECURITY MIDDLEWARE */
// General rate limiting (más permisivo en desarrollo)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000, // limit each IP to 10000 requests per windowMs (muy permisivo)
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Auth route specific rate limiting (más permisivo en desarrollo)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 auth requests per windowMs
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:", "blob:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      workerSrc: ["'self'", "blob:"],
      childSrc: ["'self'", "blob:"]
    }
  }
}));

// CORS configuration - permitir cliente separado
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      'https://alojamientos.uchceu.es',
      'https://www.alojamientos.uchceu.es',
      process.env.CLIENT_URL
    ].filter((origin): origin is string => Boolean(origin))
  : ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:3004'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
app.use(generalLimiter);

// BLOQUEO DE CRAWLERS - SITIO NO PÚBLICO
app.use(blockCrawlers);
app.use(addAntiCrawlerHeaders);

// Request parsing with size limits
app.use(express.json({ limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));

// Input sanitization
app.use(sanitizeHtml);

// Logging
app.use(morgan("combined"));

/* Servir archivos estáticos - imágenes de alojamientos */
app.use('/uploads', express.static(path.join(__dirname, "../public/alojamientos"), {
  maxAge: process.env.NODE_ENV === 'production' ? '30d' : '1d',
  setHeaders: (res, filePath) => {
    if (filePath.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 días
    }
  }
}));

/* Servir otros archivos públicos */
app.use(express.static(path.join(__dirname, "../public"), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : '1h'
}));

/* Rutas con rate limiting específico */
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/alojamientos", propertyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/estudiante", tenantRoutes);
app.use("/api/propietario", managerRoutes);
app.use("/api/chat", chatRoutes);


/* SERVER */
const port = Number(process.env.PORT) || 3001;

// Health check endpoint para el API
app.get("/", (_req, res) => {
  res.json({
    message: "UCH-CEU Rental API",
    status: "running",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor (separado del cliente)
app.listen(port, "0.0.0.0", () => {
  console.log(`🔌 API Server running on port ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 Accepting requests from: ${process.env.CLIENT_URL || 'localhost:3000'}`);

  // Enviar mensaje de ready para el proceso padre (en hosting)
  if (process.send) {
    process.send('ready');
  }
});

// Exportar la app para testing
export default app;

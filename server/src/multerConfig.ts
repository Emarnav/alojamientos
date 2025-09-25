import multer from "multer";
import path from "path";
import fs from "fs";
import { randomUUID } from "crypto";

// Lista blanca de tipos MIME permitidos
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/webp'
];

// Extensiones permitidas
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Tamaño máximo: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Sanitizar nombre de archivo
function sanitizeFileName(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9.-]/g, '_') // Caracteres peligrosos
    .replace(/\.{2,}/g, '.') // Múltiples puntos
    .replace(/^\./, '') // Punto inicial
    .substring(0, 100); // Limitar longitud
}

/**
 * Configuración segura de multer para subida de imágenes
 */
export function getMulterForAlojamiento(alojamientoId: number | "temp") {
  let targetPath: string;

  if (alojamientoId === "temp") {
    const tempFolder = randomUUID();
    targetPath = path.join(process.cwd(), "public", "alojamientos", "temp", tempFolder);
  } else {
    targetPath = path.join(process.cwd(), "public", "alojamientos", String(alojamientoId));
  }

  // Validar que el directorio está dentro de public/
  const publicDir = path.join(process.cwd(), "public");
  if (!targetPath.startsWith(publicDir)) {
    throw new Error('Path traversal attempt detected');
  }

  fs.mkdirSync(targetPath, { recursive: true });

  const storage = multer.diskStorage({
    destination: (_, __, cb) => cb(null, targetPath),
    filename: (_, file, cb) => {
      const sanitizedName = sanitizeFileName(file.originalname);
      const uniqueName = `${Date.now()}-${sanitizedName}`;
      cb(null, uniqueName);
    },
  });

  return multer({
    storage,
    limits: {
      fileSize: MAX_FILE_SIZE,
      files: 10 // máximo 10 archivos
    },
    fileFilter: (_, file, cb) => {
      // Validar MIME type
      if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        return cb(new Error(`Tipo de archivo no permitido: ${file.mimetype}`));
      }

      // Validar extensión
      const ext = path.extname(file.originalname).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return cb(new Error(`Extensión no permitida: ${ext}`));
      }

      // Validar nombre de archivo
      if (file.originalname.length > 255) {
        return cb(new Error('Nombre de archivo muy largo'));
      }

      cb(null, true);
    }
  });
}

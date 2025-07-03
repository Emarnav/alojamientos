import multer from "multer";
import path from "path";
import fs from "fs";

// Definir la carpeta de almacenamiento
const uploadDir = path.join(__dirname, "..", "uploads");

// Crear la carpeta si no existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configurar `multer` para guardar archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Crear una instancia de `multer`
export const upload = multer({ storage });
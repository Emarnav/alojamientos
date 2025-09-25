import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('❌ JWT_SECRET no está configurado en las variables de entorno');
  process.exit(1);
}

interface DecodedToken extends JwtPayload {
  userId: number;
  email: string;
  tipo: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        email: string;
        role: string;
      };
    }
  }
}

// 🔐 Middleware completo para proteger rutas con roles
export const authMiddleware = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "No autorizado" });
      return;
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

      if (!decoded.userId || !decoded.email || !decoded.tipo) {
        res.status(400).json({ message: "Token inválido o incompleto" });
        return;
      }

      const user = await prisma.usuario.findUnique({
        where: { id: decoded.userId },
        select: { tipo: true, email: true },
      });

      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado en la base de datos" });
        return;
      }

      const role = user.tipo.toLowerCase();

      req.user = { userId: decoded.userId, email: decoded.email, role };

      const hasAccess = allowedRoles.includes(role);
      if (!hasAccess) {
        res.status(403).json({ message: "Acceso denegado" });
        return;
      }

      next();
    } catch (err) {
      console.error("Error al procesar el token:", err);
      res.status(401).json({ message: "Token inválido" });
    }
  };
};

// 🔓 Middleware solo para extracción de datos del token (sin validación en BD)
export const extractUserFromToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No autorizado: falta token" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    if (!decoded.userId || !decoded.email) {
      res.status(400).json({ message: "Token inválido o incompleto" });
      return;
    }

    req.user = {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.tipo.toLowerCase(),
    };

    next();
  } catch (err) {
    console.error("Error al decodificar token:", err);
    res.status(401).json({ message: "Error al decodificar token" });
    return;
  }
};

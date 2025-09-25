import express from "express";
import {
  getManager,
  updateManagerProfile,
  updateManager,
  getManagerProperties,
} from "../controllers/managerControllers";
import { authMiddleware, extractUserFromToken } from "../middleware/authMiddleware";

const router = express.Router();

// Ruta para actualizar perfil básico
router.post("/profile", authMiddleware(["propietario"]), updateManagerProfile);

// Rutas protegidas
router.get("/:userId", authMiddleware(["propietario"]), getManager);
router.put("/:userId", authMiddleware(["propietario"]), updateManager);
router.get("/:userId/alojamientos", authMiddleware(["propietario"]), getManagerProperties);

export default router;

import express from "express";
import {
  getTenant,
  updateStudentProfile,
  updateStudent,
  getCurrentResidences,
  addFavoriteProperty,
  removeFavoriteProperty,
} from "../controllers/tenantControllers";
import { authMiddleware, extractUserFromToken } from "../middleware/authMiddleware";

const router = express.Router();

// 🔓 Ruta para actualizar perfil básico
router.post("/profile", authMiddleware(["estudiante"]), updateStudentProfile);

// 🔐 Rutas protegidas: solo tipo 'estudiante'
router.get("/:userId", authMiddleware(["estudiante"]), getTenant);
router.put("/:userId", authMiddleware(["estudiante"]), updateStudent);
router.get("/:userId/current-residences", authMiddleware(["estudiante"]), getCurrentResidences);
router.post("/:userId/favoritos/:propertyId", authMiddleware(["estudiante"]), addFavoriteProperty);
router.delete("/:userId/favoritos/:propertyId", authMiddleware(["estudiante"]), removeFavoriteProperty);

export default router;

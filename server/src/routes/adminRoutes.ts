import express from "express";
import {
  getAdmin,
  getAlojamientosPendientes,
  aprobarAlojamiento,
  rechazarAlojamiento,
} from "../controllers/adminControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/alojamientos", authMiddleware(["Admin"]), getAlojamientosPendientes); 
router.get("/:cognitoId", getAdmin);
router.put("/alojamientos/:id/aprobar", authMiddleware(["Admin"]), aprobarAlojamiento);
router.put("/alojamientos/:id/rechazar", authMiddleware(["Admin"]), rechazarAlojamiento);

export default router;

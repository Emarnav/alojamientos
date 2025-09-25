import express from "express";
import {
  getAdmin,
  getAlojamientosPendientes,
  getAlojamientosAprobados,
  getAlojamiento,
  getPropietarios,
  aprobarAlojamiento,
  rechazarAlojamiento,
  eliminarAlojamientoAprobado,
  suspenderPropietario,
  reactivarPropietario,
  eliminarPropietario,
  iniciarConversacionConPropietario,
} from "../controllers/adminControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/alojamientos/pendientes", authMiddleware(["admin"]), getAlojamientosPendientes); 
router.get("/alojamientos/aprobados", authMiddleware(["admin"]), getAlojamientosAprobados); 
router.get("/alojamientos/:id", authMiddleware(["admin"]), getAlojamiento);
router.get("/propietarios", authMiddleware(["admin"]), getPropietarios);
router.get("/:cognitoId", getAdmin);
router.put("/alojamientos/:id/aprobar", authMiddleware(["admin"]), aprobarAlojamiento);
router.put("/alojamientos/:id/rechazar", authMiddleware(["admin"]), rechazarAlojamiento);
router.delete("/alojamientos/:id/eliminar", authMiddleware(["admin"]), eliminarAlojamientoAprobado);
router.put("/propietarios/:id/suspender", authMiddleware(["admin"]), suspenderPropietario);
router.put("/propietarios/:id/reactivar", authMiddleware(["admin"]), reactivarPropietario);
router.delete("/propietarios/:id/eliminar", authMiddleware(["admin"]), eliminarPropietario);
router.post("/propietarios/:propietarioId/mensaje", authMiddleware(["admin"]), iniciarConversacionConPropietario);

export default router;

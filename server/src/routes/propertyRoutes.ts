import express from "express";
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/propertyControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post("/", authMiddleware(["Propietario"]), createProperty);
router.put("/:id", authMiddleware(["Propietario", "Admin"]), updateProperty);
router.delete("/:id", authMiddleware(["Propietario"]), deleteProperty);

export default router;

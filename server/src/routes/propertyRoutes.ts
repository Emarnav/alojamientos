import express from "express";
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  republishProperty,
} from "../controllers/propertyControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getProperties);
router.get("/slug/:slug", getProperty);
router.get("/:id", getProperty);
router.post("/", authMiddleware(["propietario"]), createProperty);
router.put("/:id", authMiddleware(["propietario", "admin"]), updateProperty);
router.delete("/:id", authMiddleware(["propietario"]), deleteProperty);
router.patch("/:id/republish", authMiddleware(["propietario"]), republishProperty);

export default router;

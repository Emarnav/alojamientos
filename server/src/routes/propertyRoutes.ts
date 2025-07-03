import express from "express";
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
} from "../controllers/propertyControllers";
import { upload } from "../multerConfig";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post(
  "/",
  authMiddleware(["propietario"]),
  upload.array("photos"),
  createProperty
);
router.put(
  "/:id", 
  authMiddleware(["propietario"]),
  upload.array("photos"), 
  updateProperty
);

export default router;

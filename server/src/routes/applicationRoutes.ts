import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationControllers";

const router = express.Router();

router.post("/", authMiddleware(["inquilino"]), createApplication);
router.put("/:id/estado", authMiddleware(["propietario"]), updateApplicationStatus);
router.get("/", authMiddleware(["propietario", "inquilino"]), listApplications);

export default router;

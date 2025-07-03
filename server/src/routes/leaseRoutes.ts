import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getLeasePayments, getLeases } from "../controllers/leaseControllers";

const router = express.Router();

router.get("/", authMiddleware(["propietario", "inquilino"]), getLeases);
router.get(
  "/:id/payments",
  authMiddleware(["propietario", "inquilino"]),
  getLeasePayments
);

export default router;

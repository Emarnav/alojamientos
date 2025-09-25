import { Router } from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  getCurrentUser,
  verifyEmail,
  resendVerificationEmail
} from "../controllers/authControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-email", verifyEmail);
router.post("/resend-verification", resendVerificationEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", authMiddleware(["estudiante", "propietario", "admin"]), getCurrentUser);

export default router;
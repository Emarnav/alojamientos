import { Router } from "express";
import { sendMessage, getChatMessages, createOrGetConversacion, marcarComoLeido, getConversacionesUsuario, getAdminConversation, initAdminConversation, getAdminConversations } from "../controllers/chatControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/mensajes", authMiddleware(["propietario", "estudiante", "admin"]), sendMessage);
router.get("/mensajes/:conversacionId", authMiddleware(["propietario", "estudiante", "admin"]), getChatMessages);
router.post("/conversaciones", authMiddleware(["estudiante"]), createOrGetConversacion);
router.get("/conversaciones", authMiddleware(["propietario", "estudiante", "admin"]), getConversacionesUsuario);
router.patch("/conversaciones/:id/leido", authMiddleware(["propietario", "estudiante", "admin"]), marcarComoLeido);

// Rutas específicas para conversaciones admin-propietario
router.get("/admin-conversation/:propietarioId", authMiddleware(["propietario", "admin"]), getAdminConversation);
router.post("/admin-conversation", authMiddleware(["propietario"]), initAdminConversation);
router.get("/admin-conversations", authMiddleware(["admin"]), getAdminConversations);

export default router;

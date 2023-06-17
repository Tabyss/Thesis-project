import express from "express";

import {
  getInvitation,
  getInvitationById,
  createInvitation,
  updateInvitation,
  deleteInvitation,
} from "../controllers/invitationController.js";
import { authMiddleware, adminMiddleware } from '../middleware/AuthUser.js';

const router = express.Router();

router.get("/invite", authMiddleware, adminMiddleware, getInvitation);
router.get("/invite/:id", authMiddleware, adminMiddleware, getInvitationById);
router.post("/invite", authMiddleware, adminMiddleware, createInvitation);
router.patch("/invite/:id", authMiddleware, adminMiddleware, updateInvitation);
router.delete("/invite/:id", authMiddleware, adminMiddleware, deleteInvitation);

export default router;
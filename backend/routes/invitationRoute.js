import express from "express";

import {
  getInvitation,
  getInvitationById,
  createInvitation,
  updateInvitation,
  deleteInvitation,
} from "../controllers/invitationController.js";
import { authMiddleware } from '../middleware/AuthUser.js';

const router = express.Router();

router.get("/invite", authMiddleware, getInvitation);
router.get("/invite/:id", authMiddleware, getInvitationById);
router.post("/invite", createInvitation);
router.patch("/invite/:id", authMiddleware, updateInvitation);
router.delete("/invite/:id", authMiddleware, deleteInvitation);

export default router;
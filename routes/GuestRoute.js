import express from "express";

import {
  getGuest,
  getGuestById,
  createGuest,
  updateGuest,
  deleteGuest,
} from "../controllers/guestController.js";
import { authMiddleware } from '../middleware/AuthUser.js';

const router = express.Router();

router.get("/tamu", authMiddleware, getGuest);
router.get("/tamu/:id", authMiddleware, getGuestById);
router.post("/tamu", authMiddleware, createGuest);
router.patch("/tamu/:id", authMiddleware, updateGuest);
router.delete("/tamu/:id", authMiddleware, deleteGuest);

export default router;
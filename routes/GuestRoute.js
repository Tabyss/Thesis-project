import express from "express";

import {
  getGuest,
  getGuestById,
  createGuest,
  updateGuest,
  deleteGuest,
} from "../controllers/guestController.js";

const router = express.Router();

router.get("/tamu", getGuest);
router.get("/tamu/:id", getGuestById);
router.post("/tamu", createGuest);
router.patch("/tamu/:id", updateGuest);
router.delete("/tamu/:id", deleteGuest);

export default router;
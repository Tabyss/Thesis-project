import express from "express";

import {
  getGuest,
  getGuestById,
  createGuest,
  updateGuest,
  deleteGuest,
  getGuestByIdTamu,
  getGuestByIdUndangan,
} from "../controllers/guestController.js";

const router = express.Router();

router.get("/tamu", getGuest);
router.get("/tamu/:id", getGuestById);
router.post("/tamu", createGuest);
router.patch("/tamu/:id", updateGuest);
router.delete("/tamu/:id", deleteGuest);
router.get("/tamu/:url_undangan/:id_tamu", getGuestByIdTamu);
router.get("/guest/:id_undangan", getGuestByIdUndangan);

export default router;
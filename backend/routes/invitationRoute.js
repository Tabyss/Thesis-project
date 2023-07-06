import express from "express";

import {
  getInvitation,
  getInvitationById,
  getInvitationByUrl,
  getInvitationByIdUser,
  createInvitation,
  updateInvitation,
  deleteInvitation,
} from "../controllers/invitationController.js";

const router = express.Router();

router.get("/invite", getInvitation);
router.get("/invite/:id", getInvitationById);
router.get("/invitation/:id", getInvitationByUrl);
router.get("/undangan/:id_user", getInvitationByIdUser);
router.post("/invite", createInvitation);
router.patch("/invite/:id", updateInvitation);
router.delete("/invite/:id", deleteInvitation);

export default router;
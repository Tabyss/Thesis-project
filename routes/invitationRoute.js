const express = require('express')
const {
  getInvitation,
  getInvitationById,
  createInvitation,
  updateUsers,
  deleteInvitation,
} = require("../controller/invitationController");

const router = express.Router();


router.get("/", getInvitation);
router.get("/:id", getInvitationById);
router.post("/", createInvitation);
// router.patch("/:id", updateUsers);
router.delete("/:id", deleteInvitation);

module.exports = router
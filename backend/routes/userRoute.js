const express = require('express')
const {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controller/userController");

const {
  AdminOnly
} = require("../middleware/AuthUser")

const router = express.Router();


router.get("/", getUsers, AdminOnly);
router.get("/:id", getUsersById, AdminOnly);
router.post("/", createUsers, AdminOnly);
router.patch("/:id", updateUsers, AdminOnly);
router.delete("/:id", deleteUsers, AdminOnly);

module.exports = router